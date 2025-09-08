import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, ExternalLink, Star, Clock, HelpCircle } from "lucide-react";

const currentAffairsData = [
  {
    id: 1,
    title: "India's Digital Payment Revolution: UPI Transactions Surge",
    summary: "Unified Payments Interface (UPI) transactions in India have crossed 10 billion monthly transactions, marking a significant milestone in digital financial inclusion.",
    relevance: "Economy, Financial Inclusion, Technology",
    importance: "High",
    date: "2024-01-15",
    tags: ["Economy", "Technology", "GS-3"],
    keyPoints: [
      "UPI processes over ₹15 lakh crore worth of transactions monthly",
      "Contribution to financial inclusion in rural areas",
      "Impact on traditional banking systems",
      "Government's Digital India initiative success"
    ]
  },
  {
    id: 2,
    title: "Climate Action: India's Renewable Energy Milestone",
    summary: "India achieves 175 GW renewable energy capacity ahead of schedule, reinforcing its commitment to sustainable development and climate goals.",
    relevance: "Environment, Energy Policy, International Commitments",
    importance: "High",
    date: "2024-01-14",
    tags: ["Environment", "Policy", "GS-3"],
    keyPoints: [
      "Solar energy contribution: 70% of renewable capacity",
      "Impact on carbon emission reduction",
      "Job creation in green energy sector",
      "India's role in global climate leadership"
    ]
  },
  {
    id: 3,
    title: "Supreme Court Verdict on Electoral Bonds",
    summary: "The Supreme Court's decision on electoral bonds transparency brings significant changes to political funding mechanisms in India.",
    relevance: "Polity, Governance, Electoral Reforms",
    importance: "Medium",
    date: "2024-01-13",
    tags: ["Polity", "Governance", "GS-2"],
    keyPoints: [
      "Transparency in political funding",
      "Impact on electoral process integrity",
      "Role of Election Commission",
      "Democratic accountability measures"
    ]
  }
];

export default function CurrentAffairs() {
  const getImportanceBadgeVariant = (importance: string) => {
    switch (importance) {
      case "High": return "destructive";
      case "Medium": return "default";
      case "Low": return "secondary";
      default: return "secondary";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="section-title">
            <Calendar className="h-8 w-8 text-primary" />
            Current Affairs Hub
          </h1>
          <p className="text-muted-foreground">
            Stay updated with UPSC-relevant news and analysis
          </p>
        </div>
        <Button variant="outline" className="gap-2">
          <ExternalLink className="h-4 w-4" />
          View All Sources
        </Button>
      </div>

      {/* Current Affairs Cards */}
      <div className="grid gap-6">
        {currentAffairsData.map((article) => (
          <Card key={article.id} className="learning-card">
            <CardHeader>
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant={getImportanceBadgeVariant(article.importance)}>
                      {article.importance} Priority
                    </Badge>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {new Date(article.date).toLocaleDateString()}
                    </div>
                  </div>
                  <CardTitle className="text-xl mb-2">{article.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {article.summary}
                  </CardDescription>
                </div>
                <Button variant="ghost" size="icon" className="shrink-0">
                  <Star className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            
            <CardContent>
              <div className="space-y-4">
                {/* UPSC Relevance */}
                <div className="p-3 bg-primary/5 rounded-lg border border-primary/10">
                  <p className="text-sm font-medium text-primary mb-1">UPSC Relevance:</p>
                  <p className="text-sm text-muted-foreground">{article.relevance}</p>
                </div>

                {/* Key Points */}
                <div>
                  <p className="text-sm font-medium mb-2">Key Points:</p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    {article.keyPoints.map((point, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="w-1 h-1 bg-primary rounded-full mt-2 shrink-0"></span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tags and Actions */}
                <div className="flex items-center justify-between pt-2">
                  <div className="flex gap-1 flex-wrap">
                    {article.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="gap-1">
                      <HelpCircle className="h-3 w-3" />
                      Quiz
                    </Button>
                    <Button variant="ghost" size="sm">
                      Read More
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center">
        <Button variant="outline" className="px-8">
          Load More Articles
        </Button>
      </div>
    </div>
  );
}