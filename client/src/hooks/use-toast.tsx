// This is a simplified no-op version 
// We're moving to Next.js App router anyway

export function useToast() {
  return {
    toast: ({ title, description, variant }: { 
      title: string, 
      description?: string, 
      variant?: 'default' | 'destructive' 
    }) => {
      console.log(`Toast: ${title} - ${description}`);
    },
  };
}