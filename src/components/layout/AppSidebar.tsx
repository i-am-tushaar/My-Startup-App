import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  BookOpen,
  Newspaper,
  Brain,
  Upload,
  HelpCircle,
  Home,
  History,
  Globe,
  DollarSign,
  Users,
  ChevronDown,
  ChevronRight
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const mainNavItems = [
  { title: "Dashboard", url: "/", icon: Home },
  { title: "Current Affairs", url: "/current-affairs", icon: Newspaper },
  { title: "AI Tutor", url: "/ai-tutor", icon: Brain },
  { title: "My Notes AI", url: "/my-notes", icon: Upload },
  { title: "Daily Quiz", url: "/quiz", icon: HelpCircle },
];

const syllabusItems = [
  {
    title: "General Studies 1",
    items: [
      { title: "Indian History", url: "/syllabus/gs1/history", icon: History },
      { title: "Geography", url: "/syllabus/gs1/geography", icon: Globe },
      { title: "Art & Culture", url: "/syllabus/gs1/culture", icon: BookOpen },
    ]
  },
  {
    title: "General Studies 2", 
    items: [
      { title: "Polity & Governance", url: "/syllabus/gs2/polity", icon: Users },
      { title: "Social Justice", url: "/syllabus/gs2/social-justice", icon: Users },
      { title: "International Relations", url: "/syllabus/gs2/international", icon: Globe },
    ]
  },
  {
    title: "General Studies 3",
    items: [
      { title: "Economy", url: "/syllabus/gs3/economy", icon: DollarSign },
      { title: "Science & Technology", url: "/syllabus/gs3/science", icon: BookOpen },
      { title: "Environment", url: "/syllabus/gs3/environment", icon: Globe },
    ]
  },
  {
    title: "General Studies 4",
    items: [
      { title: "Ethics & Integrity", url: "/syllabus/gs4/ethics", icon: Users },
      { title: "Case Studies", url: "/syllabus/gs4/case-studies", icon: BookOpen },
    ]
  }
];

export function AppSidebar() {
  const location = useLocation();
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    "General Studies 1": true,
    "General Studies 2": false,
    "General Studies 3": false,
    "General Studies 4": false,
  });

  const isActive = (path: string) => location.pathname === path;
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive 
      ? "bg-primary text-primary-foreground hover:bg-primary/90" 
      : "hover:bg-accent hover:text-accent-foreground";

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <Sidebar className="w-72" collapsible="icon" variant="sidebar">
      <SidebarContent className="p-2">
        {/* Main Navigation */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-semibold text-muted-foreground mb-2">
            Main Menu
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainNavItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} className={getNavCls}>
                      <div className="flex items-center gap-2">
                        <item.icon className="h-4 w-4" />
                        <span className="font-medium">{item.title}</span>
                      </div>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* UPSC Syllabus */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-semibold text-muted-foreground mb-2">
            UPSC Syllabus
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {syllabusItems.map((section) => (
                <SidebarMenuItem key={section.title}>
                  <Collapsible
                    open={openSections[section.title]}
                    onOpenChange={() => toggleSection(section.title)}
                  >
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton className="w-full justify-between hover:bg-accent hover:text-accent-foreground">
                        <div className="flex items-center gap-2">
                          <BookOpen className="h-4 w-4" />
                          <span className="font-medium">{section.title}</span>
                        </div>
                        <div className="flex items-center">
                          {openSections[section.title] ? 
                            <ChevronDown className="h-3 w-3" /> : 
                            <ChevronRight className="h-3 w-3" />
                          }
                        </div>
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="ml-4 mt-1 space-y-1">
                      {section.items.map((item) => (
                        <SidebarMenuButton key={item.title} asChild size="sm">
                          <NavLink to={item.url} className={getNavCls}>
                            <item.icon className="h-3 w-3" />
                            <span className="text-sm">{item.title}</span>
                          </NavLink>
                        </SidebarMenuButton>
                      ))}
                    </CollapsibleContent>
                  </Collapsible>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}