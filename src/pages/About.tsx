import { ArrowLeft, User, Target, Users, Brain, BookOpen, BarChart3, Lightbulb, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card/50 backdrop-blur-sm p-4 md:p-6">
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Home</span>
        </Link>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header Section */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">TC</span>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">About the App Builder</h1>
              <p className="text-muted-foreground">Meet the creator behind LAKSHYA AI</p>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Left Side - Profile Card */}
          <Card className="learning-card h-fit">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-foreground font-bold text-2xl">TC</span>
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-2">Tushar Choudhary</h2>
                <p className="text-primary font-medium mb-4">🔧 Developer & Creator</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Passionate about creating AI-powered educational solutions for UPSC aspirants
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <User className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">Role</p>
                    <p className="text-sm text-muted-foreground">Developer & Creator of LAKSHYA AI</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Target className="h-5 w-5 text-success mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">Mission</p>
                    <p className="text-sm text-muted-foreground">Empowering UPSC aspirants worldwide</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Lightbulb className="h-5 w-5 text-warning mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">Expertise</p>
                    <p className="text-sm text-muted-foreground">AI, Education Technology, UPSC Preparation</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Right Side - Vision & Philosophy */}
          <div>
            <Card className="learning-card mb-6">
              <CardContent className="p-8">
                <h2 className="section-title">
                  💡 Vision & Philosophy
                </h2>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Target className="h-5 w-5 text-primary" />
                    Our Vision
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    "Helping UPSC aspirants achieve success through AI-powered learning and structured content 
                    delivery. Making quality education accessible, personalized, and effective for every aspirant."
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">Core Values</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <Star className="h-3 w-3 text-primary" />
                      Innovation in educational technology
                    </li>
                    <li className="flex items-center gap-2">
                      <Star className="h-3 w-3 text-primary" />
                      Student-centric approach
                    </li>
                    <li className="flex items-center gap-2">
                      <Star className="h-3 w-3 text-primary" />
                      Continuous improvement and learning
                    </li>
                    <li className="flex items-center gap-2">
                      <Star className="h-3 w-3 text-primary" />
                      Accessibility and inclusivity
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">The Journey</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Started with a simple idea: making UPSC preparation more efficient and effective through technology. 
                    LAKSHYA AI represents countless hours of research, development, and dedication to creating the perfect 
                    learning companion for every UPSC aspirant.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Special Features Section */}
        <div className="mb-12">
          <h2 className="section-title justify-center text-center">
            What Makes LAKSHYA AI Special
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="learning-card text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">AI-Powered Learning</h3>
                <p className="text-sm text-muted-foreground">
                  Intelligent content curation and personalized learning paths
                </p>
              </CardContent>
            </Card>

            <Card className="learning-card text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-success" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Comprehensive Coverage</h3>
                <p className="text-sm text-muted-foreground">
                  Complete UPSC syllabus with current affairs integration
                </p>
              </CardContent>
            </Card>

            <Card className="learning-card text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-warning/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="h-8 w-8 text-warning" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Progress Tracking</h3>
                <p className="text-sm text-muted-foreground">
                  Advanced analytics to monitor and improve performance
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <Card className="learning-card gradient-primary">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold text-primary-foreground mb-4">
              Ready to Start Your UPSC Journey?
            </h2>
            <p className="text-primary-foreground/90 mb-6">
              Join thousands of aspirants who trust LAKSHYA AI for their preparation
            </p>
            <Button asChild variant="secondary" size="lg">
              <Link to="/current-affairs">
                Explore Current Affairs
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}