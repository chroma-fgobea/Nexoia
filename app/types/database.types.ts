export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      bots: {
        Row: {
          created_at: string
          description: string | null
          id: string
          name: string
          user_id: string
          type: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          name: string
          user_id: string
          type: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          name?: string
          user_id?: string
          type?: string
        }
        Relationships: [
          {
            foreignKeyName: "bots_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      messages: {
        Row: {
          bot_id: string
          content: string
          created_at: string
          from_user: boolean
          id: string
          user_id: string | null
        }
        Insert: {
          bot_id: string
          content: string
          created_at?: string
          from_user: boolean
          id?: string
          user_id?: string | null
        }
        Update: {
          bot_id?: string
          content?: string
          created_at?: string
          from_user?: boolean
          id?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "messages_bot_id_fkey"
            columns: ["bot_id"]
            isOneToOne: false
            referencedRelation: "bots"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "messages_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      profiles: {
        Row: {
          company: string | null
          full_name: string | null
          id: string
          updated_at: string | null
        }
        Insert: {
          company?: string | null
          full_name?: string | null
          id: string
          updated_at?: string | null
        }
        Update: {
          company?: string | null
          full_name?: string | null
          id?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      test_links: {
        Row: {
          bot_id: string | null
          client_name: string
          created_at: string
          email: string
          expires_at: string | null
          id: string
          is_active: boolean
          short_url: string
        }
        Insert: {
          bot_id?: string | null
          client_name: string
          created_at?: string
          email: string
          expires_at?: string | null
          id?: string
          is_active?: boolean
          short_url: string
        }
        Update: {
          bot_id?: string | null
          client_name?: string
          created_at?: string
          email?: string
          expires_at?: string | null
          id?: string
          is_active?: boolean
          short_url?: string
        }
        Relationships: [
          {
            foreignKeyName: "test_links_bot_id_fkey"
            columns: ["bot_id"]
            isOneToOne: false
            referencedRelation: "bots"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}