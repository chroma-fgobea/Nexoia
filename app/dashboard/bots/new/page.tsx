'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Bot, FileText, ChevronLeft } from "lucide-react"

export default function NewBotPage() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [selectedManual, setSelectedManual] = useState<string | null>(null)
  
  // Datos de ejemplo para manuales
  const manuals = [
    { id: "1", name: "Manual de Usuario v1.2", pages: 45 },
    { id: "2", name: "Preguntas Frecuentes", pages: 23 },
    { id: "3", name: "Documentación Técnica", pages: 128 },
    { id: "4", name: "Guía de Instalación", pages: 12 },
  ]

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulamos envío de datos
    const formData = new FormData(e.currentTarget)
    const name = formData.get('name') as string
    
    // En un caso real, aquí enviaríamos los datos al servidor
    console.log("Creando bot:", { name, manualId: selectedManual })
    
    // Simulamos un pequeño retraso
    setTimeout(() => {
      // Redirigimos al usuario a la lista de bots
      router.push('/dashboard/bots')
    }, 1000)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center">
        <Link 
          href="/dashboard/bots"
          className="mr-4 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ChevronLeft className="h-5 w-5" />
        </Link>
        <h1 className="text-2xl font-bold">Crear Nuevo Bot</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Formulario */}
        <div className="bg-card border border-border rounded-lg p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                Nombre del Bot
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full px-3 py-2 border border-input bg-background rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Ej: Asistente de Soporte Técnico"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">
                Manual
              </label>
              <p className="text-sm text-muted-foreground mb-3">
                Selecciona un manual para conectar con tu bot
              </p>

              <div className="space-y-3">
                {manuals.map((manual) => (
                  <div 
                    key={manual.id}
                    className={`flex items-center p-3 border rounded-md cursor-pointer hover:border-primary transition-colors ${
                      selectedManual === manual.id 
                        ? 'border-primary bg-primary/5' 
                        : 'border-border'
                    }`}
                    onClick={() => setSelectedManual(manual.id)}
                  >
                    <div className="h-10 w-10 rounded-md bg-primary/20 text-primary flex items-center justify-center mr-3">
                      <FileText className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-medium">{manual.name}</h3>
                      <p className="text-xs text-muted-foreground">{manual.pages} páginas</p>
                    </div>
                    <div className={`h-4 w-4 rounded-full border ${
                      selectedManual === manual.id 
                        ? 'border-primary bg-primary' 
                        : 'border-muted'
                    }`} />
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 flex justify-end">
              <Link 
                href="/dashboard/bots"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 mr-2"
              >
                Cancelar
              </Link>
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                disabled={isSubmitting || !selectedManual}
              >
                {isSubmitting ? "Creando..." : "Crear Bot"}
              </button>
            </div>
          </form>
        </div>
        
        {/* Info */}
        <div className="bg-muted/30 border border-border rounded-lg p-6">
          <div className="h-12 w-12 rounded-full bg-primary/20 text-primary flex items-center justify-center mb-4">
            <Bot className="h-6 w-6" />
          </div>
          <h3 className="text-lg font-medium mb-2">¿Qué es un bot?</h3>
          <p className="text-muted-foreground mb-4">
            Un bot en Nexoia es un asistente virtual que responde preguntas basándose en la información contenida en un manual o documento que subas a la plataforma.
          </p>
          
          <h4 className="text-sm font-medium mb-2">Características</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start">
              <span className="h-5 w-5 text-primary mr-2">•</span>
              <span>Respuestas precisas extraídas directamente de tus documentos</span>
            </li>
            <li className="flex items-start">
              <span className="h-5 w-5 text-primary mr-2">•</span>
              <span>Interfaz de chat intuitiva que puedes compartir con tus usuarios</span>
            </li>
            <li className="flex items-start">
              <span className="h-5 w-5 text-primary mr-2">•</span>
              <span>Aprende continuamente de las interacciones para mejorar con el tiempo</span>
            </li>
            <li className="flex items-start">
              <span className="h-5 w-5 text-primary mr-2">•</span>
              <span>Disponible 24/7 para responder consultas sin demora</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}