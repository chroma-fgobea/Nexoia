'use client'

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import Link from "next/link"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { MainNav } from "../components/layout/main-nav"
import { Footer } from "../components/layout/footer"

// Client component for auth page
export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [company, setCompany] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  
  const router = useRouter()
  const searchParams = useSearchParams()
  const supabase = createClientComponentClient()

  // Check for register query parameter
  useEffect(() => {
    if (searchParams.get("register") === "true") {
      setIsLogin(false)
    }
  }, [searchParams])

  // Handle login submission
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) throw error

      // Redirect to dashboard on successful login
      router.push("/dashboard")
    } catch (error: any) {
      setError(error.message || "Error al iniciar sesión")
    } finally {
      setIsLoading(false)
    }
  }

  // Handle registration submission
  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    if (!name) {
      setError("El nombre es obligatorio")
      setIsLoading(false)
      return
    }

    try {
      // Register the user
      const { error: signUpError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            name,
            company: company || "",
          },
        },
      })

      if (signUpError) throw signUpError

      // Show confirmation message and switch to login
      alert("¡Registro exitoso! Por favor verifica tu correo electrónico para confirmar tu cuenta.")
      setIsLogin(true)
    } catch (error: any) {
      setError(error.message || "Error al registrarse")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <MainNav />
      <div className="flex min-h-[calc(100vh-64px)]">
        {/* Form section */}
        <div className="flex flex-col justify-center w-full lg:w-1/2 px-4 py-12 md:px-8">
          <div className="mx-auto w-full max-w-md space-y-6">
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-bold">{isLogin ? "Bienvenido de nuevo" : "Crea tu cuenta"}</h1>
              <p className="text-muted-foreground">
                {isLogin ? "Ingresa tus credenciales para acceder" : "Completa los datos para comenzar"}
              </p>
            </div>

            {error && (
              <div className="p-3 rounded-md bg-destructive/15 text-destructive text-sm">
                {error}
              </div>
            )}

            {isLogin ? (
              // Login form
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-3 py-2 border rounded-md text-sm"
                    placeholder="tu@email.com"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="text-sm font-medium">
                      Contraseña
                    </label>
                    <Link href="/reset-password" className="text-sm text-primary hover:underline">
                      ¿Olvidaste tu contraseña?
                    </Link>
                  </div>
                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full px-3 py-2 border rounded-md text-sm"
                    placeholder="••••••••"
                  />
                </div>

                <button 
                  type="submit" 
                  className="w-full inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                  disabled={isLoading}
                >
                  {isLoading ? "Iniciando sesión..." : "Iniciar sesión"}
                </button>

                <div className="text-center text-sm">
                  ¿No tienes una cuenta?{" "}
                  <button
                    type="button"
                    onClick={() => setIsLogin(false)}
                    className="text-primary hover:underline"
                  >
                    Regístrate
                  </button>
                </div>
              </form>
            ) : (
              // Registration form
              <form onSubmit={handleRegister} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-3 py-2 border rounded-md text-sm"
                    placeholder="tu@email.com"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Nombre completo
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full px-3 py-2 border rounded-md text-sm"
                    placeholder="Tu nombre"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium">
                    Empresa (opcional)
                  </label>
                  <input
                    id="company"
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full px-3 py-2 border rounded-md text-sm"
                    placeholder="Nombre de tu empresa"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="password" className="text-sm font-medium">
                    Contraseña
                  </label>
                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full px-3 py-2 border rounded-md text-sm"
                    placeholder="••••••••"
                  />
                </div>

                <button 
                  type="submit" 
                  className="w-full inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                  disabled={isLoading}
                >
                  {isLoading ? "Registrando..." : "Registrarse"}
                </button>

                <div className="text-center text-sm">
                  ¿Ya tienes una cuenta?{" "}
                  <button
                    type="button"
                    onClick={() => setIsLogin(true)}
                    className="text-primary hover:underline"
                  >
                    Inicia sesión
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Hero section */}
        <div className="hidden lg:block w-1/2 bg-gradient-to-br from-primary/80 to-primary p-12">
          <div className="h-full flex flex-col justify-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">Potencia tu documentación con IA</h2>
              <p className="text-primary-foreground text-lg">
                Nexoia transforma tus manuales técnicos en chatbots inteligentes que responden consultas en segundos.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-primary-foreground">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 mr-2"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Reduce un 80% el tiempo en consultas técnicas
                </li>
                <li className="flex items-center text-primary-foreground">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 mr-2"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Acceso 24/7 a información técnica
                </li>
                <li className="flex items-center text-primary-foreground">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 mr-2"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Implementación rápida y sin complicaciones
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}