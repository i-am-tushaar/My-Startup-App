import { useState, useEffect } from "react";
import { MessageSquare, X, Send, Bot, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { useAITutorContext } from "@/contexts/AITutorContext";
import { useAITutor, ChatMessage } from "@/hooks/useAITutor";

// Webhook configuration - easy to change for production
const WEBHOOK_URL = "http://localhost:5678/webhook-test/lakshyaAI";

export function FloatingChatBot() {
  const [message, setMessage] = useState("");
  const { toast } = useToast();
  const { sendQuestionToAI, isLoading } = useAITutor();
  const { 
    chatMessages, 
    addMessage, 
    isFloatingChatOpen, 
    setIsFloatingChatOpen 
  } = useAITutorContext();

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

  // Handle automatic sending for questions added from outside
  useEffect(() => {
    const lastMessage = chatMessages[chatMessages.length - 1];
    if (lastMessage?.type === 'user' && !isLoading && !message) {
      handleAutoSend(lastMessage.content);
    }
  }, [chatMessages]);

  const handleAutoSend = async (question: string) => {
    const result = await sendQuestionToAI(question);
    
    if (result.success && result.response) {
      const aiMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content: result.response,
        timestamp: new Date()
      };
      addMessage(aiMessage);
    } else if (result.error) {
      const errorMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content: result.error,
        timestamp: new Date()
      };
      addMessage(errorMessage);
    }
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
    
    addMessage(userMessage);
    const currentMessage = message;
    setMessage("");
    
    // Send to AI
    await handleAutoSend(currentMessage);
  };

  const handleQuickQuestion = async (question: string) => {
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      type: 'user',
      content: question,
      timestamp: new Date()
    };
    
    addMessage(userMessage);
    await handleAutoSend(question);
  };

  return (
    <>
      {/* Chat Window */}
      {isFloatingChatOpen && (
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
                onClick={() => setIsFloatingChatOpen(false)}
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
        onClick={() => setIsFloatingChatOpen(!isFloatingChatOpen)}
      >
        <MessageSquare className="h-6 w-6" />
      </Button>
    </>
  );
}