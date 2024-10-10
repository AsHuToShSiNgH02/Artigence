import { ZoomIn, ZoomOut } from 'lucide-react'
import { Button } from "./ui/button"

interface ZoomControlsProps {
  handleZoom: (direction: 'in' | 'out') => void
  zoomLevel: number
}

export default function ZoomControls({ handleZoom, zoomLevel }: ZoomControlsProps) {
  return (
    <div className="absolute top-4 right-72 z-10 flex items-center space-x-2">
      <Button size="icon" onClick={() => handleZoom('in')} aria-label="Zoom in">
        <ZoomIn className="h-5 w-5" />
      </Button>
      <Button size="icon" onClick={() => handleZoom('out')} aria-label="Zoom out">
        <ZoomOut className="h-5 w-5" />
      </Button>
      <Button size="icon" className='w-20' onClick={() => handleZoom('out')} aria-label="Zoom out">
        <span className="text-sm  font-bold">Zoom: {zoomLevel.toFixed(1)}x</span>
      </Button>
      
    </div>
  )
}