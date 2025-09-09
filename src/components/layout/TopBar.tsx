import { Moon, Sun, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { useTheme } from "@/providers/ThemeProvider";

export function TopBar() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="h-16 border-b border-border bg-card/50 backdrop-blur-sm flex items-center justify-between px-2 sm:px-4 md:px-6">
      <div className="flex items-center gap-2 md:gap-4 min-w-0">
        <SidebarTrigger />
        <div className="flex items-center gap-2 min-w-0">
          <div className="w-7 h-7 md:w-8 md:h-8 gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
            <span className="text-primary-foreground font-bold text-xs md:text-sm">L</span>
          </div>
          <div className="min-w-0">
            <h1 className="text-lg md:text-xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent truncate">
              Lakshya AI
            </h1>
            <p className="text-xs text-muted-foreground hidden sm:block">From Aspirants to Achievers</p>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-1 md:gap-2">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="w-8 h-8 md:w-9 md:h-9"
        >
          <Sun className="h-3 w-3 md:h-4 md:w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-3 w-3 md:h-4 md:w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
        
        <Button variant="ghost" size="icon" className="w-8 h-8 md:w-9 md:h-9">
          <MessageSquare className="h-3 w-3 md:h-4 md:w-4" />
          <span className="sr-only">AI Tutor</span>
        </Button>
      </div>
    </header>
  );
}