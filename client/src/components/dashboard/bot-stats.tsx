import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { format } from "date-fns";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

// Dummy data for the charts (in a real app, this would come from the API)
const usersData = [
  { name: "Asistente de Ventas", total: 1261, active: 809 },
  { name: "Soporte Técnico", total: 855, active: 573 },
  { name: "FAQ Bot", total: 643, active: 428 },
];

const messagesData = [
  { name: "Asistente de Ventas", user: 4854, bot: 4354 },
  { name: "Soporte Técnico", user: 3119, bot: 3370 },
  { name: "FAQ Bot", user: 2266, bot: 2469 },
];

const botDetails = [
  {
    name: "Asistente de Ventas",
    period: "30/4/2025 - 30/5/2025",
    users: { total: 1261, active: 809, percentage: 64 },
    messages: { user: 4854, bot: 4354, total: 9208 },
    average: 7.3,
  },
  {
    name: "Soporte Técnico",
    period: "30/4/2025 - 30/5/2025",
    users: { total: 855, active: 573, percentage: 67 },
    messages: { user: 3119, bot: 3370, total: 6429 },
    average: 7.5,
  },
  {
    name: "FAQ Bot",
    period: "30/4/2025 - 30/5/2025",
    users: { total: 643, active: 428, percentage: 67 },
    messages: { user: 2266, bot: 2469, total: 4617 },
    average: 7.2,
  },
];

const pieData = [
  { name: "Asistente de Ventas", value: 1261 },
  { name: "Soporte Técnico", value: 855 },
  { name: "FAQ Bot", value: 643 },
];

const COLORS = ["hsl(var(--chart-1))", "hsl(var(--chart-2))", "hsl(var(--chart-3))"];

export default function BotStats() {
  const currentDate = new Date();
  const formattedDate = format(currentDate, "MMMM 'de' yyyy");
  
  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <CardTitle>Reporte de Uso de Bots</CardTitle>
            <CardDescription>Estadísticas de uso de bots para el período seleccionado</CardDescription>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-2">
            <select className="h-10 w-full sm:w-[180px] bg-background rounded-md border border-input px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
              <option>{formattedDate}</option>
              <option>{format(new Date(currentDate.setMonth(currentDate.getMonth() - 1)), "MMMM 'de' yyyy")}</option>
              <option>{format(new Date(currentDate.setMonth(currentDate.getMonth() - 1)), "MMMM 'de' yyyy")}</option>
            </select>
            
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mr-2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Exportar CSV
            </button>
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        <Tabs defaultValue="resumen">
          <TabsList className="mb-4 border-b w-full justify-start rounded-none border-border bg-transparent p-0">
            <TabsTrigger value="resumen" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary bg-transparent data-[state=active]:bg-transparent">
              Resumen
            </TabsTrigger>
            <TabsTrigger value="usuarios" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary bg-transparent data-[state=active]:bg-transparent">
              Usuarios
            </TabsTrigger>
            <TabsTrigger value="mensajes" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary bg-transparent data-[state=active]:bg-transparent">
              Mensajes
            </TabsTrigger>
            <TabsTrigger value="detalles" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary bg-transparent data-[state=active]:bg-transparent">
              Detalles
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="resumen" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="bg-secondary">
                <CardContent className="p-6 space-y-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Total Usuarios</CardTitle>
                  <p className="text-3xl font-bold">3.080</p>
                  <p className="text-xs text-muted-foreground">1.722 usuarios activos (56%)</p>
                </CardContent>
              </Card>
              
              <Card className="bg-secondary">
                <CardContent className="p-6 space-y-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Total Mensajes</CardTitle>
                  <p className="text-3xl font-bold">20.398</p>
                  <p className="text-xs text-muted-foreground">9.817 de usuarios, 9.688 de bots</p>
                </CardContent>
              </Card>
              
              <Card className="bg-secondary">
                <CardContent className="p-6 space-y-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">Promedio por Usuario</CardTitle>
                  <p className="text-3xl font-bold">6.6</p>
                  <p className="text-xs text-muted-foreground">mensajes por usuario</p>
                </CardContent>
              </Card>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="bg-secondary">
                <CardContent className="p-6">
                  <CardTitle className="text-sm font-medium text-muted-foreground mb-4">Distribución de Usuarios</CardTitle>
                  <div className="h-[200px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={pieData}
                          cx="50%"
                          cy="50%"
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        >
                          {pieData.map((entry, index) => (
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
              
              <Card className="bg-secondary">
                <CardContent className="p-6">
                  <CardTitle className="text-sm font-medium text-muted-foreground mb-4">Distribución de Mensajes</CardTitle>
                  <div className="h-[200px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={[
                            { name: "Asistente de Ventas", value: 9208 },
                            { name: "Soporte Técnico", value: 6429 },
                            { name: "FAQ Bot", value: 4617 }
                          ]}
                          cx="50%"
                          cy="50%"
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        >
                          {pieData.map((entry, index) => (
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
            </div>
          </TabsContent>
          
          <TabsContent value="usuarios">
            <div className="h-[400px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={usersData}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar name="Usuarios Totales" dataKey="total" fill="hsl(var(--chart-1))" />
                  <Bar name="Usuarios Activos" dataKey="active" fill="hsl(var(--chart-2))" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>
          
          <TabsContent value="mensajes">
            <div className="h-[400px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={messagesData}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar name="Mensajes de Usuario" dataKey="user" fill="hsl(var(--chart-3))" />
                  <Bar name="Respuestas del Bot" dataKey="bot" fill="hsl(var(--chart-1))" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>
          
          <TabsContent value="detalles" className="space-y-4">
            {botDetails.map((bot, index) => (
              <Card key={index} className="bg-card">
                <CardHeader className="pb-2">
                  <CardTitle>{bot.name}</CardTitle>
                  <CardDescription>Periodo: {bot.period}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <h3 className="text-sm font-medium mb-2">Usuarios</h3>
                      <p className="text-xl font-bold">{bot.users.total}</p>
                      <p className="text-sm text-muted-foreground">
                        {bot.users.active} activos ({bot.users.percentage}%)
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-medium mb-2">Mensajes</h3>
                      <p className="text-xl font-bold">{bot.messages.total}</p>
                      <p className="text-sm text-muted-foreground">
                        {bot.messages.user} de usuarios, {bot.messages.bot} del bot
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-medium mb-2">Promedio</h3>
                      <p className="text-xl font-bold">{bot.average}</p>
                      <p className="text-sm text-muted-foreground">
                        mensajes por usuario
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
