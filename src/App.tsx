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
import Syllabus from "./pages/Syllabus";
import AnswerWriting from "./pages/AnswerWriting";
import NotFoundTopic from "./pages/NotFoundTopic";
import NotFound from "./pages/NotFound";

// Syllabus Pages
import History from "./pages/syllabus/History";
import Geography from "./pages/syllabus/Geography";
import Culture from "./pages/syllabus/Culture";
import Polity from "./pages/syllabus/Polity";
import Economy from "./pages/syllabus/Economy";

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
              <Route path="/syllabus" element={<Syllabus />} />
              <Route path="/answer-writing" element={<AnswerWriting />} />
              <Route path="/current-affairs" element={<CurrentAffairs />} />
              <Route path="/ai-tutor" element={<AITutor />} />
              <Route path="/my-notes" element={<MyNotes />} />
              <Route path="/about" element={<About />} />
              <Route path="/quiz" element={<NotFoundTopic />} />
              
              {/* Syllabus Routes - Specific Topics */}
              <Route path="/syllabus/gs1/history" element={<History />} />
              <Route path="/syllabus/gs1/geography" element={<Geography />} />
              <Route path="/syllabus/gs1/culture" element={<Culture />} />
              <Route path="/syllabus/gs2/polity" element={<Polity />} />
              <Route path="/syllabus/gs2/social-justice" element={<NotFoundTopic />} />
              <Route path="/syllabus/gs2/international" element={<NotFoundTopic />} />
              <Route path="/syllabus/gs3/economy" element={<Economy />} />
              <Route path="/syllabus/gs3/science" element={<NotFoundTopic />} />
              <Route path="/syllabus/gs3/environment" element={<NotFoundTopic />} />
              <Route path="/syllabus/gs4/ethics" element={<NotFoundTopic />} />
              <Route path="/syllabus/gs4/case-studies" element={<NotFoundTopic />} />
              
              {/* Interview Routes */}
              <Route path="/interview/*" element={<NotFoundTopic />} />
              
              {/* Prelims Routes */}
              <Route path="/syllabus/prelims/*" element={<NotFoundTopic />} />
              
              {/* Answer Writing Routes */}
              <Route path="/answer-writing/*" element={<AnswerWriting />} />
              
              {/* Progress & Analytics Routes */}
              <Route path="/streak-tracker" element={<NotFoundTopic />} />
              <Route path="/progress-tracker" element={<NotFoundTopic />} />
              <Route path="/quiz-analytics" element={<NotFoundTopic />} />
              <Route path="/time-tracker" element={<NotFoundTopic />} />
              <Route path="/daily-goals" element={<NotFoundTopic />} />
              <Route path="/achievements" element={<NotFoundTopic />} />
              
              {/* Fallback for other syllabus routes */}
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
