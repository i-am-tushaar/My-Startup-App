import { useState } from "react";
import { MessageSquare, X, Send, Bot, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

// Webhook configuration - production endpoint
const WEBHOOK_URL = "https://n8n.srv1019914.hstgr.cloud/webhook/lakshya";

interface ChatMessage {
  id: string;
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
}

export function FloatingChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      type: 'ai',
      content: '👋 Hi! I\'m your AI tutor. Ask me anything about UPSC topics!',
      timestamp: new Date()
    }
  ]);
  const { toast } = useToast();

  const quickActions = [
    "Explain GDP vs GNP",
    "What is Article 356?",
    "Climate change effects",
    "Election process"
  ];

  // Formats n8n structured responses into a readable chat message
  const formatN8nResponse = (data: any): string => {
    try {
      if (typeof data === "string") return data;
      if (typeof data?.response === "string") return data.response;
      if (typeof data?.message === "string") return data.message;

      const topic = data?.topic;
      const explanation = data?.explanation;
      const keyPoints = Array.isArray(data?.key_points) ? data.key_points : [];
      const related = Array.isArray(data?.related_concepts) ? data.related_concepts : [];

      if (topic || explanation || keyPoints.length || related.length) {
        const lines: string[] = [];
        if (topic) lines.push(`Topic: ${topic}`);
        if (explanation) lines.push(`\n${explanation}`);
        if (keyPoints.length) {
          lines.push("\nKey Points:");
          for (const p of keyPoints) lines.push(`• ${String(p)}`);
        }
        if (related.length) {
          lines.push("\nRelated Concepts:");
          for (const r of related) lines.push(`• ${String(r)}`);
        }
        return lines.join("\n");
      }
    } catch (e) {
      // no-op, fallback below
    }
    return "I received your message and I'm processing it.";
  };

  const handleSend = async () => {
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
          message: currentMessage,
          timestamp: new Date().toISOString(),
          source: 'lakshya-ai-tutor-floating'
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      // Debug: Log the full response to console
      console.log('FloatingChatBot webhook response:', data);

      // Enhanced response parsing to handle multiple possible structures
      let aiContent = '';
      
      if (data.output) {
        aiContent = data.output;
      } else if (data.response) {
        aiContent = data.response;
      } else if (data.message) {
        aiContent = data.message;
      } else if (data.answer) {
        aiContent = data.answer;
      } else if (data.result) {
        aiContent = data.result;
      } else if (data.text) {
        aiContent = data.text;
      } else if (typeof data === 'string') {
        aiContent = data;
      } else {
        // Try to use the existing formatN8nResponse function as fallback
        aiContent = formatN8nResponse(data);
      }
      
      // Add AI response to chat
      const aiMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content: aiContent || 'I received your message and I\'m processing it.',
        timestamp: new Date()
      };
      
      setChatMessages(prev => [...prev, aiMessage]);
      
    } catch (error) {
      console.error('Error connecting to AI tutor:', error);
      
      // Add error message to chat
      const errorMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content: 'Sorry, I am facing some technical issues. Please try again shortly.',
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
    setMessage(question);
    
    // Automatically send the quick question
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      type: 'user',
      content: question,
      timestamp: new Date()
    };
    
    setChatMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    try {
      // Send to n8n webhook
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: question,
          timestamp: new Date().toISOString(),
          source: 'lakshya-ai-tutor-floating'
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      // Debug: Log the full response to console
      console.log('FloatingChatBot quick question webhook response:', data);

      // Enhanced response parsing to handle multiple possible structures
      let aiContent = '';
      
      if (data.output) {
        aiContent = data.output;
      } else if (data.response) {
        aiContent = data.response;
      } else if (data.message) {
        aiContent = data.message;
      } else if (data.answer) {
        aiContent = data.answer;
      } else if (data.result) {
        aiContent = data.result;
      } else if (data.text) {
        aiContent = data.text;
      } else if (typeof data === 'string') {
        aiContent = data;
      } else {
        // Try to use the existing formatN8nResponse function as fallback
        aiContent = formatN8nResponse(data);
      }
      
      // Add AI response to chat
      const aiMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content: aiContent || 'I received your message and I\'m processing it.',
        timestamp: new Date()
      };
      
      setChatMessages(prev => [...prev, aiMessage]);
      
    } catch (error) {
      console.error('Error connecting to AI tutor:', error);
      
      // Add error message to chat
      const errorMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content: 'Sorry, I am facing some technical issues. Please try again shortly.',
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
      setMessage(""); // Clear input after sending
    }
  };

  return (
    <>
      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-20 right-4 w-80 h-96 z-50 shadow-strong border-primary/20">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                AI Tutor Online
              </CardTitle>
              <Button
                variant="ghost"
                size="icon"
                className="w-6 h-6"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          
          <CardContent className="flex flex-col h-full pb-4">
            {/* Chat Area */}
            <div className="flex-1 space-y-2 overflow-y-auto mb-3">
              {chatMessages.map((chat) => (
                <div key={chat.id} className={`flex gap-2 ${chat.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  {chat.type === 'ai' && (
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Bot className="h-3 w-3 text-primary" />
                    </div>
                  )}
                  
                  <div className={`max-w-[75%] rounded-lg p-2 text-sm ${
                    chat.type === 'user'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted'
                  }`}>
                    <div className="whitespace-pre-wrap">{chat.content}</div>
                    <div className="text-xs opacity-70 mt-1">
                      {chat.timestamp.toLocaleTimeString([], { 
                        hour: '2-digit', 
                        minute: '2-digit' 
                      })}
                    </div>
                  </div>

                  {chat.type === 'user' && (
                    <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                      <User className="h-3 w-3" />
                    </div>
                  )}
                </div>
              ))}
              
              {isLoading && (
                <div className="flex gap-2 justify-start">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Bot className="h-3 w-3 text-primary" />
                  </div>
                  <div className="bg-muted rounded-lg p-2">
                    <div className="flex items-center gap-2">
                      <div className="flex space-x-1">
                        <div className="w-1.5 h-1.5 bg-primary/60 rounded-full animate-bounce"></div>
                        <div className="w-1.5 h-1.5 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-1.5 h-1.5 bg-primary/60 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                      <span className="text-xs text-muted-foreground">AI is thinking...</span>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Quick Actions - Show only if no messages yet */}
              {chatMessages.length === 1 && (
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground">Quick questions:</p>
                  <div className="flex flex-wrap gap-1">
                    {quickActions.map((action, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="cursor-pointer hover:bg-primary hover:text-primary-foreground text-xs"
                        onClick={() => handleQuickQuestion(action)}
                      >
                        {action}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            {/* Input */}
            <div className="flex gap-2">
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your question..."
                className="text-sm"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSend();
                  }
                }}
                disabled={isLoading}
              />
              <Button size="sm" onClick={handleSend} disabled={!message.trim() || isLoading}>
                <Send className="h-3 w-3" />
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Floating Button */}
      <Button
        className="fixed bottom-4 right-4 w-14 h-14 rounded-full shadow-strong gradient-primary text-white hover:opacity-90 z-40"
        onClick={() => setIsOpen(!isOpen)}
      >
        <MessageSquare className="h-6 w-6" />
      </Button>
    </>
  );
}