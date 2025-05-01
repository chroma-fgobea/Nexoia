import { users, type User, type InsertUser, bots, type Bot, type InsertBot, messages, type Message, type InsertMessage, testLinks, type TestLink, type InsertTestLink } from "../shared/schema";
import createMemoryStore from "memorystore";
import session from "express-session";

const MemoryStore = createMemoryStore(session);

// modify the interface with any CRUD methods
// you might need
export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  getUserByEmail(email: string): Promise<User | undefined>;
  getUsers(): Promise<User[]>;
  createUser(user: InsertUser): Promise<User>;
  updateUser(id: number, user: Partial<InsertUser>): Promise<User | undefined>;
  deleteUser(id: number): Promise<boolean>;
  
  // Bot methods
  getBot(id: number): Promise<Bot | undefined>;
  getBotsByUserId(userId: number): Promise<Bot[]>;
  getAllBots(): Promise<Bot[]>;
  createBot(bot: InsertBot): Promise<Bot>;
  updateBot(id: number, bot: Partial<InsertBot>): Promise<Bot | undefined>;
  deleteBot(id: number): Promise<boolean>;
  
  // Message methods
  getMessage(id: number): Promise<Message | undefined>;
  getMessagesByBotId(botId: number): Promise<Message[]>;
  getMessagesByUserId(userId: number): Promise<Message[]>;
  createMessage(message: InsertMessage): Promise<Message>;
  deleteMessage(id: number): Promise<boolean>;
  
  // TestLink methods
  getTestLink(id: number): Promise<TestLink | undefined>;
  getTestLinkByShortUrl(shortUrl: string): Promise<TestLink | undefined>;
  getActiveTestLinks(): Promise<TestLink[]>;
  createTestLink(testLink: InsertTestLink): Promise<TestLink>;
  deactivateTestLink(id: number): Promise<boolean>;
  
  // Session store
  sessionStore: session.SessionStore;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private bots: Map<number, Bot>;
  private messages: Map<number, Message>;
  private testLinks: Map<number, TestLink>;
  sessionStore: session.SessionStore;
  
  private userCurrentId: number;
  private botCurrentId: number;
  private messageCurrentId: number;
  private testLinkCurrentId: number;

  constructor() {
    this.users = new Map();
    this.bots = new Map();
    this.messages = new Map();
    this.testLinks = new Map();
    
    this.userCurrentId = 1;
    this.botCurrentId = 1;
    this.messageCurrentId = 1;
    this.testLinkCurrentId = 1;
    
    this.sessionStore = new MemoryStore({
      checkPeriod: 86400000, // prune expired entries every 24h
    });
    
    // Create a default admin user
    this.createUser({
      username: "admin",
      email: "admin@nexo.ia",
      password: "admin123",
      fullName: "Administrator",
      role: "admin",
      company: "Nexo.ia"
    });
    
    // Create sample bots
    this.createBot({
      name: "Asistente de Ventas",
      description: "Bot para asistencia en ventas",
      type: "sales",
      userId: 1
    });
    
    this.createBot({
      name: "Soporte Técnico",
      description: "Bot para soporte técnico",
      type: "support",
      userId: 1
    });
    
    this.createBot({
      name: "FAQ Bot",
      description: "Bot para preguntas frecuentes",
      type: "faq",
      userId: 1
    });
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username.toLowerCase() === username.toLowerCase(),
    );
  }
  
  async getUserByEmail(email: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.email.toLowerCase() === email.toLowerCase(),
    );
  }
  
  async getUsers(): Promise<User[]> {
    return Array.from(this.users.values());
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userCurrentId++;
    const createdAt = new Date();
    const user: User = { ...insertUser, id, createdAt, status: "active" };
    this.users.set(id, user);
    return user;
  }
  
  async updateUser(id: number, userData: Partial<InsertUser>): Promise<User | undefined> {
    const user = this.users.get(id);
    if (!user) return undefined;
    
    const updatedUser = { ...user, ...userData };
    this.users.set(id, updatedUser);
    return updatedUser;
  }
  
  async deleteUser(id: number): Promise<boolean> {
    return this.users.delete(id);
  }
  
  // Bot methods
  async getBot(id: number): Promise<Bot | undefined> {
    return this.bots.get(id);
  }
  
  async getBotsByUserId(userId: number): Promise<Bot[]> {
    return Array.from(this.bots.values()).filter(
      (bot) => bot.userId === userId
    );
  }
  
  async getAllBots(): Promise<Bot[]> {
    return Array.from(this.bots.values());
  }
  
  async createBot(insertBot: InsertBot): Promise<Bot> {
    const id = this.botCurrentId++;
    const createdAt = new Date();
    const bot: Bot = { ...insertBot, id, createdAt };
    this.bots.set(id, bot);
    return bot;
  }
  
  async updateBot(id: number, botData: Partial<InsertBot>): Promise<Bot | undefined> {
    const bot = this.bots.get(id);
    if (!bot) return undefined;
    
    const updatedBot = { ...bot, ...botData };
    this.bots.set(id, updatedBot);
    return updatedBot;
  }
  
  async deleteBot(id: number): Promise<boolean> {
    return this.bots.delete(id);
  }
  
  // Message methods
  async getMessage(id: number): Promise<Message | undefined> {
    return this.messages.get(id);
  }
  
  async getMessagesByBotId(botId: number): Promise<Message[]> {
    return Array.from(this.messages.values()).filter(
      (message) => message.botId === botId
    );
  }
  
  async getMessagesByUserId(userId: number): Promise<Message[]> {
    return Array.from(this.messages.values()).filter(
      (message) => message.userId === userId
    );
  }
  
  async createMessage(insertMessage: InsertMessage): Promise<Message> {
    const id = this.messageCurrentId++;
    const createdAt = new Date();
    const message: Message = { ...insertMessage, id, createdAt };
    this.messages.set(id, message);
    return message;
  }
  
  async deleteMessage(id: number): Promise<boolean> {
    return this.messages.delete(id);
  }
  
  // TestLink methods
  async getTestLink(id: number): Promise<TestLink | undefined> {
    return this.testLinks.get(id);
  }
  
  async getTestLinkByShortUrl(shortUrl: string): Promise<TestLink | undefined> {
    return Array.from(this.testLinks.values()).find(
      (link) => link.shortUrl === shortUrl
    );
  }
  
  async getActiveTestLinks(): Promise<TestLink[]> {
    return Array.from(this.testLinks.values()).filter(
      (link) => link.isActive
    );
  }
  
  async createTestLink(insertTestLink: InsertTestLink): Promise<TestLink> {
    const id = this.testLinkCurrentId++;
    const createdAt = new Date();
    const isActive = true;
    const testLink: TestLink = { ...insertTestLink, id, createdAt, isActive };
    this.testLinks.set(id, testLink);
    return testLink;
  }
  
  async deactivateTestLink(id: number): Promise<boolean> {
    const testLink = this.testLinks.get(id);
    if (!testLink) return false;
    
    testLink.isActive = false;
    this.testLinks.set(id, testLink);
    return true;
  }
}

export const storage = new MemStorage();
