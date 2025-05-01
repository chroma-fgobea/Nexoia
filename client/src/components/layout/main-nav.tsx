import { useState } from "react";
import { Link, useLocation } from "wouter";
import { useAuth } from "../../hooks/use-auth";
import { Moon, Sun, Menu } from "lucide-react";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

export default function MainNav() {
  const [location] = useLocation();
  const { user } = useAuth();
  const [isDarkMode, setIsDarkMode] = useState(true);
  
  const toggleTheme = () => {
    // In a real implementation, this would toggle between light and dark mode
    setIsDarkMode(!isDarkMode);
  };
  
  const isActive = (path: string) => {
    return location === path;
  };
  
  const navLinks = [
    { href: "/", label: "Inicio" },
    { href: "/como-funciona", label: "Cómo Funciona" },
    { href: "/planes", label: "Planes" },
    { href: "/manual", label: "Manual" },
  ];
  
  return (
    <header className="bg-background border-b border-border">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold">nexo<span className="text-accent">.ia</span></span>
          <span className="text-xs text-muted-foreground">by humanos</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link 
              key={link.href}
              href={link.href}
              className={`transition-colors ${isActive(link.href) ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
            >
              {link.label}
            </Link>
          ))}
          
          {user ? (
            <Link 
              href="/dashboard" 
              className="text-muted-foreground hover:text-foreground"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </Link>
          ) : (
            <Link 
              href="/auth" 
              className="text-muted-foreground hover:text-foreground"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </Link>
          )}
          
          <button onClick={toggleTheme} className="text-muted-foreground hover:text-foreground">
            {isDarkMode ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>
        </nav>
        
        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" className="md:hidden p-0">
              <Menu className="h-6 w-6 text-muted-foreground" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between py-2 border-b border-border">
                <Link href="/" className="flex items-center space-x-2">
                  <span className="text-xl font-bold">nexo<span className="text-accent">.ia</span></span>
                </Link>
              </div>
              <nav className="flex flex-col space-y-4 mt-4">
                {navLinks.map((link) => (
                  <Link 
                    key={link.href}
                    href={link.href}
                    className={`transition-colors ${isActive(link.href) ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
                  >
                    {link.label}
                  </Link>
                ))}
                
                {user ? (
                  <Link 
                    href="/dashboard" 
                    className="text-muted-foreground hover:text-foreground flex items-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mr-2">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    <span>Dashboard</span>
                  </Link>
                ) : (
                  <Link 
                    href="/auth" 
                    className="text-muted-foreground hover:text-foreground flex items-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mr-2">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    <span>Acceder</span>
                  </Link>
                )}
                
                <button 
                  onClick={toggleTheme} 
                  className="text-muted-foreground hover:text-foreground flex items-center"
                >
                  {isDarkMode ? (
                    <>
                      <Sun className="w-5 h-5 mr-2" />
                      <span>Modo Claro</span>
                    </>
                  ) : (
                    <>
                      <Moon className="w-5 h-5 mr-2" />
                      <span>Modo Oscuro</span>
                    </>
                  )}
                </button>
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
