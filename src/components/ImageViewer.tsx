import image from './../assets/wsi.png'
interface ImageViewerProps {
  pointerPosition: { x: number; y: number }
  zoomLevel: number
}

export default function ImageViewer({ pointerPosition, zoomLevel }: ImageViewerProps) {
  const mainImageStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: `${100 * zoomLevel}%`,
    backgroundPosition: `${pointerPosition.x}% ${pointerPosition.y}%`,
    transition: 'all 0.3s ease-out',
  }

  return (
    <div 
      className="absolute inset-0 bg-cover bg-center"
      style={mainImageStyle}
    />
  )
}