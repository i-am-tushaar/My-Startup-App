import { useState } from "react";
import { PenTool, Clock, CheckCircle, AlertCircle, BookOpen, Send, RefreshCw } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const questionBank = {
  gs1: [
    {
      id: 1,
      question: "Discuss the significance of the Non-Cooperation Movement in India's freedom struggle. How did it mark a departure from earlier forms of resistance?",
      marks: 15,
      time: 20,
      difficulty: "Medium",
      topics: ["Modern History", "Freedom Struggle"]
    },
    {
      id: 2,
      question: "Analyze the impact of monsoon patterns on Indian agriculture. Discuss the challenges posed by climate change to traditional farming practices.",
      marks: 15,
      time: 20,
      difficulty: "Medium",
      topics: ["Geography", "Agriculture", "Climate Change"]
    }
  ],
  gs2: [
    {
      id: 3,
      question: "Examine the role of Public Interest Litigation (PIL) in ensuring government accountability. Discuss its evolution and current challenges.",
      marks: 15,
      time: 20,
      difficulty: "Medium",
      topics: ["Polity", "Governance", "Judiciary"]
    },
    {
      id: 4,
      question: "Analyze the concept of 'Minimum Government, Maximum Governance'. How can technology aid in achieving this objective?",
      marks: 15,
      time: 20,
      difficulty: "Hard",
      topics: ["Governance", "Public Administration", "Technology"]
    }
  ],
  gs3: [
    {
      id: 5,
      question: "Discuss the challenges and opportunities presented by India's demographic dividend. How can human capital be effectively utilized for economic growth?",
      marks: 15,
      time: 20,
      difficulty: "Medium",
      topics: ["Economy", "Demographics", "Human Development"]
    }
  ],
  gs4: [
    {
      id: 6,
      question: "A senior government official notices irregularities in a major infrastructure project. The project is crucial for the region's development but the irregularities could lead to significant public loss. Discuss the ethical dilemmas and suggest a course of action.",
      marks: 15,
      time: 20,
      difficulty: "Hard",
      topics: ["Ethics", "Case Study", "Public Administration"]
    }
  ]
};

const sampleEvaluation = {
  score: 12,
  maxScore: 15,
  strengths: [
    "Good introduction with proper context setting",
    "Relevant examples and case studies mentioned",
    "Logical flow of arguments"
  ],
  improvements: [
    "Conclusion could be more comprehensive",
    "Some points need better elaboration",
    "Add more recent examples for contemporary relevance"
  ],
  suggestions: [
    "Structure answers using bullet points for clarity",
    "Include diagrams where relevant",
    "Connect historical events with present-day implications"
  ]
};

export default function AnswerWriting() {
  const [selectedPaper, setSelectedPaper] = useState("gs1");
  const [currentQuestion, setCurrentQuestion] = useState(questionBank.gs1[0]);
  const [userAnswer, setUserAnswer] = useState("");
  const [timeLeft, setTimeLeft] = useState(currentQuestion.time * 60); // in seconds
  const [isTimerActive, setIsTimerActive] = useState(false);
  const [showEvaluation, setShowEvaluation] = useState(false);
  const [isEvaluating, setIsEvaluating] = useState(false);

  const startTimer = () => {
    setIsTimerActive(true);
    // Timer logic would be implemented here
  };

  const submitAnswer = async () => {
    if (!userAnswer.trim()) return;
    
    setIsEvaluating(true);
    setIsTimerActive(false);
    
    // Simulate AI evaluation
    setTimeout(() => {
      setIsEvaluating(false);
      setShowEvaluation(true);
    }, 3000);
  };

  const resetPractice = () => {
    setUserAnswer("");
    setTimeLeft(currentQuestion.time * 60);
    setIsTimerActive(false);
    setShowEvaluation(false);
    setIsEvaluating(false);
  };

  const selectNewQuestion = (paper: string) => {
    const questions = questionBank[paper as keyof typeof questionBank];
    const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
    setCurrentQuestion(randomQuestion);
    setSelectedPaper(paper);
    resetPractice();
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy": return "bg-success text-success-foreground";
      case "Medium": return "bg-warning text-warning-foreground";
      case "Hard": return "bg-destructive text-destructive-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="space-y-4 sm:space-y-6 p-1 sm:p-2 md:p-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold">Answer Writing Practice</h1>
          <p className="text-muted-foreground">AI-powered evaluation for UPSC Mains preparation</p>
        </div>
        <div className="flex gap-2">
          <Select value={selectedPaper} onValueChange={selectNewQuestion}>
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="gs1">GS Paper 1</SelectItem>
              <SelectItem value="gs2">GS Paper 2</SelectItem>
              <SelectItem value="gs3">GS Paper 3</SelectItem>
              <SelectItem value="gs4">GS Paper 4</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" onClick={resetPractice}>
            <RefreshCw className="h-4 w-4 mr-2" />
            Reset
          </Button>
        </div>
      </div>

      <Tabs defaultValue="practice" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="practice">Practice</TabsTrigger>
          <TabsTrigger value="evaluation">Evaluation</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
        </TabsList>

        <TabsContent value="practice" className="space-y-4">
          {/* Question Card */}
          <Card>
            <CardHeader>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  <CardTitle className="text-lg">Question {currentQuestion.id}</CardTitle>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge className={getDifficultyColor(currentQuestion.difficulty)}>
                    {currentQuestion.difficulty}
                  </Badge>
                  <Badge variant="outline">{currentQuestion.marks} Marks</Badge>
                  <Badge variant="outline">
                    <Clock className="h-3 w-3 mr-1" />
                    {currentQuestion.time} min
                  </Badge>
                </div>
              </div>
              <div className="flex flex-wrap gap-1">
                {currentQuestion.topics.map((topic, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {topic}
                  </Badge>
                ))}
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm sm:text-base leading-relaxed">{currentQuestion.question}</p>
            </CardContent>
          </Card>

          {/* Timer and Controls */}
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <div className={`text-2xl font-mono font-bold ${isTimerActive ? 'text-primary' : 'text-muted-foreground'}`}>
                      {formatTime(timeLeft)}
                    </div>
                    <div className="text-xs text-muted-foreground">Time Remaining</div>
                  </div>
                  {!isTimerActive && !showEvaluation && (
                    <Button onClick={startTimer} size="sm">
                      <Clock className="h-4 w-4 mr-2" />
                      Start Timer
                    </Button>
                  )}
                </div>
                <div className="text-center text-xs text-muted-foreground">
                  Word count: {userAnswer.split(' ').filter(word => word.length > 0).length}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Answer Input */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Your Answer</CardTitle>
              <CardDescription>
                Write your answer in the space below. Aim for clarity, structure, and comprehensive coverage.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Textarea
                placeholder="Start writing your answer here..."
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                className="min-h-[300px] resize-none"
                disabled={showEvaluation}
              />
              <div className="flex justify-end mt-4">
                <Button 
                  onClick={submitAnswer}
                  disabled={!userAnswer.trim() || isEvaluating || showEvaluation}
                  className="min-w-[120px]"
                >
                  {isEvaluating ? (
                    <>
                      <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                      Evaluating...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Submit Answer
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="evaluation" className="space-y-4">
          {showEvaluation ? (
            <>
              {/* Score Card */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-success" />
                    AI Evaluation Results
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-center mb-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-primary">
                        {sampleEvaluation.score}/{sampleEvaluation.maxScore}
                      </div>
                      <div className="text-sm text-muted-foreground">Score</div>
                      <Badge className="mt-2 bg-success text-success-foreground">
                        {Math.round((sampleEvaluation.score / sampleEvaluation.maxScore) * 100)}%
                      </Badge>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Strengths */}
                    <Card>
                      <CardHeader className="pb-3">
                        <CardTitle className="text-sm text-success flex items-center gap-2">
                          <CheckCircle className="h-4 w-4" />
                          Strengths
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {sampleEvaluation.strengths.map((strength, index) => (
                            <li key={index} className="text-xs flex items-start gap-2">
                              <div className="w-1 h-1 rounded-full bg-success mt-2 flex-shrink-0" />
                              {strength}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>

                    {/* Areas for Improvement */}
                    <Card>
                      <CardHeader className="pb-3">
                        <CardTitle className="text-sm text-warning flex items-center gap-2">
                          <AlertCircle className="h-4 w-4" />
                          Improvements
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {sampleEvaluation.improvements.map((improvement, index) => (
                            <li key={index} className="text-xs flex items-start gap-2">
                              <div className="w-1 h-1 rounded-full bg-warning mt-2 flex-shrink-0" />
                              {improvement}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>

                    {/* Suggestions */}
                    <Card>
                      <CardHeader className="pb-3">
                        <CardTitle className="text-sm text-info flex items-center gap-2">
                          <PenTool className="h-4 w-4" />
                          Suggestions
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {sampleEvaluation.suggestions.map((suggestion, index) => (
                            <li key={index} className="text-xs flex items-start gap-2">
                              <div className="w-1 h-1 rounded-full bg-info mt-2 flex-shrink-0" />
                              {suggestion}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            </>
          ) : (
            <Card>
              <CardContent className="pt-6">
                <div className="text-center py-8">
                  <PenTool className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">No Evaluation Yet</h3>
                  <p className="text-muted-foreground">
                    Submit an answer in the Practice tab to see AI evaluation results here.
                  </p>
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="history" className="space-y-4">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center py-8">
                <Clock className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Practice History</h3>
                <p className="text-muted-foreground">
                  Your answer writing history will appear here as you practice more questions.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}