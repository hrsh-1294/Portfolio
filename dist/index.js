// server/index.ts
import express2 from "express";

// server/routes.ts
import { createServer } from "http";

// server/routes/contact.ts
import { Router } from "express";
import * as nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();
var router = Router();
router.post("/api/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    console.log("Received contact form data:", { name, email, message });
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });
    const mailOptions = {
      from: process.env.EMAIL_USER,
      // Keep this your email (to avoid spam filters)
      to: process.env.EMAIL_USER,
      // You receive the email
      subject: `Portfolio Contact from ${name}`,
      text: `You have received a new message:


      Name: ${name}

      Email: ${email}

      Message:

      ${message}
`,
      replyTo: email
      // Allows replying directly to sender
    };
    console.log("\u2709\uFE0F Mail options:", mailOptions);
    const info = await transporter.sendMail(mailOptions);
    console.log("\u2705 Email sent successfully:", info);
    res.status(200).json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("\u274C Error sending email:", error);
    res.status(500).json({ success: false, error: "Failed to send email" });
  }
});
var contact_default = router;

// server/routes.ts
function registerRoutes(app2) {
  app2.use(contact_default);
  const httpServer = createServer(app2);
  return httpServer;
}

// server/vite.ts
import express from "express";
import fs from "fs";
import path2, { dirname as dirname2 } from "path";
import { fileURLToPath as fileURLToPath2 } from "url";
import { createServer as createViteServer, createLogger } from "vite";

// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import themePlugin from "@replit/vite-plugin-shadcn-theme-json";
import path, { dirname } from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import { fileURLToPath } from "url";
var __filename = fileURLToPath(import.meta.url);
var __dirname = dirname(__filename);
var vite_config_default = defineConfig({
  base: "/portfolio/",
  plugins: [react(), runtimeErrorOverlay(), themePlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
      "@shared": path.resolve(__dirname, "shared")
    }
  },
  root: path.resolve(__dirname, "client"),
  build: {
    outDir: path.resolve(__dirname, "dist/public"),
    emptyOutDir: true
  },
  optimizeDeps: {
    include: ["react", "react-dom/client"]
  }
});

// server/vite.ts
import { nanoid } from "nanoid";
var __filename2 = fileURLToPath2(import.meta.url);
var __dirname2 = dirname2(__filename2);
var viteLogger = createLogger();
async function setupVite(app2, server2) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server: server2 },
    allowedHosts: true
  };
  const vite = await createViteServer({
    ...vite_config_default,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      }
    },
    server: serverOptions,
    appType: "custom"
  });
  app2.use(vite.middlewares);
  app2.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    try {
      const clientTemplate = path2.resolve(
        __dirname2,
        "..",
        "client",
        "index.html"
      );
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });
}

// server/index.ts
import { createServer as createServer2 } from "http";
var app = express2();
app.use(express2.json());
app.use(express2.urlencoded({ extended: false }));
app.use((req, res, next) => {
  const start = Date.now();
  res.on("finish", () => {
    const duration = Date.now() - start;
    console.log(
      `${req.method} ${req.url} ${res.statusCode} ${duration}ms`
    );
  });
  next();
});
var server = createServer2(app);
setupVite(app, server);
registerRoutes(app);
app.use((err, _req, res, _next) => {
  const status = err.status || err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(status).json({ message });
  throw err;
});
var port = process.env.PORT || 5e3;
app.listen(port, () => {
  console.log(`serving on port ${port}`);
});
