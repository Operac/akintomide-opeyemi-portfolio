export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
  image: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "OltraHMS",
    description: "A comprehensive, multi-role Hospital Management System covering patient care, pharmacy, lab, radiology, and telemedicine. Features real-time chat, WebRTC video, and offline PWA capability.",
    tech: ["React", "TypeScript", "Node.js", "Prisma", "PostgreSQL", "Socket.io", "WebRTC"],
    github: "https://github.com/Operac/oltra-hms",
    demo: "https://oltra-hms-frontend.vercel.app/",
    image: "/hospital.jpg",
  },
  {
    id: "2",
    title: "3D Coin Sculptor",
    description: "A no-install browser-based 3D design tool. Converts portrait photos into 3D bas-relief meshes using in-browser AI, exportable as print-ready STL files.",
    tech: ["React", "Three.js", "TypeScript", "ONNX AI"],
    github: "https://github.com/Operac/3d-coin-sculptor",
    demo: "https://3d-sculptor.vercel.app/",
    image: "/3dcoin.jpg",
  },
  {
    id: "3",
    title: "Ecommerce Fashion",
    description: "A high-end fashion e-commerce platform featuring a sleek production-grade UI, seamless product discovery, and optimized checkout flow.",
    tech: ["React", "Vite", "Tailwind CSS", "Node.js"],
    github: "https://github.com/Operac",
    demo: "https://ecommerce-fashion-xi.vercel.app/",
    image: "/fashion-store.jpg",
  },
  {
    id: "4",
    title: "Ayanfe Market",
    description: "Escrow marketplace platform facilitated through a middleman model. Full-stack with React frontend and Node.js/Prisma backend with Swagger API docs.",
    tech: ["React", "Node.js", "Prisma", "Swagger", "Express"],
    github: "https://github.com/Operac/ayanfe-market",
    demo: "https://ayanfehub-frontend.vercel.app/",
    image: "/market.jpg",
  },
  {
    id: "5",
    title: "Citygrid Gas",
    description: "Frontend for a gas/utility delivery service, built with high-performance focus and responsive design.",
    tech: ["React", "Vite", "Tailwind CSS"],
    github: "https://github.com/Operac/citygrid-gas",
    demo: "https://citygrid-gas-frontend.vercel.app/",
    image: "/gas.jpg",
  },
];
