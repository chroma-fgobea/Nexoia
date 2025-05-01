import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Iniciar sesión o registrarse | Nexoia',
  description: 'Accede a tu cuenta o crea una nueva para comenzar a usar Nexoia, la plataforma de chatbots IA para documentación técnica.',
}

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}