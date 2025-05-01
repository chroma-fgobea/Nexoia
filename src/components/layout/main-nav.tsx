import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function MainNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-10">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl tracking-tight">Nexoia</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6">
            <Link 
              href="/how-it-works"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Cómo funciona
            </Link>
            <Link 
              href="/pricing"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Precios
            </Link>
            <Link 
              href="/manual"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Manual
            </Link>
          </nav>
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-2">
          <Link href="/auth" passHref>
            <Button variant="outline">Iniciar sesión</Button>
          </Link>
          <Link href="/auth?register=true" passHref>
            <Button>Registrarse</Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="flex items-center justify-center rounded-md p-2 text-foreground md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          <span className="sr-only">Toggle Menu</span>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in md:hidden bg-background border-t">
          <div className="relative z-20 grid gap-6 rounded-md p-4">
            <Link 
              href="/how-it-works"
              className="flex w-full items-center py-2 text-lg font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              Cómo funciona
            </Link>
            <Link 
              href="/pricing"
              className="flex w-full items-center py-2 text-lg font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              Precios
            </Link>
            <Link 
              href="/manual"
              className="flex w-full items-center py-2 text-lg font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              Manual
            </Link>
            
            <Link 
              href="/auth"
              className="flex w-full items-center py-2 text-lg font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              Iniciar sesión
            </Link>
            <Link 
              href="/auth?register=true"
              className="flex w-full items-center py-2 text-lg font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              Registrarse
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}