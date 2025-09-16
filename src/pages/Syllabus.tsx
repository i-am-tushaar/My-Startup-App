import { useState } from "react";
import { ChevronDown, ChevronRight, BookOpen, PenTool, Users, FileText, Clock, Star } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useNavigate } from "react-router-dom";
import { useAITutorContext } from "@/contexts/AITutorContext";

const syllabusData = {
  prelims: {
    title: "UPSC Prelims",
    description: "General Studies Paper I & CSAT Paper II",
    icon: BookOpen,
    color: "bg-blue-500",
    topics: [
      {
        title: "History & Culture",
        items: [
          { name: "Ancient Indian History", url: "/syllabus/prelims/ancient-history", completed: true },
          { name: "Medieval Indian History", url: "/syllabus/prelims/medieval-history", completed: true },
          { name: "Modern Indian History", url: "/syllabus/gs1/history", completed: true },
          { name: "Art & Culture", url: "/syllabus/gs1/culture", completed: false },
          { name: "World History", url: "/syllabus/prelims/world-history", completed: false }
        ]
      },
      {
        title: "Geography",
        items: [
          { name: "Physical Geography", url: "/syllabus/gs1/geography", completed: true },
          { name: "Indian Geography", url: "/syllabus/prelims/indian-geography", completed: false },
          { name: "World Geography", url: "/syllabus/prelims/world-geography", completed: false },
          { name: "Environment & Ecology", url: "/syllabus/prelims/environment", completed: false }
        ]
      },
      {
        title: "Polity & Governance",
        items: [
          { name: "Indian Constitution", url: "/syllabus/gs2/polity", completed: true },
          { name: "Political System", url: "/syllabus/prelims/political-system", completed: false },
          { name: "Panchayati Raj", url: "/syllabus/prelims/panchayati-raj", completed: false },
          { name: "Public Policy", url: "/syllabus/prelims/public-policy", completed: false }
        ]
      },
      {
        title: "Economy",
        items: [
          { name: "Indian Economy", url: "/syllabus/gs3/economy", completed: true },
          { name: "Economic Survey", url: "/syllabus/prelims/economic-survey", completed: false },
          { name: "Budget Analysis", url: "/syllabus/prelims/budget", completed: false },
          { name: "Banking & Finance", url: "/syllabus/prelims/banking", completed: false }
        ]
      },
      {
        title: "Science & Technology",
        items: [
          { name: "General Science", url: "/syllabus/prelims/general-science", completed: false },
          { name: "Space Technology", url: "/syllabus/prelims/space-tech", completed: false },
          { name: "Nuclear Technology", url: "/syllabus/prelims/nuclear-tech", completed: false },
          { name: "Biotechnology", url: "/syllabus/prelims/biotech", completed: false }
        ]
      },
      {
        title: "Current Affairs",
        items: [
          { name: "National Issues", url: "/current-affairs", completed: false },
          { name: "International Relations", url: "/syllabus/prelims/international", completed: false },
          { name: "Awards & Honors", url: "/syllabus/prelims/awards", completed: false },
          { name: "Sports & Games", url: "/syllabus/prelims/sports", completed: false }
        ]
      }
    ]
  },
  mains: {
    title: "UPSC Mains",
    description: "General Studies Papers + Essay + Optional",
    icon: PenTool,
    color: "bg-green-500",
    topics: [
      {
        title: "General Studies 1",
        items: [
          { name: "Indian Heritage & Culture", url: "/syllabus/gs1/culture", completed: false },
          { name: "History & Geography", url: "/syllabus/gs1/history", completed: true },
          { name: "Modern Indian History", url: "/syllabus/gs1/modern-history", completed: false },
          { name: "Post-Independence India", url: "/syllabus/gs1/post-independence", completed: false }
        ]
      },
      {
        title: "General Studies 2",
        items: [
          { name: "Governance & Constitution", url: "/syllabus/gs2/polity", completed: true },
          { name: "Social Justice & Welfare", url: "/syllabus/gs2/social-justice", completed: false },
          { name: "International Relations", url: "/syllabus/gs2/international", completed: false },
          { name: "Bilateral Relations", url: "/syllabus/gs2/bilateral", completed: false }
        ]
      },
      {
        title: "General Studies 3",
        items: [
          { name: "Economic Development", url: "/syllabus/gs3/economy", completed: true },
          { name: "Technology & Innovation", url: "/syllabus/gs3/science", completed: false },
          { name: "Environment & Biodiversity", url: "/syllabus/gs3/environment", completed: false },
          { name: "Security & Disaster Management", url: "/syllabus/gs3/security", completed: false }
        ]
      },
      {
        title: "General Studies 4",
        items: [
          { name: "Ethics & Human Values", url: "/syllabus/gs4/ethics", completed: false },
          { name: "Attitude & Aptitude", url: "/syllabus/gs4/attitude", completed: false },
          { name: "Case Studies", url: "/syllabus/gs4/case-studies", completed: false },
          { name: "Public Service Values", url: "/syllabus/gs4/values", completed: false }
        ]
      },
      {
        title: "Essay Paper",
        items: [
          { name: "Essay Writing Techniques", url: "/syllabus/essay/techniques", completed: false },
          { name: "Current Topics", url: "/syllabus/essay/current-topics", completed: false },
          { name: "Practice Essays", url: "/answer-writing/essay", completed: false },
          { name: "Model Essays", url: "/syllabus/essay/models", completed: false }
        ]
      }
    ]
  },
  interview: {
    title: "UPSC Interview",
    description: "Personality Test & Interview Preparation",
    icon: Users,
    color: "bg-purple-500",
    topics: [
      {
        title: "Current Affairs & Issues",
        items: [
          { name: "National Issues", url: "/interview/national-issues", completed: false },
          { name: "International Affairs", url: "/interview/international-affairs", completed: false },
          { name: "Social Issues", url: "/interview/social-issues", completed: false },
          { name: "Economic Issues", url: "/interview/economic-issues", completed: false }
        ]
      },
      {
        title: "Mock Interview Practice",
        items: [
          { name: "Mock Questions Bank", url: "/interview/mock-questions", completed: false },
          { name: "Personality Development", url: "/interview/personality", completed: false },
          { name: "Communication Skills", url: "/interview/communication", completed: false },
          { name: "Body Language", url: "/interview/body-language", completed: false }
        ]
      },
      {
        title: "Optional Subject Review",
        items: [
          { name: "Subject Knowledge", url: "/interview/optional-review", completed: false },
          { name: "Current Trends", url: "/interview/optional-trends", completed: false },
          { name: "Cross-connections", url: "/interview/cross-connections", completed: false },
          { name: "Recent Developments", url: "/interview/recent-developments", completed: false }
        ]
      }
    ]
  }
};

export default function Syllabus() {
  const navigate = useNavigate();
  const { askAIQuestion } = useAITutorContext();
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    prelims: true,
    mains: false,
    interview: false
  });

  const [openTopics, setOpenTopics] = useState<Record<string, boolean>>({});

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const toggleTopic = (topic: string) => {
    setOpenTopics(prev => ({
      ...prev,
      [topic]: !prev[topic]
    }));
  };

  const getCompletionStats = (topics: any[]) => {
    const total = topics.reduce((sum, topic) => sum + topic.items.length, 0);
    const completed = topics.reduce((sum, topic) => 
      sum + topic.items.filter((item: any) => item.completed).length, 0
    );
    return { completed, total, percentage: Math.round((completed / total) * 100) };
  };

  const renderSection = (key: string, section: any) => {
    const stats = getCompletionStats(section.topics);
    const SectionIcon = section.icon;

    return (
      <Card key={key} className="mb-4">
        <Collapsible
          open={openSections[key]}
          onOpenChange={() => toggleSection(key)}
        >
          <CollapsibleTrigger asChild>
            <CardHeader className="cursor-pointer hover:bg-muted/50 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${section.color} text-white`}>
                    <SectionIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{section.title}</CardTitle>
                    <CardDescription>{section.description}</CardDescription>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <div className="text-sm font-medium">{stats.completed}/{stats.total} Topics</div>
                    <div className="text-xs text-muted-foreground">{stats.percentage}% Complete</div>
                  </div>
                  {openSections[key] ? 
                    <ChevronDown className="h-5 w-5" /> : 
                    <ChevronRight className="h-5 w-5" />
                  }
                </div>
              </div>
            </CardHeader>
          </CollapsibleTrigger>
          
          <CollapsibleContent>
            <CardContent>
              <div className="space-y-4">
                {section.topics.map((topic: any, topicIndex: number) => (
                  <div key={topicIndex} className="border rounded-lg">
                    <Collapsible
                      open={openTopics[`${key}-${topicIndex}`]}
                      onOpenChange={() => toggleTopic(`${key}-${topicIndex}`)}
                    >
                      <CollapsibleTrigger asChild>
                        <div className="flex items-center justify-between p-3 cursor-pointer hover:bg-muted/30 transition-colors">
                          <div className="flex items-center gap-2">
                            <FileText className="h-4 w-4 text-muted-foreground" />
                            <span className="font-medium">{topic.title}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-muted-foreground">
                              {topic.items.filter((item: any) => item.completed).length}/{topic.items.length}
                            </span>
                            {openTopics[`${key}-${topicIndex}`] ? 
                              <ChevronDown className="h-4 w-4" /> : 
                              <ChevronRight className="h-4 w-4" />
                            }
                          </div>
                        </div>
                      </CollapsibleTrigger>
                      
                      <CollapsibleContent>
                        <div className="px-3 pb-3 space-y-1">
                          {topic.items.map((item: any, itemIndex: number) => (
                            <div 
                              key={itemIndex}
                              className="flex items-center justify-between p-2 rounded hover:bg-muted/20 cursor-pointer transition-colors group"
                              onClick={() => {
                                askAIQuestion(`Explain ${item.name} in detail for UPSC ${key === 'prelims' ? 'Prelims' : key === 'mains' ? 'Mains' : 'Interview'} preparation. Include key topics, important facts, and study tips.`);
                              }}
                            >
                              <div className="flex items-center gap-2">
                                <div className={`w-2 h-2 rounded-full ${item.completed ? 'bg-success' : 'bg-muted-foreground'}`} />
                                <span className={`text-sm ${item.completed ? 'text-success' : ''} group-hover:text-primary transition-colors`}>
                                  {item.name}
                                </span>
                              </div>
                              <div className="flex items-center gap-1">
                                {item.completed && <Star className="h-3 w-3 text-success fill-current" />}
                                <span className="text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">Ask AI</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CollapsibleContent>
                    </Collapsible>
                  </div>
                ))}
              </div>
            </CardContent>
          </CollapsibleContent>
        </Collapsible>
      </Card>
    );
  };

  return (
    <div className="space-y-6 p-1 sm:p-2 md:p-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold">UPSC Complete Syllabus</h1>
          <p className="text-muted-foreground">Comprehensive coverage of all UPSC exam topics</p>
        </div>
        <div className="flex gap-2">
          <Button onClick={() => navigate('/answer-writing')} className="text-xs sm:text-sm">
            <PenTool className="h-4 w-4 mr-2" />
            Answer Writing Practice
          </Button>
          <Button variant="outline" onClick={() => navigate('/ai-tutor')} className="text-xs sm:text-sm">
            <Clock className="h-4 w-4 mr-2" />
            AI Tutor
          </Button>
        </div>
      </div>

      {/* Progress Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Overall Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {Object.entries(syllabusData).map(([key, section]) => {
              const stats = getCompletionStats(section.topics);
              return (
                <div key={key} className="text-center p-4 rounded-lg bg-muted/20">
                  <div className="text-2xl font-bold text-primary">{stats.percentage}%</div>
                  <div className="text-sm font-medium">{section.title}</div>
                  <div className="text-xs text-muted-foreground">{stats.completed}/{stats.total} topics</div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Syllabus Sections */}
      <div className="space-y-4">
        {Object.entries(syllabusData).map(([key, section]) => renderSection(key, section))}
      </div>
    </div>
  );
}