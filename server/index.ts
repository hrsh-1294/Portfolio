import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite } from "./vite";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

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

import { createServer } from "http";

const server = createServer(app);
setupVite(app, server);
registerRoutes(app);

app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });
    throw err;
});


const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`serving on port ${port}`);
});