import { Metadata } from 'next'
import Link from 'next/link'
import { MainNav } from '../components/layout/main-nav'
import { Footer } from '../components/layout/footer'

export const metadata: Metadata = {
  title: 'Términos y Condiciones | Nexoia',
  description: 'Términos y condiciones de uso de la plataforma Nexoia.',
}

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <MainNav />
      <main className="flex-1 container max-w-4xl mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-4">Términos y Condiciones</h1>
        <p className="text-muted-foreground mb-8">Última actualización: 01 de Mayo de 2025</p>
        
        <div className="space-y-6 text-muted-foreground mb-12">
          <p>
            Bienvenido a Nexoia. Los siguientes términos y condiciones ("Términos") rigen el uso de nuestro sitio web, productos y servicios ("Servicios") operados por Nexoia ("nosotros", "nuestro" o "nos").
          </p>
          <p>
            Al acceder o utilizar nuestros Servicios, estás aceptando cumplir y quedar sujeto a estos Términos. Si no estás de acuerdo con alguna parte de los términos, no tendrás derecho a acceder a los Servicios.
          </p>
        </div>
        
        <section className="mb-8">
          <h2 className="text-xl font-medium mb-4">1. Acceso y Uso de los Servicios</h2>
          <div className="text-muted-foreground space-y-4">
            <p>
              1.1 <strong>Requisitos de Cuenta:</strong> Para acceder a determinadas funciones de nuestros Servicios, deberás crear una cuenta. Eres responsable de mantener la confidencialidad de tu cuenta y contraseña, y de restringir el acceso a tu computadora o dispositivo. Aceptas asumir la responsabilidad de todas las actividades que ocurran bajo tu cuenta o contraseña.
            </p>
            <p>
              1.2 <strong>Uso Aceptable:</strong> Acuerdas utilizar nuestros Servicios solo para fines legítimos y de acuerdo con estos Términos. No utilizarás los Servicios para ningún propósito ilegal o prohibido por estos Términos, o para solicitar la realización de cualquier actividad ilegal o que infrinja los derechos de terceros.
            </p>
            <p>
              1.3 <strong>Restricciones de Uso:</strong> Nos reservamos el derecho a restringir, suspender o terminar tu acceso a los Servicios, sin previo aviso y a nuestra sola discreción, si determinamos que has violado cualquier parte de estos Términos.
            </p>
          </div>
        </section>
        
        <section className="mb-8">
          <h2 className="text-xl font-medium mb-4">2. Suscripciones y Pagos</h2>
          <div className="text-muted-foreground space-y-4">
            <p>
              2.1 <strong>Planes de Suscripción:</strong> Ofrecemos varios planes de suscripción, incluido un plan gratuito con funcionalidades limitadas y planes de pago con características adicionales. Los detalles de cada plan están disponibles en nuestra página de <Link href="/pricing" className="text-primary hover:underline">Precios</Link>.
            </p>
            <p>
              2.2 <strong>Facturación:</strong> Para los planes de pago, se te facturará por adelantado en una base recurrente (mensual o anual, dependiendo del plan elegido). Todas las tarifas son en Euros (€) y no son reembolsables, excepto donde lo exija la ley.
            </p>
            <p>
              2.3 <strong>Cambios en las Tarifas:</strong> Nos reservamos el derecho a cambiar nuestras tarifas de suscripción en cualquier momento, con un aviso previo de al menos 30 días. Tales cambios en las tarifas no se aplicarán a los períodos de facturación existentes, sino a futuras renovaciones.
            </p>
            <p>
              2.4 <strong>Cancelaciones:</strong> Puedes cancelar tu suscripción en cualquier momento desde tu panel de control o contactando a nuestro soporte. La cancelación será efectiva al final del período de facturación actual.
            </p>
          </div>
        </section>
        
        <section className="mb-8">
          <h2 className="text-xl font-medium mb-4">3. Contenido y Propiedad Intelectual</h2>
          <div className="text-muted-foreground space-y-4">
            <p>
              3.1 <strong>Tu Contenido:</strong> Retienes todos los derechos sobre cualquier contenido que envíes, publiques o muestres en o a través de nuestros Servicios ("Tu Contenido"). Al subir Tu Contenido a nuestros Servicios, nos otorgas una licencia mundial, no exclusiva, libre de regalías para usar, almacenar, transformar, mostrar, reproducir y distribuir Tu Contenido únicamente con el propósito de operar, desarrollar y mejorar nuestros Servicios.
            </p>
            <p>
              3.2 <strong>Nuestro Contenido:</strong> A menos que se indique lo contrario, todos los materiales en nuestros Servicios, incluyendo, sin limitación, nombres, logotipos, marcas, imágenes, ilustraciones, gráficos, textos, interfaces de usuario, diseños, código informático y contenidos, son propiedad de Nexoia o nuestros licenciantes y están protegidos por derechos de autor, marcas registradas y otras leyes de propiedad intelectual.
            </p>
            <p>
              3.3 <strong>Uso del Contenido:</strong> No puedes modificar, reproducir, distribuir, crear trabajos derivados, presentar públicamente, realizar públicamente o reutilizar cualquiera de nuestros contenidos sin nuestro permiso previo por escrito.
            </p>
          </div>
        </section>
        
        <section className="mb-8">
          <h2 className="text-xl font-medium mb-4">4. Limitación de Responsabilidad</h2>
          <div className="text-muted-foreground space-y-4">
            <p>
              4.1 <strong>Disponibilidad del Servicio:</strong> Aunque nos esforzamos por proporcionar un servicio ininterrumpido, no garantizamos que los Servicios estarán disponibles en todo momento, seguros o libres de errores. Podemos realizar cambios, suspender o discontinuar cualquier aspecto de los Servicios en cualquier momento sin previo aviso.
            </p>
            <p>
              4.2 <strong>Exclusión de Garantías:</strong> Los Servicios se proporcionan "tal cual" y "según disponibilidad" sin ningún tipo de garantía, expresa o implícita, incluyendo, pero no limitado a, garantías implícitas de comerciabilidad, idoneidad para un propósito particular y no infracción.
            </p>
            <p>
              4.3 <strong>Limitación de Daños:</strong> En ningún caso seremos responsables por daños directos, indirectos, incidentales, especiales, consecuentes o punitivos, incluyendo, sin limitación, pérdida de beneficios, datos, uso, buena voluntad, u otras pérdidas intangibles, resultantes de tu acceso o uso o imposibilidad de acceder o usar los Servicios.
            </p>
          </div>
        </section>
        
        <section className="mb-8">
          <h2 className="text-xl font-medium mb-4">5. Privacidad y Datos</h2>
          <div className="text-muted-foreground space-y-4">
            <p>
              5.1 <strong>Política de Privacidad:</strong> Nuestra política de privacidad, disponible en <Link href="/privacy" className="text-primary hover:underline">Política de Privacidad</Link>, describe cómo recopilamos, usamos y compartimos tu información personal cuando utilizas nuestros Servicios. Al utilizar nuestros Servicios, aceptas nuestras prácticas de recopilación y uso de datos como se describe en la política de privacidad.
            </p>
            <p>
              5.2 <strong>Seguridad de Datos:</strong> Implementamos medidas de seguridad diseñadas para proteger tus datos, sin embargo, ningún método de transmisión por Internet o método de almacenamiento electrónico es 100% seguro. Por tanto, no podemos garantizar su seguridad absoluta.
            </p>
          </div>
        </section>
        
        <section className="mb-8">
          <h2 className="text-xl font-medium mb-4">6. Cambios a estos Términos</h2>
          <div className="text-muted-foreground space-y-4">
            <p>
              Nos reservamos el derecho, a nuestra sola discreción, de modificar o reemplazar estos Términos en cualquier momento. Si una revisión es material, intentaremos proporcionar un aviso con al menos 30 días de anticipación antes de que entren en vigor los nuevos términos. Lo que constituye un cambio material será determinado a nuestra sola discreción.
            </p>
            <p>
              Al continuar accediendo o utilizando nuestros Servicios después de que esas revisiones entren en vigor, aceptas estar sujeto a los términos revisados. Si no estás de acuerdo con los nuevos términos, por favor deja de usar los Servicios.
            </p>
          </div>
        </section>
        
        <section className="mb-8">
          <h2 className="text-xl font-medium mb-4">7. Contacto</h2>
          <div className="text-muted-foreground space-y-4">
            <p>
              Si tienes alguna pregunta sobre estos Términos, por favor contáctanos a legal@nexoia.com.
            </p>
          </div>
        </section>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/privacy" 
            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
          >
            Ver Política de Privacidad
          </Link>
          <Link 
            href="/cookies" 
            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
          >
            Ver Política de Cookies
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}