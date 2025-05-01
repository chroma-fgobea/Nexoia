import { ReactNode } from "react";
import Sidebar from "./sidebar";
import { useAuth } from "@/hooks/use-auth";

type DashboardLayoutProps = {
  children: ReactNode;
  title: string;
  description?: string;
};

export default function DashboardLayout({ children, title, description }: DashboardLayoutProps) {
  const { user } = useAuth();

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-card border-b border-border py-4 px-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">{title}</h1>
            {description && <p className="text-sm text-muted-foreground">{description}</p>}
          </div>
          
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground hidden md:inline-block">
              {user?.fullName || user?.username}
            </span>
            <div className="h-8 w-8 bg-primary rounded-full flex items-center justify-center text-sm font-medium text-white">
              {(user?.fullName || user?.username || "U").charAt(0).toUpperCase()}
            </div>
          </div>
        </header>
        
        <main className="flex-1 overflow-y-auto bg-background p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
