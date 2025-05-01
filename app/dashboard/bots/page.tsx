import { Metadata } from "next"
import Link from "next/link"
import { Bot, Plus } from "lucide-react"

export const metadata: Metadata = {
  title: "Bots | Nexoia",
  description: "Gestiona tus bots de Nexoia"
}

// Ejemplo de datos para mostrar
const exampleBots = [
  {
    id: 1,
    name: "Asistente de Soporte Técnico",
    manualName: "Manual de Usuario v1.2",
    createdAt: "15/04/2025",
    status: "active",
  },
  {
    id: 2,
    name: "FAQ Bot",
    manualName: "Preguntas Frecuentes",
    createdAt: "03/04/2025",
    status: "active",
  },
  {
    id: 3,
    name: "Bot de Producto",
    manualName: "Documentación Técnica",
    createdAt: "28/03/2025",
    status: "inactive",
  },
]

export default function BotsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Bots</h1>
        <Link 
          href="/dashboard/bots/new"
          className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
        >
          <Plus className="h-4 w-4 mr-2" />
          Nuevo Bot
        </Link>
      </div>

      {/* Bots list */}
      <div className="bg-card border border-border rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="text-left text-xs font-medium text-muted-foreground px-4 py-3">Nombre</th>
                <th className="text-left text-xs font-medium text-muted-foreground px-4 py-3 hidden md:table-cell">Manual</th>
                <th className="text-left text-xs font-medium text-muted-foreground px-4 py-3 hidden md:table-cell">Fecha</th>
                <th className="text-left text-xs font-medium text-muted-foreground px-4 py-3">Estado</th>
                <th className="text-right text-xs font-medium text-muted-foreground px-4 py-3">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {exampleBots.map((bot) => (
                <tr key={bot.id} className="border-b border-border last:border-0">
                  <td className="px-4 py-3">
                    <div className="flex items-center">
                      <div className="h-8 w-8 rounded-full bg-primary/20 text-primary flex items-center justify-center mr-3">
                        <Bot className="h-4 w-4" />
                      </div>
                      <span className="font-medium">{bot.name}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-muted-foreground hidden md:table-cell">{bot.manualName}</td>
                  <td className="px-4 py-3 text-muted-foreground hidden md:table-cell">{bot.createdAt}</td>
                  <td className="px-4 py-3">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      bot.status === 'active' 
                        ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-500' 
                        : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-500'
                    }`}>
                      {bot.status === 'active' ? 'Activo' : 'Inactivo'}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right">
                    <div className="flex justify-end space-x-2">
                      <Link 
                        href={`/dashboard/bots/${bot.id}`}
                        className="inline-flex items-center justify-center rounded-md text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none border border-input bg-background hover:bg-accent hover:text-accent-foreground h-8 px-3"
                      >
                        Ver
                      </Link>
                      <Link 
                        href={`/dashboard/bots/${bot.id}/edit`}
                        className="inline-flex items-center justify-center rounded-md text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none border border-input bg-background hover:bg-accent hover:text-accent-foreground h-8 px-3"
                      >
                        Editar
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {exampleBots.length === 0 && (
        <div className="bg-card border border-border rounded-lg p-8 text-center">
          <div className="mx-auto h-12 w-12 rounded-full bg-primary/20 text-primary flex items-center justify-center mb-4">
            <Bot className="h-6 w-6" />
          </div>
          <h3 className="text-lg font-medium mb-1">No tienes bots</h3>
          <p className="text-muted-foreground mb-4">
            Comienza creando tu primer bot para conectarlo a un manual.
          </p>
          <Link 
            href="/dashboard/bots/new"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
          >
            <Plus className="h-4 w-4 mr-2" />
            Crear Bot
          </Link>
        </div>
      )}
    </div>
  )
}