import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { 
  Brain, 
  Send, 
  Lightbulb, 
  BookOpen, 
  MessageSquare,
  Sparkles,
  Clock,
  Star,
  Bot,
  User
} from "lucide-react";

// Webhook configuration - easy to change for production
const WEBHOOK_URL = "http://localhost:5678/webhook-test/lakshyaAI";

interface ChatMessage {
  id: string;
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
}

const quickQuestions = [
  "Explain the concept of Fundamental Rights in simple terms",
  "What is the difference between GDP and GNP?",
  "Summarize the key features of Indian Constitution",
  "Explain the causes of Climate Change",
  "What are the functions of the Election Commission?",
  "Describe the structure of Indian Parliament"
];

export default function AITutor() {
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      type: 'ai',
      content: 'Hello! I\'m your AI Tutor powered by advanced AI. I can help you understand UPSC topics, explain concepts, and answer your questions. How can I assist you today?',
      timestamp: new Date()
    }
  ]);
  const { toast } = useToast();

  const handleSendMessage = async () => {
    if (!message.trim()) return;
    
    // Add user message to chat
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      type: 'user',
      content: message,
      timestamp: new Date()
    };
    
    setChatMessages(prev => [...prev, userMessage]);
    const currentMessage = message;
    setMessage("");
    setIsLoading(true);

    try {
      // Send to n8n webhook
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          question: currentMessage,
          timestamp: new Date().toISOString(),
          source: 'lakshya-ai-tutor'
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      // Add AI response to chat
      const aiMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content: data.answer || data.response || data.message || 'I received your message and I\'m processing it.',
        timestamp: new Date()
      };
      
      setChatMessages(prev => [...prev, aiMessage]);
      
    } catch (error) {
      console.error('Error connecting to AI tutor:', error);
      
      // Add error message to chat
      const errorMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content: 'The AI tutor is unavailable right now. Please try again later.',
        timestamp: new Date()
      };
      
      setChatMessages(prev => [...prev, errorMessage]);
      
      toast({
        title: "Connection Error",
        description: "Unable to connect to AI tutor. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuickQuestion = async (question: string) => {
    // Add user message to chat
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      type: 'user',
      content: question,
      timestamp: new Date()
    };
    
    setChatMessages(prev => [...prev, userMessage]);
    setMessage("");
    setIsLoading(true);

    try {
      // Send to n8n webhook
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          question: question,
          timestamp: new Date().toISOString(),
          source: 'lakshya-ai-tutor'
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      // Add AI response to chat
      const aiMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content: data.answer || data.response || data.message || 'I received your message and I\'m processing it.',
        timestamp: new Date()
      };
      
      setChatMessages(prev => [...prev, aiMessage]);
      
    } catch (error) {
      console.error('Error connecting to AI tutor:', error);
      
      // Add error message to chat
      const errorMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content: 'The AI tutor is unavailable right now. Please try again later.',
        timestamp: new Date()
      };
      
      setChatMessages(prev => [...prev, errorMessage]);
      
      toast({
        title: "Connection Error",
        description: "Unable to connect to AI tutor. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="section-title">
          <Brain className="h-8 w-8 text-primary" />
          AI Tutor
        </h1>
        <p className="text-muted-foreground">
          Get instant explanations, doubt clearing, and study guidance from your personal AI tutor
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Chat Interface */}
        <div className="lg:col-span-2 space-y-4">
          {/* Quick Questions */}
          <Card className="learning-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Lightbulb className="h-5 w-5 text-warning" />
                Quick Questions
              </CardTitle>
              <CardDescription>
                Click on any question to get started or ask your own
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-3">
                {quickQuestions.map((question, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="h-auto p-3 text-left justify-start text-wrap"
                    onClick={() => handleQuickQuestion(question)}
                  >
                    <span className="text-sm">{question}</span>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Chat Messages */}
          <Card className="learning-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-primary" />
                Chat with AI Tutor
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 min-h-[400px] max-h-[500px] overflow-y-auto mb-4">
                {chatMessages.map((chat) => (
                  <div key={chat.id} className="space-y-3">
                    <div className={`flex gap-3 ${chat.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                      {chat.type === 'ai' && (
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Bot className="h-4 w-4 text-primary" />
                        </div>
                      )}
                      
                      <div className={`max-w-[80%] rounded-lg p-3 ${
                        chat.type === 'user'
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted'
                      }`}>
                        <div className="text-sm whitespace-pre-wrap">{chat.content}</div>
                        <div className="text-xs opacity-70 mt-1">
                          {chat.timestamp.toLocaleTimeString([], { 
                            hour: '2-digit', 
                            minute: '2-digit' 
                          })}
                        </div>
                      </div>

                      {chat.type === 'user' && (
                        <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                          <User className="h-4 w-4" />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
                
                {isLoading && (
                  <div className="flex gap-3 justify-start">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Bot className="h-4 w-4 text-primary" />
                    </div>
                    <div className="bg-muted rounded-lg p-3">
                      <div className="flex items-center gap-2">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-primary/60 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                        <span className="text-xs text-muted-foreground">AI is thinking...</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Message Input */}
              <div className="flex gap-2">
                <Input
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Ask me anything about UPSC topics..."
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleSendMessage();
                    }
                  }}
                  disabled={isLoading}
                  className="flex-1"
                />
                <Button 
                  onClick={handleSendMessage} 
                  disabled={!message.trim() || isLoading}
                  className="px-4"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-4">
          {/* AI Features */}
          <Card className="learning-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Sparkles className="h-5 w-5 text-accent" />
                AI Features
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-3 p-3 bg-primary/5 rounded-lg">
                <BookOpen className="h-4 w-4 text-primary mt-0.5" />
                <div className="text-sm">
                  <p className="font-medium">Concept Explanation</p>
                  <p className="text-muted-foreground">Simple, easy-to-understand explanations</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-3 bg-success/5 rounded-lg">
                <Lightbulb className="h-4 w-4 text-success mt-0.5" />
                <div className="text-sm">
                  <p className="font-medium">Doubt Clearing</p>
                  <p className="text-muted-foreground">Instant answers to your questions</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-3 bg-warning/5 rounded-lg">
                <Star className="h-4 w-4 text-warning mt-0.5" />
                <div className="text-sm">
                  <p className="font-medium">Study Guidance</p>
                  <p className="text-muted-foreground">Personalized study recommendations</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Study Stats */}
          <Card className="learning-card">
            <CardHeader>
              <CardTitle className="text-lg">Today's Progress</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Questions Asked</span>
                <span className="font-semibold">12</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Topics Covered</span>
                <span className="font-semibold">5</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Study Time</span>
                <span className="font-semibold">45 min</span>
              </div>
              
              <div className="pt-2">
                <Button variant="outline" className="w-full text-sm">
                  View Detailed Stats
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}