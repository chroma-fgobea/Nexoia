import Link from 'next/link'
import { ArrowRight, CheckCircle2, MessagesSquare, Rocket, Search, Star } from 'lucide-react'
import { MainNav } from './components/layout/main-nav'
import { Footer } from './components/layout/footer'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <MainNav />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-background to-secondary/20">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                    Chatbots de IA para tu documentación técnica
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Transforma tu documentación en un asistente inteligente que responde preguntas específicas de tus clientes o equipo.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link 
                    href="/pricing" 
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    Ver planes
                  </Link>
                  <Link 
                    href="/how-it-works" 
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    Cómo funciona
                  </Link>
                </div>
              </div>
              <div className="mx-auto lg:mx-0 relative">
                <div className="relative rounded-lg border bg-card p-6 shadow-sm">
                  <div className="flex items-center gap-2 mb-4">
                    <MessagesSquare className="w-6 h-6 text-primary" />
                    <h3 className="font-medium">Asistente Técnico</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="p-3 bg-muted rounded-md flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-medium shrink-0">
                        U
                      </div>
                      <p className="text-sm">¿Cómo configuro el acceso por SSH en el servidor de desarrollo?</p>
                    </div>
                    <div className="p-3 bg-primary/10 rounded-md flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground font-medium shrink-0">
                        N
                      </div>
                      <div className="text-sm">
                        <p className="mb-2">Para configurar el acceso SSH en el servidor de desarrollo, sigue estos pasos:</p>
                        <ol className="list-decimal pl-5 space-y-1">
                          <li>Genera un par de claves SSH con <code className="text-xs bg-muted p-1 rounded">ssh-keygen -t rsa -b 4096</code></li>
                          <li>Copia la clave pública al servidor con <code className="text-xs bg-muted p-1 rounded">ssh-copy-id usuario@servidor-dev</code></li>
                          <li>Verifica el acceso intentando conectarte: <code className="text-xs bg-muted p-1 rounded">ssh usuario@servidor-dev</code></li>
                        </ol>
                        <p className="mt-2">Puedes encontrar más detalles en la sección 3.2 del manual de configuración.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -z-10 h-1/2 w-1/2 bg-gradient-to-tr from-primary/30 to-secondary/30 blur-3xl bottom-0 right-0 rounded-full"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-3 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Características principales
              </h2>
              <p className="max-w-[700px] mx-auto text-muted-foreground md:text-lg">
                Diseñado para simplificar el soporte técnico y mejorar la experiencia de tus usuarios.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 md:gap-12">
              <div className="space-y-4">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center">
                  <Search className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Conocimiento contextual</h3>
                <p className="text-muted-foreground">
                  Comprende el contexto de las preguntas y proporciona respuestas precisas extraídas directamente de tu documentación.
                </p>
              </div>
              <div className="space-y-4">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center">
                  <MessagesSquare className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Interfaz conversacional</h3>
                <p className="text-muted-foreground">
                  Permite a los usuarios interactuar de forma natural, haciendo preguntas de seguimiento y profundizando en temas específicos.
                </p>
              </div>
              <div className="space-y-4">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center">
                  <Rocket className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Integración sencilla</h3>
                <p className="text-muted-foreground">
                  Añade el chatbot a tu sitio web con un simple fragmento de código, o comparte enlaces directos a chats específicos.
                </p>
              </div>
              <div className="space-y-4">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Personalización completa</h3>
                <p className="text-muted-foreground">
                  Adapta la apariencia, el tono y el comportamiento del chatbot para que coincida con tu marca y las necesidades de tus usuarios.
                </p>
              </div>
              <div className="space-y-4">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-primary">
                    <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                    <path d="M6 8h.01"></path>
                    <path d="M10 8h.01"></path>
                    <path d="M14 8h.01"></path>
                    <path d="M18 8h.01"></path>
                    <path d="M8 12h.01"></path>
                    <path d="M12 12h.01"></path>
                    <path d="M16 12h.01"></path>
                    <path d="M7 16h10"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Análisis detallados</h3>
                <p className="text-muted-foreground">
                  Obtén estadísticas sobre las consultas más comunes, tasas de satisfacción y oportunidades de mejora para tu documentación.
                </p>
              </div>
              <div className="space-y-4">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-primary">
                    <path d="m4 6 8-4 8 4"></path>
                    <path d="m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2"></path>
                    <path d="M14 22v-4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v4"></path>
                    <path d="M18 5v17"></path>
                    <path d="M6 5v17"></path>
                    <circle cx="12" cy="9" r="2"></circle>
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Actualización automática</h3>
                <p className="text-muted-foreground">
                  Cuando modificas tu documentación, el sistema actualiza automáticamente la base de conocimiento del chatbot sin intervención manual.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="py-16 md:py-24 bg-secondary/20">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-3 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Empresas que confían en nosotros
              </h2>
              <p className="max-w-[700px] mx-auto text-muted-foreground">
                Estas son algunas de las empresas que han mejorado su soporte técnico con Nexoia.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center justify-center">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="flex justify-center">
                  <div className="w-24 h-12 bg-muted/50 rounded flex items-center justify-center">
                    <span className="text-muted-foreground font-medium">Logo {i + 1}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-3 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Lo que dicen nuestros clientes
              </h2>
              <p className="max-w-[700px] mx-auto text-muted-foreground">
                Descubre cómo Nexoia ha transformado el soporte técnico para nuestros clientes.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  quote: "Hemos reducido en un 40% las consultas repetitivas a nuestro equipo de soporte, permitiéndoles enfocarse en problemas más complejos.",
                  author: "María García",
                  position: "CTO, TechSolutions"
                },
                {
                  quote: "La implementación fue sorprendentemente sencilla. En menos de una semana, teníamos un chatbot respondiendo preguntas con precisión.",
                  author: "Carlos Rodríguez",
                  position: "Director de Soporte, DataFlow"
                },
                {
                  quote: "Nuestros clientes valoran poder obtener respuestas inmediatas a cualquier hora del día. La satisfacción ha aumentado notablemente.",
                  author: "Laura Martínez",
                  position: "Customer Success Manager, CloudServe"
                }
              ].map((testimonial, i) => (
                <div key={i} className="rounded-lg border bg-card p-6 shadow-sm">
                  <div className="flex flex-col gap-4">
                    <svg
                      className="h-8 w-8 text-muted"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                      <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                    </svg>
                    <p className="text-lg">{testimonial.quote}</p>
                    <div className="mt-auto">
                      <p className="font-medium">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Brief */}
        <section className="py-16 md:py-24 bg-gradient-to-t from-background to-secondary/20">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Cómo funciona Nexoia
                </h2>
                <p className="text-muted-foreground md:text-lg">
                  Convertir tu documentación técnica en un chatbot inteligente es más fácil de lo que piensas.
                </p>
                <div className="space-y-6 mt-8">
                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-medium">
                      1
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Sube tu documentación</h3>
                      <p className="text-muted-foreground">
                        Carga tus manuales, guías o PDFs a la plataforma. Admitimos múltiples formatos.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-medium">
                      2
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Configura tu chatbot</h3>
                      <p className="text-muted-foreground">
                        Personaliza la apariencia, el tono y el comportamiento según tus preferencias.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-medium">
                      3
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Integra y comparte</h3>
                      <p className="text-muted-foreground">
                        Añade el chatbot a tu sitio web o comparte enlaces directos con tus usuarios.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="pt-4">
                  <Link 
                    href="/how-it-works" 
                    className="flex items-center text-primary font-medium hover:underline"
                  >
                    Ver más detalles
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
              <div className="mx-auto lg:mx-0">
                <div className="rounded-lg border bg-card overflow-hidden shadow-sm">
                  <div className="p-4 border-b bg-muted/50">
                    <h3 className="font-medium">Panel de control</h3>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="space-y-2">
                      <div className="h-2.5 w-24 bg-muted rounded-full"></div>
                      <div className="h-12 bg-muted rounded-md w-full"></div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-2.5 w-28 bg-muted rounded-full"></div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="h-24 bg-muted rounded-md"></div>
                        <div className="h-24 bg-muted rounded-md"></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-2.5 w-20 bg-muted rounded-full"></div>
                      <div className="h-32 bg-muted rounded-md w-full"></div>
                    </div>
                    <div className="flex justify-center">
                      <div className="h-10 w-32 bg-primary rounded-md"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-primary">
          <div className="container px-4 md:px-6 text-center">
            <div className="max-w-[850px] mx-auto space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                Empieza a transformar tu documentación hoy mismo
              </h2>
              <p className="text-lg text-primary-foreground/70 md:text-xl">
                Regístrate en menos de 2 minutos y descubre cómo Nexoia puede revolucionar tu soporte técnico.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link 
                  href="/auth" 
                  className="inline-flex h-12 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-primary shadow transition-colors hover:bg-white/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  Comenzar gratis
                </Link>
                <Link 
                  href="/contact" 
                  className="inline-flex h-12 items-center justify-center rounded-md border border-primary-foreground/30 bg-transparent px-8 text-sm font-medium text-white shadow-sm transition-colors hover:bg-primary-foreground/10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  Contactar ventas
                </Link>
              </div>
              <div className="pt-4 flex justify-center gap-8 text-primary-foreground/80">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="h-5 w-5" />
                  <span>Sin tarjeta de crédito</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="h-5 w-5" />
                  <span>Cancelación en cualquier momento</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}