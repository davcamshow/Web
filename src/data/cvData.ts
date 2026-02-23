import type { Education, Experience, Project, Skill, SocialLink } from "../types";

export const personalInfo = {
  name: "David Barrera",
  title: "Estudiante de Ingeniería en Sistemas Computacionales",
  email: "davidbarrerareyes.14.dbr@gmail.com",
  phone: "+52 443 237 1703",
  location: "Morelia, Michoacán",
  summary: "Estudiante de Ingeniería en Sistemas Computacionales con pasión por el desarrollo de software. He completado alrededor de 10 proyectos personales y académicos, destacando en el desarrollo full stack con Python, JavaScript/TypeScript, React, Django y bases de datos relacionales."
};

export const experiences: Experience[] = [
  {
    id: 1,
    company: "Proyectos Personales y Académicos",
    position: "Desarrollador Full Stack",
    startDate: "2023",
    endDate: "Presente",
    description: [
      "Desarrollo de aplicaciones web full stack utilizando React, TypeScript, Django y PostgreSQL",
      "Implementación de visión por computadora para segmentación de imágenes en proyecto DressCode",
      "Creación de sistemas de gestión con autenticación, roles de usuario y paneles administrativos",
      "Alrededor de 10 proyectos completados con diferentes stacks tecnológicos"
    ]
  }
];

export const education: Education[] = [
  {
    id: 1,
    institution: "Instituto Tecnológico de Morelia",
    degree: "Ingeniería en Sistemas Computacionales",
    field: "Sistemas Computacionales",
    startDate: "2023",
    endDate: "2027",
    description: "Actualmente cursando la carrera"
  },
  {
    id: 2,
    institution: "Instituto Tecnológico de Morelia",
    degree: "Inglés B1",
    field: "Coordinacion de Lenguas Extranjeras",
    startDate: "2023",
    endDate: "2026",
    description: "Curso de inglés con nivel, enfocado en habilidades de comunicación y comprensión lectora"
  }
];

export const skills: Skill[] = [
  // Frontend
  { id: 1, name: "React", level: 85, category: "frontend" },
  { id: 2, name: "TypeScript", level: 80, category: "frontend" },
  { id: 3, name: "JavaScript", level: 85, category: "frontend" },
  { id: 4, name: "HTML/CSS", level: 85, category: "frontend" },
  { id: 5, name: "TailwindCSS", level: 80, category: "frontend" },
  { id: 6, name: "Vite", level: 75, category: "frontend" },
  // Backend
  { id: 7, name: "Python", level: 80, category: "backend" },
  { id: 8, name: "Django", level: 75, category: "backend" },
  { id: 9, name: "Node.js", level: 70, category: "backend" },
  { id: 10, name: "Java", level: 70, category: "backend" },
  // Bases de Datos
  { id: 11, name: "PostgreSQL", level: 75, category: "backend" },
  { id: 12, name: "MySQL", level: 75, category: "backend" },
  // Tools
  { id: 13, name: "Git", level: 80, category: "tools" },
  { id: 14, name: "Visión por Computadora", level: 65, category: "tools" },
  // Soft Skills
  { id: 15, name: "Trabajo en equipo", level: 90, category: "soft-skills" },
  { id: 16, name: "Comunicación", level: 85, category: "soft-skills" },
  { id: 17, name: "Resolución de problemas", level: 90, category: "soft-skills" },
  { id: 18, name: "Aprendizaje continuo", level: 95, category: "soft-skills" }
];

export const projects: Project[] = [
  {
    id: 1,
    title: "DressCode - Armario Digital",
    description: "Software de armario digital que recomienda outfits basados en clima, ocasión y temporada. Cuenta con sistema de guardado de prendas utilizando visión por computadora y segmentación de imágenes.",
    technologies: ["Python", "Django", "PostgreSQL", "HTML", "JavaScript", "CSS", "Visión por Computadora"],
    github: "https://github.com/davcamshow/DressCode"
  },
  {
    id: 2,
    title: "Sistema para Tiendas de Abarrotes",
    description: "Plataforma de compras estilo Mercado Libre para tiendas de abarrotes con perfil de administración que permite gestionar usuarios, inventario y reabastecimiento de productos.",
    technologies: ["Django", "PostgreSQL", "Vite", "React", "Node.js", "JavaScript", "Python"],
    github: "https://github.com/davcamshow/Pagina-web_abarrotes"
  },
  {
    id: 3,
    title: "Software de Matemáticas Discretas",
    description: "Aplicación compleja para relaciones y funciones matemáticas en el área de matemáticas discretas. Desarrollado inicialmente en Java y luego migrado a Python y JavaScript.",
    technologies: ["Java", "Python", "JavaScript", "Matemáticas Discretas"],
    github: "https://github.com/davidbarrerareyes/discretas-software"
  },
  {
    id: 4,
    title: "Gestor de Agronomía",
    description: "Sistema para gestión ganadera que calcula fechas, porciones, pesos y enfermedades. Herramienta completa para el área de ganadería.",
    technologies: ["React", "TypeScript", "TailwindCSS", "HTML", "Vite", "PostgreSQL", "Django"],
    github: "https://github.com/davcamshow/AgroGestor"
  }
];

export const socialLinks: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/davcamshow", icon: "github" },
  { name: "LinkedIn", url: "https://linkedin.com/in/david-barrera-reyes", icon: "linkedin" },
  { name: "Twitter", url: "https://twitter.com/david_dev", icon: "twitter" }
];