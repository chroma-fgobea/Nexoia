import { Metadata } from 'next'
import Link from 'next/link'
import { Check } from 'lucide-react'
import { MainNav } from '../components/layout/main-nav'
import { Footer } from '../components/layout/footer'

export const metadata: Metadata = {
  title: 'Planes y Precios | Nexoia',
  description: 'Descubre nuestros planes y precios para chatbots con IA para tu documentación técnica.',
}

interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
}

const plans: PricingPlan[] = [
  {
    name: "Free",
    price: "€0",
    description: "Para probar la plataforma e implementaciones simples.",
    features: [
      "1 bot activo",
      "Hasta 3 manuales",
      "Máximo 100 consultas/mes",
      "Soporte por email",
      "Integración básica"
    ],
    cta: "Comenzar gratis"
  },
  {
    name: "Profesional",
    price: "€49",
    description: "Para equipos y empresas con necesidades de soporte técnico moderadas.",
    features: [
      "5 bots activos",
      "Hasta 15 manuales",
      "Máximo 2,000 consultas/mes",
      "Soporte prioritario",
      "Personalización visual",
      "Estadísticas básicas",
      "Integración avanzada"
    ],
    cta: "Suscribirse",
    popular: true
  },
  {
    name: "Empresarial",
    price: "€199",
    description: "Para organizaciones con alta demanda de soporte y necesidades complejas.",
    features: [
      "Bots ilimitados",
      "Manuales ilimitados",
      "Consultas ilimitadas",
      "Soporte dedicado 24/7",
      "Personalización completa",
      "Estadísticas avanzadas",
      "API completa",
      "Exportación de datos",
      "SLA garantizado"
    ],
    cta: "Contactar ventas"
  }
];

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <MainNav />
      <main className="flex-1">
        {/* Header */}
        <section className="py-12 md:py-20 lg:py-24 bg-gradient-to-b from-background to-secondary/20">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Planes simples y transparentes
              </h1>
              <p className="mt-4 text-xl text-muted-foreground">
                Elige el plan que mejor se adapte a tus necesidades de soporte técnico
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-3 gap-6">
              {plans.map((plan) => (
                <div 
                  key={plan.name}
                  className={`relative rounded-lg border overflow-hidden ${
                    plan.popular ? 'border-primary shadow-lg' : 'border-border'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 right-0 -mt-2 -mr-2">
                      <div className="bg-primary text-primary-foreground text-xs font-medium py-1 px-3 rounded-full">
                        Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold">{plan.name}</h3>
                    <div className="mt-4 mb-2">
                      <span className="text-3xl font-bold">{plan.price}</span>
                      <span className="text-muted-foreground">/mes</span>
                    </div>
                    <p className="text-muted-foreground text-sm mb-6">{plan.description}</p>
                    
                    <Link
                      href={plan.name === "Empresarial" ? "/contact" : "/auth"}
                      className={`w-full inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ${
                        plan.popular 
                          ? 'bg-primary text-primary-foreground hover:bg-primary/90' 
                          : 'border border-input bg-background hover:bg-accent hover:text-accent-foreground'
                      } h-10 px-4 py-2`}
                    >
                      {plan.cta}
                    </Link>
                  </div>
                  
                  <div className="bg-muted p-6 border-t">
                    <ul className="space-y-2">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-sm">
                          <Check className="mr-2 h-4 w-4 text-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 md:py-16 bg-secondary/30">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-10">
              <h2 className="text-3xl font-bold">Preguntas frecuentes</h2>
              <p className="mt-2 text-muted-foreground">Respuestas a las preguntas más comunes sobre nuestros planes</p>
            </div>
            
            <div className="max-w-3xl mx-auto divide-y">
              <div className="py-6">
                <h3 className="text-lg font-medium">¿Puedo cambiar de plan en cualquier momento?</h3>
                <p className="mt-2 text-muted-foreground">
                  Sí, puedes actualizar o degradar tu plan en cualquier momento. Los cambios se aplicarán al inicio del siguiente período de facturación.
                </p>
              </div>
              <div className="py-6">
                <h3 className="text-lg font-medium">¿Qué ocurre si supero el límite de consultas?</h3>
                <p className="mt-2 text-muted-foreground">
                  Si superas el límite de consultas de tu plan, seguirás teniendo acceso a los chatbots, pero recibirás una notificación para actualizar tu plan. No se aplicarán cargos adicionales automáticos.
                </p>
              </div>
              <div className="py-6">
                <h3 className="text-lg font-medium">¿Ofrecen descuentos para organizaciones sin fines de lucro o educativas?</h3>
                <p className="mt-2 text-muted-foreground">
                  Sí, ofrecemos planes especiales para organizaciones educativas y sin fines de lucro. Contáctanos para más información.
                </p>
              </div>
              <div className="py-6">
                <h3 className="text-lg font-medium">¿Puedo probar la plataforma antes de pagar?</h3>
                <p className="mt-2 text-muted-foreground">
                  Por supuesto, nuestro plan Free te permite probar todas las funcionalidades básicas sin compromiso. No requerimos datos de pago para la prueba gratuita.
                </p>
              </div>
              <div className="py-6">
                <h3 className="text-lg font-medium">¿Los precios incluyen impuestos?</h3>
                <p className="mt-2 text-muted-foreground">
                  Los precios mostrados no incluyen impuestos. El IVA u otros impuestos aplicables se añadirán en el momento de la facturación según tu ubicación.
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
                ¿Necesitas un plan personalizado?
              </h2>
              <p className="text-primary-foreground/90">
                Contacta con nuestro equipo de ventas para discutir soluciones personalizadas para tu organización.
              </p>
              <div className="pt-4">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none bg-white text-primary hover:bg-white/90 h-10 px-4 py-2"
                >
                  Contactar con ventas
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