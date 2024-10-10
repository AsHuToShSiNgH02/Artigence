import { ArrowLeft, Sun, Moon, Maximize2, Minimize2 } from 'lucide-react'
import { Button } from "./ui/button"
import { Switch } from "./ui/switch"

interface HeaderProps {
  isDarkMode: boolean
  toggleDarkMode: () => void
  isFullscreen: boolean
  toggleFullscreen: () => void
}

export default function Header({ isDarkMode, toggleDarkMode, isFullscreen, toggleFullscreen }: HeaderProps) {
  return (
    <header className="flex justify-between items-center p-4 bg-muted">
      <Button variant="ghost" size="icon">
        <ArrowLeft className="h-6 w-6" />
      </Button>
      <span className="text-lg font-bold">Mon Oct 07 2024 16:39:07</span>
      <div className="flex items-center space-x-2">
        <Sun className="h-4 w-4" />
        <Switch checked={isDarkMode} onCheckedChange={toggleDarkMode} />
        <Moon className="h-4 w-4" />
        <Button variant="outline" size="icon" onClick={toggleFullscreen}>
          {isFullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
        </Button>
      </div>
    </header>
  )
}