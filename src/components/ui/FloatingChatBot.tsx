import { useState } from "react";
import { MessageSquare, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export function FloatingChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const quickActions = [
    "Explain GDP vs GNP",
    "What is Article 356?",
    "Climate change effects",
    "Election process"
  ];

  const handleSend = () => {
    if (!message.trim()) return;
    // Handle message sending logic here
    setMessage("");
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
            <div className="flex-1 space-y-3 overflow-y-auto mb-3">
              <div className="bg-muted p-2 rounded-lg text-sm">
                👋 Hi! I'm your AI tutor. Ask me anything about UPSC topics!
              </div>
              
              {/* Quick Actions */}
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground">Quick questions:</p>
                <div className="flex flex-wrap gap-1">
                  {quickActions.map((action, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="cursor-pointer hover:bg-primary hover:text-primary-foreground text-xs"
                      onClick={() => setMessage(action)}
                    >
                      {action}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Input */}
            <div className="flex gap-2">
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your question..."
                className="text-sm"
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              />
              <Button size="sm" onClick={handleSend} disabled={!message.trim()}>
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