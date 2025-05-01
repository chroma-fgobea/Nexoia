import { useEffect, useState } from "react";
import DashboardLayout from "@/components/layout/dashboard-layout";
import BotStats from "@/components/dashboard/bot-stats";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import { CalendarIcon, Download } from "lucide-react";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const COLORS = ["hsl(var(--chart-1))", "hsl(var(--chart-2))", "hsl(var(--chart-3))"];

export default function ReportsPage() {
  const [date, setDate] = useState<Date>(new Date());
  
  // Daily message activity data
  const dailyActivity = [
    { hour: "00:00", messages: 12 },
    { hour: "02:00", messages: 8 },
    { hour: "04:00", messages: 5 },
    { hour: "06:00", messages: 10 },
    { hour: "08:00", messages: 35 },
    { hour: "10:00", messages: 78 },
    { hour: "12:00", messages: 95 },
    { hour: "14:00", messages: 85 },
    { hour: "16:00", messages: 90 },
    { hour: "18:00", messages: 75 },
    { hour: "20:00", messages: 60 },
    { hour: "22:00", messages: 30 },
  ];
  
  // User demographics
  const userDemographics = [
    { name: "18-24", value: 15 },
    { name: "25-34", value: 35 },
    { name: "35-44", value: 25 },
    { name: "45-54", value: 15 },
    { name: "55+", value: 10 },
  ];
  
  // Device usage
  const deviceUsage = [
    { name: "Desktop", value: 55 },
    { name: "Mobile", value: 40 },
    { name: "Tablet", value: 5 },
  ];
  
  return (
    <DashboardLayout title="Reportes" description="Visualiza y exporta reportes de uso de bots y conversaciones">
      <div className="space-y-6">
        {/* Report Tabs */}
        <Tabs defaultValue="uso-bots" className="w-full">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
            <TabsList>
              <TabsTrigger value="uso-bots">Uso de Bots</TabsTrigger>
              <TabsTrigger value="actividad-usuarios">Actividad de Usuarios</TabsTrigger>
              <TabsTrigger value="facturacion">Facturación</TabsTrigger>
            </TabsList>
            
            <div className="flex gap-2">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="flex items-center justify-between w-[200px]"
                  >
                    <span>{format(date, "MMMM yyyy", { locale: es })}</span>
                    <CalendarIcon className="ml-2 h-4 w-4 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="end">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={(date) => date && setDate(date)}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              
              <Button variant="outline">
                <Download className="mr-2 h-4 w-4" />
                Exportar CSV
              </Button>
            </div>
          </div>
          
          <TabsContent value="uso-bots" className="space-y-6">
            <BotStats />
          </TabsContent>
          
          <TabsContent value="actividad-usuarios" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="col-span-full">
                <CardHeader>
                  <CardTitle>Actividad Diaria</CardTitle>
                  <CardDescription>Mensajes por hora durante el día</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart
                        data={dailyActivity}
                        margin={{
                          top: 20,
                          right: 30,
                          left: 20,
                          bottom: 5,
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="hour" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="messages" stroke="hsl(var(--primary))" activeDot={{ r: 8 }} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Demografía de Usuarios</CardTitle>
                  <CardDescription>Distribución por edad</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={userDemographics}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        >
                          {userDemographics.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="col-span-1 md:col-span-1 lg:col-span-2">
                <CardHeader>
                  <CardTitle>Uso por Dispositivo</CardTitle>
                  <CardDescription>Distribución de acceso por tipo de dispositivo</CardDescription>
                </CardHeader>
                <CardContent className="h-[300px]">
                  <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
                    <div className="flex items-center">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={deviceUsage}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                          >
                            {deviceUsage.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Pie>
                          <Tooltip />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                    <div className="flex flex-col justify-center space-y-6">
                      {deviceUsage.map((device, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-4 h-4 rounded-full" style={{ backgroundColor: COLORS[index % COLORS.length] }} />
                          <div className="flex flex-col">
                            <span className="text-sm font-medium">{device.name}</span>
                            <div className="w-full bg-secondary h-2 rounded-full mt-1">
                              <div 
                                className="h-2 rounded-full" 
                                style={{ 
                                  width: `${device.value}%`,
                                  backgroundColor: COLORS[index % COLORS.length]
                                }} 
                              />
                            </div>
                            <span className="text-xs text-muted-foreground mt-1">{device.value}%</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="facturacion">
            <Card>
              <CardHeader>
                <CardTitle>Facturación Mensual</CardTitle>
                <CardDescription>Ingresos mensuales por planes de suscripción</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={[
                        { month: "Ene", pro: 625, business: 378, enterprise: 598 },
                        { month: "Feb", pro: 750, business: 567, enterprise: 598 },
                        { month: "Mar", pro: 875, business: 756, enterprise: 897 },
                        { month: "Abr", pro: 1000, business: 945, enterprise: 897 },
                        { month: "May", pro: 1125, business: 1134, enterprise: 1196 },
                        { month: "Jun", pro: 1250, business: 1323, enterprise: 1495 },
                      ]}
                      margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip formatter={(value) => `${value} €`} />
                      <Legend />
                      <Bar name="Plan Pro" dataKey="pro" fill="hsl(var(--chart-1))" />
                      <Bar name="Plan Business" dataKey="business" fill="hsl(var(--chart-2))" />
                      <Bar name="Plan Enterprise" dataKey="enterprise" fill="hsl(var(--chart-3))" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  <Card className="bg-secondary">
                    <CardContent className="p-6">
                      <div className="text-2xl font-bold mb-2">13.250 €</div>
                      <div className="text-sm font-medium text-muted-foreground">Facturación total</div>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-secondary">
                    <CardContent className="p-6">
                      <div className="text-2xl font-bold mb-2">42</div>
                      <div className="text-sm font-medium text-muted-foreground">Suscripciones activas</div>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-secondary">
                    <CardContent className="p-6">
                      <div className="text-2xl font-bold mb-2">315,47 €</div>
                      <div className="text-sm font-medium text-muted-foreground">Valor promedio</div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
}
