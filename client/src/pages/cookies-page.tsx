import { useState } from "react";
import MainLayout from "@/components/layout/main-layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function CookiesPage() {
  return (
    <MainLayout>
      <div className="container mx-auto py-12 px-4 max-w-4xl">
        <h1 className="text-3xl font-bold mb-4">Política de Cookies</h1>
        <p className="text-muted-foreground mb-8">Última actualización: 01 de Junio de 2023</p>
        
        <div className="space-y-6 text-muted-foreground mb-12">
          <p>
            Esta Política de Cookies explica qué son las cookies y cómo las utilizamos en Nexo.ia. Debes leer esta política para entender qué son las cookies, cómo las usamos, los tipos de cookies que utilizamos, la información que recopilamos usando cookies y cómo se utiliza esa información, y cómo controlar tus preferencias de cookies.
          </p>
          <p>
            Al continuar navegando o utilizando nuestro sitio web, aceptas nuestro uso de cookies de acuerdo con esta Política de Cookies. Puedes cambiar tus preferencias de cookies en cualquier momento ajustando la configuración de tu navegador.
          </p>
        </div>
        
        <Accordion type="single" collapsible className="w-full mb-12">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-xl font-medium">
              ¿Qué son las Cookies?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground space-y-4">
              <p>
                Las cookies son pequeños archivos de texto que se almacenan en tu ordenador, tablet, teléfono móvil u otro dispositivo cuando visitas un sitio web. Se utilizan ampliamente para hacer que los sitios web funcionen, o funcionen de manera más eficiente, así como para proporcionar información a los propietarios del sitio.
              </p>
              <p>
                Las cookies pueden ser "cookies de sesión" o "cookies persistentes". Las cookies de sesión se eliminan automáticamente cuando cierras tu navegador, mientras que las cookies persistentes permanecen en tu dispositivo hasta que caducan o hasta que las eliminas manualmente.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-xl font-medium">
              ¿Cómo Utilizamos las Cookies?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground space-y-4">
              <p>
                Utilizamos cookies por varias razones que se detallan a continuación. Desafortunadamente, en la mayoría de los casos, no existen opciones estándar de la industria para deshabilitar las cookies sin deshabilitar completamente la funcionalidad y características que añaden a nuestro sitio. Se recomienda que dejes todas las cookies activadas si no estás seguro de si las necesitas o no, en caso de que se utilicen para proporcionar un servicio que utilizas.
              </p>
              <p>
                Específicamente, utilizamos cookies para:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Entender y guardar las preferencias del usuario para futuras visitas</li>
                <li>Mantener a los usuarios conectados a sus cuentas</li>
                <li>Recopilar información analítica para mejorar el rendimiento y la funcionalidad del sitio</li>
                <li>Recordar las preferencias de idioma y otras configuraciones</li>
                <li>Realizar seguimiento de las estadísticas de uso para entender qué páginas son las más populares</li>
                <li>Identificar cómo han llegado los usuarios a nuestro sitio (por ejemplo, a través de una campaña de marketing)</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-xl font-medium">
              Tipos de Cookies que Utilizamos
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground space-y-4">
              <Table>
                <TableCaption>Tipos de cookies utilizadas en Nexo.ia</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[200px]">Tipo de Cookie</TableHead>
                    <TableHead>Descripción</TableHead>
                    <TableHead className="text-right">Duración</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Cookies Esenciales</TableCell>
                    <TableCell>Estas cookies son necesarias para el funcionamiento del sitio web y no pueden ser desactivadas en nuestros sistemas. Normalmente solo se establecen en respuesta a acciones realizadas por ti que equivalen a una solicitud de servicios, como establecer tus preferencias de privacidad, iniciar sesión o completar formularios.</TableCell>
                    <TableCell className="text-right">Sesión / 1 año</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Cookies de Funcionalidad</TableCell>
                    <TableCell>Estas cookies permiten que el sitio proporcione funcionalidades y personalización mejoradas. Pueden ser establecidas por nosotros o por proveedores externos cuyos servicios hemos añadido a nuestras páginas.</TableCell>
                    <TableCell className="text-right">1 año</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Cookies Analíticas</TableCell>
                    <TableCell>Estas cookies nos permiten contar visitas y fuentes de tráfico para que podamos medir y mejorar el rendimiento de nuestro sitio. Nos ayudan a saber qué páginas son las más y menos populares y a ver cómo los visitantes se mueven por el sitio.</TableCell>
                    <TableCell className="text-right">2 años</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Cookies de Marketing</TableCell>
                    <TableCell>Estas cookies pueden ser establecidas a través de nuestro sitio por nuestros socios de publicidad. Pueden ser utilizadas por esas empresas para crear un perfil de tus intereses y mostrarte anuncios relevantes en otros sitios.</TableCell>
                    <TableCell className="text-right">90 días</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-xl font-medium">
              Cookies de Terceros
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground space-y-4">
              <p>
                En algunos casos especiales, también utilizamos cookies proporcionadas por terceros de confianza. La siguiente sección detalla qué cookies de terceros puedes encontrar a través de este sitio.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Este sitio utiliza Google Analytics, una de las soluciones analíticas más extendidas y fiables en la web, que nos ayuda a entender cómo utilizas el sitio y las formas en que podemos mejorar tu experiencia. Estas cookies pueden rastrear cosas como el tiempo que pasas en el sitio y las páginas que visitas para que podamos seguir produciendo contenido atractivo.</li>
                <li>De vez en cuando probamos nuevas funciones y hacemos cambios sutiles en la apariencia del sitio. Cuando todavía estamos probando nuevas funciones, estas cookies pueden ser utilizadas para asegurar que recibas una experiencia consistente mientras estás en el sitio, mientras entendemos qué optimizaciones aprecian más nuestros usuarios.</li>
                <li>A medida que vendemos productos, es importante que entendamos las estadísticas sobre cuántos visitantes de nuestro sitio realmente compran, y por lo tanto, este es el tipo de datos que estas cookies rastrearán. Esto es importante para ti ya que significa que podemos hacer predicciones de negocio con precisión que nos permiten monitorear nuestros costos de publicidad y productos para asegurar el mejor precio posible.</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-5">
            <AccordionTrigger className="text-xl font-medium">
              Control de tus Preferencias de Cookies
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground space-y-4">
              <p>
                Puedes controlar y/o eliminar las cookies como desees. Puedes eliminar todas las cookies que ya están en tu ordenador y puedes configurar la mayoría de los navegadores para evitar que se coloquen. Sin embargo, si haces esto, es posible que tengas que ajustar manualmente algunas preferencias cada vez que visites un sitio y algunos servicios y funcionalidades pueden no funcionar.
              </p>
              <p>
                A continuación, te indicamos cómo puedes ajustar tus preferencias de cookies en los navegadores más populares:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Google Chrome:</strong> Ajustes &gt; Privacidad y seguridad &gt; Cookies y otros datos del sitio</li>
                <li><strong>Mozilla Firefox:</strong> Menú &gt; Opciones &gt; Privacidad y Seguridad &gt; Cookies y datos del sitio</li>
                <li><strong>Safari:</strong> Preferencias &gt; Privacidad &gt; Cookies y datos del sitio web</li>
                <li><strong>Microsoft Edge:</strong> Configuración y más &gt; Configuración &gt; Cookies y permisos del sitio</li>
              </ul>
              <p>
                También puedes visitar <a href="https://www.aboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">aboutcookies.org</a> para obtener información detallada sobre cómo eliminar o bloquear cookies en una amplia variedad de navegadores.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-6">
            <AccordionTrigger className="text-xl font-medium">
              Cambios a Esta Política
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground space-y-4">
              <p>
                Podemos actualizar nuestra Política de Cookies de vez en cuando para reflejar, por ejemplo, cambios en las cookies que utilizamos o por otras razones operativas, legales o regulatorias. Por lo tanto, visita esta Política de Cookies regularmente para mantenerte informado sobre nuestro uso de cookies y tecnologías relacionadas.
              </p>
              <p>
                La fecha en la parte superior de esta Política de Cookies indica cuándo se actualizó por última vez.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="outline" asChild>
            <Link href="/privacy">Ver Política de Privacidad</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/terms">Ver Términos y Condiciones</Link>
          </Button>
        </div>
      </div>
    </MainLayout>
  );
}
