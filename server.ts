import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Mock database for MERN demonstration
  const projects = [
    {
      id: "1",
      title: "OltraHMS",
      description: "A comprehensive, multi-role Hospital Management System covering patient care, pharmacy, lab, radiology, and telemedicine. Features real-time chat, WebRTC video, and offline PWA capability.",
      tech: ["React", "TypeScript", "Node.js", "Prisma", "PostgreSQL", "Socket.io", "WebRTC"],
      github: "https://github.com/Operac/oltra-hms",
      demo: "https://oltra-hms-frontend.vercel.app/",
      image: "/hospital.jpg"
    },
    {
      id: "2",
      title: "3D Coin Sculptor",
      description: "A no-install browser-based 3D design tool. Converts portrait photos into 3D bas-relief meshes using in-browser AI, exportable as print-ready STL files.",
      tech: ["React", "Three.js", "TypeScript", "ONNX AI"],
      github: "https://github.com/Operac/3d-coin-sculptor",
      demo: "https://3d-sculptor.vercel.app/",
      image: "/3dcoin.jpg"
    },
    {
      id: "3",
      title: "Ecommerce Fashion",
      description: "A high-end fashion e-commerce platform featuring a sleek production-grade UI, seamless product discovery, and optimized checkout flow.",
      tech: ["React", "Vite", "Tailwind CSS", "Node.js"],
      github: "https://github.com/Operac",
      demo: "https://ecommerce-fashion-git-main-operacs-projects.vercel.app/",
      image: "/fashion-store.jpg"
    },
    {
      id: "4",
      title: "Ayanfe Market",
      description: "Escrow marketplace platform facilitated through a middleman model. Full-stack with React frontend and Node.js/Prisma backend with Swagger API docs.",
      tech: ["React", "Node.js", "Prisma", "Swagger", "Express"],
      github: "https://github.com/Operac/ayanfe-market",
      image: "/market.jpg"
    },
    {
      id: "5",
      title: "Citygrid Gas",
      description: "Frontend for a gas/utility delivery service, built with high-performance focus and responsive design.",
      tech: ["React", "Vite", "Tailwind CSS"],
      github: "https://github.com/Operac/citygrid-gas",
      demo: "https://citygrid-gas.vercel.app",
      image: "/gas.jpg"
    }
  ];

  // API Routes
  app.get("/api/projects", (req, res) => {
    res.json(projects);
  });

  app.post("/api/contact", (req, res) => {
    const { name, email, message } = req.body;
    console.log(`Contact request from ${name} (${email}): ${message}`);
    res.json({ success: true, message: "Message received! I will get back to you soon." });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    // Serve static files from public folder before Vite middleware
    app.use(express.static(path.join(__dirname, "public")));
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}

startServer();