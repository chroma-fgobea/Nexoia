import { useState } from "react";
import MainLayout from "@/components/layout/main-layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function PrivacyPage() {
  return (
    <MainLayout>
      <div className="container mx-auto py-12 px-4 max-w-4xl">
        <h1 className="text-3xl font-bold mb-4">Política de Privacidad</h1>
        <p className="text-muted-foreground mb-8">Última actualización: 01 de Junio de 2023</p>
        
        <div className="space-y-6 text-muted-foreground mb-12">
          <p>
            En Nexo.ia, accesible desde https://nexo.ia, una de nuestras principales prioridades es la privacidad de nuestros visitantes. Este documento de Política de Privacidad contiene tipos de información que es recopilada y registrada por Nexo.ia y cómo la utilizamos.
          </p>
          <p>
            Si tienes preguntas adicionales o requieres más información sobre nuestra Política de Privacidad, no dudes en contactarnos a través de nuestro correo electrónico: privacidad@nexo.ia.
          </p>
        </div>
        
        <Accordion type="single" collapsible className="w-full mb-12">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-xl font-medium">
              Información que Recopilamos
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground space-y-4">
              <p>
                Cuando te registras en nuestro sitio, se te solicita proporcionar cierta información personal, que puede incluir:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Tu nombre y apellido</li>
                <li>Dirección de correo electrónico</li>
                <li>Número de teléfono (opcional)</li>
                <li>Nombre de la empresa (en caso de cuentas empresariales)</li>
                <li>Información de facturación y pago (para suscripciones)</li>
              </ul>
              <p>
                Cuando utilizas nuestros servicios de asistente virtual, también podemos recopilar información sobre:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Interacciones con el asistente virtual (mensajes enviados y recibidos)</li>
                <li>Documentos y archivos que subes para entrenar a tu asistente</li>
                <li>Estadísticas de uso y rendimiento de los bots</li>
                <li>Datos de retroalimentación y calificaciones proporcionadas por los usuarios</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-xl font-medium">
              Uso de la Información
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground space-y-4">
              <p>
                La información que recopilamos se utiliza para:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Proporcionar y mantener nuestros servicios</li>
                <li>Mejorar, personalizar y ampliar nuestros servicios</li>
                <li>Entender y analizar cómo utilizas nuestros servicios</li>
                <li>Desarrollar nuevos productos, servicios, características y funcionalidades</li>
                <li>Comunicarnos contigo, ya sea directamente o a través de uno de nuestros socios, para proporcionarte actualizaciones y otra información relacionada con el servicio</li>
                <li>Enviar correos electrónicos de marketing (puedes optar por no recibir estos en cualquier momento)</li>
                <li>Prevenir fraudes y responder a problemas de confianza y seguridad</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-xl font-medium">
              Protección de Datos
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground space-y-4">
              <p>
                Implementamos diversas medidas de seguridad para mantener la seguridad de tu información personal cuando introduces, envías o accedes a tu información personal:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Toda la información sensible se transmite a través de conexiones seguras (SSL)</li>
                <li>Los datos personales se almacenan en servidores seguros ubicados en la Unión Europea</li>
                <li>Implementamos encriptación de datos tanto en tránsito como en reposo</li>
                <li>El acceso a la información personal está restringido a empleados autorizados que necesitan conocer esa información</li>
                <li>Realizamos auditorías de seguridad regulares y pruebas de penetración</li>
                <li>Tenemos políticas y procedimientos internos diseñados para proteger tu información</li>
              </ul>
              <p>
                A pesar de estas medidas, ningún método de transmisión por Internet o de almacenamiento electrónico es 100% seguro. Por lo tanto, no podemos garantizar su seguridad absoluta.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-xl font-medium">
              Cookies y Tecnologías de Seguimiento
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground space-y-4">
              <p>
                Nexo.ia utiliza cookies y tecnologías similares para mejorar tu experiencia en nuestro sitio web y servicios. Las cookies son pequeños archivos de texto que un sitio web coloca en tu dispositivo para recordar información sobre tu visita.
              </p>
              <p>
                Utilizamos los siguientes tipos de cookies:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Cookies esenciales:</strong> necesarias para el funcionamiento básico del sitio web.</li>
                <li><strong>Cookies de funcionalidad:</strong> permiten recordar elecciones que has hecho para proporcionarte funcionalidades mejoradas.</li>
                <li><strong>Cookies analíticas:</strong> nos ayudan a entender cómo los visitantes interactúan con nuestro sitio.</li>
                <li><strong>Cookies de marketing:</strong> utilizadas para rastrear visitantes en los sitios web con el fin de mostrar anuncios relevantes.</li>
              </ul>
              <p>
                Puedes gestionar tus preferencias de cookies a través de la configuración de tu navegador. Para más información, consulta nuestra <Link href="/cookies" className="text-primary hover:underline">Política de Cookies</Link>.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-5">
            <AccordionTrigger className="text-xl font-medium">
              Derechos del Usuario
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground space-y-4">
              <p>
                Si eres residente del Espacio Económico Europeo (EEE), tienes ciertos derechos de protección de datos. Nexo.ia pretende tomar medidas razonables para permitirte corregir, modificar, eliminar o limitar el uso de tu información personal.
              </p>
              <p>
                Tus derechos incluyen:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Derecho de acceso:</strong> puedes solicitar una copia de la información personal que tenemos sobre ti.</li>
                <li><strong>Derecho de rectificación:</strong> puedes solicitar que corrijamos cualquier información que consideres inexacta.</li>
                <li><strong>Derecho al olvido:</strong> puedes solicitar que eliminemos tu información personal en ciertas circunstancias.</li>
                <li><strong>Derecho a la limitación del tratamiento:</strong> puedes solicitar que limitemos el procesamiento de tu información personal en ciertas circunstancias.</li>
                <li><strong>Derecho a la portabilidad de los datos:</strong> puedes solicitar que transfiramos la información que hemos recopilado a otra organización o directamente a ti.</li>
                <li><strong>Derecho a retirar el consentimiento:</strong> puedes retirar tu consentimiento en cualquier momento cuando nos basamos en el consentimiento para procesar tu información personal.</li>
              </ul>
              <p>
                Para ejercer estos derechos, por favor contáctanos a través de privacidad@nexo.ia. Responderemos a tu solicitud dentro de los 30 días siguientes.
              </p>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-6">
            <AccordionTrigger className="text-xl font-medium">
              Transferencias Internacionales de Datos
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground space-y-4">
              <p>
                Nuestra compañía se encuentra en España y nuestros servidores están ubicados en la Unión Europea. Si accedes a nuestros servicios desde fuera de la UE, ten en cuenta que tu información puede ser transferida, almacenada y procesada por nosotros en nuestras instalaciones y por terceros con quienes podemos compartir tu información personal, como se describe en esta política de privacidad.
              </p>
              <p>
                Si transferimos datos a países fuera del EEE, nos aseguraremos de que se implementen medidas adecuadas para proteger tu información personal de acuerdo con esta política de privacidad y la legislación aplicable. Estas medidas pueden incluir:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Transferir a países que han sido reconocidos por la Comisión Europea como que proporcionan un nivel adecuado de protección legal para los datos personales</li>
                <li>Transferir datos a organizaciones que han implementado las Cláusulas Contractuales Estándar aprobadas por la Comisión Europea</li>
                <li>Transferir a organizaciones que participan en un marco reconocido como el Privacy Shield (para transferencias a EE.UU.)</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-7">
            <AccordionTrigger className="text-xl font-medium">
              Cambios a Esta Política
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground space-y-4">
              <p>
                Podemos actualizar nuestra Política de Privacidad de vez en cuando. Te notificaremos cualquier cambio publicando la nueva Política de Privacidad en esta página y, en los cambios significativos, te enviaremos una notificación por correo electrónico.
              </p>
              <p>
                Te recomendamos que revises esta Política de Privacidad periódicamente para cualquier cambio. Los cambios a esta Política de Privacidad son efectivos cuando se publican en esta página.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="outline" asChild>
            <Link href="/cookies">Ver Política de Cookies</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/terms">Ver Términos y Condiciones</Link>
          </Button>
        </div>
      </div>
    </MainLayout>
  );
}
