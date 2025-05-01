import { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight, FileText, Book, Bookmark, Info, HelpCircle, List } from 'lucide-react'
import { MainNav } from '../components/layout/main-nav'
import { Footer } from '../components/layout/footer'

export const metadata: Metadata = {
  title: 'Manual de Usuario | Nexoia',
  description: 'Manual de usuario para la plataforma Nexoia. Aprende a crear y gestionar chatbots basados en documentación técnica.',
}

export default function ManualPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <MainNav />
      <main className="flex-1">
        {/* Header */}
        <section className="py-12 md:py-20 lg:py-24 bg-gradient-to-b from-background to-secondary/20">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Manual de Usuario
              </h1>
              <p className="mt-4 text-xl text-muted-foreground">
                Todo lo que necesitas saber para aprovechar al máximo Nexoia
              </p>
            </div>
          </div>
        </section>

        {/* Manual Content */}
        <section className="py-12">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Sidebar Navigation */}
              <div className="lg:w-1/4">
                <div className="sticky top-4 border rounded-lg p-4 bg-card">
                  <h2 className="text-lg font-medium mb-4">Contenido</h2>
                  <nav className="space-y-2">
                    <a href="#introduccion" className="flex items-center py-2 text-sm hover:text-primary">
                      <Info className="mr-2 h-4 w-4" />
                      Introducción
                    </a>
                    <a href="#primeros-pasos" className="flex items-center py-2 text-sm hover:text-primary">
                      <ChevronRight className="mr-2 h-4 w-4" />
                      Primeros pasos
                    </a>
                    <a href="#crear-bot" className="flex items-center py-2 text-sm hover:text-primary">
                      <Book className="mr-2 h-4 w-4" />
                      Crear un chatbot
                    </a>
                    <a href="#subir-documentacion" className="flex items-center py-2 text-sm hover:text-primary">
                      <FileText className="mr-2 h-4 w-4" />
                      Subir documentación
                    </a>
                    <a href="#configuracion" className="flex items-center py-2 text-sm hover:text-primary">
                      <HelpCircle className="mr-2 h-4 w-4" />
                      Configuración avanzada
                    </a>
                    <a href="#integracion" className="flex items-center py-2 text-sm hover:text-primary">
                      <List className="mr-2 h-4 w-4" />
                      Integración y despliegue
                    </a>
                    <a href="#faq" className="flex items-center py-2 text-sm hover:text-primary">
                      <Bookmark className="mr-2 h-4 w-4" />
                      Preguntas frecuentes
                    </a>
                  </nav>
                </div>
              </div>

              {/* Main Content */}
              <div className="lg:w-3/4">
                <div className="space-y-12">
                  {/* Introduction Section */}
                  <div id="introduccion" className="scroll-mt-16">
                    <h2 className="text-2xl font-bold mb-4">Introducción</h2>
                    <div className="prose dark:prose-invert max-w-none">
                      <p>
                        Bienvenido al manual de usuario de Nexoia, la plataforma que te permite transformar tu documentación técnica en chatbots inteligentes. Este manual te guiará a través de todas las funcionalidades de la plataforma, desde la creación de tu primer chatbot hasta las configuraciones más avanzadas.
                      </p>
                      <p>
                        Nexoia utiliza tecnología de inteligencia artificial para procesar y comprender tu documentación, permitiendo a los chatbots responder preguntas específicas con precisión y contexto. Esto resulta en una experiencia de soporte técnico más eficiente y satisfactoria para tus usuarios.
                      </p>
                      <h3>¿Qué puedes hacer con Nexoia?</h3>
                      <ul>
                        <li>Crear chatbots basados en tu documentación técnica</li>
                        <li>Personalizar la apariencia y comportamiento de tus chatbots</li>
                        <li>Integrar los chatbots en tu sitio web o compartirlos mediante enlaces</li>
                        <li>Analizar el rendimiento y uso de tus chatbots</li>
                        <li>Actualizar tu documentación y ver los cambios reflejados automáticamente</li>
                      </ul>
                    </div>
                  </div>

                  {/* Getting Started Section */}
                  <div id="primeros-pasos" className="scroll-mt-16">
                    <h2 className="text-2xl font-bold mb-4">Primeros pasos</h2>
                    <div className="prose dark:prose-invert max-w-none">
                      <h3>Crear una cuenta</h3>
                      <p>
                        Para comenzar a utilizar Nexoia, necesitas crear una cuenta:
                      </p>
                      <ol>
                        <li>Ve a la <Link href="/auth" className="text-primary hover:underline">página de registro</Link></li>
                        <li>Ingresa tu dirección de correo electrónico y crea una contraseña segura</li>
                        <li>Completa la información adicional solicitada, como tu nombre y empresa (opcional)</li>
                        <li>Verifica tu cuenta a través del correo electrónico que recibirás</li>
                      </ol>
                      <h3>Iniciar sesión</h3>
                      <p>
                        Una vez registrado, puedes iniciar sesión con tu correo electrónico y contraseña desde la <Link href="/auth" className="text-primary hover:underline">página de inicio de sesión</Link>.
                      </p>
                      <h3>Explorar el dashboard</h3>
                      <p>
                        Después de iniciar sesión, serás dirigido a tu dashboard personal, donde podrás:
                      </p>
                      <ul>
                        <li>Ver un resumen de tus chatbots y documentación</li>
                        <li>Acceder a las diferentes secciones de la plataforma</li>
                        <li>Consultar estadísticas de uso</li>
                        <li>Realizar acciones rápidas como crear un nuevo chatbot o subir documentación</li>
                      </ul>
                    </div>
                  </div>

                  {/* Create Bot Section */}
                  <div id="crear-bot" className="scroll-mt-16">
                    <h2 className="text-2xl font-bold mb-4">Crear un chatbot</h2>
                    <div className="prose dark:prose-invert max-w-none">
                      <p>
                        Para crear un nuevo chatbot, sigue estos pasos:
                      </p>
                      <ol>
                        <li>
                          <strong>Desde el dashboard:</strong> Haz clic en el botón "Crear nuevo bot" en la sección de acciones rápidas o ve a la sección "Bots" y haz clic en "Nuevo bot"
                        </li>
                        <li>
                          <strong>Información básica:</strong> Asigna un nombre a tu chatbot y escribe una breve descripción para identificarlo fácilmente
                        </li>
                        <li>
                          <strong>Selecciona documentación:</strong> Elige los manuales o documentos que deseas asociar a este chatbot (puedes añadir documentación más adelante si todavía no has subido ninguna)
                        </li>
                        <li>
                          <strong>Personalización:</strong> Configura el aspecto visual del chatbot, como colores, logotipo y mensaje de bienvenida
                        </li>
                        <li>
                          <strong>Configuración de comportamiento:</strong> Define cómo debe responder el chatbot, el estilo de escritura, y otras opciones de personalidad
                        </li>
                        <li>
                          <strong>Guardar y revisar:</strong> Finaliza la creación y prueba tu chatbot para verificar su funcionamiento
                        </li>
                      </ol>
                      <div className="bg-muted p-4 rounded my-4">
                        <p className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 mr-2 mt-0.5 text-primary">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                          </svg>
                          <span>
                            <strong>Consejo:</strong> Un buen nombre y mensaje de bienvenida ayudan a establecer expectativas claras para los usuarios sobre lo que el chatbot puede hacer.
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Upload Documentation Section */}
                  <div id="subir-documentacion" className="scroll-mt-16">
                    <h2 className="text-2xl font-bold mb-4">Subir documentación</h2>
                    <div className="prose dark:prose-invert max-w-none">
                      <p>
                        Para que tus chatbots sean efectivos, necesitas subir la documentación en la que se basarán:
                      </p>
                      <h3>Métodos de carga</h3>
                      <p>
                        Nexoia ofrece varias formas de subir tu documentación:
                      </p>
                      <ul>
                        <li>
                          <strong>Carga directa de archivos:</strong> Sube documentos PDF, DOCX, HTML, o Markdown directamente desde tu dispositivo
                        </li>
                        <li>
                          <strong>URL:</strong> Proporciona la URL de una página web con documentación (por ejemplo, una página de ayuda)
                        </li>
                        <li>
                          <strong>Integración con repositorios:</strong> Conecta con repositorios de GitHub o GitLab donde almacenas tu documentación
                        </li>
                      </ul>
                      <h3>Formatos compatibles</h3>
                      <p>
                        Nexoia soporta los siguientes formatos de documentación:
                      </p>
                      <ul>
                        <li>PDF (.pdf)</li>
                        <li>Microsoft Word (.docx, .doc)</li>
                        <li>HTML (.html, .htm)</li>
                        <li>Markdown (.md, .markdown)</li>
                        <li>Texto plano (.txt)</li>
                        <li>Presentaciones (.pptx, .ppt) - con limitaciones</li>
                      </ul>
                      <div className="bg-muted p-4 rounded my-4">
                        <p className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 mr-2 mt-0.5 text-primary">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                          </svg>
                          <span>
                            <strong>Importante:</strong> Para mejores resultados, asegúrate de que tu documentación esté bien estructurada con títulos, subtítulos y párrafos claramente definidos.
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Advanced Configuration Section */}
                  <div id="configuracion" className="scroll-mt-16">
                    <h2 className="text-2xl font-bold mb-4">Configuración avanzada</h2>
                    <div className="prose dark:prose-invert max-w-none">
                      <p>
                        Para usuarios que desean un control más detallado sobre sus chatbots, Nexoia ofrece opciones de configuración avanzada:
                      </p>
                      <h3>Personalización de respuestas</h3>
                      <ul>
                        <li>
                          <strong>Estilo de respuesta:</strong> Define si las respuestas deben ser concisas, detalladas o conversacionales
                        </li>
                        <li>
                          <strong>Tono de comunicación:</strong> Configura el tono (formal, informal, amigable, técnico)
                        </li>
                        <li>
                          <strong>Idioma preferido:</strong> Establece el idioma principal para las respuestas
                        </li>
                      </ul>
                      <h3>Limitaciones y comportamiento</h3>
                      <ul>
                        <li>
                          <strong>Longitud máxima:</strong> Define la extensión máxima de las respuestas
                        </li>
                        <li>
                          <strong>Gestión de incertidumbre:</strong> Configura cómo debe responder el chatbot cuando no está seguro de una respuesta
                        </li>
                        <li>
                          <strong>Respuestas predefinidas:</strong> Crea respuestas específicas para preguntas comunes
                        </li>
                      </ul>
                      <h3>Moderación y seguridad</h3>
                      <ul>
                        <li>
                          <strong>Filtrado de contenido:</strong> Configura filtros para evitar respuestas inapropiadas
                        </li>
                        <li>
                          <strong>Límites de uso:</strong> Establece límites de consultas por usuario para evitar abusos
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Integration Section */}
                  <div id="integracion" className="scroll-mt-16">
                    <h2 className="text-2xl font-bold mb-4">Integración y despliegue</h2>
                    <div className="prose dark:prose-invert max-w-none">
                      <p>
                        Una vez creado y configurado tu chatbot, existen varias formas de integrarlo y compartirlo:
                      </p>
                      <h3>Integración en sitio web</h3>
                      <p>
                        Para añadir el chatbot a tu sitio web, Nexoia proporciona un código de integración:
                      </p>
                      <div className="bg-card border rounded p-3 my-4">
                        <code className="text-sm text-muted-foreground">
                          &lt;script src="https://nexoia.app/bot.js?id=your-bot-id"&gt;&lt;/script&gt;
                        </code>
                      </div>
                      <p>
                        Simplemente copia este código y pégalo en el HTML de tu sitio web, justo antes de cerrar la etiqueta &lt;/body&gt;.
                      </p>
                      <h3>Enlaces directos</h3>
                      <p>
                        Para compartir tu chatbot sin necesidad de integración en tu sitio web, puedes utilizar enlaces directos:
                      </p>
                      <ol>
                        <li>Ve a la sección "Enlaces" en tu dashboard</li>
                        <li>Haz clic en "Crear nuevo enlace"</li>
                        <li>Selecciona el chatbot que deseas compartir</li>
                        <li>Configura opciones adicionales como fecha de expiración o limitaciones de uso</li>
                        <li>Genera y comparte el enlace</li>
                      </ol>
                      <h3>API para desarrolladores</h3>
                      <p>
                        Para integraciones más avanzadas, Nexoia ofrece una API REST completa. Puedes encontrar la documentación detallada en la sección "API" de tu dashboard.
                      </p>
                    </div>
                  </div>

                  {/* FAQ Section */}
                  <div id="faq" className="scroll-mt-16">
                    <h2 className="text-2xl font-bold mb-4">Preguntas frecuentes</h2>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-medium">¿Cuántos documentos puedo asociar a un chatbot?</h3>
                        <p className="mt-2 text-muted-foreground">
                          El número de documentos depende de tu plan de suscripción. El plan Free permite hasta 3 documentos por chatbot, el plan Profesional hasta 15, y el plan Empresarial tiene documentos ilimitados.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium">¿Se actualiza automáticamente el chatbot si modifico mi documentación?</h3>
                        <p className="mt-2 text-muted-foreground">
                          Sí, cuando actualizas un documento existente, el sistema procesa los cambios y actualiza la base de conocimiento del chatbot automáticamente. Este proceso puede tardar unos minutos dependiendo del tamaño del documento.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium">¿Puedo personalizar la apariencia del chatbot para que coincida con mi marca?</h3>
                        <p className="mt-2 text-muted-foreground">
                          Absolutamente. Puedes personalizar colores, logotipos, iconos y estilos de fuente para que el chatbot se integre perfectamente con tu identidad de marca.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium">¿En qué idiomas puede funcionar el chatbot?</h3>
                        <p className="mt-2 text-muted-foreground">
                          Nexoia admite múltiples idiomas, incluyendo español, inglés, francés, alemán, italiano y portugués. El idioma principal dependerá del idioma de tu documentación.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium">¿Cómo puedo medir la efectividad de mi chatbot?</h3>
                        <p className="mt-2 text-muted-foreground">
                          Nexoia proporciona analíticas detalladas que muestran métricas como número de consultas, tasa de resolución, preguntas frecuentes, y valoración de los usuarios. Puedes acceder a estas estadísticas desde la sección "Analíticas" de tu dashboard.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-primary">
          <div className="container px-4 md:px-6 text-center">
            <div className="max-w-xl mx-auto space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                ¿Necesitas ayuda personalizada?
              </h2>
              <p className="text-primary-foreground/90">
                Nuestro equipo de soporte está disponible para ayudarte con cualquier consulta o problema que puedas tener.
              </p>
              <div className="pt-4">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none bg-white text-primary hover:bg-white/90 h-10 px-4 py-2"
                >
                  Contactar soporte
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