import { Metadata } from "next"
import Link from "next/link"
import { FileText, Plus, Bot, FileCheck } from "lucide-react"

export const metadata: Metadata = {
  title: "Manuales | Nexoia",
  description: "Gestiona tus manuales en Nexoia"
}

// Ejemplo de datos para mostrar
const exampleManuals = [
  {
    id: 1,
    name: "Manual de Usuario v1.2",
    fileType: "PDF",
    pages: 45,
    createdAt: "15/04/2025",
    bots: 2,
  },
  {
    id: 2,
    name: "Preguntas Frecuentes",
    fileType: "DOCX",
    pages: 23,
    createdAt: "03/04/2025",
    bots: 1,
  },
  {
    id: 3,
    name: "Documentación Técnica",
    fileType: "PDF",
    pages: 128,
    createdAt: "28/03/2025",
    bots: 1,
  },
  {
    id: 4,
    name: "Guía de Instalación",
    fileType: "PDF",
    pages: 12,
    createdAt: "20/03/2025",
    bots: 0,
  },
]

export default function ManualsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Manuales</h1>
        <Link 
          href="/dashboard/manuals/upload"
          className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
        >
          <Plus className="h-4 w-4 mr-2" />
          Subir Manual
        </Link>
      </div>

      {/* Manuals grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {exampleManuals.map((manual) => (
          <div 
            key={manual.id} 
            className="bg-card border border-border rounded-lg overflow-hidden flex flex-col"
          >
            <div className="p-4 flex items-start">
              <div className="h-10 w-10 rounded-md bg-primary/20 text-primary flex items-center justify-center mr-3 flex-shrink-0">
                <FileText className="h-5 w-5" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-base truncate">{manual.name}</h3>
                <p className="text-xs text-muted-foreground mt-1">
                  {manual.fileType} • {manual.pages} páginas • {manual.createdAt}
                </p>
              </div>
            </div>
            
            <div className="px-4 py-3 bg-muted/30 border-t border-border mt-auto flex items-center justify-between">
              <div className="flex items-center text-sm text-muted-foreground">
                <Bot className="h-4 w-4 mr-1.5" />
                <span>{manual.bots} {manual.bots === 1 ? 'bot' : 'bots'}</span>
              </div>
              <div className="flex space-x-2">
                <Link 
                  href={`/dashboard/manuals/${manual.id}`}
                  className="inline-flex items-center justify-center rounded-md text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none border border-input bg-background hover:bg-accent hover:text-accent-foreground h-8 px-3"
                >
                  Ver
                </Link>
                {manual.bots === 0 && (
                  <Link 
                    href={`/dashboard/bots/new?manual=${manual.id}`}
                    className="inline-flex items-center justify-center rounded-md text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none border border-input bg-background hover:bg-accent hover:text-accent-foreground h-8 px-3"
                  >
                    <Bot className="h-3.5 w-3.5 mr-1.5" />
                    Crear Bot
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {exampleManuals.length === 0 && (
        <div className="bg-card border border-border rounded-lg p-8 text-center">
          <div className="mx-auto h-12 w-12 rounded-full bg-primary/20 text-primary flex items-center justify-center mb-4">
            <FileCheck className="h-6 w-6" />
          </div>
          <h3 className="text-lg font-medium mb-1">No tienes manuales</h3>
          <p className="text-muted-foreground mb-4">
            Comienza subiendo tu primer manual para crear un bot.
          </p>
          <Link 
            href="/dashboard/manuals/upload"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
          >
            <Plus className="h-4 w-4 mr-2" />
            Subir Manual
          </Link>
        </div>
      )}
    </div>
  )
}