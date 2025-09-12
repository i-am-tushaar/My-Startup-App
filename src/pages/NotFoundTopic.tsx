import { useParams } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, ArrowLeft, Plus, FileText, Clock } from "lucide-react";
import { Link } from "react-router-dom";

export default function NotFoundTopic() {
  const { paper, topic } = useParams();
  
  const formatTopicName = (topicParam: string | undefined) => {
    if (!topicParam) return "Unknown Topic";
    return topicParam
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const formatPaperName = (paperParam: string | undefined) => {
    if (!paperParam) return "General Studies";
    return paperParam.toUpperCase().replace(/(\d+)/, ' $1');
  };

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <Card className="max-w-2xl w-full text-center shadow-lg border-primary/10">
        <CardHeader className="pb-6">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-primary/10 rounded-full">
              <Clock className="h-12 w-12 text-primary" />
            </div>
          </div>
          <div className="flex justify-center mb-4">
            <Badge variant="secondary" className="bg-orange-100 text-orange-800 border-orange-200">
              Coming Soon
            </Badge>
          </div>
          <CardTitle className="text-2xl font-bold text-foreground mb-2">
            Content Under Development
          </CardTitle>
          <CardDescription className="text-lg text-muted-foreground">
            The topic "{formatTopicName(topic)}" in {formatPaperName(paper)} is being prepared for you.
          </CardDescription>
          <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
            Our team is working hard to bring you comprehensive study materials. Please check back soon!
          </p>
        </CardHeader>
        
        <CardContent className="space-y-8">
          <div className="p-6 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-xl border border-primary/20">
            <p className="text-base font-medium text-foreground mb-4 text-center">
              While we prepare this content, explore these options:
            </p>
            
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <Link to="/my-notes" className="group">
                <div className="flex items-start gap-4 p-4 bg-background rounded-lg shadow-sm border transition-all duration-200 hover:shadow-md hover:border-primary/30 hover:-translate-y-1">
                  <FileText className="h-5 w-5 text-primary mt-0.5 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="font-medium text-foreground group-hover:text-primary transition-colors">Upload Your Notes</p>
                    <p className="text-sm text-muted-foreground">Share your study materials with AI analysis</p>
                  </div>
                </div>
              </Link>
              
              <Link to="/ai-tutor" className="group">
                <div className="flex items-start gap-4 p-4 bg-background rounded-lg shadow-sm border transition-all duration-200 hover:shadow-md hover:border-success/30 hover:-translate-y-1">
                  <Plus className="h-5 w-5 text-success mt-0.5 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="font-medium text-foreground group-hover:text-success transition-colors">Ask AI Tutor</p>
                    <p className="text-sm text-muted-foreground">Get instant help on any topic</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="outline" size="lg" className="gap-2 hover:scale-105 transition-transform">
              <Link to="/">
                <ArrowLeft className="h-4 w-4" />
                Back to Dashboard
              </Link>
            </Button>
            
            <Button asChild size="lg" className="gap-2 hover:scale-105 transition-transform">
              <Link to="/syllabus">
                <BookOpen className="h-4 w-4" />
                Explore Syllabus
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}