import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Send, 
  Lightbulb, 
  BookOpen, 
  MessageSquare,
  Sparkles,
  Clock,
  Star
} from "lucide-react";

const quickQuestions = [
  "Explain the concept of Fundamental Rights in simple terms",
  "What is the difference between GDP and GNP?",
  "Summarize the key features of Indian Constitution",
  "Explain the causes of Climate Change",
  "What are the functions of the Election Commission?",
  "Describe the structure of Indian Parliament"
];

const chatHistory = [
  {
    id: 1,
    question: "What is the significance of Article 370?",
    answer: "Article 370 was a provision in the Indian Constitution that granted special autonomous status to Jammu and Kashmir. It allowed the state to have its own constitution and limited the power of the Indian Parliament to make laws for the state, except in matters of defense, foreign affairs, and communications.",
    timestamp: "2024-01-15 10:30 AM",
    topic: "Polity"
  },
  {
    id: 2,
    question: "Explain the Green Revolution in India",
    answer: "The Green Revolution was a period of agricultural transformation in India during the 1960s-70s. It involved the adoption of high-yielding variety seeds, modern irrigation techniques, fertilizers, and pesticides. This led to significant increase in food grain production, particularly wheat and rice.",
    timestamp: "2024-01-14 2:15 PM",
    topic: "Economy"
  }
];

export default function AITutor() {
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = () => {
    if (!message.trim()) return;
    
    setIsLoading(true);
    // Simulate AI response
    setTimeout(() => {
      setIsLoading(false);
      setMessage("");
    }, 2000);
  };

  const handleQuickQuestion = (question: string) => {
    setMessage(question);
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
                {chatHistory.map((chat) => (
                  <div key={chat.id} className="space-y-3">
                    {/* User Question */}
                    <div className="flex justify-end">
                      <div className="bg-primary text-primary-foreground p-3 rounded-lg max-w-[80%] text-sm">
                        {chat.question}
                      </div>
                    </div>
                    
                    {/* AI Answer */}
                    <div className="flex justify-start">
                      <div className="bg-muted p-3 rounded-lg max-w-[80%] space-y-2">
                        <div className="text-sm">{chat.answer}</div>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Badge variant="outline" className="text-xs">{chat.topic}</Badge>
                          <Clock className="h-3 w-3" />
                          <span>{chat.timestamp}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-muted p-3 rounded-lg">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-3 h-3 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
                        AI is thinking...
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
                  onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
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