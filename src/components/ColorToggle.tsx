import { Sun, Moon } from "lucide-react";

interface ColorToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

const ColorToggle = ({ isDark, onToggle }: ColorToggleProps) => (
  <div className="px-6 pb-6 flex justify-center">
    <button
      onClick={onToggle}
      className="w-10 h-10 rounded-full bg-card border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:scale-105 active:scale-95 transition-all duration-300"
      aria-label="Alternar cores"
    >
      {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
    </button>
  </div>
);

export default ColorToggle;
