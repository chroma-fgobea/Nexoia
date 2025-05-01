import { Metadata } from 'next'
import Link from 'next/link'
import { MainNav } from '../components/layout/main-nav'
import { Footer } from '../components/layout/footer'

export const metadata: Metadata = {
  title: 'Política de Cookies | Nexoia',
  description: 'Política de cookies de Nexoia. Información sobre cómo utilizamos cookies en nuestro sitio web.',
}

export default function CookiesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <MainNav />
      <main className="flex-1 container max-w-4xl mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-4">Política de Cookies</h1>
        <p className="text-muted-foreground mb-8">Última actualización: 01 de Mayo de 2025</p>
        
        <div className="space-y-6 text-muted-foreground mb-12">
          <p>
            Esta Política de Cookies explica qué son las cookies y cómo las utilizamos. Deberías leer esta política para entender qué son las cookies, cómo las usamos, los tipos de cookies que usamos, la información que recopilamos usando cookies y cómo se utiliza esa información, y cómo controlar las preferencias de las cookies.
          </p>
          <p>
            Para más información sobre cómo usamos, almacenamos y mantenemos seguros tus datos personales, consulta nuestra <Link href="/privacy" className="text-primary hover:underline">Política de Privacidad</Link>.
          </p>
        </div>
        
        <section className="mb-8">
          <h2 className="text-xl font-medium mb-4">¿Qué son las Cookies?</h2>
          <div className="text-muted-foreground space-y-4">
            <p>
              Las cookies son pequeños archivos de texto que se utilizan para almacenar pequeñas piezas de información. Las cookies son almacenadas en tu dispositivo cuando el sitio web se carga en tu navegador. Estas cookies nos ayudan a hacer que el sitio web funcione correctamente, a hacerlo más seguro, a proporcionar una mejor experiencia de usuario, a entender cómo funciona el sitio web y a analizar qué funciona y dónde necesita mejorarse.
            </p>
          </div>
        </section>
        
        <section className="mb-8">
          <h2 className="text-xl font-medium mb-4">¿Cómo utilizamos las Cookies?</h2>
          <div className="text-muted-foreground space-y-4">
            <p>
              Como la mayoría de los servicios online, nuestro sitio web utiliza cookies de primera parte y de terceros para diversos propósitos. Las cookies de primera parte son principalmente necesarias para que el sitio web funcione correctamente, y no recopilan ninguno de tus datos de identificación personal.
            </p>
            <p>
              Las cookies de terceros utilizadas en nuestro sitio web son principalmente para entender cómo funciona el sitio web, cómo interactúas con nuestro sitio web, mantener nuestros servicios seguros, proporcionar anuncios que sean relevantes para ti, y en general, proporcionarte una mejor y mejorada experiencia de usuario y ayudar a acelerar tus interacciones futuras con nuestro sitio web.
            </p>
          </div>
        </section>
        
        <section className="mb-8">
          <h2 className="text-xl font-medium mb-4">Tipos de Cookies que utilizamos</h2>
          <div className="text-muted-foreground space-y-4">
            <p>
              <strong>Cookies Esenciales:</strong> Estas cookies son necesarias para que el sitio web funcione y no pueden ser desactivadas en nuestros sistemas. Estas cookies no almacenan ninguna información de identificación personal.
            </p>
            <p>
              <strong>Cookies de Funcionalidad:</strong> Estas cookies permiten al sitio web proporcionar funcionalidad y personalización mejoradas. Pueden ser establecidas por nosotros o por proveedores externos cuyos servicios hemos añadido a nuestras páginas.
            </p>
            <p>
              <strong>Cookies Analíticas:</strong> Estas cookies nos permiten contar las visitas y fuentes de tráfico para que podamos medir y mejorar el rendimiento de nuestro sitio. Nos ayudan a saber qué páginas son las más y menos populares y a ver cómo los visitantes se mueven por el sitio.
            </p>
            <p>
              <strong>Cookies de Marketing:</strong> Estas cookies pueden ser establecidas a través de nuestro sitio por nuestros socios publicitarios. Pueden ser utilizadas por esas empresas para construir un perfil de tus intereses y mostrarte anuncios relevantes en otros sitios.
            </p>
          </div>
        </section>
        
        <section className="mb-8">
          <h2 className="text-xl font-medium mb-4">Control de tus Preferencias de Cookies</h2>
          <div className="text-muted-foreground space-y-4">
            <p>
              La mayoría de los navegadores están configurados para aceptar cookies de forma predeterminada. Sin embargo, puedes eliminar o rechazar las cookies en la configuración de tu navegador. Ten en cuenta que dicha acción podría afectar al funcionamiento adecuado de nuestro sitio web.
            </p>
            <p>
              Si quieres revisar o cambiar tus preferencias de cookies después de haberlas establecido, aquí tienes algunos enlaces a las instrucciones para gestionar las cookies en navegadores comunes:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Google Chrome: <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Administrar cookies</a></li>
              <li>Mozilla Firefox: <a href="https://support.mozilla.org/es/kb/eliminar-cookies-para-quitar-informacion-que-sitios-web" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Eliminar cookies</a></li>
              <li>Safari: <a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Gestionar cookies</a></li>
              <li>Microsoft Edge: <a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Eliminar cookies</a></li>
            </ul>
          </div>
        </section>
        
        <section className="mb-8">
          <h2 className="text-xl font-medium mb-4">Cambios a Esta Política de Cookies</h2>
          <div className="text-muted-foreground space-y-4">
            <p>
              Podemos actualizar nuestra Política de Cookies de vez en cuando para reflejar cambios en nuestras prácticas o por otras razones operativas, legales o regulatorias. Por favor, revisa esta Política de Cookies regularmente para estar informado sobre cómo utilizamos las cookies.
            </p>
            <p>
              La última fecha de actualización de esta Política de Cookies se publica al principio de este documento.
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
        </div>
      </main>
      <Footer />
    </div>
  )
}