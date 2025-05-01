import { useEffect, useState } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import Head from "next/head";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { UserCircle, BookOpen, Bot, BarChart3 } from "lucide-react";

const DashboardPage: NextPage = () => {
  const router = useRouter();
  const supabase = createClientComponentClient();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getUser() {
      setLoading(true);
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        router.push("/auth");
        return;
      }
      
      setUser(session.user);
      setLoading(false);
    }
    
    getUser();
  }, [router, supabase.auth]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push("/");
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full"></div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <aside className="w-64 border-r border-border bg-card hidden md:block">
        <div className="p-6">
          <Link href="/" className="text-xl font-bold">Nexoia</Link>
        </div>
        <nav className="space-y-1 px-3">
          <Link href="/dashboard" className="flex items-center px-3 py-2 text-sm font-medium rounded-md bg-primary/10 text-primary">
            <BarChart3 className="mr-3 h-5 w-5" />
            Dashboard
          </Link>
          <Link href="/dashboard/bots" className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-muted-foreground hover:bg-accent hover:text-foreground transition-colors">
            <Bot className="mr-3 h-5 w-5" />
            Bots
          </Link>
          <Link href="/dashboard/manuals" className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-muted-foreground hover:bg-accent hover:text-foreground transition-colors">
            <BookOpen className="mr-3 h-5 w-5" />
            Manuales
          </Link>
          <Link href="/dashboard/profile" className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-muted-foreground hover:bg-accent hover:text-foreground transition-colors">
            <UserCircle className="mr-3 h-5 w-5" />
            Perfil
          </Link>
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-card border-b border-border h-16 flex items-center justify-between px-4 md:px-6">
          <div className="flex items-center">
            <button className="p-2 rounded-md md:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </button>
            <h1 className="text-lg font-medium ml-2 md:ml-0">Dashboard</h1>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground hidden md:inline-block">
              {user?.email}
            </span>
            <Button variant="outline" onClick={handleSignOut}>
              Cerrar sesión
            </Button>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-auto bg-secondary/10 p-4 md:p-6">
          <Head>
            <title>Dashboard | Nexoia</title>
            <meta name="description" content="Panel de control de Nexoia" />
          </Head>

          <div className="grid gap-6">
            {/* Welcome message */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-2">Bienvenido a Nexoia</h2>
              <p className="text-muted-foreground">
                Aquí puedes gestionar tus chatbots y los manuales conectados. Comienza creando un nuevo bot o sube un manual para empezar.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-muted-foreground text-sm font-medium mb-2">Total de bots</h3>
                <div className="flex items-center">
                  <Bot className="h-5 w-5 text-primary mr-2" />
                  <span className="text-2xl font-bold">3</span>
                </div>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-muted-foreground text-sm font-medium mb-2">Manuales subidos</h3>
                <div className="flex items-center">
                  <BookOpen className="h-5 w-5 text-primary mr-2" />
                  <span className="text-2xl font-bold">7</span>
                </div>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-muted-foreground text-sm font-medium mb-2">Consultas respondidas</h3>
                <div className="flex items-center">
                  <BarChart3 className="h-5 w-5 text-primary mr-2" />
                  <span className="text-2xl font-bold">342</span>
                </div>
              </div>
            </div>

            {/* Quick actions */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-medium mb-4">Acciones rápidas</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link href="/dashboard/bots/new" passHref>
                  <Button className="w-full">Crear nuevo bot</Button>
                </Link>
                <Link href="/dashboard/manuals/upload" passHref>
                  <Button variant="outline" className="w-full">Subir un manual</Button>
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;