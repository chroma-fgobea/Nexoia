'use client'

import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { useAuth } from '../../lib/auth-context'

export function MainNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const { user, signOut } = useAuth()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="flex items-center justify-between w-full">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl">Nexoia</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link 
              href="/" 
              className={`text-sm transition-colors hover:text-primary ${isActive('/') ? 'font-medium text-primary' : 'text-muted-foreground'}`}
            >
              Inicio
            </Link>
            <Link 
              href="/how-it-works" 
              className={`text-sm transition-colors hover:text-primary ${isActive('/how-it-works') ? 'font-medium text-primary' : 'text-muted-foreground'}`}
            >
              Cómo funciona
            </Link>
            <Link 
              href="/pricing" 
              className={`text-sm transition-colors hover:text-primary ${isActive('/pricing') ? 'font-medium text-primary' : 'text-muted-foreground'}`}
            >
              Precios
            </Link>
            <Link 
              href="/manual" 
              className={`text-sm transition-colors hover:text-primary ${isActive('/manual') ? 'font-medium text-primary' : 'text-muted-foreground'}`}
            >
              Manual
            </Link>
            <Link 
              href="/contact" 
              className={`text-sm transition-colors hover:text-primary ${isActive('/contact') ? 'font-medium text-primary' : 'text-muted-foreground'}`}
            >
              Contacto
            </Link>
            
            <div className="ml-4 flex items-center gap-3">
              {user ? (
                <>
                  <Link 
                    href="/dashboard" 
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none bg-secondary text-secondary-foreground hover:bg-secondary/80 h-9 px-4 py-2"
                  >
                    Dashboard
                  </Link>
                  <button 
                    onClick={() => signOut()}
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"
                  >
                    Cerrar sesión
                  </button>
                </>
              ) : (
                <Link 
                  href="/auth" 
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-4 py-2"
                >
                  Iniciar sesión
                </Link>
              )}
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden p-2 -m-2 text-muted-foreground"
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t">
          <div className="container py-4 space-y-4">
            <Link 
              href="/" 
              onClick={closeMenu}
              className={`block px-2 py-1.5 text-base ${isActive('/') ? 'font-medium text-primary' : 'text-muted-foreground'}`}
            >
              Inicio
            </Link>
            <Link 
              href="/how-it-works" 
              onClick={closeMenu}
              className={`block px-2 py-1.5 text-base ${isActive('/how-it-works') ? 'font-medium text-primary' : 'text-muted-foreground'}`}
            >
              Cómo funciona
            </Link>
            <Link 
              href="/pricing" 
              onClick={closeMenu}
              className={`block px-2 py-1.5 text-base ${isActive('/pricing') ? 'font-medium text-primary' : 'text-muted-foreground'}`}
            >
              Precios
            </Link>
            <Link 
              href="/manual" 
              onClick={closeMenu}
              className={`block px-2 py-1.5 text-base ${isActive('/manual') ? 'font-medium text-primary' : 'text-muted-foreground'}`}
            >
              Manual
            </Link>
            <Link 
              href="/contact" 
              onClick={closeMenu}
              className={`block px-2 py-1.5 text-base ${isActive('/contact') ? 'font-medium text-primary' : 'text-muted-foreground'}`}
            >
              Contacto
            </Link>
            
            <div className="pt-4 border-t">
              {user ? (
                <div className="flex flex-col gap-3">
                  <Link 
                    href="/dashboard" 
                    onClick={closeMenu}
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none bg-secondary text-secondary-foreground hover:bg-secondary/80 h-9 px-4 py-2 w-full"
                  >
                    Dashboard
                  </Link>
                  <button 
                    onClick={() => {
                      signOut()
                      closeMenu()
                    }}
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 w-full"
                  >
                    Cerrar sesión
                  </button>
                </div>
              ) : (
                <Link 
                  href="/auth" 
                  onClick={closeMenu}
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-4 py-2 w-full"
                >
                  Iniciar sesión
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}