import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { setupAuth } from "./auth";
import { z } from "zod";
import { scrypt, randomBytes } from "crypto";
import { promisify } from "util";
import { insertBotSchema, insertMessageSchema, insertTestLinkSchema } from "../shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Set up authentication routes
  setupAuth(app);

  // Bot routes
  app.get("/api/bots", async (req, res) => {
    if (!req.isAuthenticated()) return res.status(401).json({ message: "Unauthorized" });
    
    try {
      const bots = await storage.getAllBots();
      res.json(bots);
    } catch (error) {
      res.status(500).json({ message: "Error fetching bots" });
    }
  });
  
  app.get("/api/bots/:id", async (req, res) => {
    if (!req.isAuthenticated()) return res.status(401).json({ message: "Unauthorized" });
    
    try {
      const id = parseInt(req.params.id);
      const bot = await storage.getBot(id);
      
      if (!bot) {
        return res.status(404).json({ message: "Bot not found" });
      }
      
      res.json(bot);
    } catch (error) {
      res.status(500).json({ message: "Error fetching bot" });
    }
  });
  
  app.post("/api/bots", async (req, res) => {
    if (!req.isAuthenticated()) return res.status(401).json({ message: "Unauthorized" });
    
    try {
      const userId = req.user?.id;
      if (!userId) {
        return res.status(401).json({ message: "User ID not found" });
      }
      
      const validatedData = insertBotSchema.parse({
        ...req.body,
        userId
      });
      
      const bot = await storage.createBot(validatedData);
      res.status(201).json(bot);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Validation error", errors: error.errors });
      }
      res.status(500).json({ message: "Error creating bot" });
    }
  });
  
  app.put("/api/bots/:id", async (req, res) => {
    if (!req.isAuthenticated()) return res.status(401).json({ message: "Unauthorized" });
    
    try {
      const id = parseInt(req.params.id);
      const bot = await storage.getBot(id);
      
      if (!bot) {
        return res.status(404).json({ message: "Bot not found" });
      }
      
      // Validate user is owner of bot
      if (bot.userId !== req.user?.id && req.user?.role !== 'admin') {
        return res.status(403).json({ message: "Forbidden: You don't own this bot" });
      }
      
      const updatedBot = await storage.updateBot(id, req.body);
      res.json(updatedBot);
    } catch (error) {
      res.status(500).json({ message: "Error updating bot" });
    }
  });
  
  app.delete("/api/bots/:id", async (req, res) => {
    if (!req.isAuthenticated()) return res.status(401).json({ message: "Unauthorized" });
    
    try {
      const id = parseInt(req.params.id);
      const bot = await storage.getBot(id);
      
      if (!bot) {
        return res.status(404).json({ message: "Bot not found" });
      }
      
      // Validate user is owner of bot
      if (bot.userId !== req.user?.id && req.user?.role !== 'admin') {
        return res.status(403).json({ message: "Forbidden: You don't own this bot" });
      }
      
      await storage.deleteBot(id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ message: "Error deleting bot" });
    }
  });
  
  // Messages routes
  app.get("/api/bots/:botId/messages", async (req, res) => {
    if (!req.isAuthenticated()) return res.status(401).json({ message: "Unauthorized" });
    
    try {
      const botId = parseInt(req.params.botId);
      const bot = await storage.getBot(botId);
      
      if (!bot) {
        return res.status(404).json({ message: "Bot not found" });
      }
      
      const messages = await storage.getMessagesByBotId(botId);
      res.json(messages);
    } catch (error) {
      res.status(500).json({ message: "Error fetching messages" });
    }
  });
  
  app.post("/api/bots/:botId/messages", async (req, res) => {
    try {
      const botId = parseInt(req.params.botId);
      const bot = await storage.getBot(botId);
      
      if (!bot) {
        return res.status(404).json({ message: "Bot not found" });
      }
      
      const userId = req.isAuthenticated() ? req.user?.id : null;
      
      const validatedData = insertMessageSchema.parse({
        ...req.body,
        botId,
        userId
      });
      
      const message = await storage.createMessage(validatedData);
      
      // If the message is from a user, simulate bot response
      if (validatedData.fromUser) {
        const botMessage = await storage.createMessage({
          content: "Gracias por tu mensaje. Soy el asistente virtual de Nexo.ia. ¿En qué puedo ayudarte?",
          fromUser: false,
          userId: null,
          botId
        });
        
        return res.status(201).json({ userMessage: message, botResponse: botMessage });
      }
      
      res.status(201).json(message);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Validation error", errors: error.errors });
      }
      res.status(500).json({ message: "Error sending message" });
    }
  });
  
  // Test Link routes
  app.get("/api/test-links", async (req, res) => {
    if (!req.isAuthenticated()) return res.status(401).json({ message: "Unauthorized" });
    
    try {
      const links = await storage.getActiveTestLinks();
      res.json(links);
    } catch (error) {
      res.status(500).json({ message: "Error fetching test links" });
    }
  });
  
  app.post("/api/test-links", async (req, res) => {
    if (!req.isAuthenticated()) return res.status(401).json({ message: "Unauthorized" });
    
    try {
      // Generate a random short URL
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      let shortUrl = '';
      for (let i = 0; i < 8; i++) {
        shortUrl += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      
      // Set expiration date to 7 days from now
      const expiresAt = new Date();
      expiresAt.setDate(expiresAt.getDate() + 7);
      
      const validatedData = insertTestLinkSchema.parse({
        ...req.body,
        shortUrl,
        expiresAt
      });
      
      const testLink = await storage.createTestLink(validatedData);
      res.status(201).json(testLink);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Validation error", errors: error.errors });
      }
      res.status(500).json({ message: "Error creating test link" });
    }
  });
  
  app.delete("/api/test-links/:id", async (req, res) => {
    if (!req.isAuthenticated()) return res.status(401).json({ message: "Unauthorized" });
    
    try {
      const id = parseInt(req.params.id);
      const success = await storage.deactivateTestLink(id);
      
      if (!success) {
        return res.status(404).json({ message: "Test link not found" });
      }
      
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ message: "Error deactivating test link" });
    }
  });
  
  // User management routes
  app.get("/api/users", async (req, res) => {
    if (!req.isAuthenticated()) return res.status(401).json({ message: "Unauthorized" });
    
    // Check if user is admin
    if (req.user?.role !== 'admin') {
      return res.status(403).json({ message: "Forbidden: Admin access required" });
    }
    
    try {
      const users = await storage.getUsers();
      // Remove password from response
      const safeUsers = users.map(user => {
        const { password, ...safeUser } = user;
        return safeUser;
      });
      
      res.json(safeUsers);
    } catch (error) {
      res.status(500).json({ message: "Error fetching users" });
    }
  });
  
  app.put("/api/users/:id", async (req, res) => {
    if (!req.isAuthenticated()) return res.status(401).json({ message: "Unauthorized" });
    
    // Check if user is admin or updating their own profile
    const userId = parseInt(req.params.id);
    if (req.user?.id !== userId && req.user?.role !== 'admin') {
      return res.status(403).json({ message: "Forbidden: You can only update your own profile" });
    }
    
    try {
      // Don't allow role change unless admin
      if (req.body.role && req.user?.role !== 'admin') {
        delete req.body.role;
      }
      
      // Handle password update separately
      if (req.body.password) {
        req.body.password = await hashPassword(req.body.password);
      }
      
      const updatedUser = await storage.updateUser(userId, req.body);
      
      if (!updatedUser) {
        return res.status(404).json({ message: "User not found" });
      }
      
      // Remove password from response
      const { password, ...safeUser } = updatedUser;
      
      res.json(safeUser);
    } catch (error) {
      res.status(500).json({ message: "Error updating user" });
    }
  });
  
  app.delete("/api/users/:id", async (req, res) => {
    if (!req.isAuthenticated()) return res.status(401).json({ message: "Unauthorized" });
    
    // Only admin can delete users
    if (req.user?.role !== 'admin') {
      return res.status(403).json({ message: "Forbidden: Admin access required" });
    }
    
    try {
      const userId = parseInt(req.params.id);
      
      // Prevent deleting yourself
      if (req.user?.id === userId) {
        return res.status(400).json({ message: "Cannot delete your own account" });
      }
      
      const success = await storage.deleteUser(userId);
      
      if (!success) {
        return res.status(404).json({ message: "User not found" });
      }
      
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ message: "Error deleting user" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}

// Helper for password hashing (referenced in user update route)
async function hashPassword(password: string) {
  const salt = randomBytes(16).toString("hex");
  const buf = (await promisify(scrypt)(password, salt, 64)) as Buffer;
  return `${buf.toString("hex")}.${salt}`;
}
