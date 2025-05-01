import { useState } from "react";
import MainLayout from "@/components/layout/main-layout";
import { useAuth } from "@/hooks/use-auth";
import DashboardLayout from "@/components/layout/dashboard-layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function ManualPage() {
  const { user } = useAuth();
  const [searchQuery, setSearchQuery] = useState("");
  
  // Manual sections
  const manualSections = [
    {
      title: "Introducción",
      content: `
        <h3 class="text-lg font-semibold mb-3">Bienvenido a Nexo.ia</h3>
        <p class="mb-4">Nexo.ia es una plataforma avanzada de asistentes virtuales que integra manuales de usuario para proporcionar respuestas precisas y contextuales. Esta guía te ayudará a comprender cómo utilizar nuestra plataforma de manera efectiva.</p>
        
        <h4 class="text-md font-semibold mb-2">¿Qué es Nexo.ia?</h4>
        <p class="mb-4">Nexo.ia es una solución que permite crear asistentes virtuales inteligentes capaces de responder preguntas utilizando la información de manuales de usuario y bases de conocimiento. La plataforma está diseñada para mejorar la experiencia de soporte al cliente, reducir los tiempos de respuesta y proporcionar información precisa.</p>
        
        <h4 class="text-md font-semibold mb-2">Principales características</h4>
        <ul class="list-disc pl-5 mb-4 space-y-1">
          <li>Integración de manuales de usuario en formato digital</li>
          <li>Análisis de consultas mediante procesamiento de lenguaje natural</li>
          <li>Respuestas contextuales basadas en la documentación oficial</li>
          <li>Estadísticas detalladas de uso y efectividad</li>
          <li>Personalización de flujos de conversación</li>
          <li>Soporte para múltiples canales de comunicación</li>
        </ul>
      `,
    },
    {
      title: "Primeros pasos",
      content: `
        <h3 class="text-lg font-semibold mb-3">Comenzando con Nexo.ia</h3>
        <p class="mb-4">Para empezar a utilizar Nexo.ia, sigue estos pasos básicos:</p>
        
        <h4 class="text-md font-semibold mb-2">1. Crear una cuenta</h4>
        <p class="mb-4">Regístrate en la plataforma proporcionando la información básica. Una vez completado el registro, recibirás un correo electrónico para verificar tu cuenta.</p>
        
        <h4 class="text-md font-semibold mb-2">2. Iniciar sesión en el dashboard</h4>
        <p class="mb-4">Accede a tu dashboard personal donde podrás gestionar todos los aspectos de tus asistentes virtuales.</p>
        
        <h4 class="text-md font-semibold mb-2">3. Crear tu primer bot</h4>
        <p class="mb-4">Desde la sección "Mis Bots", haz clic en "Nuevo Bot" y sigue el asistente de configuración para definir el nombre, propósito y tipo de bot.</p>
        
        <h4 class="text-md font-semibold mb-2">4. Subir documentación</h4>
        <p class="mb-4">Sube manuales de usuario, FAQs u otros documentos para entrenar a tu asistente virtual. Los formatos aceptados incluyen PDF, DOCX, HTML y texto plano.</p>
        
        <h4 class="text-md font-semibold mb-2">5. Entrenar el bot</h4>
        <p class="mb-4">Después de subir la documentación, el sistema procesará automáticamente la información. Puedes revisar y ajustar los resultados del entrenamiento desde el panel de configuración.</p>
        
        <h4 class="text-md font-semibold mb-2">6. Probar el bot</h4>
        <p class="mb-4">Utiliza el entorno de pruebas para verificar el funcionamiento de tu asistente. Puedes realizar preguntas y evaluar la calidad de las respuestas.</p>
        
        <h4 class="text-md font-semibold mb-2">7. Publicar e integrar</h4>
        <p class="mb-4">Una vez satisfecho con el rendimiento, publica tu bot y utiliza las opciones de integración para añadirlo a tu sitio web, aplicaciones o canales de comunicación.</p>
      `,
    },
    {
      title: "Creación de Bots",
      content: `
        <h3 class="text-lg font-semibold mb-3">Creación y configuración de Bots</h3>
        <p class="mb-4">Nexo.ia te permite crear diferentes tipos de bots según tus necesidades:</p>
        
        <h4 class="text-md font-semibold mb-2">Tipos de bots disponibles</h4>
        <ul class="list-disc pl-5 mb-4 space-y-1">
          <li><strong>Asistente de Ventas:</strong> Optimizado para responder preguntas sobre productos y servicios, guiar en el proceso de compra y proporcionar información sobre precios y disponibilidad.</li>
          <li><strong>Soporte Técnico:</strong> Diseñado para solucionar problemas técnicos, proporcionar guías paso a paso y ayudar con la resolución de incidencias.</li>
          <li><strong>FAQ Bot:</strong> Especializado en responder preguntas frecuentes sobre cualquier tema basándose en un conjunto predefinido de preguntas y respuestas.</li>
          <li><strong>Bot Personalizado:</strong> Permite definir un propósito específico y personalizar completamente el comportamiento y las capacidades del asistente.</li>
        </ul>
        
        <h4 class="text-md font-semibold mb-2">Proceso de creación</h4>
        <ol class="list-decimal pl-5 mb-4 space-y-1">
          <li>En el dashboard, navega a la sección "Mis Bots"</li>
          <li>Haz clic en el botón "Crear Nuevo Bot"</li>
          <li>Selecciona el tipo de bot que deseas crear</li>
          <li>Completa el formulario con la información básica:
            <ul class="list-disc pl-5 mt-1 mb-1">
              <li>Nombre del bot</li>
              <li>Descripción</li>
              <li>Idioma principal</li>
              <li>Avatar o imagen (opcional)</li>
            </ul>
          </li>
          <li>Configura el comportamiento inicial:
            <ul class="list-disc pl-5 mt-1 mb-1">
              <li>Mensaje de bienvenida</li>
              <li>Respuestas por defecto</li>
              <li>Escenarios de fallback</li>
            </ul>
          </li>
          <li>Haz clic en "Crear" para generar tu nuevo bot</li>
        </ol>
        
        <h4 class="text-md font-semibold mb-2">Configuración avanzada</h4>
        <p class="mb-4">Una vez creado el bot, puedes acceder a opciones de configuración avanzada:</p>
        
        <ul class="list-disc pl-5 mb-4 space-y-1">
          <li><strong>Personalización visual:</strong> Personaliza los colores, fuentes y estilos para que coincidan con tu identidad de marca.</li>
          <li><strong>Flujos de conversación:</strong> Define rutas de conversación específicas basadas en las entradas del usuario.</li>
          <li><strong>Integraciones:</strong> Conecta tu bot con sistemas externos como CRMs, bases de datos o APIs.</li>
          <li><strong>Variables:</strong> Configura variables personalizadas para almacenar información durante la conversación.</li>
          <li><strong>Condiciones:</strong> Establece reglas lógicas para determinar cuándo mostrar ciertos mensajes o ejecutar acciones.</li>
          <li><strong>Entidades:</strong> Define entidades personalizadas para mejorar la comprensión del lenguaje natural.</li>
        </ul>
      `,
    },
    {
      title: "Integración de Manual",
      content: `
        <h3 class="text-lg font-semibold mb-3">Integración de Manuales en Bots</h3>
        <p class="mb-4">Una de las características más potentes de Nexo.ia es la capacidad de integrar manuales de usuario directamente en tus bots, permitiéndoles proporcionar respuestas precisas basadas en documentación oficial.</p>
        
        <h4 class="text-md font-semibold mb-2">Formatos de documentación compatibles</h4>
        <ul class="list-disc pl-5 mb-4 space-y-1">
          <li>PDF (.pdf)</li>
          <li>Microsoft Word (.docx, .doc)</li>
          <li>HTML (.html, .htm)</li>
          <li>Texto plano (.txt)</li>
          <li>Markdown (.md)</li>
          <li>PowerPoint (.pptx, .ppt) - solo texto</li>
          <li>Excel (.xlsx, .xls) - solo texto</li>
        </ul>
        
        <h4 class="text-md font-semibold mb-2">Proceso de integración</h4>
        <ol class="list-decimal pl-5 mb-4 space-y-1">
          <li>Selecciona el bot en el que deseas integrar la documentación</li>
          <li>Ve a la pestaña "Conocimiento" o "Documentación"</li>
          <li>Haz clic en "Añadir documento" y selecciona el archivo que deseas subir</li>
          <li>Espera a que el sistema procese el documento (el tiempo varía según el tamaño y complejidad)</li>
          <li>Una vez procesado, verás un resumen de la información extraída</li>
          <li>Revisa la extracción para verificar que la información sea correcta</li>
          <li>Activa el documento para que el bot pueda utilizarlo en sus respuestas</li>
        </ol>
        
        <h4 class="text-md font-semibold mb-2">Optimización de documentos</h4>
        <p class="mb-4">Para mejorar la calidad de las respuestas basadas en documentación, considera estas recomendaciones:</p>
        
        <ul class="list-disc pl-5 mb-4 space-y-1">
          <li>Usa documentos bien estructurados con títulos y subtítulos claros</li>
          <li>Incluye un índice o tabla de contenidos en documentos extensos</li>
          <li>Evita imágenes que contengan texto importante sin descripción</li>
          <li>Utiliza un lenguaje claro y conciso, evitando jerga innecesaria</li>
          <li>Divide la información en secciones lógicas</li>
          <li>Actualiza regularmente la documentación para mantenerla al día</li>
        </ul>
        
        <h4 class="text-md font-semibold mb-2">Entrenamiento manual adicional</h4>
        <p class="mb-4">Además de la documentación subida, puedes mejorar las respuestas mediante:</p>
        
        <ul class="list-disc pl-5 mb-4 space-y-1">
          <li><strong>Pares de preguntas-respuestas:</strong> Añade manualmente ejemplos de preguntas y sus respuestas ideales.</li>
          <li><strong>Corrección de respuestas:</strong> Revisa y corrige las respuestas proporcionadas durante las pruebas.</li>
          <li><strong>Sinónimos y variaciones:</strong> Define términos alternativos para conceptos importantes.</li>
          <li><strong>Priorización de fuentes:</strong> Establece qué documentos tienen prioridad cuando existen respuestas conflictivas.</li>
        </ul>
      `,
    },
    {
      title: "Reportes y Estadísticas",
      content: `
        <h3 class="text-lg font-semibold mb-3">Reportes y Análisis de Rendimiento</h3>
        <p class="mb-4">Nexo.ia proporciona herramientas completas de análisis para evaluar el rendimiento de tus bots y comprender cómo los usuarios interactúan con ellos.</p>
        
        <h4 class="text-md font-semibold mb-2">Métricas disponibles</h4>
        <ul class="list-disc pl-5 mb-4 space-y-1">
          <li><strong>Usuarios totales:</strong> Número total de usuarios únicos que han interactuado con cada bot.</li>
          <li><strong>Usuarios activos:</strong> Usuarios que han tenido al menos una conversación en el período seleccionado.</li>
          <li><strong>Mensajes:</strong> Total de mensajes intercambiados, separados por mensajes de usuario y respuestas del bot.</li>
          <li><strong>Tasa de retención:</strong> Porcentaje de usuarios que vuelven a utilizar el bot después de la primera interacción.</li>
          <li><strong>Tasa de finalización:</strong> Porcentaje de conversaciones que llegan a una conclusión satisfactoria.</li>
          <li><strong>Preguntas sin respuesta:</strong> Consultas que el bot no pudo responder correctamente.</li>
          <li><strong>Tiempo de respuesta:</strong> Tiempo promedio que tarda el bot en generar una respuesta.</li>
          <li><strong>Puntuación de satisfacción:</strong> Valoración de los usuarios sobre la calidad de las respuestas.</li>
        </ul>
        
        <h4 class="text-md font-semibold mb-2">Tipos de reportes</h4>
        <ol class="list-decimal pl-5 mb-4 space-y-1">
          <li><strong>Dashboard general:</strong> Vista rápida de las métricas clave de todos tus bots.</li>
          <li><strong>Reporte por bot:</strong> Análisis detallado del rendimiento de un bot específico.</li>
          <li><strong>Reporte de uso:</strong> Estadísticas sobre el número de interacciones y usuarios.</li>
          <li><strong>Reporte de contenido:</strong> Análisis de las preguntas más frecuentes y calidad de las respuestas.</li>
          <li><strong>Reporte de conversión:</strong> Seguimiento de objetivos comerciales como ventas o leads generados.</li>
          <li><strong>Reporte comparativo:</strong> Comparación del rendimiento entre diferentes bots o períodos.</li>
        </ol>
        
        <h4 class="text-md font-semibold mb-2">Visualización de datos</h4>
        <p class="mb-4">Los datos se presentan a través de diferentes visualizaciones:</p>
        
        <ul class="list-disc pl-5 mb-4 space-y-1">
          <li>Gráficos de barras para comparar métricas entre bots</li>
          <li>Gráficos de líneas para analizar tendencias temporales</li>
          <li>Gráficos circulares para visualizar distribuciones porcentuales</li>
          <li>Mapas de calor para identificar patrones de uso por hora/día</li>
          <li>Nubes de palabras para destacar términos frecuentes en las consultas</li>
        </ul>
        
        <h4 class="text-md font-semibold mb-2">Exportación de datos</h4>
        <p class="mb-4">Todos los reportes pueden exportarse en diversos formatos:</p>
        
        <ul class="list-disc pl-5 mb-4 space-y-1">
          <li>CSV para análisis en hojas de cálculo</li>
          <li>PDF para informes formales</li>
          <li>JSON para integración con otras herramientas</li>
          <li>Programación de informes automáticos por correo electrónico</li>
        </ul>
      `,
    },
    {
      title: "Gestión de Usuarios",
      content: `
        <h3 class="text-lg font-semibold mb-3">Gestión de Usuarios y Permisos</h3>
        <p class="mb-4">Nexo.ia permite administrar múltiples usuarios con diferentes niveles de acceso para facilitar la colaboración en equipos.</p>
        
        <h4 class="text-md font-semibold mb-2">Roles de usuario disponibles</h4>
        <ul class="list-disc pl-5 mb-4 space-y-2">
          <li><strong>Administrador:</strong> Acceso completo a todas las funcionalidades, incluyendo la gestión de usuarios, facturación y configuraciones avanzadas.</li>
          <li><strong>Gestor:</strong> Puede crear y gestionar bots, ver reportes y realizar integraciones, pero no puede modificar la configuración global ni gestionar usuarios.</li>
          <li><strong>Editor:</strong> Puede editar el contenido de los bots existentes, pero no puede crear nuevos bots ni acceder a la configuración avanzada.</li>
          <li><strong>Visualizador:</strong> Solo puede ver los bots y los reportes, sin capacidad de edición.</li>
          <li><strong>Cliente:</strong> Acceso limitado a bots específicos asignados por el administrador.</li>
        </ul>
        
        <h4 class="text-md font-semibold mb-2">Gestión de usuarios</h4>
        <p class="mb-4">Para gestionar los usuarios de tu cuenta:</p>
        
        <ol class="list-decimal pl-5 mb-4 space-y-1">
          <li>Accede a la sección "Usuarios" en el dashboard</li>
          <li>Para añadir un nuevo usuario, haz clic en "Nuevo Usuario"</li>
          <li>Completa la información requerida:
            <ul class="list-disc pl-5 mt-1 mb-1">
              <li>Nombre de usuario</li>
              <li>Correo electrónico</li>
              <li>Rol asignado</li>
              <li>Bots accesibles (opcional)</li>
            </ul>
          </li>
          <li>El nuevo usuario recibirá un correo electrónico con instrucciones para activar su cuenta</li>
          <li>Para editar un usuario existente, haz clic en el icono de edición junto al usuario</li>
          <li>Para desactivar un usuario, cambia su estado a "Inactivo" o utiliza la opción "Eliminar"</li>
        </ol>
        
        <h4 class="text-md font-semibold mb-2">Permisos y restricciones</h4>
        <p class="mb-4">Puedes personalizar los permisos para cada rol o usuario específico:</p>
        
        <ul class="list-disc pl-5 mb-4 space-y-1">
          <li>Acceso por bot: Limita qué bots puede ver o editar cada usuario</li>
          <li>Funcionalidades específicas: Restringe el acceso a ciertas características como reportes o configuraciones</li>
          <li>Limitaciones temporales: Establece períodos de acceso para usuarios temporales</li>
          <li>Restricciones de IP: Limita el acceso a determinadas direcciones IP para mayor seguridad</li>
        </ul>
        
        <h4 class="text-md font-semibold mb-2">Actividad y auditoría</h4>
        <p class="mb-4">El sistema mantiene un registro de la actividad de los usuarios:</p>
        
        <ul class="list-disc pl-5 mb-4 space-y-1">
          <li>Seguimiento de sesiones: Información sobre inicios de sesión y cierres</li>
          <li>Historial de cambios: Registro de modificaciones realizadas en bots y configuraciones</li>
          <li>Alertas de seguridad: Notificaciones sobre actividades sospechosas</li>
          <li>Reportes de actividad: Resúmenes periódicos de la actividad de los usuarios</li>
        </ul>
      `,
    },
    {
      title: "Facturación y Planes",
      content: `
        <h3 class="text-lg font-semibold mb-3">Planes, Precios y Facturación</h3>
        <p class="mb-4">Nexo.ia ofrece diferentes planes de suscripción para adaptarse a las necesidades de cada empresa.</p>
        
        <h4 class="text-md font-semibold mb-2">Planes disponibles</h4>
        <div class="space-y-4 mb-6">
          <div class="p-4 border rounded-lg">
            <h5 class="font-bold">Plan PRO</h5>
            <p class="text-lg font-bold">125,00 € / mes</p>
            <p class="text-sm mb-2">10.000 usuarios incluidos</p>
            <ul class="list-disc pl-5 space-y-1">
              <li>Mensajes ilimitados por mes</li>
              <li>Variables</li>
              <li>Etiquetas de contactos</li>
              <li>30 desencadenantes de flujos</li>
              <li>Obtener datos externos de una URL</li>
              <li>2 características adicionales</li>
            </ul>
          </div>
          
          <div class="p-4 border rounded-lg">
            <h5 class="font-bold">Plan BUSINESS</h5>
            <p class="text-lg font-bold">189,00 € / mes</p>
            <p class="text-sm mb-2">20.000 usuarios incluidos</p>
            <ul class="list-disc pl-5 space-y-1">
              <li>Mensajes ilimitados por mes</li>
              <li>Variables</li>
              <li>Etiquetas de contactos</li>
              <li>Desencadenadores y flujos ilimitados</li>
              <li>Obtener datos externos de una URL</li>
              <li>4 características adicionales</li>
            </ul>
          </div>
          
          <div class="p-4 border rounded-lg">
            <h5 class="font-bold">Plan ENTERPRISE</h5>
            <p class="text-lg font-bold">299,00 € / mes</p>
            <p class="text-sm mb-2">50.000 usuarios incluidos</p>
            <ul class="list-disc pl-5 space-y-1">
              <li>50.000 usuarios incluidos</li>
              <li>Todo lo incluido en Business</li>
              <li>Soporte prioritario 24/7</li>
              <li>Onboarding personalizado</li>
              <li>Gestor de cuenta dedicado</li>
              <li>5 características adicionales</li>
            </ul>
          </div>
        </div>
        
        <h4 class="text-md font-semibold mb-2">Usuarios adicionales</h4>
        <p class="mb-4">Si necesitas más usuarios de los incluidos en tu plan, puedes añadir paquetes adicionales:</p>
        
        <ul class="list-disc pl-5 mb-4 space-y-1">
          <li>5.000 usuarios adicionales: 49,00 € / mes</li>
          <li>10.000 usuarios adicionales: 89,00 € / mes</li>
          <li>25.000 usuarios adicionales: 199,00 € / mes</li>
        </ul>
        
        <h4 class="text-md font-semibold mb-2">Gestión de facturación</h4>
        <p class="mb-4">Para gestionar tu suscripción y facturación:</p>
        
        <ol class="list-decimal pl-5 mb-4 space-y-1">
          <li>Accede a la sección "Pagos" en el dashboard</li>
          <li>Consulta tu plan actual y fecha de renovación</li>
          <li>Revisa el historial de facturas</li>
          <li>Actualiza los métodos de pago</li>
          <li>Cambia o actualiza tu plan según tus necesidades</li>
          <li>Descarga facturas en formato PDF</li>
        </ol>
        
        <h4 class="text-md font-semibold mb-2">Métodos de pago aceptados</h4>
        <ul class="list-disc pl-5 mb-4 space-y-1">
          <li>Tarjetas de crédito/débito (Visa, Mastercard, American Express)</li>
          <li>PayPal</li>
          <li>Transferencia bancaria (solo planes anuales)</li>
          <li>Domiciliación bancaria (solo en España)</li>
        </ul>
        
        <h4 class="text-md font-semibold mb-2">Período de prueba</h4>
        <p class="mb-4">Todos los planes incluyen un período de prueba gratuito de 14 días, sin compromiso de permanencia. Durante este período puedes explorar todas las funcionalidades de la plataforma sin restricciones.</p>
      `,
    },
  ];
  
  // Filter sections based on search query
  const filteredSections = searchQuery
    ? manualSections.filter(section =>
        section.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        section.content.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : manualSections;
  
  const PageContent = () => (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Manual de Usuario</h1>
          <p className="text-muted-foreground">
            Aprende a utilizar todas las funcionalidades de Nexo.ia con nuestra guía completa.
          </p>
          
          <div className="relative mt-6">
            <Input
              placeholder="Buscar en el manual..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          </div>
        </div>
        
        <Tabs defaultValue="content" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="content">Contenido</TabsTrigger>
            <TabsTrigger value="faq">Preguntas Frecuentes</TabsTrigger>
            <TabsTrigger value="videos">Videotutoriales</TabsTrigger>
          </TabsList>
          
          <TabsContent value="content">
            <Card>
              <CardContent className="pt-6">
                <Accordion type="single" collapsible className="w-full">
                  {filteredSections.map((section, index) => (
                    <AccordionItem key={index} value={`section-${index}`}>
                      <AccordionTrigger>{section.title}</AccordionTrigger>
                      <AccordionContent>
                        <div dangerouslySetInnerHTML={{ __html: section.content }} />
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="faq">
            <Card>
              <CardContent className="pt-6">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="faq-1">
                    <AccordionTrigger>¿Cómo puedo crear mi primer bot?</AccordionTrigger>
                    <AccordionContent>
                      <p>Para crear tu primer bot, inicia sesión en tu cuenta, ve a la sección "Mis Bots" y haz clic en el botón "Nuevo Bot". Sigue el asistente de configuración para definir el nombre, propósito y tipo de bot que deseas crear.</p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="faq-2">
                    <AccordionTrigger>¿Qué formatos de documentación puedo usar?</AccordionTrigger>
                    <AccordionContent>
                      <p>Nexo.ia es compatible con los siguientes formatos: PDF, Microsoft Word (.docx, .doc), HTML, Texto plano, Markdown, y puede extraer texto de archivos PowerPoint y Excel.</p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="faq-3">
                    <AccordionTrigger>¿Cómo puedo integrar el bot en mi sitio web?</AccordionTrigger>
                    <AccordionContent>
                      <p>Para integrar un bot en tu sitio web, ve a la sección "Integraciones" de tu bot, selecciona "Widget Web" y copia el código proporcionado. Luego, pega este código en tu sitio web justo antes de la etiqueta &lt;/body&gt;.</p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="faq-4">
                    <AccordionTrigger>¿Puedo personalizar la apariencia del bot?</AccordionTrigger>
                    <AccordionContent>
                      <p>Sí, puedes personalizar completamente la apariencia de tu bot. En la sección "Apariencia", puedes modificar colores, fuentes, tamaños, posición del widget y mensajes predeterminados para que coincidan con tu identidad de marca.</p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="faq-5">
                    <AccordionTrigger>¿Cómo funcionan los reportes y estadísticas?</AccordionTrigger>
                    <AccordionContent>
                      <p>Los reportes y estadísticas se generan automáticamente en función de las interacciones de los usuarios con tus bots. Puedes acceder a ellos en la sección "Reportes", donde encontrarás información sobre usuarios, mensajes, tasas de conversión y rendimiento general.</p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="videos">
            <Card>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Introducción a Nexo.ia</h3>
                    <div className="aspect-video bg-secondary rounded-lg flex items-center justify-center mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 text-muted-foreground">
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                      </svg>
                    </div>
                    <p className="text-sm text-muted-foreground">Una visión general de la plataforma y sus principales características.</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Creando tu primer bot</h3>
                    <div className="aspect-video bg-secondary rounded-lg flex items-center justify-center mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 text-muted-foreground">
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                      </svg>
                    </div>
                    <p className="text-sm text-muted-foreground">Tutorial paso a paso para crear y configurar un nuevo bot.</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Integración de documentación</h3>
                    <div className="aspect-video bg-secondary rounded-lg flex items-center justify-center mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 text-muted-foreground">
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                      </svg>
                    </div>
                    <p className="text-sm text-muted-foreground">Cómo integrar manuales y documentación en tu asistente virtual.</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Análisis de rendimiento</h3>
                    <div className="aspect-video bg-secondary rounded-lg flex items-center justify-center mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 text-muted-foreground">
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                      </svg>
                    </div>
                    <p className="text-sm text-muted-foreground">Aprende a interpretar y utilizar los reportes de rendimiento.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
  
  // Render the appropriate layout based on user authentication status
  return user ? (
    <DashboardLayout title="Manual de Usuario" description="Documentación completa de Nexo.ia">
      <PageContent />
    </DashboardLayout>
  ) : (
    <MainLayout>
      <PageContent />
    </MainLayout>
  );
}
