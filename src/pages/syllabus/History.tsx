import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Clock, Users, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function History() {
  return (
    <div className="space-y-4 md:space-y-6 px-1 sm:px-2 md:px-0">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <Button asChild variant="ghost" size="sm">
          <Link to="/" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Dashboard
          </Link>
        </Button>
      </div>

      {/* Page Title */}
      <div className="text-center mb-6">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">Indian History</h1>
        <p className="text-muted-foreground text-sm md:text-base">
          Comprehensive study materials for UPSC General Studies Paper 1
        </p>
      </div>

      {/* Topics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        <Card className="learning-card group cursor-pointer hover:shadow-lg transition-all duration-200">
          <CardHeader className="pb-3 p-4 md:p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                <BookOpen className="h-4 w-4 md:h-5 md:w-5" />
              </div>
            </div>
            <CardTitle className="text-base md:text-lg font-semibold">Ancient India</CardTitle>
            <CardDescription className="text-sm">
              Indus Valley Civilization, Vedic Period, Mauryan Empire
            </CardDescription>
          </CardHeader>
          <CardContent className="p-4 md:p-6 pt-0">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Clock className="h-3 w-3" />
              <span>15 lessons</span>
              <Users className="h-3 w-3 ml-2" />
              <span>Beginner</span>
            </div>
          </CardContent>
        </Card>

        <Card className="learning-card group cursor-pointer hover:shadow-lg transition-all duration-200">
          <CardHeader className="pb-3 p-4 md:p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-lg bg-gradient-to-r from-green-500 to-green-600 text-white">
                <BookOpen className="h-4 w-4 md:h-5 md:w-5" />
              </div>
            </div>
            <CardTitle className="text-base md:text-lg font-semibold">Medieval India</CardTitle>
            <CardDescription className="text-sm">
              Delhi Sultanate, Mughal Empire, Regional Kingdoms
            </CardDescription>
          </CardHeader>
          <CardContent className="p-4 md:p-6 pt-0">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Clock className="h-3 w-3" />
              <span>12 lessons</span>
              <Users className="h-3 w-3 ml-2" />
              <span>Intermediate</span>
            </div>
          </CardContent>
        </Card>

        <Card className="learning-card group cursor-pointer hover:shadow-lg transition-all duration-200">
          <CardHeader className="pb-3 p-4 md:p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500 to-purple-600 text-white">
                <BookOpen className="h-4 w-4 md:h-5 md:w-5" />
              </div>
            </div>
            <CardTitle className="text-base md:text-lg font-semibold">Modern India</CardTitle>
            <CardDescription className="text-sm">
              British Rule, Freedom Movement, Independence & Partition
            </CardDescription>
          </CardHeader>
          <CardContent className="p-4 md:p-6 pt-0">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Clock className="h-3 w-3" />
              <span>20 lessons</span>
              <Users className="h-3 w-3 ml-2" />
              <span>Advanced</span>
            </div>
          </CardContent>
        </Card>

        <Card className="learning-card group cursor-pointer hover:shadow-lg transition-all duration-200">
          <CardHeader className="pb-3 p-4 md:p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 text-white">
                <BookOpen className="h-4 w-4 md:h-5 md:w-5" />
              </div>
            </div>
            <CardTitle className="text-base md:text-lg font-semibold">Art & Architecture</CardTitle>
            <CardDescription className="text-sm">
              Temple Architecture, Sculpture, Paintings through Ages
            </CardDescription>
          </CardHeader>
          <CardContent className="p-4 md:p-6 pt-0">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Clock className="h-3 w-3" />
              <span>10 lessons</span>
              <Users className="h-3 w-3 ml-2" />
              <span>Intermediate</span>
            </div>
          </CardContent>
        </Card>

        <Card className="learning-card group cursor-pointer hover:shadow-lg transition-all duration-200">
          <CardHeader className="pb-3 p-4 md:p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-lg bg-gradient-to-r from-red-500 to-red-600 text-white">
                <BookOpen className="h-4 w-4 md:h-5 md:w-5" />
              </div>
            </div>
            <CardTitle className="text-base md:text-lg font-semibold">Social Movements</CardTitle>
            <CardDescription className="text-sm">
              Religious Reforms, Social Changes, Cultural Movements
            </CardDescription>
          </CardHeader>
          <CardContent className="p-4 md:p-6 pt-0">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Clock className="h-3 w-3" />
              <span>8 lessons</span>
              <Users className="h-3 w-3 ml-2" />
              <span>Beginner</span>
            </div>
          </CardContent>
        </Card>

        <Card className="learning-card group cursor-pointer hover:shadow-lg transition-all duration-200">
          <CardHeader className="pb-3 p-4 md:p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-lg bg-gradient-to-r from-teal-500 to-teal-600 text-white">
                <BookOpen className="h-4 w-4 md:h-5 md:w-5" />
              </div>
            </div>
            <CardTitle className="text-base md:text-lg font-semibold">Post Independence</CardTitle>
            <CardDescription className="text-sm">
              Integration of States, Political Developments, Reorganization
            </CardDescription>
          </CardHeader>
          <CardContent className="p-4 md:p-6 pt-0">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Clock className="h-3 w-3" />
              <span>6 lessons</span>
              <Users className="h-3 w-3 ml-2" />
              <span>Advanced</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}