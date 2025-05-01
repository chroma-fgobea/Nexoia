'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Bot, FileText, Plus, BarChart3, MessageSquare, Link as LinkIcon } from 'lucide-react'
import { useAuth } from '../lib/auth-context'
import { useSupabase } from '../providers'
import { Database } from '../types/database.types'

type Bot = Database['public']['Tables']['bots']['Row']

export default function DashboardPage() {
  const { user } = useAuth()
  const { supabase } = useSupabase()
  const [bots, setBots] = useState<Bot[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [stats, setStats] = useState({
    botsCount: 0,
    messagesCount: 0,
    manualsCount: 0,
    testLinksCount: 0
  })

  useEffect(() => {
    async function fetchData() {
      if (!user) return
      
      setIsLoading(true)
      
      try {
        // Fetch bots
        const { data: botsData, error: botsError } = await supabase
          .from('bots')
          .select('*')
          .eq('user_id', user.id)
          .order('created_at', { ascending: false })
          .limit(5)
        
        if (botsError) throw botsError
        
        setBots(botsData || [])
        
        // Fetch stats
        const [botsCountRes, messagesCountRes, testLinksCountRes] = await Promise.all([
          supabase.from('bots').select('id', { count: 'exact' }).eq('user_id', user.id),
          supabase.from('messages').select('id', { count: 'exact' }).eq('user_id', user.id),
          supabase.from('test_links').select('id', { count: 'exact' })
        ])
        
        setStats({
          botsCount: botsCountRes.count || 0,
          messagesCount: messagesCountRes.count || 0,
          manualsCount: 0, // For now we don't have a manuals table
          testLinksCount: testLinksCountRes.count || 0
        })
      } catch (error) {
        console.error('Error fetching dashboard data:', error)
      } finally {
        setIsLoading(false)
      }
    }
    
    fetchData()
  }, [user, supabase])

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Bienvenido a tu dashboard de Nexoia. Aquí puedes gestionar tus chatbots y ver estadísticas.
        </p>
      </div>
      
      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg border bg-card p-4">
          <div className="flex items-center gap-2">
            <Bot className="h-5 w-5 text-muted-foreground" />
            <span className="text-sm font-medium">Bots</span>
          </div>
          <p className="mt-2 text-2xl font-bold">{stats.botsCount}</p>
        </div>
        <div className="rounded-lg border bg-card p-4">
          <div className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-muted-foreground" />
            <span className="text-sm font-medium">Manuales</span>
          </div>
          <p className="mt-2 text-2xl font-bold">{stats.manualsCount}</p>
        </div>
        <div className="rounded-lg border bg-card p-4">
          <div className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5 text-muted-foreground" />
            <span className="text-sm font-medium">Mensajes</span>
          </div>
          <p className="mt-2 text-2xl font-bold">{stats.messagesCount}</p>
        </div>
        <div className="rounded-lg border bg-card p-4">
          <div className="flex items-center gap-2">
            <LinkIcon className="h-5 w-5 text-muted-foreground" />
            <span className="text-sm font-medium">Links de prueba</span>
          </div>
          <p className="mt-2 text-2xl font-bold">{stats.testLinksCount}</p>
        </div>
      </div>
      
      {/* Recent Bots */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Bots recientes</h2>
          <Link
            href="/dashboard/bots/new"
            className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
          >
            <Plus className="h-4 w-4" />
            <span>Nuevo bot</span>
          </Link>
        </div>
        
        {isLoading ? (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="rounded-lg border bg-card p-6 animate-pulse">
                <div className="bg-muted h-5 w-24 rounded-md mb-4"></div>
                <div className="bg-muted h-4 w-full rounded-md mb-2"></div>
                <div className="bg-muted h-4 w-2/3 rounded-md mb-4"></div>
                <div className="flex items-center justify-between mt-auto pt-4 border-t">
                  <div className="bg-muted h-4 w-16 rounded-md"></div>
                  <div className="bg-muted h-8 w-8 rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
        ) : bots.length > 0 ? (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {bots.map((bot) => (
              <Link 
                key={bot.id} 
                href={`/dashboard/bots/${bot.id}`}
                className="rounded-lg border bg-card p-6 hover:shadow-md transition-shadow flex flex-col h-full"
              >
                <h3 className="font-medium text-lg mb-2">{bot.name}</h3>
                <p className="text-sm text-muted-foreground mb-4 flex-1">
                  {bot.description || 'Sin descripción'}
                </p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t">
                  <span className="text-xs text-muted-foreground">
                    {new Date(bot.created_at).toLocaleDateString()}
                  </span>
                  <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <Bot className="h-4 w-4 text-primary" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="rounded-lg border bg-card/50 p-8 text-center">
            <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Bot className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-medium text-lg mb-2">No tienes bots aún</h3>
            <p className="text-sm text-muted-foreground mb-4 max-w-md mx-auto">
              Crea tu primer bot para empezar a convertir tu documentación técnica en una interfaz conversacional.
            </p>
            <Link
              href="/dashboard/bots/new"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
            >
              <Plus className="h-4 w-4 mr-2" />
              Crear mi primer bot
            </Link>
          </div>
        )}
      </div>
      
      {/* Quick Links */}
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-lg border bg-card p-6">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
            <Bot className="h-6 w-6 text-primary" />
          </div>
          <h3 className="font-medium text-lg mb-2">Gestionar bots</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Crea, edita y gestiona tus chatbots basados en tu documentación técnica.
          </p>
          <Link
            href="/dashboard/bots"
            className="text-sm font-medium text-primary hover:underline"
          >
            Ver todos los bots
          </Link>
        </div>
        
        <div className="rounded-lg border bg-card p-6">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
            <FileText className="h-6 w-6 text-primary" />
          </div>
          <h3 className="font-medium text-lg mb-2">Subir manuales</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Sube tu documentación técnica para entrenar a tus chatbots.
          </p>
          <Link
            href="/dashboard/manuals"
            className="text-sm font-medium text-primary hover:underline"
          >
            Gestionar manuales
          </Link>
        </div>
        
        <div className="rounded-lg border bg-card p-6">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
            <BarChart3 className="h-6 w-6 text-primary" />
          </div>
          <h3 className="font-medium text-lg mb-2">Estadísticas</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Visualiza el rendimiento y uso de tus chatbots con estadísticas detalladas.
          </p>
          <Link
            href="/dashboard/stats"
            className="text-sm font-medium text-primary hover:underline"
          >
            Ver estadísticas
          </Link>
        </div>
      </div>
    </div>
  )
}