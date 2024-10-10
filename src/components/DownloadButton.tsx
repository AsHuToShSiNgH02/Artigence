import { Download } from 'lucide-react'
import { Button } from "./ui/button"

export default function DownloadButton() {
  return (
    <div className="absolute bottom-4 right-4 z-10">
      <Button>
        <Download className="h-4 w-4 mr-2" />
        Download Report
      </Button>
    </div>
  )
}