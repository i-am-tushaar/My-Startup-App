import { DashboardCards } from "@/components/dashboard/DashboardCards";
import { Sparkles, Calendar, Trophy, BookOpen } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-education.jpg";

export default function Dashboard() {
  return (
    <div className="space-y-3 md:space-y-6 lg:space-y-8 px-1 sm:px-2 md:px-0">
      {/* Hero Section with Image */}
      <div className="relative overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent"></div>
        
        <Card className="relative border-0 bg-transparent shadow-none">
          <CardHeader className="pb-2 sm:pb-4 relative z-10 p-3 sm:p-4 md:p-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 mb-2">
              <div className="p-1.5 sm:p-2 bg-white/20 backdrop-blur-sm rounded-lg sm:rounded-xl">
                <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-white" />
              </div>
              <div>
                <CardTitle className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white">
                  Welcome to Lakshya AI
                </CardTitle>
                <CardDescription className="text-xs sm:text-sm md:text-base text-white/90">
                  From Aspirants to Achievers - Your AI-powered UPSC companion
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="relative z-10 p-3 sm:p-4 md:p-6 pt-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
              <div>
                <p className="text-white/90 mb-3 sm:mb-4 text-xs sm:text-sm md:text-base leading-relaxed">
                  Master the UPSC syllabus with AI-powered learning tools, personalized study plans, and comprehensive exam preparation.
                </p>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
          <Button asChild className="bg-white text-primary hover:bg-white/90 text-xs sm:text-sm md:text-base px-3 sm:px-4 py-2">
            <Link to="/syllabus">
              <BookOpen className="h-4 w-4 mr-2" />
              Complete Syllabus
            </Link>
          </Button>
          <Button 
            asChild
            variant="secondary" 
            className="bg-white/20 text-white border-white/30 hover:bg-white/30 backdrop-blur-sm text-xs sm:text-sm md:text-base px-3 sm:px-4 py-2"
          >
            <Link to="/answer-writing">
              Answer Writing Practice
            </Link>
          </Button>
        </div>
              </div>
              
              <div className="space-y-2 sm:space-y-3 mt-3 sm:mt-4 lg:mt-0">
                <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20">
                  <Calendar className="h-3 w-3 sm:h-4 sm:w-4 text-white flex-shrink-0" />
                  <div className="text-xs sm:text-sm text-white min-w-0">
                    <p className="font-medium">Daily Goal Progress</p>
                    <p className="text-white/80 text-xs">4.2/6 hours completed today</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20">
                  <Trophy className="h-3 w-3 sm:h-4 sm:w-4 text-white flex-shrink-0" />
                  <div className="text-xs sm:text-sm text-white min-w-0">
                    <p className="font-medium">Weekly Achievement</p>
                    <p className="text-white/80 text-xs">7-day study streak!</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Dashboard Cards */}
      <DashboardCards />
    </div>
  );
}