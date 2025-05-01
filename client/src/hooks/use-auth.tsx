import { createContext, ReactNode, useContext } from "react";
import { User as SelectUser, InsertUser } from "@shared/schema";

// This is a simplified no-op version to avoid errors
// We're migrating to Next.js App router anyway

type LoginData = {
  username: string;
  password: string;
};

type AuthContextType = {
  user: null;
  isLoading: boolean;
  error: null;
  loginMutation: { mutate: (data: LoginData) => void; isPending: boolean };
  logoutMutation: { mutate: () => void; isPending: boolean };
  registerMutation: { mutate: (data: InsertUser) => void; isPending: boolean };
};

const defaultMutation = {
  mutate: () => {},
  isPending: false,
};

export const AuthContext = createContext<AuthContextType>({
  user: null,
  isLoading: false,
  error: null,
  loginMutation: defaultMutation,
  logoutMutation: defaultMutation,
  registerMutation: defaultMutation,
});

export function AuthProvider({ children }: { children: ReactNode }) {
  return (
    <AuthContext.Provider
      value={{
        user: null,
        isLoading: false,
        error: null,
        loginMutation: defaultMutation,
        logoutMutation: defaultMutation,
        registerMutation: defaultMutation,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
