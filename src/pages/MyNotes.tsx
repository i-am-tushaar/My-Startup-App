import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { 
  Upload, 
  FileText, 
  FolderPlus, 
  Sparkles, 
  Download,
  Eye,
  HelpCircle,
  Brain,
  Folder
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const sampleNotes = [
  {
    id: 1,
    name: "Indian Constitution - Part III.pdf",
    folder: "Polity",
    uploadDate: "2024-01-10",
    size: "2.4 MB",
    processed: true,
    summaryGenerated: true,
    quizzesCount: 15,
    flashcardsCount: 28
  },
  {
    id: 2,
    name: "Economic Survey 2024 - Chapter 3.docx",
    folder: "Economy",
    uploadDate: "2024-01-08",
    size: "1.8 MB",
    processed: true,
    summaryGenerated: true,
    quizzesCount: 12,
    flashcardsCount: 22
  },
  {
    id: 3,
    name: "Ancient History Notes.txt",
    folder: "History",
    uploadDate: "2024-01-05",
    size: "0.9 MB",
    processed: false,
    summaryGenerated: false,
    quizzesCount: 0,
    flashcardsCount: 0
  }
];

const folders = ["History", "Polity", "Economy", "Geography", "Environment", "Ethics"];

export default function MyNotes() {
  const [selectedFolder, setSelectedFolder] = useState<string>("");
  const [dragActive, setDragActive] = useState(false);
  const { toast } = useToast();

  const handleFileUpload = (files: FileList | null) => {
    if (!files) return;
    
    Array.from(files).forEach(file => {
      if (file.type === 'application/pdf' || 
          file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' ||
          file.type === 'text/plain') {
        toast({
          title: "File uploaded successfully!",
          description: `${file.name} is being processed by AI...`,
        });
      } else {
        toast({
          title: "Unsupported file type",
          description: "Please upload PDF, DOCX, or TXT files only.",
          variant: "destructive"
        });
      }
    });
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    handleFileUpload(e.dataTransfer.files);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="section-title">
          <Brain className="h-8 w-8 text-primary" />
          My Notes AI
        </h1>
        <p className="text-muted-foreground">
          Upload your study materials and get AI-powered summaries, quizzes, and flashcards
        </p>
      </div>

      {/* Upload Section */}
      <Card className="learning-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Upload className="h-5 w-5 text-primary" />
            Upload New Notes
          </CardTitle>
          <CardDescription>
            Supported formats: PDF, DOCX, TXT (Max 10MB per file)
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            {/* File Drop Zone */}
            <div
              className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                dragActive 
                  ? "border-primary bg-primary/5" 
                  : "border-border hover:border-primary/50"
              }`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              <div className="flex flex-col items-center gap-3">
                <div className="p-3 bg-primary/10 rounded-full">
                  <FileText className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Drop files here</p>
                  <p className="text-sm text-muted-foreground">or click to browse</p>
                </div>
                <Input
                  type="file"
                  multiple
                  accept=".pdf,.docx,.txt"
                  className="hidden"
                  id="file-upload"
                  onChange={(e) => handleFileUpload(e.target.files)}
                />
                <Button asChild variant="outline">
                  <label htmlFor="file-upload" className="cursor-pointer">
                    Choose Files
                  </label>
                </Button>
              </div>
            </div>

            {/* Folder Selection */}
            <div className="space-y-4">
              <div>
                <Label htmlFor="folder-select">Organize in Folder</Label>
                <select
                  id="folder-select"
                  className="w-full mt-1 p-2 border border-border rounded-md bg-background"
                  value={selectedFolder}
                  onChange={(e) => setSelectedFolder(e.target.value)}
                >
                  <option value="">Select folder...</option>
                  {folders.map(folder => (
                    <option key={folder} value={folder}>{folder}</option>
                  ))}
                </select>
              </div>
              
              <Button variant="outline" className="w-full gap-2">
                <FolderPlus className="h-4 w-4" />
                Create New Folder
              </Button>
              
              <div className="p-4 bg-info/10 rounded-lg border border-info/20">
                <div className="flex items-start gap-2">
                  <Sparkles className="h-4 w-4 text-info mt-0.5" />
                  <div className="text-sm">
                    <p className="font-medium text-info">AI Processing</p>
                    <p className="text-muted-foreground">
                      Uploaded files will be automatically analyzed to generate summaries, MCQs, and flashcards.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Uploaded Notes */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Your Uploaded Notes</h2>
          <div className="flex gap-2">
            {folders.map(folder => (
              <Badge key={folder} variant="outline" className="cursor-pointer">
                <Folder className="h-3 w-3 mr-1" />
                {folder}
              </Badge>
            ))}
          </div>
        </div>

        <div className="grid gap-4">
          {sampleNotes.map((note) => (
            <Card key={note.id} className="learning-card">
              <CardContent className="p-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <FileText className="h-5 w-5 text-primary" />
                    </div>
                    
                    <div className="flex-1 space-y-2">
                      <div>
                        <h3 className="font-medium">{note.name}</h3>
                        <div className="flex items-center gap-3 text-sm text-muted-foreground">
                          <Badge variant="outline">{note.folder}</Badge>
                          <span>{note.uploadDate}</span>
                          <span>{note.size}</span>
                        </div>
                      </div>
                      
                      {note.processed ? (
                        <div className="flex items-center gap-4 text-sm">
                          <div className="flex items-center gap-1 text-success">
                            <Sparkles className="h-3 w-3" />
                            <span>AI Processed</span>
                          </div>
                          <span>{note.quizzesCount} Quizzes</span>
                          <span>{note.flashcardsCount} Flashcards</span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-1 text-warning text-sm">
                          <div className="w-3 h-3 border-2 border-warning border-t-transparent rounded-full animate-spin"></div>
                          <span>Processing...</span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button variant="ghost" size="sm">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <HelpCircle className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}