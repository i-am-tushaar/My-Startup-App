import { Link } from "react-router-dom";
import { 
  BookOpen, 
  Newspaper, 
  Brain, 
  Upload, 
  HelpCircle,
  TrendingUp,
  Clock,
  Target
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const dashboardCards = [
  {
    title: "UPSC Predictor AI",
    description: "AI-powered predictions for UPSC CSE 2025 trends",
    icon: TrendingUp,
    link: "/upsc-predictor",
    badge: "🔮 NEW",
    color: "from-indigo-500 to-purple-600"
  },
  {
    title: "UPSC Syllabus Explorer",
    description: "Comprehensive topic-wise study materials",
    icon: BookOpen,
    link: "/syllabus/gs1/history",
    badge: "4 Papers",
    color: "from-blue-500 to-blue-600"
  },
  {
    title: "Current Affairs",
    description: "Daily curated news with UPSC relevance",
    icon: Newspaper,
    link: "/current-affairs",
    badge: "Updated Daily",
    color: "from-green-500 to-green-600"
  },
  {
    title: "AI Tutor",
    description: "Get instant explanations and doubt clearing",
    icon: Brain,
    link: "/ai-tutor",
    badge: "24/7 Available",
    color: "from-purple-500 to-purple-600"
  },
  {
    title: "My Notes AI",
    description: "Upload notes and get AI-powered summaries",
    icon: Upload,
    link: "/my-notes",
    badge: "Smart Analysis",
    color: "from-orange-500 to-orange-600"
  }
];

const statsCards = [
  {
    title: "Study Streak",
    value: "7 Days",
    description: "Keep it up!",
    icon: TrendingUp,
    change: "+2 from last week",
    link: "/streak-tracker"
  },
  {
    title: "Topics Covered",
    value: "23/127",
    description: "18% Complete",
    icon: Target,
    change: "+5 this week",
    link: "/progress-tracker"
  },
  {
    title: "Quiz Score",
    value: "78%",
    description: "Average accuracy",
    icon: HelpCircle,
    change: "+12% improvement",
    link: "/quiz-analytics"
  },
  {
    title: "Study Time",
    value: "4.2 hrs",
    description: "Today's session",
    icon: Clock,
    change: "Goal: 6 hours",
    link: "/time-tracker"
  }
];

export function DashboardCards() {
  return (
    <div className="space-y-6 md:space-y-8">
      {/* Quick Access Cards */}
      <div>
        <h2 className="section-title text-lg md:text-2xl">
          <Target className="h-5 w-5 md:h-6 md:w-6 text-primary" />
          Quick Access
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
          {dashboardCards.map((card) => (
            <Link key={card.title} to={card.link} className="block group">
              <Card className="learning-card cursor-pointer overflow-hidden h-full transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
                <CardHeader className="pb-3 p-4 md:p-6">
                  <div className="flex items-center justify-between mb-2">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${card.color} text-white transition-transform duration-200 group-hover:scale-110`}>
                      <card.icon className="h-4 w-4 md:h-5 md:w-5" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {card.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-base md:text-lg font-semibold group-hover:text-primary transition-colors">{card.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {card.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-4 md:p-6 pt-0">
                  <Button variant="ghost" className="w-full justify-between p-0 h-auto font-medium text-sm group-hover:text-primary transition-colors">
                    Start Learning
                    <span className="text-primary transform transition-transform group-hover:translate-x-1">→</span>
                  </Button>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      {/* Progress Stats */}
      <div>
        <h2 className="section-title text-lg md:text-2xl">
          <TrendingUp className="h-5 w-5 md:h-6 md:w-6 text-success" />
          Your Progress
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {statsCards.map((stat) => (
            <Link key={stat.title} to={stat.link} className="block group">
              <Card className="learning-card cursor-pointer transition-all duration-200 hover:shadow-lg hover:-translate-y-1 group-hover:border-primary/20">
                <CardHeader className="pb-3 p-3 md:p-6">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xs md:text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">
                      {stat.title}
                    </CardTitle>
                    <stat.icon className="h-3 w-3 md:h-4 md:w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-lg md:text-2xl font-bold group-hover:text-primary transition-colors">{stat.value}</div>
                    <p className="text-xs text-muted-foreground hidden sm:block">{stat.description}</p>
                  </div>
                </CardHeader>
                <CardContent className="p-3 md:p-6 pt-0">
                  <div className="text-xs text-success font-medium">
                    {stat.change}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}