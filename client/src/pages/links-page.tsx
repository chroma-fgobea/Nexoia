import { useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { TestLink, insertTestLinkSchema } from "@shared/schema";
import DashboardLayout from "@/components/layout/dashboard-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { DataTable } from "@/components/ui/data-table";
import { Badge } from "@/components/ui/badge";
import { Clipboard, Trash, ExternalLink } from "lucide-react";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

// Form schema
const testLinkSchema = insertTestLinkSchema
  .pick({ clientName: true, email: true, botId: true })
  .extend({
    botId: z.string().default("default"),
  });

type TestLinkFormValues = z.infer<typeof testLinkSchema>;

export default function LinksPage() {
  const { toast } = useToast();
  
  // Fetch test links
  const { data: testLinks, isLoading } = useQuery<TestLink[]>({
    queryKey: ["/api/test-links"],
  });
  
  // Create test link mutation
  const createTestLink = useMutation({
    mutationFn: async (data: TestLinkFormValues) => {
      const res = await apiRequest("POST", "/api/test-links", data);
      return res.json();
    },
    onSuccess: () => {
      toast({
        title: "Enlace creado",
        description: "El enlace de prueba ha sido creado exitosamente.",
      });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/test-links"] });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "No se pudo crear el enlace de prueba.",
        variant: "destructive",
      });
    },
  });
  
  // Delete test link mutation
  const deleteTestLink = useMutation({
    mutationFn: async (id: number) => {
      await apiRequest("DELETE", `/api/test-links/${id}`);
    },
    onSuccess: () => {
      toast({
        title: "Enlace desactivado",
        description: "El enlace de prueba ha sido desactivado exitosamente.",
      });
      queryClient.invalidateQueries({ queryKey: ["/api/test-links"] });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "No se pudo desactivar el enlace de prueba.",
        variant: "destructive",
      });
    },
  });
  
  // Form
  const form = useForm<TestLinkFormValues>({
    resolver: zodResolver(testLinkSchema),
    defaultValues: {
      clientName: "",
      email: "",
      botId: "default",
    },
  });
  
  // Handle form submission
  const onSubmit = (values: TestLinkFormValues) => {
    createTestLink.mutate(values);
  };
  
  // Handle link copy
  const handleCopyLink = (shortUrl: string) => {
    const baseUrl = window.location.origin;
    const fullUrl = `${baseUrl}/bot-preview/${shortUrl}`;
    
    navigator.clipboard.writeText(fullUrl);
    toast({
      title: "Enlace copiado",
      description: "El enlace ha sido copiado al portapapeles.",
    });
  };
  
  // Handle link delete
  const handleDeleteLink = (id: number) => {
    if (confirm("¿Estás seguro de que deseas desactivar este enlace?")) {
      deleteTestLink.mutate(id);
    }
  };
  
  // Table columns
  const columns = [
    {
      key: "clientName",
      header: "Cliente",
    },
    {
      key: "shortUrl",
      header: "URL Acortada",
      cell: (row: TestLink) => (
        <div className="flex items-center space-x-2">
          <span className="font-mono text-xs">{`${window.location.origin}/bot-preview/${row.shortUrl}`}</span>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => handleCopyLink(row.shortUrl)}
            className="h-6 w-6"
          >
            <Clipboard className="h-4 w-4" />
          </Button>
        </div>
      ),
    },
    {
      key: "expiresAt",
      header: "Expira",
      cell: (row: TestLink) => {
        const expiryDate = row.expiresAt 
          ? new Date(row.expiresAt) 
          : new Date(new Date(row.createdAt).getTime() + 7 * 24 * 60 * 60 * 1000);
        
        return new Date() > expiryDate 
          ? <Badge variant="destructive">Expirado</Badge>
          : new Date(expiryDate).toLocaleDateString();
      },
    },
    {
      key: "status",
      header: "Estado",
      cell: (row: TestLink) => {
        const isExpired = row.expiresAt && new Date() > new Date(row.expiresAt);
        const status = row.isActive && !isExpired ? "active" : "inactive";
        
        return (
          <Badge variant={status === "active" ? "success" : "secondary"}>
            {status === "active" ? "Activo" : "Inactivo"}
          </Badge>
        );
      },
    },
    {
      key: "actions",
      header: "Acciones",
      className: "text-right",
      cell: (row: TestLink) => (
        <div className="flex justify-end space-x-2">
          <Button 
            variant="outline" 
            size="icon"
            asChild
          >
            <a 
              href={`${window.location.origin}/bot-preview/${row.shortUrl}`} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="text-destructive"
            onClick={() => handleDeleteLink(row.id)}
          >
            <Trash className="h-4 w-4" />
          </Button>
        </div>
      ),
    },
  ];
  
  return (
    <DashboardLayout title="Gestión de Enlaces" description="Administra los enlaces de prueba para tus bots">
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Crear nuevo enlace de prueba</CardTitle>
            <CardDescription>Crea un enlace para que tus clientes prueben el bot en el sandbox</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="clientName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nombre del cliente</FormLabel>
                        <FormControl>
                          <Input placeholder="Ej: Empresa ABC" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Correo electrónico</FormLabel>
                        <FormControl>
                          <Input placeholder="cliente@ejemplo.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="botId"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>ID del Bot (opcional)</FormLabel>
                      <FormControl>
                        <Input placeholder="default" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="flex justify-end">
                  <Button type="submit" disabled={createTestLink.isPending}>
                    {createTestLink.isPending ? "Creando..." : "Crear enlace de prueba"}
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Enlaces de Prueba Activos</CardTitle>
            <CardDescription>Lista de todos los enlaces de prueba generados</CardDescription>
          </CardHeader>
          <CardContent>
            <DataTable
              data={testLinks || []}
              columns={columns}
              pagination
              pageSize={10}
              emptyState={
                isLoading ? (
                  <div className="text-center py-4">Cargando enlaces...</div>
                ) : (
                  <div className="text-center py-4">No hay enlaces activos</div>
                )
              }
            />
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
