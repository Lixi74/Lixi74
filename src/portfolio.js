/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/loading"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: false // Set to false to use static SVG
};

const greeting = {
  username: "Lina Paipa",
  title: "Hola a todos, soy Lina Paipa",
  subTitle: emoji(
    "Soprano y artista pop. Combino la técnica lírica con la emoción del pop para crear música que conecta. Soy también profesora de técnica vocal, directora coral y actriz de doblaje. Vivo la voz como una herramienta creativa y transformadora, dentro y fuera del escenario."
  ),
  resumeLink: "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  linkedin: "https://www.linkedin.com/in/lina-paipa-233399369/",
  gmail: "linapaipa74@gmail.com",
  facebook: "https://www.facebook.com/linaximena.paipaalvarez",
  instagram: "https://www.instagram.com/lina_paipa/",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Que hago",
  subTitle: "APACIONADA CANTANTE QUE GUSTA DE CREAR MÚSICA",
  skills: [
    emoji(
      "🎵 Enseñanza y dirección para cantantes y agrupaciones en múltiples géneros musicales"
    ),
    emoji(
      "🎵 Ensamble musical para coros, con experiencia en presentaciones y proyectos colaborativos"
    ),
    emoji("🎵 Composición musical: letra, armonía y creación de pistas"),
    emoji(
      "🎵 Directora coral, encargada de la preparación vocal y liderazgo artístico"
    ),
    emoji(
      "🎵 Habilidosa vocalista para agrupaciones y colaboraciones, tanto como solista como integrante clave en ensambles corales"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [],
  display: true // Set false to hide this section, defaults to true
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Canto y pedagogia vocal",
      progressPercentage: "90%"
    },
    {
      Stack: "Doblaje de voz",
      progressPercentage: "80%"
    },
    {
      Stack: "Dirección coral",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Universidad Juan N. Corpas",
      logo: require("./assets/images/JuanNCorpas.webp"),
      subHeader: "Pregrado en Canto Lírico",
      duration: "Enero 2019 - Julio 2025",
      desc: "Formación profesional en canto lírico, con énfasis en el desarrollo de habilidades vocales, interpretativas y pedagógicas. El programa fomenta el trabajo colaborativo en ensambles corales y la participación en múltiples exposiciones y presentaciones de canto lírico, permitiendo el crecimiento artístico y escénico de sus estudiantes.",
      descBullets: [
        "Participación activa en ensambles corales y proyectos colaborativos",
        "Presentaciones regulares en recitales y eventos de canto lírico",
        "Estudio profundo de teoría musical, historia de la música y análisis de repertorio",
        "Desarrollo de habilidades para cantar en diversos idiomas: italiano, alemán, francés y español",
        "Formación en pedagogía vocal y técnicas de enseñanza musical",
        "Enfoque en dirección coral y liderazgo artístico dentro de agrupaciones musicales"
      ]
    }
  ]
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Profesora de técnica vocal y directora coral",
      company: "Marguz",
      companylogo: require("./assets/images/Marguz.webp"),
      date: "Marzo 2025 – Presente",
      desc: "Docente de técnica vocal para la Fundación Marguz, liderando el coro institucional. Encargada de la formación vocal de los integrantes, desarrollo de repertorio coral y organización de presentaciones musicales. Trabajo enfocado en el crecimiento artístico y vocal de los participantes, promoviendo el trabajo en equipo y la expresión musical.",
      descBullets: [
        "Impartición de clases de técnica vocal a niños y adultos",
        "Dirección y liderazgo del coro institucional",
        "Organización de ensayos y presentaciones musicales",
        "Fomento del trabajo colaborativo y la creatividad musical"
      ]
    },
    {
      role: "Profesora de coro y técnica vocal",
      company: "Mi Conservatorio",
      companylogo: require("./assets/images/MiConservatorio.webp"),
      date: "Noviembre 2024 – Diciembre 2024",
      desc: "Trabajo durante la temporada navideña, organizando y dirigiendo el coro infantil y juvenil para presentaciones artísticas de fin de año. Responsable de la preparación vocal, selección de repertorio y coordinación de ensayos, asegurando un alto nivel técnico y artístico en cada actuación.",
      descBullets: [
        "Organización y dirección de ensayos corales para niños y jóvenes",
        "Preparación vocal y selección de repertorio acorde a la temporada",
        "Coordinación logística y artística para presentaciones públicas",
        "Enfoque en el desarrollo técnico y expresivo de los participantes"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Grandes proyectos",
  subtitle: "ALGUNOS PROYECTOS GRANDES EN LOS QUE HE TRABAJADO",
  projects: [
    {
      image: require("./assets/images/lixi&jax.jpg"),
      projectName: "Lixi & Jax",
      projectDesc:
        "Somos un dueto pop freak con un toque de locura. Estamos dando nuestros primeros pasos en este emocionante mundo musical. ¡Esperamos que disfruten nuestra música tanto como nosotros disfrutamos haciéndola!",
      footerLink: [
        {
          name: "Spotify",
          url: "https://open.spotify.com/intl-es/artist/0n2kzxbqTT4sU6a0qYDrZJ?si=hcAxGDniQg2Q6oqpQ6owsA"
        },
        {
          name: "LinkTree",
          url: "https://linktr.ee/lixiyjax"
        }
        //  you can add extra buttons here.
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Logros y Certificaciones 🏆 "),
  subtitle:
    "Logros, Certificaciones, Cartas de Premios y Algunas Cosas Geniales que He Hecho!",

  achievementsCards: [
    {
      title: "Recital de grado",
      subtitle:
        "Con orgullo enseño mi recital de grado en el auditorio de Uniandinos. Pasando por las obras :",
      image: require("./assets/images/Recital.webp"),
      imageAlt: "Puesta en escena del recital de grado",
      footerLink: [
        {
          name: "Ver en Youtube",
          url: "https://youtu.be/Vh7xr4VmJK4?feature=shared"
        }
      ]
    },
    {
      title:
        "Ensamble coral en el Festival Internacional de Música Sacra de Bogotá",
      subtitle:
        "Participación destacada como integrante de la Fusión Coro Estable Juan N. Corpas y Tinkuy Ensamble Vocal en el XIII Festival Internacional de Música Sacra de Bogotá 2024. Presentación de la obra 'Réquiem' de Antonio María Valencia bajo la dirección del Maestro Carlos Escalante, en la Parroquia San Diego, ante más de cien asistentes.",
      image: require("./assets/images/FIMSAC-2024.webp"),
      imageAlt:
        "Presentación en el Festival Internacional de Música Sacra de Bogotá",
      footerLink: [
        {
          name: "Ver en Youtube",
          url: "https://youtu.be/xWOxJ4gghvE?feature=shared"
        }
      ]
    },
    {
      title: "Certificaciones",
      subtitle:
        "Una coleccion de certificaciones demostrando mis amplias habilidades y conocimientos en canto, pedagogía vocal, dirección coral y doblaje de voz. Estas certificaciones reflejan mi compromiso con la excelencia y mi pasión por la música y la enseñanza.",
      image: require("./assets/images/Logo-Certificaciones.webp"),
      imageAlt: "Certificaciones",
      footerLink: [
        {
          name: "Ver certificaciones",
          url: "https://drive.google.com/drive/folders/1y74yz-VrBKMspXboXL6q6Z5keNYpjtBF?usp=sharing"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "Ponencias",
  subtitle: emoji(
    "ME ENCANTA COMPARTIR MI CONOCIMIENTO Y AYUDAR A CRECER A OTROS TALENTOSOS ARTISTAS 🎤"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "ME GUSTA COMPARTIR MIS HISTORIAS CON EL MUNDO",

  // Please Provide with Your Podcast embeded Link
  podcast: [""],
  display: false // Set false to hide this section, defaults to true
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contáctame ☎️"),
  subtitle:
    "¿Tienes un evento del que quieras discutir? Estoy lista para comenzar.",
  number: "+57 3134089878",
  email_address: "linapaipa74@gmail.com"
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
