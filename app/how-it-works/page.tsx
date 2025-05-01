import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { MainNav } from '../components/layout/main-nav'
import { Footer } from '../components/layout/footer'
import { BookOpen, Bot, Zap, Search, MessageSquare, Code } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Cómo Funciona | Nexoia',
  description: 'Descubre cómo Nexoia transforma tu documentación técnica en chatbots inteligentes con IA.',
}

export default function HowItWorksPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <MainNav />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 md:py-20 lg:py-24 bg-gradient-to-b from-background to-secondary/20">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Cómo Funciona Nexoia
              </h1>
              <p className="mt-4 text-xl text-muted-foreground">
                Convertimos documentación técnica compleja en asistentes virtuales inteligentes en minutos
              </p>
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:gap-12">
              {/* Step 1 */}
              <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary shrink-0">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div className="space-y-3">
                  <h2 className="text-2xl font-bold">1. Sube tu documentación</h2>
                  <p className="text-muted-foreground">
                    Sube tus manuales técnicos, guías de usuario, FAQs o cualquier documento relevante a través de nuestra 
                    interfaz intuitiva. Soportamos una variedad de formatos incluyendo PDF, DOCX, HTML y Markdown.
                  </p>
                  <div className="bg-card border rounded-lg p-4">
                    <h3 className="font-semibold mb-2">Formatos compatibles:</h3>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>Documentos PDF</li>
                      <li>Archivos Word (DOCX)</li>
                      <li>Páginas HTML</li>
                      <li>Archivos Markdown</li>
                      <li>Texto plano (TXT)</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary shrink-0">
                  <Zap className="w-6 h-6" />
                </div>
                <div className="space-y-3">
                  <h2 className="text-2xl font-bold">2. Procesamiento con IA</h2>
                  <p className="text-muted-foreground">
                    Nuestro sistema analiza y procesa automáticamente tu documentación utilizando tecnología avanzada de 
                    procesamiento de lenguaje natural. Indexamos el contenido para crear una base de conocimiento 
                    inteligente y estructurada.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
                    <div className="bg-card border rounded-lg p-4 space-y-2">
                      <Search className="w-5 h-5 text-primary" />
                      <h4 className="font-medium">Indexación</h4>
                      <p className="text-sm text-muted-foreground">Extracción inteligente de información clave</p>
                    </div>
                    <div className="bg-card border rounded-lg p-4 space-y-2">
                      <MessageSquare className="w-5 h-5 text-primary" />
                      <h4 className="font-medium">Contextualización</h4>
                      <p className="text-sm text-muted-foreground">Comprensión semántica del contenido</p>
                    </div>
                    <div className="bg-card border rounded-lg p-4 space-y-2">
                      <Code className="w-5 h-5 text-primary" />
                      <h4 className="font-medium">Optimización</h4>
                      <p className="text-sm text-muted-foreground">Preparación para respuestas en tiempo real</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary shrink-0">
                  <Bot className="w-6 h-6" />
                </div>
                <div className="space-y-3">
                  <h2 className="text-2xl font-bold">3. Creación y configuración del chatbot</h2>
                  <p className="text-muted-foreground">
                    Personaliza tu chatbot definiendo su nombre, imagen, comportamiento y estilo de respuesta. 
                    Configura reglas específicas para adaptarlo a las necesidades exactas de tu audiencia.
                  </p>
                  <div className="border rounded-lg overflow-hidden">
                    <div className="bg-card p-4 border-b">
                      <h3 className="font-semibold">Panel de configuración</h3>
                    </div>
                    <div className="p-4 space-y-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Nombre del bot</label>
                        <div className="h-9 rounded bg-muted/40 w-full"></div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Personalidad</label>
                        <div className="h-9 rounded bg-muted/40 w-full"></div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Documentos asociados</label>
                        <div className="h-16 rounded bg-muted/40 w-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary shrink-0">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="w-6 h-6"
                  >
                    <rect width="18" height="18" x="3" y="3" rx="2" />
                    <path d="M7 7h.01" />
                    <path d="M11 7h.01" />
                    <path d="M15 7h.01" />
                    <path d="M7 11h.01" />
                    <path d="M11 11h.01" />
                    <path d="M15 11h.01" />
                    <path d="M7 15h.01" />
                    <path d="M11 15h.01" />
                    <path d="M15 15h.01" />
                  </svg>
                </div>
                <div className="space-y-3">
                  <h2 className="text-2xl font-bold">4. Integración y despliegue</h2>
                  <p className="text-muted-foreground">
                    Implementa el chatbot en tu página web, portal de soporte o cualquier plataforma digital mediante 
                    nuestro código de integración. También puedes compartirlo directamente a través de enlaces personalizados.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="border rounded-lg p-4 space-y-2">
                      <h4 className="font-medium">Integración web</h4>
                      <div className="bg-card border rounded p-3">
                        <code className="text-xs text-muted-foreground">
                          &lt;script src="https://nexoia.app/bot.js?id=your-bot-id"&gt;&lt;/script&gt;
                        </code>
                      </div>
                    </div>
                    <div className="border rounded-lg p-4 space-y-2">
                      <h4 className="font-medium">Enlaces directos</h4>
                      <div className="flex items-center bg-card border rounded p-3">
                        <div className="text-xs text-muted-foreground truncate flex-1">https://nexoia.app/bot/demo12345</div>
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          className="w-4 h-4 ml-2 text-primary"
                        >
                          <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                          <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 md:py-16 bg-secondary/30">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold">Beneficios de Nexoia</h2>
              <p className="text-muted-foreground mt-2">
                Ventajas que transformarán la forma en que brindas soporte técnico
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Benefit 1 */}
              <div className="bg-card border rounded-lg p-6 space-y-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="w-5 h-5"
                  >
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Reducción de tickets de soporte</h3>
                <p className="text-muted-foreground">
                  Disminuye hasta un 80% las consultas repetitivas, permitiendo a tu equipo enfocarse en problemas más complejos.
                </p>
              </div>
              
              {/* Benefit 2 */}
              <div className="bg-card border rounded-lg p-6 space-y-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="w-5 h-5"
                  >
                    <path d="M12 8v4l3 3" />
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Soporte 24/7</h3>
                <p className="text-muted-foreground">
                  Ofrece asistencia instantánea a cualquier hora del día, mejorando la satisfacción del cliente y reduciendo tiempos de espera.
                </p>
              </div>
              
              {/* Benefit 3 */}
              <div className="bg-card border rounded-lg p-6 space-y-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="w-5 h-5"
                  >
                    <path d="M18 6 7 17l-5-5" />
                    <path d="m22 10-7.5 7.5L13 16" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Consistencia en las respuestas</h3>
                <p className="text-muted-foreground">
                  Garantiza que todas las consultas sean contestadas con información precisa y actualizada basada en tu documentación.
                </p>
              </div>
              
              {/* Benefit 4 */}
              <div className="bg-card border rounded-lg p-6 space-y-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="w-5 h-5"
                  >
                    <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
                    <path d="M22 12A10 10 0 0 0 12 2v10z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Análisis de consultas</h3>
                <p className="text-muted-foreground">
                  Obtén insights valiosos sobre las preguntas más frecuentes para mejorar tu documentación y productos.
                </p>
              </div>
              
              {/* Benefit 5 */}
              <div className="bg-card border rounded-lg p-6 space-y-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="w-5 h-5"
                  >
                    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Implementación rápida</h3>
                <p className="text-muted-foreground">
                  Configura tu chatbot en minutos, sin necesidad de conocimientos técnicos o programación.
                </p>
              </div>
              
              {/* Benefit 6 */}
              <div className="bg-card border rounded-lg p-6 space-y-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="w-5 h-5"
                  >
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Mejora de experiencia</h3>
                <p className="text-muted-foreground">
                  Ofrece a tus usuarios una experiencia más fluida y satisfactoria al resolver sus consultas de forma instantánea.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 bg-primary">
          <div className="container px-4 md:px-6 text-center">
            <div className="max-w-xl mx-auto space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                ¿Listo para transformar tu documentación?
              </h2>
              <p className="text-primary-foreground/90">
                Prueba Nexoia hoy mismo y descubre cómo nuestros chatbots inteligentes pueden revolucionar tu soporte técnico.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
                <Link 
                  href="/auth" 
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none bg-white text-primary hover:bg-white/90 h-10 px-4 py-2"
                >
                  Comenzar prueba gratuita
                </Link>
                <Link 
                  href="/pricing" 
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none border border-white bg-transparent text-white hover:bg-white/10 h-10 px-4 py-2"
                >
                  Ver planes y precios
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}