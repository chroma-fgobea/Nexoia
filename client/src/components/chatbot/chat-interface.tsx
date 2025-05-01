import { useState, useRef, useEffect } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { apiRequest } from "@/lib/queryClient";
import { Message } from "@shared/schema";
import { Send, Clock, BookOpen } from "lucide-react";
import ChatMessage from "./chat-message";

interface ChatInterfaceProps {
  botId: number;
  onApprove?: () => void;
}

export default function ChatInterface({ botId, onApprove }: ChatInterfaceProps) {
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Fetch messages for this bot
  const { data: messages, isLoading, error, refetch } = useQuery<Message[]>({
    queryKey: [`/api/bots/${botId}/messages`],
    refetchOnWindowFocus: false,
  });
  
  // Send a message mutation
  const sendMessage = useMutation({
    mutationFn: async (content: string) => {
      const res = await apiRequest("POST", `/api/bots/${botId}/messages`, {
        content,
        fromUser: true,
      });
      return res.json();
    },
    onSuccess: () => {
      refetch();
    }
  });
  
  // Handle sending a message
  const handleSendMessage = () => {
    if (!input.trim()) return;
    
    sendMessage.mutate(input);
    setInput("");
  };
  
  // Handle pressing Enter to send a message
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };
  
  // Scroll to bottom when new messages are added
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  
  // Quick reply options for common questions
  const quickReplies = [
    "¿Cómo crear un bot?",
    "¿Cómo gestionar usuarios?",
    "¿Cómo configurar planes de precios?",
    "¿Cómo ver reportes?",
    "¿Cómo integrar un bot en mi sitio web?"
  ];
  
  // Handle clicking a quick reply
  const handleQuickReply = (reply: string) => {
    setInput(reply);
    sendMessage.mutate(reply);
    setInput("");
  };
  
  return (
    <Card className="w-full max-w-4xl mx-auto shadow-xl border-border bg-card">
      <CardHeader className="border-b border-border flex flex-row items-center space-x-2">
        <div className="text-primary">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
            <rect x="3" y="11" width="8" height="10" rx="1" ry="1"></rect>
            <rect x="13" y="11" width="8" height="10" rx="1" ry="1"></rect>
            <path d="M8 6h8"></path>
            <path d="M12 4v6"></path>
            <path d="M7 21c0-2 .5-3 2-4"></path>
            <path d="M17 21c0-2-.5-3-2-4"></path>
          </svg>
        </div>
        <div>
          <CardTitle>Asistente Virtual con Manual Integrado</CardTitle>
          <CardDescription>Interactúa con el bot para obtener ayuda sobre la plataforma. Ahora incluye información del manual de usuario.</CardDescription>
        </div>
      </CardHeader>
      
      <CardContent className="p-6">
        <div className="space-y-4 max-h-[400px] overflow-y-auto mb-4">
          {!messages || messages.length === 0 ? (
            <ChatMessage
              message={{
                id: 0,
                content: "¡Hola! Soy el asistente virtual de Nexo.ia. Puedo ayudarte con información sobre la plataforma, responder preguntas sobre el manual de usuario y más. ¿En qué puedo ayudarte hoy?",
                fromUser: false,
                botId,
                createdAt: new Date()
              }}
            />
          ) : (
            messages.map((message) => (
              <ChatMessage key={message.id} message={message} />
            ))
          )}
          {sendMessage.isPending && (
            <div className="animate-pulse flex items-center text-xs text-muted-foreground">
              <Clock className="w-4 h-4 mr-2" />
              <span>El asistente está escribiendo...</span>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {quickReplies.map((reply, index) => (
            <Button
              key={index}
              variant="secondary"
              size="sm"
              className="text-sm rounded-full"
              onClick={() => handleQuickReply(reply)}
            >
              {reply}
            </Button>
          ))}
        </div>
        
        <div className="relative">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Escribe tu pregunta sobre el manual o la plataforma..."
            className="pr-12"
            disabled={sendMessage.isPending}
          />
          <Button
            size="icon"
            className="absolute right-1 top-1 h-8 w-8"
            onClick={handleSendMessage}
            disabled={sendMessage.isPending || !input.trim()}
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
      
      <CardFooter className="border-t border-border flex justify-between pt-4">
        <Button variant="link" className="text-primary flex items-center">
          <BookOpen className="mr-2 h-4 w-4" />
          Ver Manual Completo
        </Button>
        
        {onApprove && (
          <Button onClick={onApprove}>
            Aprobar Bot
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
