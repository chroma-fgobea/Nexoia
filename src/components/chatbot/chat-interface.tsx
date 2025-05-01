import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Send, Sparkles } from "lucide-react";
import ChatMessage from "./chat-message";

// These types will eventually come from our API/database
type Message = {
  id: string;
  content: string;
  fromUser: boolean;
  timestamp: Date;
};

interface ChatInterfaceProps {
  botId: number;
  onApprove?: () => void;
}

export default function ChatInterface({ botId, onApprove }: ChatInterfaceProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      content: "¡Hola! Soy el asistente virtual de Nexoia. ¿En qué puedo ayudarte hoy?",
      fromUser: false,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isThinking, setIsThinking] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom of messages when new messages are added
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue.trim(),
      fromUser: true,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsThinking(true);

    // Simulate response (in a real app, this would be an API call)
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        content:
          "Basado en la documentación, puedo ayudarte con esa consulta. La información que necesitas está en la sección X del manual. ¿Necesitas más detalles sobre algún aspecto específico?",
        fromUser: false,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
      setIsThinking(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col h-[500px] sm:h-[600px] border border-border rounded-lg overflow-hidden">
      {/* Chat header */}
      <div className="bg-card border-b border-border p-4">
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
            <Sparkles size={15} />
          </div>
          <div>
            <h3 className="font-medium">Asistente de Nexoia</h3>
            <p className="text-xs text-muted-foreground">
              Conectado a: Manual de Usuario v1.2
            </p>
          </div>
        </div>
      </div>

      {/* Chat messages */}
      <div className="flex-1 overflow-y-auto bg-secondary/30 p-4 space-y-4">
        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}
        {isThinking && (
          <div className="flex items-center space-x-2 text-muted-foreground text-sm">
            <div className="animate-pulse">•</div>
            <div className="animate-pulse animation-delay-200">•</div>
            <div className="animate-pulse animation-delay-400">•</div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Chat input */}
      <form onSubmit={handleSubmit} className="p-4 border-t border-border bg-card">
        <div className="flex space-x-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Escribe tu mensaje..."
            className="flex-1 px-3 py-2 bg-background border border-input rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <Button
            type="submit"
            size="icon"
            disabled={!inputValue.trim() || isThinking}
          >
            <Send size={16} />
          </Button>
        </div>
      </form>
    </div>
  );
}