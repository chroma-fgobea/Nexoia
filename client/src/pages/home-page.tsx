import { useState } from "react";
import { Link } from "wouter";
import MainLayout from "@/components/layout/main-layout";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import ChatInterface from "@/components/chatbot/chat-interface";

export default function HomePage() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  
  const handleOpenChat = () => {
    setIsChatOpen(true);
  };
  
  const handleCloseChat = () => {
    setIsChatOpen(false);
  };
  
  return (
    <MainLayout>
      {/* Hero section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Asistente Virtual con Manual Integrado</h1>
          <p className="text-xl text-muted-foreground mb-10">
            Interactúa con nuestro asistente virtual para obtener ayuda sobre la plataforma. Ahora
            incluye toda la información del manual de usuario para responder tus preguntas.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={handleOpenChat}>
              Probar Bot
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/planes">Ver Planes y Precios</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Chat Bot Demo Section */}
      <section className="py-10 px-4">
        <div className="container mx-auto max-w-4xl">
          <ChatInterface botId={1} />
        </div>
      </section>
      
      {/* Chat Dialog */}
      <Dialog open={isChatOpen} onOpenChange={setIsChatOpen}>
        <DialogContent className="max-w-4xl p-0">
          <ChatInterface botId={1} onApprove={handleCloseChat} />
        </DialogContent>
      </Dialog>
    </MainLayout>
  );
}
