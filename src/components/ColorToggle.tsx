import { Sun, Moon } from "lucide-react";

interface ColorToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

const ColorToggle = ({ isDark, onToggle }: ColorToggleProps) => (
  <button
    onClick={onToggle}
    className="fixed top-4 right-4 z-50 w-9 h-9 rounded-full bg-card border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:scale-105 active:scale-95 transition-all duration-200"
    aria-label="Alternar cores"
  >
    {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
  </button>
);

export default ColorToggle;
