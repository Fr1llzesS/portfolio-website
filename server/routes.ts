import { type Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { z } from "zod";
import path from "path";

export async function registerRoutes(app: Express): Promise<Server> {
  // Serve static files from portfolio-website/assets/ directory
  app.use('/portfolio-website/assets', (req, res, next) => {
    console.log('Запрос на файл:', req.path);
    const filePath = path.join(process.cwd(), 'portfolio-website/assets', req.path);
    console.log('Полный путь к файлу:', filePath);
    res.sendFile(filePath, (err) => {
      if (err) {
        console.log('Ошибка при отправке файла:', err);
        next();
      } else {
        console.log('Файл успешно отправлен');
      }
    });
  });
  
  // Для обработки запросов без префикса portfolio-website
  app.use('/assets', (req, res, next) => {
    console.log('Запрос на файл без префикса:', req.path);
    const filePath = path.join(process.cwd(), 'portfolio-website/assets', req.path);
    console.log('Полный путь к файлу:', filePath);
    res.sendFile(filePath, (err) => {
      if (err) {
        console.log('Ошибка при отправке файла:', err);
        next();
      } else {
        console.log('Файл успешно отправлен без префикса');
      }
    });
  });
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      const message = await storage.createContactMessage(validatedData);
      res.json({ success: true, message: "Message sent successfully", data: message });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Validation error", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Internal server error" 
        });
      }
    }
  });

  // Get all contact messages (for admin purposes)
  app.get("/api/contact-messages", async (req, res) => {
    try {
      const messages = await storage.getContactMessages();
      res.json({ success: true, data: messages });
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Failed to fetch messages" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
