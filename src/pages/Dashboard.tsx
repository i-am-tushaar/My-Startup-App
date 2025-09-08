import { DashboardCards } from "@/components/dashboard/DashboardCards";
import { Sparkles, Calendar, Trophy } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-education.jpg";

export default function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Hero Section with Image */}
      <div className="relative overflow-hidden rounded-2xl">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent"></div>
        
        <Card className="relative border-0 bg-transparent shadow-none">
          <CardHeader className="pb-4 relative z-10">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-white/20 backdrop-blur-sm rounded-xl">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <div>
                <CardTitle className="text-2xl md:text-3xl font-bold text-white">
                  Welcome to Lakshya AI
                </CardTitle>
                <CardDescription className="text-base text-white/90">
                  From Aspirants to Achievers - Your AI-powered UPSC companion
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="relative z-10">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-white/90 mb-4">
                  Master the UPSC syllabus with AI-powered learning tools, personalized study plans, and comprehensive exam preparation.
                </p>
                <div className="flex gap-3">
                  <Button className="bg-white text-primary hover:bg-white/90">
                    Start Learning
                  </Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white/10">
                    Take Quick Quiz
                  </Button>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20">
                  <Calendar className="h-4 w-4 text-white" />
                  <div className="text-sm text-white">
                    <p className="font-medium">Daily Goal Progress</p>
                    <p className="text-white/80">4.2/6 hours completed today</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20">
                  <Trophy className="h-4 w-4 text-white" />
                  <div className="text-sm text-white">
                    <p className="font-medium">Weekly Achievement</p>
                    <p className="text-white/80">7-day study streak!</p>
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