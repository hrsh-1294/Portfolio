import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import contactRouter from './routes/contact';

export function registerRoutes(app: Express): Server {
  // Register the contact form route
  app.use(contactRouter);

  const httpServer = createServer(app);

  return httpServer;
}