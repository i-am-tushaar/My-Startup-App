import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AITopicChat } from "@/components/ui/AITopicChat";
import { BookOpen, Calendar, Users, MapPin, Clock, Award, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function History() {
  return (
    <div className="space-y-4 sm:space-y-6 p-1 sm:p-2 md:p-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Button asChild variant="ghost" size="sm">
            <Link to="/syllabus" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Syllabus
            </Link>
          </Button>
        </div>
        <div className="flex gap-2">
          <Button size="sm">
            <BookOpen className="h-4 w-4 mr-2" />
            Notes
          </Button>
          <Button variant="outline" size="sm">
            <Calendar className="h-4 w-4 mr-2" />
            Timeline
          </Button>
        </div>
      </div>

      <div>
        <h1 className="text-2xl sm:text-3xl font-bold">Indian History</h1>
        <p className="text-muted-foreground">Ancient, Medieval, and Modern Indian History for UPSC</p>
      </div>

      <Tabs defaultValue="content" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="content">Content</TabsTrigger>
          <TabsTrigger value="ai-tutor">AI Tutor</TabsTrigger>
          <TabsTrigger value="practice">Practice</TabsTrigger>
        </TabsList>

        <TabsContent value="content" className="space-y-4">
          {/* Ancient History */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                Ancient Indian History (3000 BCE - 1200 CE)
              </CardTitle>
              <CardDescription>
                Indus Valley Civilization to the end of the Gupta Empire
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm">Key Civilizations</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-2 rounded bg-muted/20">
                      <span className="text-sm">Indus Valley Civilization</span>
                      <Badge variant="outline" className="text-xs">3300-1300 BCE</Badge>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded bg-muted/20">
                      <span className="text-sm">Vedic Period</span>
                      <Badge variant="outline" className="text-xs">1500-500 BCE</Badge>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded bg-muted/20">
                      <span className="text-sm">Mauryan Empire</span>
                      <Badge variant="outline" className="text-xs">322-185 BCE</Badge>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded bg-muted/20">
                      <span className="text-sm">Gupta Empire</span>
                      <Badge variant="outline" className="text-xs">320-550 CE</Badge>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm">Important Topics</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="text-xs">Harappan Culture</Badge>
                    <Badge variant="secondary" className="text-xs">Vedic Literature</Badge>
                    <Badge variant="secondary" className="text-xs">Buddhism & Jainism</Badge>
                    <Badge variant="secondary" className="text-xs">Ashoka's Edicts</Badge>
                    <Badge variant="secondary" className="text-xs">Golden Age</Badge>
                    <Badge variant="secondary" className="text-xs">Art & Architecture</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Medieval History */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                Medieval Indian History (1200 - 1707 CE)
              </CardTitle>
              <CardDescription>
                Delhi Sultanate to the Mughal Empire
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm">Major Dynasties</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-2 rounded bg-muted/20">
                      <span className="text-sm">Delhi Sultanate</span>
                      <Badge variant="outline" className="text-xs">1206-1526</Badge>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded bg-muted/20">
                      <span className="text-sm">Vijayanagara Empire</span>
                      <Badge variant="outline" className="text-xs">1336-1646</Badge>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded bg-muted/20">
                      <span className="text-sm">Mughal Empire</span>
                      <Badge variant="outline" className="text-xs">1526-1707</Badge>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded bg-muted/20">
                      <span className="text-sm">Maratha Empire</span>
                      <Badge variant="outline" className="text-xs">1674-1818</Badge>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm">Key Concepts</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="text-xs">Islamic Architecture</Badge>
                    <Badge variant="secondary" className="text-xs">Sufi Movement</Badge>
                    <Badge variant="secondary" className="text-xs">Bhakti Movement</Badge>
                    <Badge variant="secondary" className="text-xs">Administrative Systems</Badge>
                    <Badge variant="secondary" className="text-xs">Trade & Commerce</Badge>
                    <Badge variant="secondary" className="text-xs">Cultural Synthesis</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Modern History */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                Modern Indian History (1707 - 1947)
              </CardTitle>
              <CardDescription>
                British Colonial Period and Independence Movement
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm">Major Events</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-2 rounded bg-muted/20">
                      <span className="text-sm">Battle of Plassey</span>
                      <Badge variant="outline" className="text-xs">1757</Badge>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded bg-muted/20">
                      <span className="text-sm">Sepoy Mutiny</span>
                      <Badge variant="outline" className="text-xs">1857</Badge>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded bg-muted/20">
                      <span className="text-sm">Non-Cooperation Movement</span>
                      <Badge variant="outline" className="text-xs">1920-22</Badge>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded bg-muted/20">
                      <span className="text-sm">Quit India Movement</span>
                      <Badge variant="outline" className="text-xs">1942</Badge>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm">Freedom Struggle</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="text-xs">Gandhi's Methods</Badge>
                    <Badge variant="secondary" className="text-xs">Revolutionary Movement</Badge>
                    <Badge variant="secondary" className="text-xs">Constitutional Reforms</Badge>
                    <Badge variant="secondary" className="text-xs">Partition</Badge>
                    <Badge variant="secondary" className="text-xs">Social Reform</Badge>
                    <Badge variant="secondary" className="text-xs">Nationalism</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="ai-tutor" className="space-y-4">
          <AITopicChat topic="Indian History" subtopic="Ancient, Medieval & Modern" />
        </TabsContent>

        <TabsContent value="practice" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Practice Questions</CardTitle>
              <CardDescription>Test your knowledge with UPSC-style questions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 border rounded-lg hover:bg-muted/20 cursor-pointer transition-colors">
                  <p className="text-sm font-medium mb-2">1. Discuss the significance of the Gupta period in Indian history. (15 marks)</p>
                  <div className="flex gap-2">
                    <Badge variant="outline" className="text-xs">15 marks</Badge>
                    <Badge variant="outline" className="text-xs">20 minutes</Badge>
                    <Badge variant="secondary" className="text-xs">Ancient History</Badge>
                  </div>
                </div>
                <div className="p-4 border rounded-lg hover:bg-muted/20 cursor-pointer transition-colors">
                  <p className="text-sm font-medium mb-2">2. Analyze the impact of the Bhakti movement on Indian society. (15 marks)</p>
                  <div className="flex gap-2">
                    <Badge variant="outline" className="text-xs">15 marks</Badge>
                    <Badge variant="outline" className="text-xs">20 minutes</Badge>
                    <Badge variant="secondary" className="text-xs">Medieval History</Badge>
                  </div>
                </div>
                <div className="p-4 border rounded-lg hover:bg-muted/20 cursor-pointer transition-colors">
                  <p className="text-sm font-medium mb-2">3. Examine the role of the press in India's freedom struggle. (15 marks)</p>
                  <div className="flex gap-2">
                    <Badge variant="outline" className="text-xs">15 marks</Badge>
                    <Badge variant="outline" className="text-xs">20 minutes</Badge>
                    <Badge variant="secondary" className="text-xs">Modern History</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}