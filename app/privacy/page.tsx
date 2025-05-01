import { Metadata } from 'next'
import Link from 'next/link'
import { MainNav } from '../components/layout/main-nav'
import { Footer } from '../components/layout/footer'

export const metadata: Metadata = {
  title: 'Política de Privacidad | Nexoia',
  description: 'Política de privacidad de Nexoia. Información sobre cómo recopilamos y utilizamos tus datos.',
}

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <MainNav />
      <main className="flex-1 container max-w-4xl mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-4">Política de Privacidad</h1>
        <p className="text-muted-foreground mb-8">Última actualización: 01 de Mayo de 2025</p>
        
        <div className="space-y-6 text-muted-foreground mb-12">
          <p>
            En Nexoia, accesible desde https://nexoia.vercel.app, una de nuestras principales prioridades es la privacidad de nuestros visitantes. Este documento de Política de Privacidad contiene tipos de información que es recopilada y registrada por Nexoia y cómo la utilizamos.
          </p>
          <p>
            Si tienes preguntas adicionales o requieres más información sobre nuestra Política de Privacidad, no dudes en contactarnos a través de nuestro correo electrónico: privacidad@nexoia.com.
          </p>
        </div>
        
        <section className="mb-8">
          <h2 className="text-xl font-medium mb-4">Información que Recopilamos</h2>
          <div className="text-muted-foreground space-y-4">
            <p>
              Cuando te registras en nuestro sitio, se te solicita proporcionar cierta información personal, que puede incluir:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Tu nombre y apellido</li>
              <li>Tu dirección de correo electrónico</li>
              <li>El nombre de tu empresa (opcional)</li>
              <li>Otra información relacionada con tu cuenta</li>
            </ul>
          </div>
        </section>
        
        <section className="mb-8">
          <h2 className="text-xl font-medium mb-4">Cómo Utilizamos tu Información</h2>
          <div className="text-muted-foreground space-y-4">
            <p>
              Utilizamos la información que recopilamos de diversas formas, incluyendo:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Proporcionar, operar y mantener nuestro sitio web</li>
              <li>Mejorar, personalizar y ampliar nuestro sitio web</li>
              <li>Comprender y analizar cómo utilizas nuestro sitio web</li>
              <li>Desarrollar nuevos productos, servicios y funcionalidades</li>
              <li>Comunicarnos contigo, ya sea directamente o a través de uno de nuestros socios</li>
              <li>Enviarte correos electrónicos relacionados con actualizaciones o información relevante</li>
              <li>Encontrar y prevenir el fraude</li>
            </ul>
          </div>
        </section>
        
        <section className="mb-8">
          <h2 className="text-xl font-medium mb-4">Cookies y Tecnologías de Seguimiento</h2>
          <div className="text-muted-foreground space-y-4">
            <p>
              Como cualquier otro sitio web, Nexoia utiliza "cookies". Estas cookies se utilizan para almacenar información, incluyendo las preferencias de los visitantes y las páginas del sitio web que el visitante accedió o visitó. La información se utiliza para optimizar la experiencia de los usuarios personalizando el contenido de nuestra página web según el tipo de navegador de los visitantes y/u otra información.
            </p>
            <p>
              Para obtener información más general sobre las cookies, lee el artículo "¿Qué son las cookies?" en <Link href="/cookies" className="text-primary hover:underline">nuestra Política de Cookies</Link>.
            </p>
          </div>
        </section>
        
        <section className="mb-8">
          <h2 className="text-xl font-medium mb-4">Políticas de Privacidad de Terceros</h2>
          <div className="text-muted-foreground space-y-4">
            <p>
              La Política de Privacidad de Nexoia no se aplica a otros anunciantes o sitios web. Por lo tanto, te aconsejamos que consultes las respectivas Políticas de Privacidad de estos servidores de anuncios de terceros para obtener información más detallada. Puede incluir sus prácticas e instrucciones sobre cómo excluirse de ciertas opciones.
            </p>
          </div>
        </section>
        
        <section className="mb-8">
          <h2 className="text-xl font-medium mb-4">Tus Derechos de Privacidad</h2>
          <div className="text-muted-foreground space-y-4">
            <p>
              Dependiendo de dónde residas, puedes tener ciertos derechos con respecto a tus datos personales, como el derecho a solicitar acceso, corrección, eliminación, restricción, objeción, portabilidad o retirada del consentimiento.
            </p>
            <p>
              Para ejercer cualquiera de estos derechos, por favor contáctanos utilizando la información de contacto proporcionada al final de esta política.
            </p>
          </div>
        </section>
        
        <section className="mb-8">
          <h2 className="text-xl font-medium mb-4">Cambios a Esta Política</h2>
          <div className="text-muted-foreground space-y-4">
            <p>
              Podemos actualizar nuestra Política de Privacidad de vez en cuando. Te notificaremos cualquier cambio publicando la nueva Política de Privacidad en esta página y, en los cambios significativos, te enviaremos una notificación por correo electrónico.
            </p>
            <p>
              Te recomendamos que revises esta Política de Privacidad periódicamente para cualquier cambio. Los cambios a esta Política de Privacidad son efectivos cuando se publican en esta página.
            </p>
          </div>
        </section>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
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