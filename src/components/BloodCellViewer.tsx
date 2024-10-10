import React, { useState, useEffect, useCallback, useRef } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import ImageViewer from './ImageViewer'
import HubView from './HubView'
import ZoomControls from './ZoomControls'
import DownloadButton from './DownloadButton'

function debounce(func: Function, wait: number) {
  let timeout: NodeJS.Timeout
  return function executedFunction(...args: any[]) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

export default function BloodCellViewer() {
  const [zoomLevel, setZoomLevel] = useState(1)
  const [pointerPosition, setPointerPosition] = useState({ x: 50, y: 50 })
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const hubRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode)
  }, [isDarkMode])

  const handleZoom = (direction: 'in' | 'out') => {
    setZoomLevel(prev => direction === 'in' ? Math.min(prev + 0.1, 3) : Math.max(prev - 0.1, 0.5))
  }

  const handleHubMouseMove = useCallback(
    debounce((e: React.MouseEvent<HTMLDivElement>) => {
      if (hubRef.current) {
        const rect = hubRef.current.getBoundingClientRect()
        const x = ((e.clientX - rect.left) / rect.width) * 100
        const y = ((e.clientY - rect.top) / rect.height) * 100
        setPointerPosition({ x, y })
      }
    }, 5),
    []
  )

  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev)
  }

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen()
      setIsFullscreen(true)
    } else {
      document.exitFullscreen()
      setIsFullscreen(false)
    }
  }

  return (
    <div className={`flex flex-col h-screen bg-background text-foreground transition-colors duration-200 ${isDarkMode ? 'dark' : ''}`}>
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} isFullscreen={isFullscreen} toggleFullscreen={toggleFullscreen} />

      <main className="flex flex-1 overflow-hidden">
        <Sidebar />

        <div className="flex-1 relative">
          <ImageViewer pointerPosition={pointerPosition} zoomLevel={zoomLevel} />

          <div className="absolute top-4 right-4 z-10 flex flex-col space-y-4">
            <HubView
              hubRef={hubRef}
              pointerPosition={pointerPosition}
              zoomLevel={zoomLevel}
              onMouseMove={handleHubMouseMove}
            />
            
          </div>
          <ZoomControls handleZoom={handleZoom} zoomLevel={zoomLevel} />

          <DownloadButton />
        </div>
      </main>
    </div>
  )
}