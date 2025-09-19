import { useState, useEffect } from "react";
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
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  // Mobile and tablet detection
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 640);
      setIsTablet(window.innerWidth >= 640 && window.innerWidth < 1024);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const handleStartPrediction = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      setShowPredictions(true);
    }, 3000);
  };

  const ProbabilityCard = ({ title, probability, description, icon: Icon }: { title: string; probability: number; description: string; icon: any }) => (
    <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 border-blue-200 dark:border-blue-800">
      <CardHeader className="flex flex-row items-center space-y-0 pb-2 p-3 sm:p-4">
        <CardTitle className="text-xs sm:text-sm font-medium truncate pr-2">{title}</CardTitle>
        <Icon className="h-3 w-3 sm:h-4 sm:w-4 text-blue-600 dark:text-blue-400 ml-auto flex-shrink-0" />
      </CardHeader>
      <CardContent className="p-3 sm:p-4 pt-0">
        <div className="text-xl sm:text-2xl font-bold text-blue-700 dark:text-blue-300">{probability}%</div>
        <p className="text-xs text-muted-foreground mt-1">{description}</p>
        <Progress value={probability} className="mt-2 h-1.5 sm:h-2" />
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto p-3 sm:p-4 md:p-6 lg:p-8 space-y-4 sm:space-y-6 max-w-7xl">
        {/* Header */}
        <div className="text-center space-y-2 sm:space-y-4 mb-6 sm:mb-8">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight px-2">
            🔮 UPSC Predictor AI
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground px-2 sm:px-4">
            Smart Analysis of Exam Trends (2011–2025)
          </p>
          <p className="text-xs sm:text-sm text-muted-foreground max-w-3xl mx-auto px-4 sm:px-6 leading-relaxed">
            Powered by advanced AI analysis of 15+ years of UPSC exam data to predict patterns, weightages, and difficulty trends
          </p>
        </div>

      {/* Start Prediction Button */}
      {!showPredictions && (
        <div className="text-center px-4">
          <Card className="max-w-md mx-auto">
            <CardHeader className="p-4 sm:p-6">
              <CardTitle className="flex items-center justify-center gap-2 text-lg sm:text-xl">
                <Brain className="h-4 w-4 sm:h-5 sm:w-5" />
                AI Analysis Ready
              </CardTitle>
              <CardDescription className="text-sm sm:text-base text-center">
                Start the predictive analysis to get insights for UPSC CSE 2025
              </CardDescription>
            </CardHeader>
            <CardContent className="p-4 sm:p-6 pt-0">
              <Button 
                onClick={handleStartPrediction} 
                disabled={isAnalyzing}
                className="w-full text-sm sm:text-base"
                size="lg"
              >
                {isAnalyzing ? (
                  <>
                    <Activity className="mr-2 h-3 w-3 sm:h-4 sm:w-4 animate-spin" />
                    <span className="hidden sm:inline">Analyzing Patterns...</span>
                    <span className="sm:hidden">Analyzing...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                    Start Prediction
                  </>
                )}
              </Button>
              {isAnalyzing && (
                <div className="mt-4">
                  <Progress value={33} className="mb-2" />
                  <p className="text-xs sm:text-sm text-center text-muted-foreground">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 px-2 sm:px-0">
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
          <div className="px-2 sm:px-0">
            <Tabs defaultValue="weightage" className="w-full">
              <div className="w-full overflow-x-auto">
                <TabsList className={`grid w-full ${isMobile ? 'grid-cols-2 gap-1' : 'grid-cols-4'} h-auto mb-4 sm:mb-6`}>
                  <TabsTrigger value="weightage" className="text-xs sm:text-sm p-2 sm:p-3 whitespace-nowrap">
                    <span className="hidden sm:inline">📊 Subject Weightage</span>
                    <span className="sm:hidden">📊 Weightage</span>
                  </TabsTrigger>
                  <TabsTrigger value="patterns" className="text-xs sm:text-sm p-2 sm:p-3 whitespace-nowrap">
                    <span className="hidden sm:inline">📝 Question Patterns</span>
                    <span className="sm:hidden">📝 Patterns</span>
                  </TabsTrigger>
                  <TabsTrigger value="difficulty" className="text-xs sm:text-sm p-2 sm:p-3 whitespace-nowrap">
                    <span className="hidden sm:inline">🎯 Difficulty Analysis</span>
                    <span className="sm:hidden">🎯 Difficulty</span>
                  </TabsTrigger>
                  <TabsTrigger value="predictions" className="text-xs sm:text-sm p-2 sm:p-3 whitespace-nowrap">
                    <span className="hidden sm:inline">🔮 2025 Predictions</span>
                    <span className="sm:hidden">🔮 Predictions</span>
                  </TabsTrigger>
                </TabsList>
              </div>

              {/* Subject Weightage */}
              <TabsContent value="weightage">
                <Card>
                  <CardHeader className="p-4 sm:p-6">
                    <CardTitle className="text-lg sm:text-xl">Subject-wise Weightage Trends</CardTitle>
                    <CardDescription className="text-sm sm:text-base">
                      Comparison of historical vs predicted weightage for UPSC CSE 2025
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6">
                    <div className={`w-full mb-4 ${isMobile ? 'h-72' : isTablet ? 'h-80' : 'h-96'}`}>
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart 
                          data={subjectWeightageData} 
                          margin={isMobile 
                            ? { top: 10, right: 5, left: 5, bottom: 50 }
                            : { top: 20, right: 15, left: 10, bottom: 60 }
                          }
                        >
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis 
                            dataKey="subject" 
                            fontSize={isMobile ? 10 : 12}
                            angle={isMobile ? -45 : -30}
                            textAnchor="end"
                            height={isMobile ? 50 : 60}
                            interval={0}
                          />
                          <YAxis fontSize={isMobile ? 10 : 12} />
                          <Tooltip 
                            contentStyle={{ 
                              fontSize: isMobile ? '12px' : '14px',
                              padding: isMobile ? '6px' : '8px',
                              maxWidth: isMobile ? '200px' : '250px'
                            }} 
                          />
                          <Bar dataKey="past" fill="#8884d8" name="Historical Average" />
                          <Bar dataKey="predicted" fill="#82ca9d" name="2025 Prediction" />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                    <div className="mt-4 sm:mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                      {subjectWeightageData.map((subject) => (
                        <Card key={subject.subject} className="p-3 sm:p-4">
                          <div className="flex justify-between items-center mb-2">
                            <h4 className="font-medium text-sm sm:text-base truncate pr-2">{subject.subject}</h4>
                            <Badge variant={subject.predicted > subject.past ? "default" : "secondary"} className="text-xs">
                              {subject.predicted > subject.past ? "↑" : subject.predicted < subject.past ? "↓" : "→"}
                            </Badge>
                          </div>
                          <div className="space-y-1">
                            <div className="flex justify-between text-xs sm:text-sm">
                              <span>Confidence:</span>
                              <span>{subject.probability}%</span>
                            </div>
                            <Progress value={subject.probability} className="h-1.5 sm:h-2" />
                          </div>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Question Patterns */}
              <TabsContent value="patterns">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                  <Card>
                    <CardHeader className="p-4 sm:p-6">
                      <CardTitle className="text-lg sm:text-xl">Question Type Distribution</CardTitle>
                      <CardDescription className="text-sm sm:text-base">Expected pattern for 2025 based on recent trends</CardDescription>
                    </CardHeader>
                    <CardContent className="p-4 sm:p-6">
                      <div className={`${isMobile ? 'h-56' : 'h-64 sm:h-72'}`}>
                        <ResponsiveContainer width="100%" height="100%">
                          <PieChart>
                            <Pie
                              data={questionTypeData}
                              cx="50%"
                              cy="50%"
                              labelLine={false}
                              label={isMobile ? false : ({ percentage }) => `${percentage}%`}
                              outerRadius={isMobile ? 50 : isTablet ? 55 : 70}
                              fill="#8884d8"
                              dataKey="percentage"
                            >
                              {questionTypeData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                              ))}
                            </Pie>
                            <Tooltip 
                              contentStyle={{ 
                                fontSize: isMobile ? '11px' : '12px',
                                padding: isMobile ? '6px' : '8px',
                                maxWidth: isMobile ? '180px' : '220px'
                              }} 
                            />
                          </PieChart>
                        </ResponsiveContainer>
                      </div>
                      {isMobile && (
                        <div className="mt-2 grid grid-cols-2 gap-2 text-xs">
                          {questionTypeData.map((entry, index) => (
                            <div key={entry.type} className="flex items-center gap-2">
                              <div 
                                className="w-3 h-3 rounded-full flex-shrink-0" 
                                style={{ backgroundColor: COLORS[index % COLORS.length] }}
                              />
                              <span className="truncate">{entry.percentage}% {entry.type.split(' ')[0]}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="p-4 sm:p-6">
                      <CardTitle className="text-lg sm:text-xl">Pattern Insights</CardTitle>
                      <CardDescription className="text-sm sm:text-base">Key trends and recommendations</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3 sm:space-y-4 p-4 sm:p-6">
                      {questionTypeData.map((type, index) => (
                        <div key={type.type} className="flex items-center justify-between p-2 sm:p-3 bg-muted rounded-lg">
                          <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
                            <div 
                              className="w-3 h-3 sm:w-4 sm:h-4 rounded-full flex-shrink-0" 
                              style={{ backgroundColor: COLORS[index % COLORS.length] }}
                            />
                            <span className="font-medium text-sm sm:text-base truncate">{type.type}</span>
                          </div>
                          <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
                            <Badge variant="outline" className="text-xs">{type.percentage}%</Badge>
                            <span className="text-base sm:text-lg">{type.trend}</span>
                          </div>
                        </div>
                      ))}
                      <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg">
                        <h4 className="font-semibold mb-2 flex items-center gap-2 text-sm sm:text-base">
                          <FileText className="h-3 w-3 sm:h-4 sm:w-4" />
                          Key Recommendations
                        </h4>
                        <ul className="text-xs sm:text-sm space-y-1 text-muted-foreground">
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
                  <CardHeader className="p-4 sm:p-6">
                    <CardTitle className="text-lg sm:text-xl">Difficulty Level Trends</CardTitle>
                    <CardDescription className="text-sm sm:text-base">Evolution of difficulty patterns from 2021 to predicted 2025</CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6">
                    <div className={`w-full mb-4 ${isMobile ? 'h-72' : isTablet ? 'h-80' : 'h-96'}`}>
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart 
                          data={difficultyTrends} 
                          margin={isMobile 
                            ? { top: 10, right: 5, left: 5, bottom: 50 }
                            : { top: 20, right: 15, left: 10, bottom: 60 }
                          }
                        >
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis 
                            dataKey="year" 
                            fontSize={isMobile ? 10 : 12}
                            angle={isMobile ? -45 : -30}
                            textAnchor="end"
                            height={isMobile ? 50 : 60}
                            interval={0}
                          />
                          <YAxis fontSize={isMobile ? 10 : 12} />
                          <Tooltip 
                            contentStyle={{ 
                              fontSize: isMobile ? '11px' : '12px',
                              padding: isMobile ? '6px' : '8px',
                              maxWidth: isMobile ? '180px' : '220px'
                            }} 
                          />
                          <Line type="monotone" dataKey="easy" stroke="#82ca9d" strokeWidth={isMobile ? 1.5 : 2} name="Easy" />
                          <Line type="monotone" dataKey="moderate" stroke="#8884d8" strokeWidth={isMobile ? 1.5 : 2} name="Moderate" />
                          <Line type="monotone" dataKey="hard" stroke="#ff7300" strokeWidth={isMobile ? 1.5 : 2} name="Hard" />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                    <div className="mt-4 sm:mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                      <Card className="p-3 sm:p-4 bg-green-50 dark:bg-green-950/30">
                        <h4 className="font-semibold text-green-700 dark:text-green-300 text-sm sm:text-base">Easy Questions</h4>
                        <p className="text-xl sm:text-2xl font-bold text-green-600">18%</p>
                        <p className="text-xs sm:text-sm text-muted-foreground">Decreasing trend</p>
                      </Card>
                      <Card className="p-3 sm:p-4 bg-blue-50 dark:bg-blue-950/30">
                        <h4 className="font-semibold text-blue-700 dark:text-blue-300 text-sm sm:text-base">Moderate Questions</h4>
                        <p className="text-xl sm:text-2xl font-bold text-blue-600">62%</p>
                        <p className="text-xs sm:text-sm text-muted-foreground">Increasing trend</p>
                      </Card>
                      <Card className="p-3 sm:p-4 bg-orange-50 dark:bg-orange-950/30">
                        <h4 className="font-semibold text-orange-700 dark:text-orange-300 text-sm sm:text-base">Hard Questions</h4>
                        <p className="text-xl sm:text-2xl font-bold text-orange-600">20%</p>
                        <p className="text-xs sm:text-sm text-muted-foreground">Stable trend</p>
                      </Card>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* 2025 Predictions */}
              <TabsContent value="predictions">
                <div className="space-y-4 sm:space-y-6">
                  <Card>
                    <CardHeader className="p-4 sm:p-6">
                      <CardTitle className="flex items-center gap-2 text-lg sm:text-xl flex-wrap">
                        🔮 Probability-Based Guidance for 2025 Exam
                      </CardTitle>
                      <CardDescription className="text-sm sm:text-base">
                        AI-powered predictions with confidence intervals
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3 sm:space-y-4 p-4 sm:p-6">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                        <div className="space-y-3">
                          <h4 className="font-semibold text-sm sm:text-base">High Probability Predictions (70%+)</h4>
                          <div className="space-y-2">
                            <div className="p-2 sm:p-3 bg-green-50 dark:bg-green-950/30 rounded-lg">
                              <div className="flex justify-between items-center gap-2">
                                <span className="text-sm sm:text-base flex-1">Polity weightage increase</span>
                                <Badge className="bg-green-100 text-green-700 text-xs">72%</Badge>
                              </div>
                            </div>
                            <div className="p-2 sm:p-3 bg-green-50 dark:bg-green-950/30 rounded-lg">
                              <div className="flex justify-between items-center gap-2">
                                <span className="text-sm sm:text-base flex-1">Environment questions decrease</span>
                                <Badge className="bg-green-100 text-green-700 text-xs">75%</Badge>
                              </div>
                            </div>
                            <div className="p-2 sm:p-3 bg-green-50 dark:bg-green-950/30 rounded-lg">
                              <div className="flex justify-between items-center gap-2">
                                <span className="text-sm sm:text-base flex-1">Current affairs integration</span>
                                <Badge className="bg-green-100 text-green-700 text-xs">85%</Badge>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <h4 className="font-semibold text-sm sm:text-base">Moderate Probability Predictions (60-70%)</h4>
                          <div className="space-y-2">
                            <div className="p-2 sm:p-3 bg-yellow-50 dark:bg-yellow-950/30 rounded-lg">
                              <div className="flex justify-between items-center gap-2">
                                <span className="text-sm sm:text-base flex-1">Economy focus shift</span>
                                <Badge className="bg-yellow-100 text-yellow-700 text-xs">68%</Badge>
                              </div>
                            </div>
                            <div className="p-2 sm:p-3 bg-yellow-50 dark:bg-yellow-950/30 rounded-lg">
                              <div className="flex justify-between items-center gap-2">
                                <span className="text-sm sm:text-base flex-1">Geography stability</span>
                                <Badge className="bg-yellow-100 text-yellow-700 text-xs">65%</Badge>
                              </div>
                            </div>
                            <div className="p-2 sm:p-3 bg-yellow-50 dark:bg-yellow-950/30 rounded-lg">
                              <div className="flex justify-between items-center gap-2">
                                <span className="text-sm sm:text-base flex-1">Application-based increase</span>
                                <Badge className="bg-yellow-100 text-yellow-700 text-xs">65%</Badge>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="p-4 sm:p-6">
                      <CardTitle className="text-lg sm:text-xl">Strategic Recommendations</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 sm:p-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
                        <div className="p-3 sm:p-4 border rounded-lg">
                          <h4 className="font-semibold mb-2 text-sm sm:text-base">📚 Study Priority</h4>
                          <ol className="text-xs sm:text-sm space-y-1">
                            <li>1. Constitutional Law & Governance</li>
                            <li>2. Economic Survey & Budgets</li>
                            <li>3. Current Affairs (monthly)</li>
                            <li>4. Geography fundamentals</li>
                          </ol>
                        </div>
                        <div className="p-3 sm:p-4 border rounded-lg">
                          <h4 className="font-semibold mb-2 text-sm sm:text-base">🎯 Focus Areas</h4>
                          <ul className="text-xs sm:text-sm space-y-1">
                            <li>• Amendment procedures</li>
                            <li>• Digital economy trends</li>
                            <li>• Climate change policies</li>
                            <li>• Social sector schemes</li>
                          </ul>
                        </div>
                        <div className="p-3 sm:p-4 border rounded-lg sm:col-span-2 lg:col-span-1">
                          <h4 className="font-semibold mb-2 text-sm sm:text-base">⚡ Quick Wins</h4>
                          <ul className="text-xs sm:text-sm space-y-1">
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
          </div>
        </>
      )}
      </div>
    </div>
  );
};

export default UPSCPredictor;