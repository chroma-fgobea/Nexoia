import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  email: text("email").notNull().unique(),
  password: text("password").notNull(),
  fullName: text("full_name"),
  role: text("role").default("user"),
  company: text("company"),
  status: text("status").default("active"),
  createdAt: timestamp("created_at").defaultNow()
});

export const bots = pgTable("bots", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description"),
  type: text("type").notNull(),
  userId: integer("user_id").notNull(),
  createdAt: timestamp("created_at").defaultNow()
});

export const messages = pgTable("messages", {
  id: serial("id").primaryKey(),
  content: text("content").notNull(),
  fromUser: boolean("from_user").notNull(),
  userId: integer("user_id"),
  botId: integer("bot_id").notNull(),
  createdAt: timestamp("created_at").defaultNow()
});

export const testLinks = pgTable("test_links", {
  id: serial("id").primaryKey(),
  clientName: text("client_name").notNull(),
  email: text("email").notNull(),
  botId: text("bot_id").default("default"),
  shortUrl: text("short_url").notNull(),
  expiresAt: timestamp("expires_at"),
  isActive: boolean("is_active").default(true),
  createdAt: timestamp("created_at").defaultNow()
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  email: true,
  password: true,
  fullName: true,
  company: true,
  role: true,
});

export const loginUserSchema = z.object({
  username: z.string().min(3),
  password: z.string().min(6),
});

export const insertBotSchema = createInsertSchema(bots).pick({
  name: true,
  description: true,
  type: true,
  userId: true,
});

export const insertMessageSchema = createInsertSchema(messages).pick({
  content: true,
  fromUser: true,
  userId: true,
  botId: true,
});

export const insertTestLinkSchema = createInsertSchema(testLinks).pick({
  clientName: true,
  email: true,
  botId: true,
  shortUrl: true,
  expiresAt: true,
});

export type User = typeof users.$inferSelect;
export type InsertUser = z.infer<typeof insertUserSchema>;
export type LoginUser = z.infer<typeof loginUserSchema>;
export type Bot = typeof bots.$inferSelect;
export type InsertBot = z.infer<typeof insertBotSchema>;
export type Message = typeof messages.$inferSelect;
export type InsertMessage = z.infer<typeof insertMessageSchema>;
export type TestLink = typeof testLinks.$inferSelect;
export type InsertTestLink = z.infer<typeof insertTestLinkSchema>;
