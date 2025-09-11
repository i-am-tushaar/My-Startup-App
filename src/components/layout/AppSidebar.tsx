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
  ChevronRight,
  Info,
  PenTool
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
  { title: "Complete Syllabus", url: "/syllabus", icon: BookOpen },
  { title: "Answer Writing", url: "/answer-writing", icon: PenTool },
  { title: "Current Affairs", url: "/current-affairs", icon: Newspaper },
  { title: "AI Tutor", url: "/ai-tutor", icon: Brain },
  { title: "My Notes AI", url: "/my-notes", icon: Upload },
  { title: "Daily Quiz", url: "/quiz", icon: HelpCircle },
  { title: "About the App Builder", url: "/about", icon: Info },
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
      : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground";

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <Sidebar className="w-48 sm:w-60 md:w-72" collapsible="icon" variant="sidebar">
      <SidebarContent className="p-1 sm:p-2">
        {/* Main Navigation */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-semibold text-sidebar-foreground/80 mb-2 px-1 sm:px-2">
            Main Menu
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
{mainNavItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} className={({ isActive }) => 
                      `flex items-center gap-2 min-w-0 p-2 rounded-md cursor-pointer transition-all duration-200 ${
                        isActive 
                          ? "bg-primary text-primary-foreground hover:bg-primary/90" 
                          : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                      }`
                    }>
                      <div className="flex items-center gap-2 min-w-0">
                        <item.icon className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                        <span className="font-medium text-xs sm:text-sm truncate">{item.title}</span>
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
          <SidebarGroupLabel className="text-xs font-semibold text-sidebar-foreground/80 mb-2 px-1 sm:px-2">
            UPSC Syllabus
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {syllabusItems.map((section) => (
                <SidebarMenuItem key={section.title}>
                  <Collapsible
                    open={openSections[section.title]}
                    onOpenChange={() => toggleSection(section.title)}
                  >
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton className="w-full justify-between text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground cursor-pointer transition-all duration-200">
                        <div className="flex items-center gap-2 min-w-0">
                          <BookOpen className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                          <span className="font-medium text-xs sm:text-sm truncate">{section.title}</span>
                        </div>
                        <div className="flex items-center flex-shrink-0">
                          {openSections[section.title] ? 
                            <ChevronDown className="h-2 w-2 sm:h-3 sm:w-3 transition-transform duration-200" /> : 
                            <ChevronRight className="h-2 w-2 sm:h-3 sm:w-3 transition-transform duration-200" />
                          }
                        </div>
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="ml-2 sm:ml-4 mt-1 space-y-1">
                      {section.items.map((item) => (
                        <SidebarMenuButton key={item.title} asChild size="sm">
                          <NavLink to={item.url} className={({ isActive }) => 
                            `flex items-center gap-1 sm:gap-2 min-w-0 p-2 rounded-md cursor-pointer transition-all duration-200 ${
                              isActive 
                                ? "bg-primary text-primary-foreground hover:bg-primary/90" 
                                : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                            }`
                          }>
                            <div className="flex items-center gap-1 sm:gap-2 min-w-0">
                              <item.icon className="h-2 w-2 sm:h-3 sm:w-3 flex-shrink-0" />
                              <span className="text-xs sm:text-sm truncate">{item.title}</span>
                            </div>
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