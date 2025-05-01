'use client'

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import Link from "next/link"
import { UserCircle, BookOpen, Bot, BarChart3, LogOut, Menu } from "lucide-react"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const supabase = createClientComponentClient()
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    async function getUser() {
      setLoading(true)
      const { data: { session } } = await supabase.auth.getSession()
      
      if (!session) {
        router.push("/auth")
        return
      }
      
      setUser(session.user)
      setLoading(false)
    }
    
    getUser()
  }, [router, supabase.auth])

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.push("/")
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full"></div>
      </div>
    )
  }

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar - Desktop */}
      <aside className="w-64 border-r border-border bg-card hidden md:block">
        <div className="p-6">
          <Link href="/" className="text-xl font-bold">Nexoia</Link>
        </div>
        <nav className="space-y-1 px-3">
          <Link href="/dashboard" className="flex items-center px-3 py-2 text-sm font-medium rounded-md bg-primary/10 text-primary">
            <BarChart3 className="mr-3 h-5 w-5" />
            Dashboard
          </Link>
          <Link href="/dashboard/bots" className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-muted-foreground hover:bg-accent hover:text-foreground transition-colors">
            <Bot className="mr-3 h-5 w-5" />
            Bots
          </Link>
          <Link href="/dashboard/manuals" className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-muted-foreground hover:bg-accent hover:text-foreground transition-colors">
            <BookOpen className="mr-3 h-5 w-5" />
            Manuales
          </Link>
          <Link href="/dashboard/profile" className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-muted-foreground hover:bg-accent hover:text-foreground transition-colors">
            <UserCircle className="mr-3 h-5 w-5" />
            Perfil
          </Link>
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-card border-b border-border h-16 flex items-center justify-between px-4 md:px-6">
          <div className="flex items-center">
            <button 
              className="p-2 rounded-md md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </button>
            <h1 className="text-lg font-medium ml-2 md:ml-0">Dashboard</h1>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground hidden md:inline-block">
              {user?.email}
            </span>
            <button 
              onClick={handleSignOut}
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
            >
              <LogOut className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline-block">Cerrar sesión</span>
            </button>
          </div>
        </header>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 top-16 z-50 md:hidden bg-background/80 backdrop-blur-sm">
            <div className="fixed inset-y-0 left-0 w-3/4 max-w-xs bg-card border-r border-border p-6">
              <nav className="space-y-3">
                <Link 
                  href="/dashboard" 
                  className="flex items-center px-3 py-2 text-sm font-medium rounded-md bg-primary/10 text-primary"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <BarChart3 className="mr-3 h-5 w-5" />
                  Dashboard
                </Link>
                <Link 
                  href="/dashboard/bots" 
                  className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-muted-foreground hover:bg-accent hover:text-foreground transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Bot className="mr-3 h-5 w-5" />
                  Bots
                </Link>
                <Link 
                  href="/dashboard/manuals" 
                  className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-muted-foreground hover:bg-accent hover:text-foreground transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <BookOpen className="mr-3 h-5 w-5" />
                  Manuales
                </Link>
                <Link 
                  href="/dashboard/profile" 
                  className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-muted-foreground hover:bg-accent hover:text-foreground transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <UserCircle className="mr-3 h-5 w-5" />
                  Perfil
                </Link>
              </nav>
            </div>
            <div 
              className="fixed inset-0 bg-background/50"
              onClick={() => setIsMobileMenuOpen(false)}
            />
          </div>
        )}

        {/* Page content */}
        <main className="flex-1 overflow-auto bg-secondary/10 p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  )
}