import { useParams } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, ArrowLeft, Plus, FileText } from "lucide-react";
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
    <div className="min-h-[60vh] flex items-center justify-center">
      <Card className="max-w-2xl w-full mx-4 text-center shadow-medium">
        <CardHeader className="pb-4">
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-muted rounded-full">
              <BookOpen className="h-12 w-12 text-muted-foreground" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold text-muted-foreground">
            No Topic Found
          </CardTitle>
          <CardDescription className="text-lg">
            The topic "{formatTopicName(topic)}" in {formatPaperName(paper)} is not available yet.
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
            <p className="text-sm text-muted-foreground mb-3">
              We're continuously adding new study materials. In the meantime, you can:
            </p>
            
            <div className="grid md:grid-cols-2 gap-3 text-left">
              <div className="flex items-start gap-3 p-3 bg-background rounded-lg">
                <FileText className="h-4 w-4 text-primary mt-0.5" />
                <div className="text-sm">
                  <p className="font-medium">Upload Your Notes</p>
                  <p className="text-muted-foreground">Add your own study materials</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-3 bg-background rounded-lg">
                <Plus className="h-4 w-4 text-success mt-0.5" />
                <div className="text-sm">
                  <p className="font-medium">Request Topic</p>
                  <p className="text-muted-foreground">Let us know what you need</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild variant="outline" className="gap-2">
              <Link to="/">
                <ArrowLeft className="h-4 w-4" />
                Back to Dashboard
              </Link>
            </Button>
            
            <Button asChild className="gap-2">
              <Link to="/my-notes">
                <FileText className="h-4 w-4" />
                Upload Notes
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}