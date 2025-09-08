import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppLayout } from "@/components/layout/AppLayout";
import { ThemeProvider } from "@/providers/ThemeProvider";

// Pages
import Dashboard from "./pages/Dashboard";
import CurrentAffairs from "./pages/CurrentAffairs";
import AITutor from "./pages/AITutor";
import MyNotes from "./pages/MyNotes";
import About from "./pages/About";
import NotFoundTopic from "./pages/NotFoundTopic";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="light">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AppLayout>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/current-affairs" element={<CurrentAffairs />} />
              <Route path="/ai-tutor" element={<AITutor />} />
              <Route path="/my-notes" element={<MyNotes />} />
              <Route path="/about" element={<About />} />
              <Route path="/quiz" element={<NotFoundTopic />} />
              
              {/* Syllabus Routes - All lead to NotFoundTopic for now */}
              <Route path="/syllabus/:paper/:topic" element={<NotFoundTopic />} />
              
              {/* Catch-all route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AppLayout>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
