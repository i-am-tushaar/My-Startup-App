import React, { createContext, useContext, useState, ReactNode } from 'react';
import { ChatMessage } from '@/hooks/useAITutor';

interface AITutorContextType {
  chatMessages: ChatMessage[];
  addMessage: (message: ChatMessage) => void;
  clearMessages: () => void;
  isFloatingChatOpen: boolean;
  setIsFloatingChatOpen: (open: boolean) => void;
  askAIQuestion: (question: string) => Promise<void>;
}

const AITutorContext = createContext<AITutorContextType | undefined>(undefined);

export const useAITutorContext = () => {
  const context = useContext(AITutorContext);
  if (!context) {
    throw new Error('useAITutorContext must be used within AITutorProvider');
  }
  return context;
};

interface AITutorProviderProps {
  children: ReactNode;
}

export const AITutorProvider: React.FC<AITutorProviderProps> = ({ children }) => {
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      type: 'ai',
      content: '👋 Hi! I\'m your AI tutor. Ask me anything about UPSC topics!',
      timestamp: new Date()
    }
  ]);
  const [isFloatingChatOpen, setIsFloatingChatOpen] = useState(false);

  const addMessage = (message: ChatMessage) => {
    setChatMessages(prev => [...prev, message]);
  };

  const clearMessages = () => {
    setChatMessages([
      {
        id: '1',
        type: 'ai',
        content: '👋 Hi! I\'m your AI tutor. Ask me anything about UPSC topics!',
        timestamp: new Date()
      }
    ]);
  };

  const askAIQuestion = async (question: string) => {
    // Add user message immediately (optimistic UI)
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      type: 'user',
      content: question,
      timestamp: new Date()
    };
    
    addMessage(userMessage);
    setIsFloatingChatOpen(true); // Open the floating chat
    
    // The FloatingChatBot will handle the actual API call and response
  };

  const value: AITutorContextType = {
    chatMessages,
    addMessage,
    clearMessages,
    isFloatingChatOpen,
    setIsFloatingChatOpen,
    askAIQuestion
  };

  return (
    <AITutorContext.Provider value={value}>
      {children}
    </AITutorContext.Provider>
  );
};