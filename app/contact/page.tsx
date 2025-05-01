import { Metadata } from 'next'
import Link from 'next/link'
import { Mail, MessageCircle, Building, Phone } from 'lucide-react'
import { MainNav } from '../components/layout/main-nav'
import { Footer } from '../components/layout/footer'
import ContactForm from '../components/contact/contact-form'

export const metadata: Metadata = {
  title: 'Contacto | Nexoia',
  description: 'Ponte en contacto con el equipo de Nexoia. Estamos aquí para ayudarte con cualquier consulta sobre nuestros chatbots con IA.',
}

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <MainNav />
      <main className="flex-1">
        {/* Header */}
        <section className="py-12 md:py-20 lg:py-24 bg-gradient-to-b from-background to-secondary/20">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Contacta con nosotros
              </h1>
              <p className="mt-4 text-xl text-muted-foreground">
                Estamos aquí para ayudarte con cualquier consulta o sugerencia
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-10 items-start">
              {/* Contact Form */}
              <ContactForm />

              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Información de contacto</h2>
                  <p className="text-muted-foreground">
                    Aquí tienes otras formas de ponerte en contacto con nosotros:
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-muted-foreground">
                        <a href="mailto:info@nexoia.com" className="text-primary hover:underline">info@nexoia.com</a>
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Para consultas generales e información
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">Soporte técnico</h3>
                      <p className="text-muted-foreground">
                        <a href="mailto:soporte@nexoia.com" className="text-primary hover:underline">soporte@nexoia.com</a>
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Disponible de lunes a viernes, 9:00 - 18:00 CET
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4">
                      <Building className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">Oficina central</h3>
                      <p className="text-muted-foreground">
                        Calle del Innovación, 42<br />
                        28001 Madrid, España
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">Teléfono</h3>
                      <p className="text-muted-foreground">
                        <a href="tel:+34912345678" className="text-primary hover:underline">+34 91 234 56 78</a>
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Lunes a viernes, 9:00 - 18:00 CET
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-card border rounded-lg p-6">
                  <h3 className="text-lg font-medium mb-4">Horario de atención</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Lunes - Viernes</span>
                      <span>9:00 - 18:00 CET</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sábado</span>
                      <span>10:00 - 15:00 CET</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Domingo</span>
                      <span>Cerrado</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 md:py-16 bg-secondary/30">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold mb-8 text-center">Preguntas frecuentes</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium">¿Cuál es el tiempo de respuesta para consultas por email?</h3>
                  <p className="mt-2 text-muted-foreground">
                    Nos esforzamos por responder a todas las consultas en un plazo de 24 horas laborables. Para consultas urgentes, recomendamos utilizar el soporte telefónico.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium">¿Ofrecen demostraciones personalizadas de la plataforma?</h3>
                  <p className="mt-2 text-muted-foreground">
                    Sí, ofrecemos demostraciones personalizadas para empresas interesadas en nuestros planes Profesional y Empresarial. Puedes solicitar una demostración contactando con nuestro equipo de ventas.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-medium">¿Dónde puedo encontrar documentación técnica sobre la API?</h3>
                  <p className="mt-2 text-muted-foreground">
                    La documentación completa de nuestra API está disponible en el panel de control para usuarios registrados. Si necesitas información específica antes de registrarte, contacta con nuestro equipo de soporte.
                  </p>
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