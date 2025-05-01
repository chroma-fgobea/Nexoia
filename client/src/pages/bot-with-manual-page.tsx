import { useState } from "react";
import DashboardLayout from "@/components/layout/dashboard-layout";
import ChatInterface from "@/components/chatbot/chat-interface";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useQuery } from "@tanstack/react-query";
import { Bot } from "@shared/schema";
import { Loader2, Plus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { insertBotSchema } from "@shared/schema";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/use-auth";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Form schema for creating a new bot
const createBotSchema = z.object({
  name: z.string().min(3, {
    message: "El nombre debe tener al menos 3 caracteres",
  }),
  description: z.string().min(10, {
    message: "La descripción debe tener al menos 10 caracteres",
  }),
  type: z.string({
    required_error: "Debes seleccionar un tipo de bot",
  }),
});

type CreateBotFormValues = z.infer<typeof createBotSchema>;

export default function BotWithManualPage() {
  const { toast } = useToast();
  const { user } = useAuth();
  const [selectedBot, setSelectedBot] = useState<Bot | null>(null);
  const [isNewBotDialogOpen, setIsNewBotDialogOpen] = useState(false);
  
  // Fetch bots
  const { data: bots, isLoading } = useQuery<Bot[]>({
    queryKey: ["/api/bots"],
  });
  
  // Bot creation form
  const form = useForm<CreateBotFormValues>({
    resolver: zodResolver(createBotSchema),
    defaultValues: {
      name: "",
      description: "",
      type: "sales",
    },
  });
  
  // Create bot mutation
  const createBotMutation = useMutation({
    mutationFn: async (data: CreateBotFormValues) => {
      const res = await apiRequest("POST", "/api/bots", data);
      return res.json();
    },
    onSuccess: (newBot: Bot) => {
      toast({
        title: "Bot creado",
        description: "El bot ha sido creado exitosamente.",
      });
      setIsNewBotDialogOpen(false);
      form.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/bots"] });
      setSelectedBot(newBot);
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "No se pudo crear el bot.",
        variant: "destructive",
      });
    },
  });
  
  // Handle form submission
  const onSubmit = (values: CreateBotFormValues) => {
    createBotMutation.mutate(values);
  };
  
  // Select a bot to display
  const handleSelectBot = (bot: Bot) => {
    setSelectedBot(bot);
  };
  
  return (
    <DashboardLayout title="Bot con Manual Integrado" description="Asistente virtual con integración de manual de usuario">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Left Sidebar - Bot List */}
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Mis Bots</span>
              <Button size="sm" onClick={() => setIsNewBotDialogOpen(true)}>
                <Plus className="h-4 w-4 mr-1" />
                Nuevo
              </Button>
            </CardTitle>
            <CardDescription>Selecciona un bot para visualizar</CardDescription>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="flex items-center justify-center py-8">
                <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
              </div>
            ) : bots && bots.length > 0 ? (
              <div className="space-y-2">
                {bots.map((bot) => (
                  <Button
                    key={bot.id}
                    variant={selectedBot?.id === bot.id ? "default" : "outline"}
                    className="w-full justify-start"
                    onClick={() => handleSelectBot(bot)}
                  >
                    <div className="mr-2">
                      {bot.type === "sales" && (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                          <circle cx="9" cy="21" r="1"></circle>
                          <circle cx="20" cy="21" r="1"></circle>
                          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                        </svg>
                      )}
                      {bot.type === "support" && (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                          <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                        </svg>
                      )}
                      {bot.type === "faq" && (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                          <line x1="12" y1="17" x2="12.01" y2="17"></line>
                        </svg>
                      )}
                    </div>
                    <div className="text-left truncate">
                      <span className="block truncate">{bot.name}</span>
                    </div>
                  </Button>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-muted-foreground">
                <p>No has creado ningún bot todavía.</p>
                <p className="mt-2">Crea tu primer bot haciendo clic en "Nuevo".</p>
              </div>
            )}
          </CardContent>
        </Card>
        
        {/* Main Content - Bot Interface */}
        <div className="col-span-1 lg:col-span-3">
          {selectedBot ? (
            <Tabs defaultValue="chat">
              <TabsList className="mb-4">
                <TabsTrigger value="chat">Chat</TabsTrigger>
                <TabsTrigger value="config">Configuración</TabsTrigger>
                <TabsTrigger value="manual">Integración de Manual</TabsTrigger>
              </TabsList>
              
              <TabsContent value="chat">
                <ChatInterface botId={selectedBot.id} />
              </TabsContent>
              
              <TabsContent value="config">
                <Card>
                  <CardHeader>
                    <CardTitle>Configuración del Bot</CardTitle>
                    <CardDescription>Personaliza la configuración de tu asistente virtual</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-medium mb-2">Información General</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="text-sm font-medium text-muted-foreground">Nombre del Bot</label>
                            <Input value={selectedBot.name} readOnly className="mt-1" />
                          </div>
                          <div>
                            <label className="text-sm font-medium text-muted-foreground">Tipo</label>
                            <Input 
                              value={
                                selectedBot.type === "sales" ? "Asistente de Ventas" : 
                                selectedBot.type === "support" ? "Soporte Técnico" : 
                                selectedBot.type === "faq" ? "FAQ Bot" : 
                                selectedBot.type
                              } 
                              readOnly 
                              className="mt-1" 
                            />
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-medium mb-2">Personalización</h3>
                        <div className="grid grid-cols-1 gap-4">
                          <div>
                            <label className="text-sm font-medium text-muted-foreground">Mensaje de Bienvenida</label>
                            <Textarea 
                              placeholder="¡Hola! Soy el asistente virtual de Nexo.ia. ¿En qué puedo ayudarte hoy?"
                              className="mt-1" 
                            />
                          </div>
                          <div>
                            <label className="text-sm font-medium text-muted-foreground">Respuesta por Defecto</label>
                            <Textarea 
                              placeholder="Lo siento, no he podido entender tu pregunta. ¿Podrías reformularla?"
                              className="mt-1" 
                            />
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex justify-end">
                        <Button>Guardar Cambios</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="manual">
                <Card>
                  <CardHeader>
                    <CardTitle>Integración de Manual</CardTitle>
                    <CardDescription>Conecta documentación a tu asistente virtual para respuestas más precisas</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-medium mb-4">Archivos de Documentación</h3>
                        <div className="border rounded-lg p-6 text-center bg-secondary">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 mx-auto text-muted-foreground mb-4">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                            <polyline points="17 8 12 3 7 8"></polyline>
                            <line x1="12" y1="3" x2="12" y2="15"></line>
                          </svg>
                          <p className="text-muted-foreground mb-4">Arrastra y suelta archivos aquí o haz clic para seleccionar</p>
                          <p className="text-xs text-muted-foreground mb-4">Formatos aceptados: PDF, DOCX, HTML, TXT, MD</p>
                          <Button>Subir Archivo</Button>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-medium mb-4">Documentos Procesados</h3>
                        <div className="border rounded-lg overflow-hidden">
                          <table className="w-full">
                            <thead className="bg-secondary">
                              <tr>
                                <th className="text-left py-3 px-4 text-sm font-medium">Nombre</th>
                                <th className="text-left py-3 px-4 text-sm font-medium">Tipo</th>
                                <th className="text-left py-3 px-4 text-sm font-medium">Tamaño</th>
                                <th className="text-left py-3 px-4 text-sm font-medium">Estado</th>
                                <th className="text-left py-3 px-4 text-sm font-medium">Acciones</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="border-t border-border">
                                <td className="py-3 px-4" colSpan={5}>
                                  <p className="text-center text-muted-foreground">No hay documentos procesados</p>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-medium mb-2">Configuración de Entrenamiento</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="text-sm font-medium text-muted-foreground">Idioma Principal</label>
                            <Select defaultValue="es">
                              <SelectTrigger className="mt-1">
                                <SelectValue placeholder="Selecciona un idioma" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="es">Español</SelectItem>
                                <SelectItem value="en">Inglés</SelectItem>
                                <SelectItem value="fr">Francés</SelectItem>
                                <SelectItem value="de">Alemán</SelectItem>
                                <SelectItem value="it">Italiano</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <label className="text-sm font-medium text-muted-foreground">Nivel de Confianza</label>
                            <Select defaultValue="medium">
                              <SelectTrigger className="mt-1">
                                <SelectValue placeholder="Selecciona un nivel" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="high">Alto</SelectItem>
                                <SelectItem value="medium">Medio</SelectItem>
                                <SelectItem value="low">Bajo</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex justify-end">
                        <Button>Guardar Configuración</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          ) : (
            <Card className="h-full flex items-center justify-center">
              <CardContent className="py-16 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-16 h-16 mx-auto text-muted-foreground mb-4">
                  <rect x="3" y="11" width="8" height="10" rx="1" ry="1"></rect>
                  <rect x="13" y="11" width="8" height="10" rx="1" ry="1"></rect>
                  <path d="M8 6h8"></path>
                  <path d="M12 4v4"></path>
                  <path d="M7 21c0-2 .5-3 2-4"></path>
                  <path d="M17 21c0-2-.5-3-2-4"></path>
                </svg>
                <h3 className="text-2xl font-bold mb-2">Selecciona un Bot</h3>
                <p className="text-muted-foreground mb-6">Selecciona un bot existente o crea uno nuevo para comenzar</p>
                <Button onClick={() => setIsNewBotDialogOpen(true)}>
                  <Plus className="h-4 w-4 mr-2" />
                  Crear Nuevo Bot
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
      
      {/* New Bot Dialog */}
      <Dialog open={isNewBotDialogOpen} onOpenChange={setIsNewBotDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Crear nuevo bot</DialogTitle>
            <DialogDescription>
              Configura tu nuevo asistente virtual con manual integrado.
            </DialogDescription>
          </DialogHeader>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nombre</FormLabel>
                    <FormControl>
                      <Input placeholder="Ej: Asistente de Ventas" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Descripción</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Describe la función de tu bot..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tipo de Bot</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona un tipo" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="sales">Asistente de Ventas</SelectItem>
                        <SelectItem value="support">Soporte Técnico</SelectItem>
                        <SelectItem value="faq">FAQ Bot</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <DialogFooter>
                <Button type="submit" disabled={createBotMutation.isPending}>
                  {createBotMutation.isPending ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Creando...
                    </>
                  ) : (
                    "Crear Bot"
                  )}
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </DashboardLayout>
  );
}
