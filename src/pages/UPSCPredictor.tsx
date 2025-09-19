import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, Target, FileText, Sparkles, Brain, Activity } from "lucide-react";

// Mock data for predictions
const subjectWeightageData = [
  { subject: "Polity", past: 25, predicted: 28, probability: 72 },
  { subject: "Economy", past: 22, predicted: 24, probability: 68 },
  { subject: "Geography", past: 18, predicted: 20, probability: 65 },
  { subject: "History", past: 15, predicted: 16, probability: 60 },
  { subject: "Environment", past: 12, predicted: 8, probability: 75 },
  { subject: "Science & Tech", past: 8, predicted: 4, probability: 70 }
];

const difficultyTrends = [
  { year: "2021", easy: 30, moderate: 50, hard: 20 },
  { year: "2022", easy: 25, moderate: 55, hard: 20 },
  { year: "2023", easy: 20, moderate: 60, hard: 20 },
  { year: "2024", easy: 22, moderate: 58, hard: 20 },
  { year: "2025 (Predicted)", easy: 18, moderate: 62, hard: 20 }
];

const questionTypeData = [
  { type: "Current Affairs Based", percentage: 35, trend: "↑" },
  { type: "Conceptual Understanding", percentage: 28, trend: "↑" },
  { type: "Application Based", percentage: 22, trend: "→" },
  { type: "Factual Recall", percentage: 15, trend: "↓" }
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const UPSCPredictor = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showPredictions, setShowPredictions] = useState(false);

  const handleStartPrediction = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      setShowPredictions(true);
    }, 3000);
  };

  const ProbabilityCard = ({ title, probability, description, icon: Icon }: { title: string; probability: number; description: string; icon: any }) => (
    <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 border-blue-200 dark:border-blue-800">
      <CardHeader className="flex flex-row items-center space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className="h-4 w-4 text-blue-600 dark:text-blue-400 ml-auto" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-blue-700 dark:text-blue-300">{probability}%</div>
        <p className="text-xs text-muted-foreground mt-1">{description}</p>
        <Progress value={probability} className="mt-2" />
      </CardContent>
    </Card>
  );

  return (
    <div className="container mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          🔮 UPSC Predictor AI
        </h1>
        <p className="text-lg text-muted-foreground">
          Smart Analysis of Exam Trends (2011–2025)
        </p>
        <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
          Powered by advanced AI analysis of 15+ years of UPSC exam data to predict patterns, weightages, and difficulty trends
        </p>
      </div>

      {/* Start Prediction Button */}
      {!showPredictions && (
        <div className="text-center">
          <Card className="max-w-md mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center justify-center gap-2">
                <Brain className="h-5 w-5" />
                AI Analysis Ready
              </CardTitle>
              <CardDescription>
                Start the predictive analysis to get insights for UPSC CSE 2025
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                onClick={handleStartPrediction} 
                disabled={isAnalyzing}
                className="w-full"
                size="lg"
              >
                {isAnalyzing ? (
                  <>
                    <Activity className="mr-2 h-4 w-4 animate-spin" />
                    Analyzing Patterns...
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2 h-4 w-4" />
                    Start Prediction
                  </>
                )}
              </Button>
              {isAnalyzing && (
                <div className="mt-4">
                  <Progress value={33} className="mb-2" />
                  <p className="text-sm text-center text-muted-foreground">
                    Processing 15 years of UPSC data...
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      )}

      {/* Predictions Content */}
      {showPredictions && (
        <>
          {/* High-Level Insights */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <ProbabilityCard
              title="Polity Focus"
              probability={70}
              description="Higher weightage expected"
              icon={Target}
            />
            <ProbabilityCard
              title="Current Affairs"
              probability={85}
              description="Increased integration"
              icon={TrendingUp}
            />
            <ProbabilityCard
              title="Application-Based"
              probability={65}
              description="More analytical questions"
              icon={Brain}
            />
            <ProbabilityCard
              title="Moderate Difficulty"
              probability={62}
              description="Balanced complexity"
              icon={Activity}
            />
          </div>

          {/* Detailed Analysis Tabs */}
          <Tabs defaultValue="weightage" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="weightage">📊 Subject Weightage</TabsTrigger>
              <TabsTrigger value="patterns">📝 Question Patterns</TabsTrigger>
              <TabsTrigger value="difficulty">🎯 Difficulty Analysis</TabsTrigger>
              <TabsTrigger value="predictions">🔮 2025 Predictions</TabsTrigger>
            </TabsList>

            {/* Subject Weightage */}
            <TabsContent value="weightage">
              <Card>
                <CardHeader>
                  <CardTitle>Subject-wise Weightage Trends</CardTitle>
                  <CardDescription>
                    Comparison of historical vs predicted weightage for UPSC CSE 2025
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-80 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={subjectWeightageData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="subject" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="past" fill="#8884d8" name="Historical Average" />
                        <Bar dataKey="predicted" fill="#82ca9d" name="2025 Prediction" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {subjectWeightageData.map((subject) => (
                      <Card key={subject.subject} className="p-4">
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="font-medium">{subject.subject}</h4>
                          <Badge variant={subject.predicted > subject.past ? "default" : "secondary"}>
                            {subject.predicted > subject.past ? "↑" : subject.predicted < subject.past ? "↓" : "→"}
                          </Badge>
                        </div>
                        <div className="space-y-1">
                          <div className="flex justify-between text-sm">
                            <span>Confidence:</span>
                            <span>{subject.probability}%</span>
                          </div>
                          <Progress value={subject.probability} className="h-2" />
                        </div>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Question Patterns */}
            <TabsContent value="patterns">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Question Type Distribution</CardTitle>
                    <CardDescription>Expected pattern for 2025 based on recent trends</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={questionTypeData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={({ type, percentage }) => `${type}: ${percentage}%`}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="percentage"
                          >
                            {questionTypeData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Pie>
                          <Tooltip />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Pattern Insights</CardTitle>
                    <CardDescription>Key trends and recommendations</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {questionTypeData.map((type, index) => (
                      <div key={type.type} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                        <div className="flex items-center gap-3">
                          <div 
                            className="w-4 h-4 rounded-full" 
                            style={{ backgroundColor: COLORS[index % COLORS.length] }}
                          />
                          <span className="font-medium">{type.type}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline">{type.percentage}%</Badge>
                          <span className="text-lg">{type.trend}</span>
                        </div>
                      </div>
                    ))}
                    <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg">
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <FileText className="h-4 w-4" />
                        Key Recommendations
                      </h4>
                      <ul className="text-sm space-y-1 text-muted-foreground">
                        <li>• Focus more on current affairs integration with static topics</li>
                        <li>• Practice application-based questions over rote learning</li>
                        <li>• Strengthen conceptual understanding across all subjects</li>
                        <li>• Reduce time spent on pure factual recall questions</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Difficulty Analysis */}
            <TabsContent value="difficulty">
              <Card>
                <CardHeader>
                  <CardTitle>Difficulty Level Trends</CardTitle>
                  <CardDescription>Evolution of difficulty patterns from 2021 to predicted 2025</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-80 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={difficultyTrends}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="year" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="easy" stroke="#82ca9d" strokeWidth={2} name="Easy" />
                        <Line type="monotone" dataKey="moderate" stroke="#8884d8" strokeWidth={2} name="Moderate" />
                        <Line type="monotone" dataKey="hard" stroke="#ff7300" strokeWidth={2} name="Hard" />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card className="p-4 bg-green-50 dark:bg-green-950/30">
                      <h4 className="font-semibold text-green-700 dark:text-green-300">Easy Questions</h4>
                      <p className="text-2xl font-bold text-green-600">18%</p>
                      <p className="text-sm text-muted-foreground">Decreasing trend</p>
                    </Card>
                    <Card className="p-4 bg-blue-50 dark:bg-blue-950/30">
                      <h4 className="font-semibold text-blue-700 dark:text-blue-300">Moderate Questions</h4>
                      <p className="text-2xl font-bold text-blue-600">62%</p>
                      <p className="text-sm text-muted-foreground">Increasing trend</p>
                    </Card>
                    <Card className="p-4 bg-orange-50 dark:bg-orange-950/30">
                      <h4 className="font-semibold text-orange-700 dark:text-orange-300">Hard Questions</h4>
                      <p className="text-2xl font-bold text-orange-600">20%</p>
                      <p className="text-sm text-muted-foreground">Stable trend</p>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* 2025 Predictions */}
            <TabsContent value="predictions">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      🔮 Probability-Based Guidance for 2025 Exam
                    </CardTitle>
                    <CardDescription>
                      AI-powered predictions with confidence intervals
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-3">
                        <h4 className="font-semibold">High Probability Predictions (70%+)</h4>
                        <div className="space-y-2">
                          <div className="p-3 bg-green-50 dark:bg-green-950/30 rounded-lg">
                            <div className="flex justify-between items-center">
                              <span>Polity weightage increase</span>
                              <Badge className="bg-green-100 text-green-700">72%</Badge>
                            </div>
                          </div>
                          <div className="p-3 bg-green-50 dark:bg-green-950/30 rounded-lg">
                            <div className="flex justify-between items-center">
                              <span>Environment questions decrease</span>
                              <Badge className="bg-green-100 text-green-700">75%</Badge>
                            </div>
                          </div>
                          <div className="p-3 bg-green-50 dark:bg-green-950/30 rounded-lg">
                            <div className="flex justify-between items-center">
                              <span>Current affairs integration</span>
                              <Badge className="bg-green-100 text-green-700">85%</Badge>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <h4 className="font-semibold">Moderate Probability Predictions (60-70%)</h4>
                        <div className="space-y-2">
                          <div className="p-3 bg-yellow-50 dark:bg-yellow-950/30 rounded-lg">
                            <div className="flex justify-between items-center">
                              <span>Economy focus shift</span>
                              <Badge className="bg-yellow-100 text-yellow-700">68%</Badge>
                            </div>
                          </div>
                          <div className="p-3 bg-yellow-50 dark:bg-yellow-950/30 rounded-lg">
                            <div className="flex justify-between items-center">
                              <span>Geography stability</span>
                              <Badge className="bg-yellow-100 text-yellow-700">65%</Badge>
                            </div>
                          </div>
                          <div className="p-3 bg-yellow-50 dark:bg-yellow-950/30 rounded-lg">
                            <div className="flex justify-between items-center">
                              <span>Application-based increase</span>
                              <Badge className="bg-yellow-100 text-yellow-700">65%</Badge>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Strategic Recommendations</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      <div className="p-4 border rounded-lg">
                        <h4 className="font-semibold mb-2">📚 Study Priority</h4>
                        <ol className="text-sm space-y-1">
                          <li>1. Constitutional Law & Governance</li>
                          <li>2. Economic Survey & Budgets</li>
                          <li>3. Current Affairs (monthly)</li>
                          <li>4. Geography fundamentals</li>
                        </ol>
                      </div>
                      <div className="p-4 border rounded-lg">
                        <h4 className="font-semibold mb-2">🎯 Focus Areas</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Amendment procedures</li>
                          <li>• Digital economy trends</li>
                          <li>• Climate change policies</li>
                          <li>• Social sector schemes</li>
                        </ul>
                      </div>
                      <div className="p-4 border rounded-lg">
                        <h4 className="font-semibold mb-2">⚡ Quick Wins</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Recent SC judgments</li>
                          <li>• International summits</li>
                          <li>• Government reports</li>
                          <li>• Award & recognition</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </>
      )}
    </div>
  );
};

export default UPSCPredictor;