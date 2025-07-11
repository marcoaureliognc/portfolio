// app/data/projects.ts
export const projects = [
  {
    slug: "myAgave",
    title: "MyAgave",
    mainImage: "/agave-mainpage.jpg",
    description: "Web application designed for agave producers.",
    purpose: "It helps agave farmers manage their inputs, machinery, and agave production. It also allows them to track their current workforce.",
    features: [
      // "Autenticación de usuarios.",
      "User authentication.",
      // "Gestión de parcelas, inventario y empleados.",
      "Management of plots, inventory and employees.",
      // "Estadísticas sobre los cambios que ha habido en la producción de agave.",
      "Statistics on changes in agave production.",
      "Request API to find out the current weather in the area and the change in the sales price of agave."
    ],
    galleryImages: [
      "/agave-adm-main.jpg",
      "/agave-reportes-campos.jpg",
      "/agave-reportes-works.jpg",
      "/agave-worker.jpg",
    ],
    github: "https://github.com/marcoaureliognc/myAgave"
  },
  {
    slug: "saludDigital",
    title: "Salud Digital",
    mainImage: "/pr-sd-home.jpg",
    description: "Website for \"Salud Digital\" Department at CUCS.",
    tech: ["PHP", "JavaScript", "MySQL", "Bootstrap"],
    purpose: "Help the \"Salud Digital\" Department educate people about the services they provide and the research they conduct.",
    features: [
      // "Informar a estudiantes sobre el departamento.",
      "Inform students about the department.",
      // "Brinda información sobre salud mental a estudiantes.",
      "Provide mental health information to students.",
      // "Informa sobre los servicios que brindan.",
      "Inform students about the services they provide.",
      // "Se suben noticias sobre el departamento actualizadas dinámicamente.",
      "Dynamically updated news about the department is posted.",
    ],
    galleryImages: [
      "/pr-sd-notice.jpg",
      "/pr-sd-details.jpg",
      "/pr-sd-sm.jpg",
      "/pr-sd-notice-popup.jpg"
    ],
    github: "https://github.com/marcoaureliognc/pr-salud-digital"
  },
  // {
  //   slug: "easyParking",
  //   title: "easy parking",
  //   description: "Control de visitantes en estacionamiento.",
  //   tech: ["PHP", "React", "MySQL", "Bootstrap"],
  //   mainImage: "/knowtel.jpg",
  //   imagen1: "/easyparking1.jpg",
  //   imagen2: "/easyparking2.jpg",
  //   imagen3: "/easyparking3.jpg",
  //   github: "https://github.com/tuusuario/knowtel"
  // },
];

