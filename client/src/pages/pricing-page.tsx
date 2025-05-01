import MainLayout from "@/components/layout/main-layout";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function PricingPage() {
  return (
    <MainLayout>
      <section className="py-16 px-4 bg-secondary/50">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Planes y Precios</h1>
            <p className="text-xl text-muted-foreground">
              Selecciona el plan que mejor se adapte a tus necesidades y calcula el costo según el número de visitas esperadas.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Plan PRO */}
            <div className="bg-card rounded-xl p-6 border border-border flex flex-col">
              <h3 className="text-xl font-bold mb-2">PRO</h3>
              <p className="text-muted-foreground mb-6">Funcionalidades avanzadas para chatbots profesionales</p>
              
              <div className="mb-6">
                <p className="text-4xl font-bold">125,00 €</p>
                <p className="text-sm text-muted-foreground">por mes • 10.000 usuarios incluidos</p>
              </div>
              
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start">
                  <Check className="text-primary mt-1 mr-2 h-5 w-5" />
                  <span>Mensajes ilimitados por mes</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-primary mt-1 mr-2 h-5 w-5" />
                  <span>Variables</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-primary mt-1 mr-2 h-5 w-5" />
                  <span>Etiquetas de contactos</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-primary mt-1 mr-2 h-5 w-5" />
                  <span>30 desencadenantes de flujos</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-primary mt-1 mr-2 h-5 w-5" />
                  <span>Obtener datos externos de una URL</span>
                </li>
                <li className="text-sm text-muted-foreground">Y 2 características más...</li>
              </ul>
              
              <div className="mt-auto space-y-3">
                <Button className="w-full">
                  Comprar
                </Button>
                <Button variant="link" className="w-full flex justify-center items-center text-muted-foreground hover:text-foreground">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 mr-2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="16" x2="12" y2="12"></line>
                    <line x1="12" y1="8" x2="12.01" y2="8"></line>
                  </svg>
                  Detalles
                </Button>
              </div>
            </div>
            
            {/* Plan Business */}
            <div className="bg-card rounded-xl p-6 border border-border flex flex-col">
              <h3 className="text-xl font-bold mb-2">Business</h3>
              <p className="text-muted-foreground mb-6">Funcionalidades avanzadas para chatbots profesionales</p>
              
              <div className="mb-6">
                <p className="text-4xl font-bold">189,00 €</p>
                <p className="text-sm text-muted-foreground">por mes • 20.000 usuarios incluidos</p>
              </div>
              
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start">
                  <Check className="text-primary mt-1 mr-2 h-5 w-5" />
                  <span>Mensajes ilimitados por mes</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-primary mt-1 mr-2 h-5 w-5" />
                  <span>Variables</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-primary mt-1 mr-2 h-5 w-5" />
                  <span>Etiquetas de contactos</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-primary mt-1 mr-2 h-5 w-5" />
                  <span>Desencadenadores y flujos ilimitados</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-primary mt-1 mr-2 h-5 w-5" />
                  <span>Obtener datos externos de una URL</span>
                </li>
                <li className="text-sm text-muted-foreground">Y 4 características más...</li>
              </ul>
              
              <div className="mt-auto space-y-3">
                <Button className="w-full">
                  Comprar
                </Button>
                <Button variant="link" className="w-full flex justify-center items-center text-muted-foreground hover:text-foreground">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 mr-2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="16" x2="12" y2="12"></line>
                    <line x1="12" y1="8" x2="12.01" y2="8"></line>
                  </svg>
                  Detalles
                </Button>
              </div>
            </div>
            
            {/* Plan Enterprise */}
            <div className="bg-card rounded-xl p-6 border border-border flex flex-col">
              <h3 className="text-xl font-bold mb-2">Enterprise</h3>
              <p className="text-muted-foreground mb-6">Funcionalidades avanzadas para chatbots profesionales</p>
              
              <div className="mb-6">
                <p className="text-4xl font-bold">299,00 €</p>
                <p className="text-sm text-muted-foreground">por mes • 50.000 usuarios incluidos</p>
              </div>
              
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start">
                  <Check className="text-primary mt-1 mr-2 h-5 w-5" />
                  <span>50.000 usuarios incluidos</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-primary mt-1 mr-2 h-5 w-5" />
                  <span>Todo lo incluido en Business</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-primary mt-1 mr-2 h-5 w-5" />
                  <span>Soporte prioritario 24/7</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-primary mt-1 mr-2 h-5 w-5" />
                  <span>Onboarding personalizado</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-primary mt-1 mr-2 h-5 w-5" />
                  <span>Gestor de cuenta dedicado</span>
                </li>
                <li className="text-sm text-muted-foreground">Y 5 características más...</li>
              </ul>
              
              <div className="mt-auto space-y-3">
                <Button className="w-full">
                  Comprar
                </Button>
                <Button variant="link" className="w-full flex justify-center items-center text-muted-foreground hover:text-foreground">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 mr-2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="16" x2="12" y2="12"></line>
                    <line x1="12" y1="8" x2="12.01" y2="8"></line>
                  </svg>
                  Detalles
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Additional Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Funcionalidades Incluidas</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-card rounded-xl border border-border">
              <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Analíticas Avanzadas</h3>
              <p className="text-muted-foreground">Obtén información detallada sobre el rendimiento de tus bots, patrones de uso y estadísticas de conversación.</p>
            </div>
            
            <div className="p-6 bg-card rounded-xl border border-border">
              <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 9.9-1"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Seguridad de Datos</h3>
              <p className="text-muted-foreground">Todos nuestros planes incluyen encriptación de datos, autenticación segura y cumplimiento con regulaciones de privacidad.</p>
            </div>
            
            <div className="p-6 bg-card rounded-xl border border-border">
              <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                  <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Personalización Total</h3>
              <p className="text-muted-foreground">Adapta la apariencia y comportamiento de tus bots para que coincidan perfectamente con tu marca e identidad visual.</p>
            </div>
            
            <div className="p-6 bg-card rounded-xl border border-border">
              <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Integraciones</h3>
              <p className="text-muted-foreground">Conecta tus bots con tu CRM, sistemas de atención al cliente, herramientas de marketing y más de 50 plataformas.</p>
            </div>
            
            <div className="p-6 bg-card rounded-xl border border-border">
              <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Múltiples Canales</h3>
              <p className="text-muted-foreground">Despliega tus bots en tu sitio web, aplicaciones móviles, WhatsApp, Facebook Messenger, Telegram y más.</p>
            </div>
            
            <div className="p-6 bg-card rounded-xl border border-border">
              <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Soporte Técnico</h3>
              <p className="text-muted-foreground">Accede a nuestro equipo de soporte por email, chat en vivo o teléfono según el plan seleccionado.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 px-4 bg-secondary/50">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-12">Preguntas Frecuentes</h2>
          
          <div className="space-y-6">
            <div className="bg-card rounded-xl p-6 border border-border">
              <h3 className="text-xl font-medium mb-2">¿Puedo cambiar de plan en cualquier momento?</h3>
              <p className="text-muted-foreground">Sí, puedes actualizar o cambiar tu plan en cualquier momento. Los cambios se aplicarán al inicio del siguiente período de facturación.</p>
            </div>
            
            <div className="bg-card rounded-xl p-6 border border-border">
              <h3 className="text-xl font-medium mb-2">¿Qué ocurre si supero el límite de usuarios?</h3>
              <p className="text-muted-foreground">Si superas el límite de usuarios incluidos en tu plan, se aplicará un cargo adicional proporcional por cada usuario extra. Te notificaremos cuando te acerques al límite para que puedas decidir si actualizas tu plan.</p>
            </div>
            
            <div className="bg-card rounded-xl p-6 border border-border">
              <h3 className="text-xl font-medium mb-2">¿Ofrecen un período de prueba?</h3>
              <p className="text-muted-foreground">Sí, ofrecemos un período de prueba gratuito de 14 días en todos nuestros planes, sin necesidad de tarjeta de crédito. Durante este tiempo, podrás explorar todas las funcionalidades sin restricciones.</p>
            </div>
            
            <div className="bg-card rounded-xl p-6 border border-border">
              <h3 className="text-xl font-medium mb-2">¿Necesito conocimientos técnicos para usar Nexo.ia?</h3>
              <p className="text-muted-foreground">No, nuestra plataforma está diseñada para ser intuitiva y fácil de usar. No se requieren conocimientos de programación. Para funcionalidades más avanzadas, ofrecemos documentación detallada y soporte técnico.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-card border border-border rounded-xl p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">¿Listo para empezar?</h2>
            <p className="text-xl text-muted-foreground mb-8">Crea tu primer bot con manual integrado en minutos y mejora la experiencia de tus usuarios.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">Comenzar Gratis</Button>
              <Button size="lg" variant="outline">Contactar con Ventas</Button>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
