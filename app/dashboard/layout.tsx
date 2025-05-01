'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useAuth } from '../lib/auth-context'
import { MainNav } from '../components/layout/main-nav'
import { Footer } from '../components/layout/footer'
import { 
  Bot, 
  FileText, 
  Home, 
  Loader2, 
  LogOut, 
  Menu, 
  Settings, 
  MessagesSquare, 
  Link as LinkIcon
} from 'lucide-react'

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const router = useRouter()
  const { user, isLoading, signOut } = useAuth()

  // Redirect to auth page if not logged in
  useEffect(() => {
    async function getUser() {
      if (!isLoading && !user) {
        router.push('/auth')
      }
    }
    getUser()
  }, [user, isLoading, router])

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    )
  }

  if (!user) {
    return null
  }

  return (
    <div className="flex flex-col min-h-screen">
      <MainNav />
      <div className="flex-1 flex flex-col md:flex-row">
        {/* Sidebar */}
        <aside className="w-full md:w-64 border-r bg-card md:flex flex-col hidden">
          <div className="p-4 border-b">
            <h2 className="font-medium">Dashboard</h2>
          </div>
          <nav className="flex-1 p-4 space-y-1">
            <Link 
              href="/dashboard" 
              className="flex items-center gap-2 px-3 py-2 text-sm rounded-md hover:bg-accent transition-colors"
            >
              <Home className="h-4 w-4" />
              <span>Home</span>
            </Link>
            <Link 
              href="/dashboard/bots" 
              className="flex items-center gap-2 px-3 py-2 text-sm rounded-md hover:bg-accent transition-colors"
            >
              <Bot className="h-4 w-4" />
              <span>Mis Bots</span>
            </Link>
            <Link 
              href="/dashboard/manuals" 
              className="flex items-center gap-2 px-3 py-2 text-sm rounded-md hover:bg-accent transition-colors"
            >
              <FileText className="h-4 w-4" />
              <span>Manuales</span>
            </Link>
            <Link 
              href="/dashboard/links" 
              className="flex items-center gap-2 px-3 py-2 text-sm rounded-md hover:bg-accent transition-colors"
            >
              <LinkIcon className="h-4 w-4" />
              <span>Links de prueba</span>
            </Link>
            <Link 
              href="/dashboard/messages" 
              className="flex items-center gap-2 px-3 py-2 text-sm rounded-md hover:bg-accent transition-colors"
            >
              <MessagesSquare className="h-4 w-4" />
              <span>Mensajes</span>
            </Link>
            <Link 
              href="/dashboard/settings" 
              className="flex items-center gap-2 px-3 py-2 text-sm rounded-md hover:bg-accent transition-colors"
            >
              <Settings className="h-4 w-4" />
              <span>Configuración</span>
            </Link>
          </nav>
          <div className="p-4 border-t">
            <button 
              onClick={() => signOut()}
              className="flex w-full items-center gap-2 px-3 py-2 text-sm rounded-md hover:bg-accent transition-colors text-muted-foreground hover:text-foreground"
            >
              <LogOut className="h-4 w-4" />
              <span>Cerrar sesión</span>
            </button>
          </div>
        </aside>
        
        {/* Mobile Menu */}
        <div className="border-b p-4 md:hidden flex items-center">
          <button className="flex items-center gap-2 text-sm">
            <Menu className="h-5 w-5" />
            <span>Menú</span>
          </button>
        </div>
        
        {/* Main Content */}
        <main className="flex-1 p-4 md:p-8 overflow-auto">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  )
}