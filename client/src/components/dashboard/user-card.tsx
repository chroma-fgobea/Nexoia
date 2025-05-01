import { User } from "@shared/schema";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Pen, Trash, Mail } from "lucide-react";

interface UserCardProps {
  user: User;
  onEdit?: (user: User) => void;
  onDelete?: (user: User) => void;
  onEmail?: (user: User) => void;
}

export default function UserCard({ user, onEdit, onDelete, onEmail }: UserCardProps) {
  // Set badge colors based on role
  const getRoleBadgeColor = (role: string) => {
    switch (role.toLowerCase()) {
      case 'admin':
        return 'bg-red-900 text-red-300';
      case 'gestor':
        return 'bg-blue-900 text-blue-300';
      case 'editor':
        return 'bg-green-900 text-green-300';
      case 'visualizador':
        return 'bg-purple-900 text-purple-300';
      default:
        return 'bg-gray-700 text-gray-300';
    }
  };
  
  // Set badge colors based on status
  const getStatusBadgeColor = (status: string) => {
    return status.toLowerCase() === 'active' ? 'bg-green-900 text-green-300' : 'bg-red-900 text-red-300';
  };
  
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">{user.fullName || user.username}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex flex-col space-y-1">
            <p className="text-sm text-muted-foreground">Email</p>
            <p className="text-sm">{user.email}</p>
          </div>
          
          <div className="flex flex-col space-y-1">
            <p className="text-sm text-muted-foreground">Empresa</p>
            <p className="text-sm">{user.company || "N/A"}</p>
          </div>
          
          <div className="flex items-center justify-between">
            <Badge className={`${getRoleBadgeColor(user.role)} role-badge`}>
              {user.role.charAt(0).toUpperCase() + user.role.slice(1)}
            </Badge>
            
            <Badge className={`${getStatusBadgeColor(user.status)} px-2.5 py-0.5 rounded-full text-xs font-medium`}>
              {user.status === 'active' ? 'Activo' : 'Inactivo'}
            </Badge>
          </div>
          
          <div className="flex justify-end space-x-2 pt-2">
            {onEdit && (
              <Button variant="ghost" size="icon" onClick={() => onEdit(user)}>
                <Pen className="h-4 w-4" />
              </Button>
            )}
            
            {onEmail && (
              <Button variant="ghost" size="icon" onClick={() => onEmail(user)}>
                <Mail className="h-4 w-4" />
              </Button>
            )}
            
            {onDelete && (
              <Button variant="ghost" size="icon" className="text-destructive" onClick={() => onDelete(user)}>
                <Trash className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
