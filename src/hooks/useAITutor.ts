import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

// Webhook configuration - easy to change for production
const WEBHOOK_URL = "http://localhost:5678/webhook-test/lakshya";

export interface ChatMessage {
  id: string;
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
}

export const useAITutor = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  // Formats n8n structured responses into a readable chat message
  const formatN8nResponse = (data: any): string => {
    try {
      if (typeof data === "string") return data;
      if (typeof data?.answer === "string") return data.answer;
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

  const sendQuestionToAI = async (question: string): Promise<{ success: boolean; response?: string; error?: string }> => {
    setIsLoading(true);
    
    try {
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          question: question,
          timestamp: new Date().toISOString(),
          source: 'lakshya-ai-tutor-interactive'
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      const aiResponse = formatN8nResponse(data);
      
      return { success: true, response: aiResponse };
      
    } catch (error) {
      console.error('Error connecting to AI tutor:', error);
      
      const errorMessage = 'The AI tutor is unavailable right now. Please try again later.';
      
      toast({
        title: "Connection Error",
        description: "Unable to connect to AI tutor. Please try again later.",
        variant: "destructive",
      });
      
      return { success: false, error: errorMessage };
    } finally {
      setIsLoading(false);
    }
  };

  return {
    sendQuestionToAI,
    isLoading,
    formatN8nResponse
  };
};