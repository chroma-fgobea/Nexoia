// Adapted from shadcn/ui toast hooks
import { useToast as useToastPrimitive } from "../components/ui/use-toast";

export function useToast() {
  return useToastPrimitive();
}