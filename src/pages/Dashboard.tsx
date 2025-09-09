import { DashboardCards } from "@/components/dashboard/DashboardCards";
import { Sparkles, Calendar, Trophy } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-education.jpg";

export default function Dashboard() {
  return (
    <div className="space-y-4 md:space-y-8 px-2 md:px-0">
      {/* Hero Section with Image */}
      <div className="relative overflow-hidden rounded-xl md:rounded-2xl">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent"></div>
        
        <Card className="relative border-0 bg-transparent shadow-none">
          <CardHeader className="pb-4 relative z-10 p-4 md:p-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-2">
              <div className="p-2 bg-white/20 backdrop-blur-sm rounded-xl">
                <Sparkles className="h-5 w-5 md:h-6 md:w-6 text-white" />
              </div>
              <div>
                <CardTitle className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                  Welcome to Lakshya AI
                </CardTitle>
                <CardDescription className="text-sm md:text-base text-white/90">
                  From Aspirants to Achievers - Your AI-powered UPSC companion
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="relative z-10 p-4 md:p-6 pt-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
              <div>
                <p className="text-white/90 mb-4 text-sm md:text-base">
                  Master the UPSC syllabus with AI-powered learning tools, personalized study plans, and comprehensive exam preparation.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button className="bg-white text-primary hover:bg-white/90 text-sm md:text-base">
                    Start Learning
                  </Button>
                  <Button 
                    variant="secondary" 
                    className="bg-white/20 text-white border-white/30 hover:bg-white/30 backdrop-blur-sm text-sm md:text-base"
                  >
                    Take Quick Quiz
                  </Button>
                </div>
              </div>
              
              <div className="space-y-3 mt-4 lg:mt-0">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20">
                  <Calendar className="h-4 w-4 text-white flex-shrink-0" />
                  <div className="text-sm text-white min-w-0">
                    <p className="font-medium">Daily Goal Progress</p>
                    <p className="text-white/80 text-xs md:text-sm">4.2/6 hours completed today</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20">
                  <Trophy className="h-4 w-4 text-white flex-shrink-0" />
                  <div className="text-sm text-white min-w-0">
                    <p className="font-medium">Weekly Achievement</p>
                    <p className="text-white/80 text-xs md:text-sm">7-day study streak!</p>
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