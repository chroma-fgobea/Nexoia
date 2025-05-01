import { useState, useEffect } from "react";
import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Button } from "@/components/ui/button";
import MainLayout from "@/components/layout/main-layout";

// Authentication form schemas
const loginSchema = z.object({
  email: z.string().email({ message: "Email no válido" }),
  password: z.string().min(6, { message: "La contraseña debe tener al menos 6 caracteres" }),
});

const registerSchema = z.object({
  email: z.string().email({ message: "Email no válido" }),
  password: z.string().min(6, { message: "La contraseña debe tener al menos 6 caracteres" }),
  name: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres" }),
  company: z.string().optional(),
});

type LoginFormValues = z.infer<typeof loginSchema>;
type RegisterFormValues = z.infer<typeof registerSchema>;

const AuthPage: NextPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const supabase = createClientComponentClient();

  // Check for register query parameter to show register form
  useEffect(() => {
    if (router.query.register === "true") {
      setIsLogin(false);
    }
  }, [router.query]);

  // Login form
  const loginForm = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // Register form
  const registerForm = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      password: "",
      name: "",
      company: "",
    },
  });

  // Handle login submission
  const onLoginSubmit = async (values: LoginFormValues) => {
    setIsLoading(true);
    setError(null);

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: values.email,
        password: values.password,
      });

      if (error) throw error;

      // Redirect to dashboard on successful login
      router.push("/dashboard");
    } catch (error: any) {
      setError(error.message || "Error al iniciar sesión");
    } finally {
      setIsLoading(false);
    }
  };

  // Handle registration submission
  const onRegisterSubmit = async (values: RegisterFormValues) => {
    setIsLoading(true);
    setError(null);

    try {
      // Register the user
      const { error: signUpError } = await supabase.auth.signUp({
        email: values.email,
        password: values.password,
        options: {
          data: {
            name: values.name,
            company: values.company || "",
          },
        },
      });

      if (signUpError) throw signUpError;

      // Show confirmation message and switch to login
      alert("¡Registro exitoso! Por favor verifica tu correo electrónico para confirmar tu cuenta.");
      setIsLogin(true);
    } catch (error: any) {
      setError(error.message || "Error al registrarse");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <MainLayout>
      <Head>
        <title>{isLogin ? "Iniciar sesión" : "Registrarse"} | Nexoia</title>
        <meta
          name="description"
          content={isLogin ? "Inicia sesión en tu cuenta de Nexoia" : "Regístrate para usar Nexoia"}
        />
      </Head>

      <div className="flex min-h-[calc(100vh-64px)]">
        {/* Form section */}
        <div className="flex flex-col justify-center w-full lg:w-1/2 px-4 py-12 md:px-8">
          <div className="mx-auto w-full max-w-md space-y-6">
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-bold">{isLogin ? "Bienvenido de nuevo" : "Crea tu cuenta"}</h1>
              <p className="text-muted-foreground">
                {isLogin ? "Ingresa tus credenciales para acceder" : "Completa los datos para comenzar"}
              </p>
            </div>

            {error && (
              <div className="p-3 rounded-md bg-destructive/15 text-destructive text-sm">
                {error}
              </div>
            )}

            {isLogin ? (
              // Login form
              <form onSubmit={loginForm.handleSubmit(onLoginSubmit)} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...loginForm.register("email")}
                    className="w-full px-3 py-2 border rounded-md text-sm"
                    placeholder="tu@email.com"
                  />
                  {loginForm.formState.errors.email && (
                    <p className="text-sm text-destructive">{loginForm.formState.errors.email.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="text-sm font-medium">
                      Contraseña
                    </label>
                    <Link href="/reset-password" className="text-sm text-primary hover:underline">
                      ¿Olvidaste tu contraseña?
                    </Link>
                  </div>
                  <input
                    id="password"
                    type="password"
                    {...loginForm.register("password")}
                    className="w-full px-3 py-2 border rounded-md text-sm"
                    placeholder="••••••••"
                  />
                  {loginForm.formState.errors.password && (
                    <p className="text-sm text-destructive">{loginForm.formState.errors.password.message}</p>
                  )}
                </div>

                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Iniciando sesión..." : "Iniciar sesión"}
                </Button>

                <div className="text-center text-sm">
                  ¿No tienes una cuenta?{" "}
                  <button
                    type="button"
                    onClick={() => setIsLogin(false)}
                    className="text-primary hover:underline"
                  >
                    Regístrate
                  </button>
                </div>
              </form>
            ) : (
              // Registration form
              <form onSubmit={registerForm.handleSubmit(onRegisterSubmit)} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...registerForm.register("email")}
                    className="w-full px-3 py-2 border rounded-md text-sm"
                    placeholder="tu@email.com"
                  />
                  {registerForm.formState.errors.email && (
                    <p className="text-sm text-destructive">{registerForm.formState.errors.email.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Nombre completo
                  </label>
                  <input
                    id="name"
                    type="text"
                    {...registerForm.register("name")}
                    className="w-full px-3 py-2 border rounded-md text-sm"
                    placeholder="Tu nombre"
                  />
                  {registerForm.formState.errors.name && (
                    <p className="text-sm text-destructive">{registerForm.formState.errors.name.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium">
                    Empresa (opcional)
                  </label>
                  <input
                    id="company"
                    type="text"
                    {...registerForm.register("company")}
                    className="w-full px-3 py-2 border rounded-md text-sm"
                    placeholder="Nombre de tu empresa"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="password" className="text-sm font-medium">
                    Contraseña
                  </label>
                  <input
                    id="password"
                    type="password"
                    {...registerForm.register("password")}
                    className="w-full px-3 py-2 border rounded-md text-sm"
                    placeholder="••••••••"
                  />
                  {registerForm.formState.errors.password && (
                    <p className="text-sm text-destructive">{registerForm.formState.errors.password.message}</p>
                  )}
                </div>

                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Registrando..." : "Registrarse"}
                </Button>

                <div className="text-center text-sm">
                  ¿Ya tienes una cuenta?{" "}
                  <button
                    type="button"
                    onClick={() => setIsLogin(true)}
                    className="text-primary hover:underline"
                  >
                    Inicia sesión
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Hero section */}
        <div className="hidden lg:block w-1/2 bg-gradient-to-br from-primary/80 to-primary p-12">
          <div className="h-full flex flex-col justify-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">Potencia tu documentación con IA</h2>
              <p className="text-primary-foreground text-lg">
                Nexoia transforma tus manuales técnicos en chatbots inteligentes que responden consultas en segundos.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-primary-foreground">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 mr-2"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Reduce un 80% el tiempo en consultas técnicas
                </li>
                <li className="flex items-center text-primary-foreground">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 mr-2"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Acceso 24/7 a información técnica
                </li>
                <li className="flex items-center text-primary-foreground">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 mr-2"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  Implementación rápida y sin complicaciones
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default AuthPage;