import MainLayout from "@/components/layout/main-layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function HowItWorksPage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="py-16 px-4 bg-secondary/50">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold mb-4">Cómo Funciona Nexo.ia</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Descubre cómo nuestros asistentes virtuales con integración de manual mejoran la experiencia de tus usuarios y optimizan tu servicio de atención al cliente.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/planes">Ver Planes y Precios</Link>
            </Button>
            <Button variant="outline" size="lg">
              Ver Demo
            </Button>
          </div>
        </div>
      </section>
      
      {/* Process Steps */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">Un proceso simple pero potente</h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/20 text-primary mb-6">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Conecta tu documentación</h3>
              <p className="text-muted-foreground">
                Sube tus manuales de usuario, guías, FAQs o cualquier documentación en diversos formatos (PDF, Word, HTML, etc.). Nuestro sistema procesará y organizará automáticamente la información.
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/20 text-primary mb-6">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Personaliza tu asistente</h3>
              <p className="text-muted-foreground">
                Configura la apariencia, tono de comunicación y comportamiento del bot. Define flujos de conversación específicos y adapta las respuestas al estilo de tu marca.
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-primary/20 text-primary mb-6">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Integra y activa</h3>
              <p className="text-muted-foreground">
                Implementa el bot en tu sitio web, aplicaciones o canales de mensajería con un simple código. Comienza a atender consultas y a recopilar datos valiosos sobre las interacciones.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Technology Section */}
      <section className="py-20 px-4 bg-secondary/50">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Tecnología avanzada, explicaciones sencillas</h2>
            <p className="text-xl text-muted-foreground">
              Nuestros asistentes virtuales utilizan procesamiento de lenguaje natural y aprendizaje automático para comprender las preguntas y proporcionar respuestas precisas basadas en tu documentación.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-card rounded-xl border border-border p-8">
              <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                  <polyline points="1 4 1 10 7 10"></polyline>
                  <polyline points="23 20 23 14 17 14"></polyline>
                  <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Procesamiento Inteligente de Documentos</h3>
              <p className="text-muted-foreground mb-4">
                Nuestro sistema analiza y estructura automáticamente tu documentación, extrayendo información clave y estableciendo relaciones entre conceptos para facilitar respuestas contextuales.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-primary mr-2 mt-0.5">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Extracción automática de contenido de diversos formatos</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-primary mr-2 mt-0.5">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Indexación semántica para búsquedas contextuales</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-primary mr-2 mt-0.5">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Actualización continua y sincronización de la base de conocimiento</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-card rounded-xl border border-border p-8">
              <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                  <line x1="12" y1="22.08" x2="12" y2="12"></line>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Comprensión de Lenguaje Natural</h3>
              <p className="text-muted-foreground mb-4">
                Nuestros bots comprenden la intención detrás de las preguntas, independientemente de cómo estén formuladas, y pueden manejar variaciones lingüísticas, sinónimos y consultas complejas.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-primary mr-2 mt-0.5">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Análisis de intención para entender el objetivo de la consulta</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-primary mr-2 mt-0.5">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Reconocimiento de entidades y conceptos relevantes</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-primary mr-2 mt-0.5">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Aprendizaje continuo a partir de interacciones para mejorar precisión</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">Beneficios para tu empresa</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl border border-border p-6">
              <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Atención 24/7</h3>
              <p className="text-muted-foreground">
                Ofrece soporte instantáneo a tus clientes en cualquier momento del día, sin tiempos de espera ni limitaciones horarias.
              </p>
            </div>
            
            <div className="bg-card rounded-xl border border-border p-6">
              <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                  <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Reducción de Costos</h3>
              <p className="text-muted-foreground">
                Disminuye hasta un 40% los costos operativos de atención al cliente automatizando respuestas a consultas frecuentes.
              </p>
            </div>
            
            <div className="bg-card rounded-xl border border-border p-6">
              <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="8.5" cy="7" r="4"></circle>
                  <line x1="20" y1="8" x2="20" y2="14"></line>
                  <line x1="23" y1="11" x2="17" y2="11"></line>
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Mejor Experiencia</h3>
              <p className="text-muted-foreground">
                Mejora la satisfacción de tus clientes con respuestas rápidas, precisas y consistentes basadas en documentación oficial.
              </p>
            </div>
            
            <div className="bg-card rounded-xl border border-border p-6">
              <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                  <polyline points="23 4 23 10 17 10"></polyline>
                  <polyline points="1 20 1 14 7 14"></polyline>
                  <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Escalabilidad</h3>
              <p className="text-muted-foreground">
                Gestiona fácilmente picos de consultas sin necesidad de ampliar tu equipo de soporte ni sacrificar la calidad de atención.
              </p>
            </div>
            
            <div className="bg-card rounded-xl border border-border p-6">
              <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Datos Valiosos</h3>
              <p className="text-muted-foreground">
                Obtén información sobre las preguntas más frecuentes de tus usuarios para mejorar tu documentación y productos.
              </p>
            </div>
            
            <div className="bg-card rounded-xl border border-border p-6">
              <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                  <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
                  <rect x="9" y="9" width="6" height="6"></rect>
                  <line x1="9" y1="1" x2="9" y2="4"></line>
                  <line x1="15" y1="1" x2="15" y2="4"></line>
                  <line x1="9" y1="20" x2="9" y2="23"></line>
                  <line x1="15" y1="20" x2="15" y2="23"></line>
                  <line x1="20" y1="9" x2="23" y2="9"></line>
                  <line x1="20" y1="14" x2="23" y2="14"></line>
                  <line x1="1" y1="9" x2="4" y2="9"></line>
                  <line x1="1" y1="14" x2="4" y2="14"></line>
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Fácil Integración</h3>
              <p className="text-muted-foreground">
                Implementa la solución rápidamente en múltiples canales sin necesidad de grandes cambios en tu infraestructura actual.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Use Cases */}
      <section className="py-20 px-4 bg-secondary/50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">Casos de Uso</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-card rounded-xl border border-border p-8">
              <h3 className="text-xl font-bold mb-4">Soporte Técnico</h3>
              <p className="text-muted-foreground mb-6">
                Implementa un asistente virtual que resuelva problemas técnicos comunes, guíe a los usuarios a través de procesos de configuración y proporcione soluciones paso a paso basadas en manuales técnicos.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-primary mr-2 mt-0.5">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <span>Resolución de problemas técnicos en tiempo real</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-primary mr-2 mt-0.5">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <span>Guías paso a paso para configuraciones</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-primary mr-2 mt-0.5">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <span>Escalamiento inteligente a agentes humanos cuando es necesario</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-card rounded-xl border border-border p-8">
              <h3 className="text-xl font-bold mb-4">Onboarding de Clientes</h3>
              <p className="text-muted-foreground mb-6">
                Facilita la incorporación de nuevos clientes guiándolos a través de los primeros pasos con tu producto o servicio, respondiendo preguntas sobre funcionalidades y ayudando con la configuración inicial.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-primary mr-2 mt-0.5">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <span>Presentación interactiva de características principales</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-primary mr-2 mt-0.5">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <span>Tutoriales personalizados según perfil del usuario</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-primary mr-2 mt-0.5">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <span>Reducción de abandono durante el proceso de onboarding</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-card rounded-xl border border-border p-8">
              <h3 className="text-xl font-bold mb-4">Ventas y Marketing</h3>
              <p className="text-muted-foreground mb-6">
                Utiliza bots para calificar leads, responder preguntas sobre productos, proporcionar información detallada de características y guiar a los clientes potenciales a través del embudo de ventas.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-primary mr-2 mt-0.5">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <span>Información detallada de productos y servicios</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-primary mr-2 mt-0.5">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <span>Comparativas y recomendaciones personalizadas</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-primary mr-2 mt-0.5">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <span>Generación y calificación automatizada de leads</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-card rounded-xl border border-border p-8">
              <h3 className="text-xl font-bold mb-4">Recursos Humanos</h3>
              <p className="text-muted-foreground mb-6">
                Implementa asistentes virtuales para responder preguntas frecuentes de empleados sobre políticas, procedimientos, beneficios y otros aspectos relacionados con recursos humanos.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-primary mr-2 mt-0.5">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <span>Acceso inmediato a información sobre políticas y procedimientos</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-primary mr-2 mt-0.5">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <span>Asistencia en procesos de onboarding para nuevos empleados</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-primary mr-2 mt-0.5">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <span>Reducción de carga administrativa para el equipo de RRHH</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-card rounded-xl border border-border p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">¿Listo para transformar tu atención al cliente?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Comienza hoy mismo a ofrecer una experiencia superior con nuestros asistentes virtuales con manual integrado.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/">Probar Ahora</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/planes">Ver Planes</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
