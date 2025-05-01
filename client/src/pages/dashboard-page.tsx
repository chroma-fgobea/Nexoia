import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import DashboardLayout from "@/components/layout/dashboard-layout";
import StatsCard from "@/components/dashboard/stats-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Users, MessageSquare, CreditCard } from "lucide-react";
import { User, Bot as BotType, Message } from "@shared/schema";
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

// Pie chart colors
const COLORS = ["hsl(var(--chart-1))", "hsl(var(--chart-2))", "hsl(var(--chart-3))"];

export default function DashboardPage() {
  // Fetch bots data
  const { data: bots } = useQuery<BotType[]>({
    queryKey: ["/api/bots"],
  });
  
  // Pie chart data for bot distribution
  const botDistribution = [
    { name: "Asistente de Ventas", value: 45 },
    { name: "Soporte Técnico", value: 35 },
    { name: "FAQ Bot", value: 20 },
  ];
  
  // Message activity data (last 7 days)
  const messageActivity = [
    { day: "Lun", count: 120 },
    { day: "Mar", count: 150 },
    { day: "Mié", count: 180 },
    { day: "Jue", count: 210 },
    { day: "Vie", count: 250 },
    { day: "Sáb", count: 190 },
    { day: "Dom", count: 140 },
  ];
  
  // User growth data (last 6 months)
  const userGrowth = [
    { month: "Ene", users: 850 },
    { month: "Feb", users: 940 },
    { month: "Mar", users: 1080 },
    { month: "Abr", users: 1240 },
    { month: "May", users: 1500 },
    { month: "Jun", users: 1750 },
  ];
  
  return (
    <DashboardLayout title="Dashboard" description="Vista general de tu plataforma Nexo.ia">
      {/* Stats overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatsCard 
          title="Total Usuarios" 
          value="3.080" 
          description="1.722 usuarios activos"
          icon={Users}
          trend={{ value: 12, isPositive: true }}
        />
        
        <StatsCard 
          title="Total Bots" 
          value="32" 
          description="18 activos, 14 inactivos"
          icon={Bot}
          trend={{ value: 8, isPositive: true }}
        />
        
        <StatsCard 
          title="Mensajes (30 días)" 
          value="20.398" 
          description="Promedio de 680 por día"
          icon={MessageSquare}
          trend={{ value: 15, isPositive: true }}
        />
        
        <StatsCard 
          title="Facturación Mensual" 
          value="3.245 €" 
          description="12 planes activos"
          icon={CreditCard}
          trend={{ value: 5, isPositive: true }}
        />
      </div>
      
      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* User Growth Chart */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Crecimiento de Usuarios</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={userGrowth}
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
                  <Tooltip />
                  <Line type="monotone" dataKey="users" stroke="hsl(var(--primary))" activeDot={{ r: 8 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        
        {/* Message Activity Chart */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Actividad de Mensajes (Últimos 7 días)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={messageActivity}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="count" fill="hsl(var(--chart-2))" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Bot Distribution Chart */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Distribución de Bots</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={botDistribution}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {botDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
        
        {/* Recent Bots */}
        <Card className="col-span-1 lg:col-span-2">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Bots Recientes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 font-medium">Nombre</th>
                    <th className="text-left py-3 font-medium">Tipo</th>
                    <th className="text-left py-3 font-medium">Creado</th>
                    <th className="text-left py-3 font-medium">Mensajes</th>
                  </tr>
                </thead>
                <tbody>
                  {bots ? (
                    bots.slice(0, 5).map((bot, index) => (
                      <tr key={bot.id} className="border-b border-border">
                        <td className="py-3">{bot.name}</td>
                        <td className="py-3 capitalize">{bot.type}</td>
                        <td className="py-3">{new Date(bot.createdAt).toLocaleDateString()}</td>
                        <td className="py-3">{Math.floor(Math.random() * 1000)}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={4} className="py-4 text-center text-muted-foreground">
                        Cargando bots...
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
