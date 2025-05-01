import { Metadata } from "next"
import Link from "next/link"
import { BookOpen, Bot, BarChart3 } from "lucide-react"

export const metadata: Metadata = {
  title: "Dashboard | Nexoia",
  description: "Panel de control de Nexoia"
}

export default function DashboardPage() {
  return (
    <div className="grid gap-6">
      {/* Welcome message */}
      <div className="bg-card border border-border rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-2">Bienvenido a Nexoia</h2>
        <p className="text-muted-foreground">
          Aquí puedes gestionar tus chatbots y los manuales conectados. Comienza creando un nuevo bot o sube un manual para empezar.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="text-muted-foreground text-sm font-medium mb-2">Total de bots</h3>
          <div className="flex items-center">
            <Bot className="h-5 w-5 text-primary mr-2" />
            <span className="text-2xl font-bold">3</span>
          </div>
        </div>
        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="text-muted-foreground text-sm font-medium mb-2">Manuales subidos</h3>
          <div className="flex items-center">
            <BookOpen className="h-5 w-5 text-primary mr-2" />
            <span className="text-2xl font-bold">7</span>
          </div>
        </div>
        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="text-muted-foreground text-sm font-medium mb-2">Consultas respondidas</h3>
          <div className="flex items-center">
            <BarChart3 className="h-5 w-5 text-primary mr-2" />
            <span className="text-2xl font-bold">342</span>
          </div>
        </div>
      </div>

      {/* Quick actions */}
      <div className="bg-card border border-border rounded-lg p-6">
        <h3 className="text-lg font-medium mb-4">Acciones rápidas</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link 
            href="/dashboard/bots/new"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
          >
            Crear nuevo bot
          </Link>
          <Link 
            href="/dashboard/manuals/upload"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full"
          >
            Subir un manual
          </Link>
        </div>
      </div>
    </div>
  )
}