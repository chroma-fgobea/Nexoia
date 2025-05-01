import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import MainLayout from "@/components/layout/main-layout";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ChatInterface from "@/components/chatbot/chat-interface";

const HomePage: NextPage = () => {
  return (
    <MainLayout>
      <Head>
        <title>Nexoia - Plataforma para Chatbots con Manuales</title>
        <meta
          name="description"
          content="Nexoia te permite crear chatbots inteligentes basados en la documentación de tu empresa."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero section */}
      <section className="py-12 md:py-24 lg:py-32 w-full bg-gradient-to-b from-background to-secondary/20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Transforma tu documentación en un asistente virtual
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Nexoia conecta tus manuales con tecnología de IA para crear chatbots que responden consultas de manera precisa y en tiempo real.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 min-[400px]:gap-4">
                <Link href="/auth" passHref>
                  <Button size="lg">Empezar ahora</Button>
                </Link>
                <Link href="/how-it-works" passHref>
                  <Button variant="outline" size="lg">
                    Cómo funciona
                  </Button>
                </Link>
              </div>
            </div>
            <div className="mx-auto lg:order-last">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <ChatInterface botId={1} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                Características
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Todo lo que necesitas para mejorar tu soporte técnico
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Nexoia combina documentación técnica con inteligencia artificial para crear una experiencia de soporte sin fricciones.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3 lg:gap-12">
            <div className="flex flex-col items-center space-y-2 border-border p-4 rounded-lg">
              <div className="bg-primary/20 p-3 rounded-full text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                  <polyline points="14 2 14 8 20 8" />
                  <path d="M12 18v-6" />
                  <path d="M8 18v-1" />
                  <path d="M16 18v-3" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Conecta tus manuales</h3>
              <p className="text-center text-muted-foreground">
                Sube cualquier documentación técnica y nuestros sistemas la procesarán para crear una base de conocimiento.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 border-border p-4 rounded-lg">
              <div className="bg-primary/20 p-3 rounded-full text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="m4.93 4.93 4.24 4.24" />
                  <path d="m14.83 9.17 4.24-4.24" />
                  <path d="m14.83 14.83 4.24 4.24" />
                  <path d="m9.17 14.83-4.24 4.24" />
                  <circle cx="12" cy="12" r="4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">IA especializada</h3>
              <p className="text-center text-muted-foreground">
                Nuestros modelos de IA están entrenados específicamente para entender documentación técnica y dar respuestas precisas.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 border-border p-4 rounded-lg">
              <div className="bg-primary/20 p-3 rounded-full text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold">Fácil integración</h3>
              <p className="text-center text-muted-foreground">
                Integra el chatbot en tu sitio web o compártelo mediante enlaces directamente con tus clientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                Empieza hoy
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Reduce un 80% el tiempo de respuesta en consultas técnicas
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                Nuestros clientes han reducido significativamente el tiempo que dedican a resolver consultas repetitivas, permitiendo a sus equipos técnicos enfocarse en tareas de mayor valor.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/auth" passHref>
                  <Button size="lg">Prueba gratuita</Button>
                </Link>
                <Link href="/pricing" passHref>
                  <Button variant="outline" size="lg">
                    Ver planes
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="grid grid-cols-2 gap-4 md:gap-8">
                <div className="flex flex-col items-center justify-center space-y-2 border rounded-lg p-4 bg-card">
                  <div className="text-4xl font-bold">80%</div>
                  <div className="text-sm text-center text-muted-foreground">
                    Reducción en tickets de soporte
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center space-y-2 border rounded-lg p-4 bg-card">
                  <div className="text-4xl font-bold">95%</div>
                  <div className="text-sm text-center text-muted-foreground">
                    Precisión en respuestas
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center space-y-2 border rounded-lg p-4 bg-card">
                  <div className="text-4xl font-bold">24/7</div>
                  <div className="text-sm text-center text-muted-foreground">
                    Disponibilidad
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center space-y-2 border rounded-lg p-4 bg-card">
                  <div className="text-4xl font-bold">5min</div>
                  <div className="text-sm text-center text-muted-foreground">
                    Tiempo de implementación
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default HomePage;