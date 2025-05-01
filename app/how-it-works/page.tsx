import { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, Database, FileText, LayoutDashboard, MessagesSquare, Settings } from 'lucide-react'
import { MainNav } from '../components/layout/main-nav'
import { Footer } from '../components/layout/footer'

export const metadata: Metadata = {
  title: 'Cómo funciona Nexoia | Chatbots IA para documentación técnica',
  description: 'Descubre cómo Nexoia convierte tu documentación técnica en chatbots inteligentes. Proceso sencillo en 3 pasos: subir, configurar e integrar.',
}

export default function HowItWorksPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <MainNav />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-background to-secondary/20">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Cómo funciona Nexoia
              </h1>
              <p className="mt-4 text-xl text-muted-foreground">
                Convertir tu documentación técnica en un chatbot inteligente es más fácil de lo que piensas. Te explicamos el proceso paso a paso.
              </p>
            </div>
          </div>
        </section>

        {/* Process Overview */}
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 rounded-full bg-primary/10 p-3">
                    <FileText className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">1. Sube tu documentación</h3>
                  <p className="mt-2 text-muted-foreground">
                    Carga tus manuales técnicos, guías de usuario o cualquier documentación en diversos formatos.
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 rounded-full bg-primary/10 p-3">
                    <Settings className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">2. Configura tu chatbot</h3>
                  <p className="mt-2 text-muted-foreground">
                    Personaliza la apariencia y comportamiento de tu chatbot para que se adapte a tus necesidades.
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 rounded-full bg-primary/10 p-3">
                    <MessagesSquare className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">3. Integra y comparte</h3>
                  <p className="mt-2 text-muted-foreground">
                    Añade el chatbot a tu sitio web o comparte enlaces directos con tus usuarios o equipo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Process */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tighter mb-8 text-center">
                El proceso en detalle
              </h2>

              <div className="space-y-16">
                {/* Step 1 */}
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="md:w-1/3 flex-shrink-0">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-medium text-lg">
                        1
                      </span>
                      <h3 className="text-xl font-bold">Subir documentación</h3>
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <div className="space-y-4">
                      <p>
                        Comienza subiendo tu documentación técnica a la plataforma. Nexoia acepta múltiples formatos para que puedas trabajar con tus archivos existentes.
                      </p>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                        <div className="border rounded-lg p-3 flex flex-col items-center justify-center text-center bg-card">
                          <FileText className="h-6 w-6 mb-2 text-primary" />
                          <span className="text-sm font-medium">PDF</span>
                        </div>
                        <div className="border rounded-lg p-3 flex flex-col items-center justify-center text-center bg-card">
                          <FileText className="h-6 w-6 mb-2 text-primary" />
                          <span className="text-sm font-medium">Word (.docx)</span>
                        </div>
                        <div className="border rounded-lg p-3 flex flex-col items-center justify-center text-center bg-card">
                          <FileText className="h-6 w-6 mb-2 text-primary" />
                          <span className="text-sm font-medium">HTML</span>
                        </div>
                        <div className="border rounded-lg p-3 flex flex-col items-center justify-center text-center bg-card">
                          <FileText className="h-6 w-6 mb-2 text-primary" />
                          <span className="text-sm font-medium">Markdown</span>
                        </div>
                        <div className="border rounded-lg p-3 flex flex-col items-center justify-center text-center bg-card">
                          <FileText className="h-6 w-6 mb-2 text-primary" />
                          <span className="text-sm font-medium">URL/Web</span>
                        </div>
                        <div className="border rounded-lg p-3 flex flex-col items-center justify-center text-center bg-card">
                          <Database className="h-6 w-6 mb-2 text-primary" />
                          <span className="text-sm font-medium">API</span>
                        </div>
                      </div>
                      <div className="bg-accent/50 p-4 rounded-lg">
                        <h4 className="font-medium mb-2">Lo que ocurre en segundo plano:</h4>
                        <p className="text-sm text-muted-foreground">
                          Nexoia procesa automáticamente tu documentación, extrayendo y organizando el conocimiento para que pueda ser utilizado por el chatbot. El sistema comprende la estructura de la información, identifica secciones importantes y crea un índice semántico para proporcionar respuestas precisas.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="md:w-1/3 flex-shrink-0">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-medium text-lg">
                        2
                      </span>
                      <h3 className="text-xl font-bold">Configurar chatbot</h3>
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <div className="space-y-4">
                      <p>
                        Personaliza todos los aspectos de tu chatbot desde el panel de control intuitivo, sin necesidad de conocimientos técnicos.
                      </p>
                      <div className="grid sm:grid-cols-2 gap-4 mt-4">
                        <div className="border rounded-lg p-4 bg-card">
                          <h4 className="font-medium mb-2">Apariencia</h4>
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                              <span>Personalización de colores y tema</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                              <span>Personalización de avatar</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                              <span>Mensajes de bienvenida personalizados</span>
                            </li>
                          </ul>
                        </div>
                        <div className="border rounded-lg p-4 bg-card">
                          <h4 className="font-medium mb-2">Comportamiento</h4>
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                              <span>Ajuste del tono conversacional</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                              <span>Configuración de respuestas fallback</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                              <span>Personalización del nivel de detalle</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="mt-4 border rounded-lg p-4 bg-card">
                        <h4 className="font-medium mb-2">Panel de control</h4>
                        <div className="p-4 border bg-muted rounded-md flex items-center justify-center h-48">
                          <LayoutDashboard className="h-16 w-16 text-muted-foreground/30" />
                        </div>
                        <p className="mt-2 text-sm text-muted-foreground">
                          El panel de control intuitivo te permite configurar y gestionar todos los aspectos de tus chatbots, visualizar estadísticas y realizar mejoras continuas.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="md:w-1/3 flex-shrink-0">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-medium text-lg">
                        3
                      </span>
                      <h3 className="text-xl font-bold">Integrar y compartir</h3>
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <div className="space-y-4">
                      <p>
                        Una vez configurado, puedes integrar tu chatbot en tu sitio web o compartirlo directamente con tus usuarios o equipo.
                      </p>
                      <div className="grid sm:grid-cols-2 gap-4 mt-4">
                        <div className="border rounded-lg p-4 bg-card">
                          <h4 className="font-medium mb-2">Integración en web</h4>
                          <div className="bg-muted p-3 rounded-md text-xs font-mono overflow-x-auto">
                            &lt;script src="https://nexoia.app/bot.js?id=your-bot-id"&gt;&lt;/script&gt;
                          </div>
                          <p className="mt-2 text-sm text-muted-foreground">
                            Un simple fragmento de código añade el chatbot a cualquier página web. El chatbot aparecerá como un icono flotante que los usuarios pueden abrir cuando necesiten ayuda.
                          </p>
                        </div>
                        <div className="border rounded-lg p-4 bg-card">
                          <h4 className="font-medium mb-2">Enlaces directos</h4>
                          <div className="bg-muted p-3 rounded-md text-xs font-mono break-all">
                            https://chat.nexoia.app/s/abc123
                          </div>
                          <p className="mt-2 text-sm text-muted-foreground">
                            Crea y comparte enlaces a chatbots específicos. Ideal para incluir en correos electrónicos, documentación o canales de soporte.
                          </p>
                        </div>
                      </div>
                      <div className="bg-accent/50 p-4 rounded-lg">
                        <h4 className="font-medium mb-2">Opciones avanzadas:</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                            <span>
                              <span className="font-medium">API completa:</span> Para integraciones personalizadas y casos de uso avanzados.
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                            <span>
                              <span className="font-medium">Control de acceso:</span> Limita el uso de chatbots específicos a usuarios autorizados.
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                            <span>
                              <span className="font-medium">Integraciones externas:</span> Conéctalo con Slack, Teams, Discord y otras plataformas.
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold tracking-tighter mb-4">
                Beneficios de utilizar Nexoia
              </h2>
              <p className="text-muted-foreground mb-12">
                Descubre cómo Nexoia transforma la forma en que los usuarios interactúan con tu documentación técnica.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg border bg-card p-6">
                <h3 className="text-xl font-bold mb-3">Respuestas precisas</h3>
                <p className="text-muted-foreground">
                  Los usuarios obtienen respuestas específicas extraídas directamente de tu documentación, no generalizaciones vagas.
                </p>
              </div>
              <div className="rounded-lg border bg-card p-6">
                <h3 className="text-xl font-bold mb-3">Soporte 24/7</h3>
                <p className="text-muted-foreground">
                  Proporciona asistencia técnica automatizada en cualquier momento, sin límites de horario ni zonas horarias.
                </p>
              </div>
              <div className="rounded-lg border bg-card p-6">
                <h3 className="text-xl font-bold mb-3">Reducción de tickets</h3>
                <p className="text-muted-foreground">
                  Disminuye significativamente el volumen de consultas repetitivas que llegan a tu equipo de soporte humano.
                </p>
              </div>
              <div className="rounded-lg border bg-card p-6">
                <h3 className="text-xl font-bold mb-3">Experiencia mejorada</h3>
                <p className="text-muted-foreground">
                  Los usuarios encuentran información más rápidamente a través de una interfaz conversacional natural.
                </p>
              </div>
              <div className="rounded-lg border bg-card p-6">
                <h3 className="text-xl font-bold mb-3">Datos valiosos</h3>
                <p className="text-muted-foreground">
                  Obtén información sobre las consultas más frecuentes para mejorar tu documentación y productos.
                </p>
              </div>
              <div className="rounded-lg border bg-card p-6">
                <h3 className="text-xl font-bold mb-3">Escalabilidad</h3>
                <p className="text-muted-foreground">
                  Gestiona fácilmente volúmenes crecientes de consultas sin necesidad de ampliar tu equipo de soporte.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tighter mb-8 text-center">
                Preguntas frecuentes
              </h2>

              <div className="space-y-6">
                <div className="border-b pb-6">
                  <h3 className="text-xl font-medium mb-2">¿Cuánto tiempo lleva implementar un chatbot?</h3>
                  <p className="text-muted-foreground">
                    La implementación básica es inmediata: simplemente sube tu documentación, realiza algunas configuraciones básicas y ya puedes compartir tu chatbot. Para configuraciones más avanzadas y personalizaciones, el proceso puede llevar entre unas horas y un par de días, dependiendo de la complejidad.
                  </p>
                </div>
                <div className="border-b pb-6">
                  <h3 className="text-xl font-medium mb-2">¿Qué pasa si actualizo mi documentación?</h3>
                  <p className="text-muted-foreground">
                    Nexoia detecta automáticamente los cambios en tu documentación. Cuando actualizas un documento existente, el sistema procesa los cambios y actualiza la base de conocimiento del chatbot sin necesidad de intervención manual. Esto garantiza que tus usuarios siempre reciban información actualizada.
                  </p>
                </div>
                <div className="border-b pb-6">
                  <h3 className="text-xl font-medium mb-2">¿Puedo tener varios chatbots para diferentes temas?</h3>
                  <p className="text-muted-foreground">
                    Sí, puedes crear múltiples chatbots especializados. Esto es útil si tienes diferentes productos, servicios o audiencias. Cada chatbot puede ser configurado independientemente y basarse en documentación específica relevante para su propósito.
                  </p>
                </div>
                <div className="border-b pb-6">
                  <h3 className="text-xl font-medium mb-2">¿Qué ocurre si el chatbot no sabe la respuesta?</h3>
                  <p className="text-muted-foreground">
                    Puedes configurar el comportamiento del chatbot cuando no encuentra una respuesta precisa. Las opciones incluyen mostrar un mensaje personalizado, sugerir temas relacionados, o escalar la consulta a un agente humano. Además, el sistema aprende de estas situaciones para mejorar continuamente.
                  </p>
                </div>
                <div className="pb-6">
                  <h3 className="text-xl font-medium mb-2">¿Qué idiomas soporta Nexoia?</h3>
                  <p className="text-muted-foreground">
                    Actualmente, Nexoia soporta múltiples idiomas, incluyendo español, inglés, francés, alemán, italiano y portugués. El chatbot responderá en el mismo idioma en que esté escrita la documentación. También puede configurarse para admitir consultas en múltiples idiomas.
                  </p>
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
                Listo para transformar tu soporte técnico
              </h2>
              <p className="text-lg text-primary-foreground/70 md:text-xl">
                Empieza hoy mismo y descubre lo fácil que es crear chatbots inteligentes basados en tu documentación técnica.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link 
                  href="/auth" 
                  className="inline-flex h-12 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-primary shadow transition-colors hover:bg-white/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  Comenzar gratis
                </Link>
                <Link 
                  href="/pricing" 
                  className="inline-flex h-12 items-center justify-center rounded-md border border-primary-foreground/30 bg-transparent px-8 text-sm font-medium text-white shadow-sm transition-colors hover:bg-primary-foreground/10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  Ver planes
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