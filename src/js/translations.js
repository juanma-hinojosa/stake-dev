const translations = {
  en: {
    ver: "See Project",
    footerComponent: {
      navigate: {
        title: "Navigate",
        navLinks: [
          { id: 0, path: "/", name: "Home" },
          { id: 1, path: "/about-us", name: "About Us" },
          { id: 2, path: "/portfolio", name: "Portfolio" },
        ],
      },
      info: {
        title: "Information",
        infoLinks: [
          { id: 0, path: "/ask-us", name: "Ask Us" },
          { id: 1, path: "/about-us", name: "About Us" },
          { id: 2, path: "/portfolio", name: "Portfolio" },
        ],
      },
      contact: "Contact Us",
      spam: "All Rights Reserved",
    },
    navLinks: [
      { id: 0, path: "/", name: "Home" },
      { id: 1, path: "/about-us", name: "About Us" },
      { id: 2, path: "/portfolio", name: "Portfolio" },
      { id: 3, path: "/contact", name: "Contact" },
    ],
    cardServices: [
      {
        id: 0,
        title: "Web Design",
        icon: "mdi:design",
        parrafo:
          "We design attractive and functional websites tailored to your business needs.",
      },
      {
        id: 1,
        title: "Responsive Design",
        icon: "mdi:monitor-mobile-phone",
        parrafo:
          "We create designs that adapt to any device, ensuring an optimal experience on mobile, tablets, and desktops.",
      },
      {
        id: 2,
        title: "Web Development",
        icon: "material-symbols-light:developer-mode-tv-outline",
        parrafo:
          "We develop robust and efficient websites, customized to meet your objectives.",
      },
      {
        id: 3,
        title: "UI/UX",
        icon: "hugeicons:web-design-01",
        parrafo:
          "We design intuitive interfaces that enhance user experience, making navigation simple and enjoyable.",
      },
      {
        id: 4,
        title: "GIT Version Control",
        icon: "codicon:github",
        parrafo:
          "We manage your project code efficiently, ensuring collaborative and organized development.",
      },
      {
        id: 5,
        title: "Deploy",
        icon: "eos-icons:code-deploy",
        parrafo:
          "We handle the deployment and launch of your website, ensuring it is available online without issues.",
      },
      {
        id: 6,
        title: "Hosting Management",
        icon: "simple-icons:hostinger",
        parrafo:
          "We manage your website hosting to ensure optimal performance and constant availability.",
      },
      {
        id: 7,
        title: "Front End Developer",
        icon: "healthicons:desktop-app-outline",
        parrafo:
          "We develop the visual and functional part of your website, ensuring an interactive and attractive experience for users.",
      },
    ],
    cardPortfolio: [
      {
        id: "smive",
        link: "https://smive-reparaciones.com/",
        title: "SMIVE",
        parrafo:
          "This project was developed for a company dedicated to repairs and comprehensive maintenance for homes and businesses. They offer a wide variety of services ranging from construction work, such as plumbing, masonry, and gas, to specialized solutions in electricity, irrigation system installation, gardening, and painting. Their goal is to provide complete and customized solutions that ensure the functionality and aesthetics of spaces, working with high standards of quality and customer service.",
        category: "CONSTRUCTION",
        type: "Presentation",
        img: "/images/projects/smive/smive-project-hero.jpeg",
        imgDesk: "/images/projects/smive/smive-project-desk.jpeg",
        banner: "/images/projects/smive/3.png",
        resumenMobile:
          "The main objective of this project was to create an intuitive and professional website that highlighted the company's versatility and expertise in the field of construction and maintenance. We designed a site that allowed users to easily explore the different services offered, with clear descriptions and examples of completed projects. Additionally, we included a section for inquiries and quotes, optimizing interaction with potential customers. The website was structured to reflect the company's commitment to quality and reliability, positioning it as a comprehensive solution for those seeking repair and maintenance services.",
        listDescription: [
          {
            titleDescripcion: "Brand Design",
            resumenDescripcion: "We created the brand design",
            imgDescripcion: ["smive/diseño-logo-smive.png"],
          },
          {
            titleDescripcion: "Design",
            resumenDescripcion:
              "We created a mockup with different sections so the client could view the various parts of the page",
            imgDescripcion: ["smive/web-design-smive.png"],
          },
          {
            titleDescripcion: "Web Development",
            resumenDescripcion:
              "The creation of this project included allowing the client to input information about their work with a list of photos. This required the creation of dynamic routes and a more efficient presentation of projects",
            imgDescripcion: [
              "smive/web-developer-smive.png",
              "smive/web-developer-smive-2.png",
            ],
          },
        ],
      },
      {
        id: "odontologia-cios",
        link: "https://cios-consultorio.com/",
        title: "Odontologia C.I.O.S.",
        parrafo:
          "This project was developed for a dental clinic specialized in providing comprehensive dental care services. The clinic offers a wide range of treatments, including dental cleaning, orthodontics, whitening, implants, and emergency care. Their main goal is to ensure a professional and personalized experience, helping their patients maintain a healthy smile. Additionally, the clinic stands out for its commitment to service quality, backed by the trust and satisfaction of its patients, reflected in the positive reviews it receives.",
        category: "dentistry",
        type: "Landing Page",
        img: "/images/projects/seley/cios-project-hero.jpeg",
        imgDesk: "/images/projects/seley/cios-project-desk.jpeg",
        banner: "/images/projects/seley/2.jpg",
        resumenMobile:
          "The goal of this project was to create a modern and functional website that served as a key tool for the dental clinic. The website was designed to inform users about the available treatments, highlight the experience and professionalism of the team through reviews from satisfied patients, and facilitate contact with the clinic. We incorporated an interactive map to show the exact location of the clinic and optimized navigation to provide a clear and accessible experience. This approach positioned the clinic as a reliable and accessible option for new patients seeking dental services.",
        listDescription: [
          {
            titleDescripcion: "Design",
            resumenDescripcion:
              "We created the web design respecting the colors of the clinic's logo",
            imgDescripcion: ["seley/web-design-seley.png"],
          },
          {
            titleDescripcion: "Web Development",
            resumenDescripcion:
              "We developed a landing page so that all the information would be available on a single page and easily accessible for users and potential patients",
            imgDescripcion: ["seley/web-developer-seley.png"],
          },
        ],
      },
    ],
    formComponent: {
      labelNombre: "Name",
      placeHolderNombre: "Your name",
      labelTelefono: "Phone",
      placeHolderTelefono: "Your phone",
      labelCorreo: "Email",
      placeHolderCorreo: "Your email",
      labelMensaje: "Message",
      placeHolderMensaje: "Leave us your inquiry",
      button: "Send",
      success: "Send Success",
      error: "Error",
    },
    home: {
      heroSection: {
        fraseUno: "We develop your website",
        words: ["Unique", "Customized", "Tailor-made"],
        fraseDos: "for your business",
        p: "For the creation of your website, we listen carefully to your ideas and help you turn them into reality, pixel by pixel.",
        name: "Contact us",
      },
      servicesSection: {
        subtitle: "services",
        title: "Reaching Your Expectations",
        parrafo:
          "We meet your needs so you don't have to look elsewhere. Trust us for your web projects and get results that exceed your expectations",
      },
      projectsSection: {
        subtitle: "Portfolio",
        title: "Our Latest Works",
        parrafo:
          "We are pleased to present our recent projects. Discover the quality and high standards we apply to each job. Throughout the process, we show you various proposals to ensure that the final result not only meets but exceeds your expectations.",
      },
      contactSection: {
        subtitle: "Contact Us",
        title: "What project do you have? We're excited to help you",
        parrafo:
          "We would love to hear your ideas and help you take a leap in quality for your business. In an increasingly digital world, having a strong web presence is essential for growth. Contact us! The consultation is completely free and with no obligation. Let's work together to ensure your business stands out online.",
      },
    },
    rdPortfolio: {
      back: "Back",
      projectInfo: "PROJECT INFORMATION",
      verSitio: "View Website",
    },
    aboutUs: {
      title: "About Us",
      heroSection: {
        fraseUno: "We are",
        words: ["Software Developers", "Web Designers", "Stake Dev"],
        fraseDos: "Get to know us",
        p: "At Stake Dev, we turn your ideas into real successes. With an innovative approach and constant dedication, we are here to help you achieve your goals and exceed all your expectations.",
        name: "Contact us",
      },
      nosotrosSection: {
        subtitle: "ABOUT US",
        title: "About Us",
        parrafoUno:
          "At Stake Dev, we are a team committed to transforming ideas into digital successes. Our passion for innovation and excellence drives us to specialize in web development, UX/UI design, and digital project management. Every project we undertake represents an opportunity to design customized solutions that not only meet but exceed our clients' expectations.",
        parrafoDos:
          "Our philosophy focuses on close and transparent collaboration. We work with you to understand your needs and goals, prioritizing every detail to ensure high-quality results. Our purpose is to create digital products that stand out and add value in a competitive and ever-evolving environment.",
      },
      nuestroProposito: {
        title: "Our Purpose",
        parrafo:
          "Our mission is excellence and the satisfaction of our clients.",
      },
      sectionCardComponent: {
        title: "Let's Start Working on Your Next Project Together",
        parrafo:
          "We combine creativity, innovation, and technology to build a strong digital presence that stands out in the online world. By working together, we transform your ideas into customized, effective, and tailored web solutions. Let's start creating unique digital experiences that drive your success.",
        button: "Contact Us",
      },
      nuestrosValores: {
        title: "OUR VALUES",
        parrafo:
          "We are here to accompany you at every stage, from the initial idea to the final deployment and beyond. At Stake Dev, we don't just build websites; we create digital experiences that drive your business toward success. ",
        listNumbers: [
          { titulo: "Clients", inicio: 5, fin: 10 },
          { titulo: "Projects", inicio: 10, fin: 20 },
          { titulo: "Years of experience", inicio: 0, fin: 3 },
        ],
      },
    },
    portfolio: {
      title: "Work",
      heroSection: {
        fraseUno: "Let's build your ",
        words: ["Ideas", "Projects", "Designs"],
        fraseDos: "for your business",
        p: "We invite you to explore all the projects we have worked on. We are excited for you to see the results of our effort and dedication.",
        name: "Contact Us",
      },
    },
    contact: {
      title: "Contact",
      heroSection: {
        fraseUno: "Let's start now,",
        words: ["Contact Us", "Let's Work", "Let's Build"],
        fraseDos: "Don't Wait Anymore",
        p: "If you have any questions or need more information, do not hesitate to contact us. We are here to help you with whatever you need and answer any questions you may have.",
        name: "Work",
      },
    },
    askPage: {
      title: "Frequently Asked Questions",
      subtitle: "QUESTIONS",
      preguntasList: [
        {
          id: 1,
          titulo: "Cost of Web Development",
          pregunta: "What would be the cost of developing my website?",
          respuesta:
            "The cost of developing a website can vary depending on factors such as the type of website, the functionalities you desire, the design, and whether you need additional services like maintenance or SEO. To provide you with an accurate estimate, it would be ideal to discuss your needs and expectations in detail.",
        },
        {
          id: 2,
          titulo: "Development Time",
          pregunta:
            "How long do you estimate it will take to complete the website?",
          respuesta:
            "The development time depends on the scope of the project. A simple website may take a few weeks, while more complex projects can take several months. It is also important to consider the time needed for revisions and adjustments.",
        },
        {
          id: 3,
          titulo: "Recommended Type of Website",
          pregunta: "What type of website would you recommend for my needs?",
          respuesta:
            "This depends on your goals. If you are looking for an informational site, a blog or a business page might be ideal. If you plan to sell products, an online store would be more suitable. During our initial consultation, we can discuss your goals and define the type of site that best suits you.",
        },
        {
          id: 4,
          titulo: "Information Needed to Start",
          pregunta:
            "What information or resources do I need to provide so we can get started?",
          respuesta:
            "I will need you to provide the content you want to include, such as texts, images, and any graphic material. It would also be helpful to receive information about your brand, your goals, and any design preferences you have.",
        },
        {
          id: 5,
          titulo: "Mobile Compatibility",
          pregunta:
            "Will my website be compatible and look good on mobile devices?",
          respuesta:
            "Absolutely, all the websites I develop are responsive, meaning they will be optimized to look and function correctly on mobile devices, tablets, and desktop computers.",
        },
        {
          id: 6,
          titulo: "Platform or Technology",
          pregunta:
            "What platform or technology will you use to create my website?",
          respuesta:
            "The platform or technology will depend on your needs. For example, if you are looking for a flexible and easy-to-manage solution, I might recommend WordPress. For online stores, Shopify or WooCommerce are popular options. I will discuss the best options with you before starting.",
        },
        {
          id: 7,
          titulo: "Maintenance Services",
          pregunta: "What services are included in the website maintenance?",
          respuesta:
            "Maintenance can include software updates, regular backups, security monitoring, and minor content changes. We can tailor the maintenance plan according to what you need to keep your website in optimal condition.",
        },
        {
          id: 8,
          titulo: "Content Update",
          pregunta:
            "Will I be able to update the content of my website on my own?",
          respuesta:
            "Yes, websites are generally designed so that owners can easily update content through an admin panel. I offer basic training to make you feel comfortable performing these updates.",
        },
        {
          id: 9,
          titulo: "Design and Development Process",
          pregunta: "How will the website design and development process be?",
          respuesta:
            "The process usually begins with an initial meeting to understand your needs. Then, we move on to the design phase, where I present mockups and options. Once the design is approved, we begin development. Finally, we conduct testing and adjustments before launching the site. There is a time lapse between the first meeting and the presentation of the design/mockup.",
        },
        {
          id: 10,
          titulo: "SEO Optimization",
          pregunta: "Will the website be optimized for search engines (SEO)?",
          respuesta:
            "Yes, SEO is an important part of web development. I implement recommended SEO practices, such as keyword optimization, meta descriptions, and proper URL configuration. This helps improve your site's visibility in search engines.",
        },
        {
          id: 11,
          titulo: "Social Media Integration",
          pregunta:
            "Will it be possible to integrate my website with social media or other tools?",
          respuesta:
            "Yes, I can integrate your website with your social media accounts, analytics tools like Google Analytics, email systems, and other applications you use to manage your business.",
        },
        {
          id: 12,
          titulo: "Website Security",
          pregunta: "How will you handle the security of my website?",
          respuesta:
            "Security is a priority. I implement measures such as installing SSL certificates, using strong passwords, regular software updates, and security plugins to protect your site against potential threats.",
        },
      ],
    },
  },
  es: {
    ver: "Ver Proyecto",
    footerComponent: {
      navigate: {
        title: "Navegar",
        navLinks: [
          { id: 0, path: "/", name: "inicio" },
          { id: 1, path: "/about-us", name: "nosotros" },
          { id: 2, path: "/portfolio", name: "trabajos" },
        ],
      },
      info: {
        title: "Informacion",
        infoLinks: [
          { id: 0, path: "/ask-us", name: "Preguntas Frecuentes" },
          { id: 1, path: "/about-us", name: "nosotros" },
          { id: 2, path: "/portfolio", name: "trabajos" },
        ],
      },
      contact: "Contactanos",
      spam: "Todos los Derechos Reservados",
    },
    navLinks: [
      { id: 0, path: "/", name: "Inicio" },
      { id: 1, path: "/about-us", name: "Nosotros" },
      { id: 2, path: "/portfolio", name: "Trabajos" },
      { id: 3, path: "/contact", name: "Contacto" },
    ],
    cardServices: [
      {
        id: 0,
        title: "Diseño Web",
        icon: "mdi:design",
        parrafo:
          "Diseñamos sitios web atractivos y funcionales, adaptados a las necesidades de tu negocio.",
      },
      {
        id: 1,
        title: "Diseño Responsivo",
        icon: "mdi:monitor-mobile-phone",
        parrafo:
          "Creamos diseños que se adaptan a cualquier dispositivo, garantizando una experiencia óptima en móviles, tabletas y escritorios.",
      },
      {
        id: 2,
        title: "Desarrollo Web",
        icon: "material-symbols-light:developer-mode-tv-outline",
        parrafo:
          "Desarrollamos sitios web robustos y eficientes, personalizados para cumplir con tus objetivos.",
      },
      {
        id: 3,
        title: "UI/UX",
        icon: "hugeicons:web-design-01",
        parrafo:
          "Diseñamos interfaces intuitivas que mejoran la experiencia del usuario, haciendo la navegación sencilla y agradable.",
      },
      {
        id: 4,
        title: "Control de Versiones GIT",
        icon: "codicon:github",
        parrafo:
          "Gestionamos el código de tus proyectos de forma eficiente, asegurando un desarrollo colaborativo y ordenado.",
      },
      {
        id: 5,
        title: "Despliegue",
        icon: "eos-icons:code-deploy",
        parrafo:
          "Nos encargamos de implementar y lanzar tu sitio web, asegurando que esté disponible en línea sin problemas.",
      },
      {
        id: 6,
        title: "Manejo de Hosting",
        icon: "simple-icons:hostinger",
        parrafo:
          "Administramos el hosting de tu sitio web para garantizar un rendimiento óptimo y disponibilidad constante.",
      },
      {
        id: 7,
        title: "Desarrollador Front End",
        icon: "healthicons:desktop-app-outline",
        parrafo:
          "Desarrollamos la parte visual y funcional de tu sitio web, asegurando una experiencia interactiva y atractiva para los usuarios.",
      },
    ],
    cardPortfolio: [
      {
        id: "smive",
        link: "https://smive-reparaciones.com/",
        title: "SMIVE",
        parrafo:
          "Este proyecto fue desarrollado para una empresa dedicada a refacciones y mantenimiento integral en hogares y empresas. Ofrecen una amplia variedad de servicios que abarcan desde trabajos de construcción, como plomería, albañilería y gas, hasta soluciones especializadas en electricidad, instalación de sistemas de riego, jardinería y pintura. Su objetivo es brindar soluciones completas y personalizadas que aseguren la funcionalidad y estética de los espacios, trabajando con altos estándares de calidad y atención al cliente.",
        category: "CONSTRUCCION",
        type: "Presentacion",
        img: "/images/projects/smive/smive-project-hero.jpeg",
        imgDesk: "/images/projects/smive/smive-project-desk.jpeg",
        banner: "/images/projects/smive/3.png",
        resumenMobile:
          "El objetivo principal de este proyecto fue crear una página web intuitiva y profesional que destacara la versatilidad y experiencia de la empresa en el ámbito de la construcción y mantenimiento. Diseñamos un sitio que permitiera a los usuarios explorar fácilmente los diferentes servicios ofrecidos, con descripciones claras y ejemplos de proyectos realizados. Además, incluimos una sección para consultas y presupuestos, optimizando la interacción con los clientes potenciales. La web fue estructurada para reflejar el compromiso de la empresa con la calidad y confiabilidad, posicionándola como una solución integral para quienes buscan servicios de refacción y mantenimiento.",
        listDescription: [
          {
            titleDescripcion: "Diseño de marca",
            resumenDescripcion: "Creamos el diseño de marca",
            imgDescripcion: ["smive/diseño-logo-smive.png"],
          },
          {
            titleDescripcion: "Diseño",
            resumenDescripcion:
              "Creamos un Mockup con diferentes secciones para que el cliente pudiera ver las diferentes secciones de la pagina ",
            imgDescripcion: ["smive/web-design-smive.png"],
          },
          {
            titleDescripcion: "Desarrollo Web",
            resumenDescripcion:
              "La creacion de este proyecto contemplo que el cliente pudiera colocar la informacion de sus trabajos con un listado de fotos. Esto requirio la creacion de rutas dinamicas y poder lograr una presentacion de trabajos mejor",
            imgDescripcion: [
              "smive/web-developer-smive.png",
              "smive/web-developer-smive-2.png",
            ],
          },
        ],
      },
      {
        id: "odontologia-cios",
        link: "https://cios-consultorio.com/",
        title: "Odontologia C.I.O.S.",
        parrafo:
          "Este proyecto fue desarrollado para un consultorio odontológico especializado en brindar servicios de cuidado dental integral. El consultorio ofrece una amplia gama de tratamientos, incluyendo limpieza dental, ortodoncia, blanqueamiento, implantes y atención de urgencias. Su objetivo principal es garantizar una experiencia profesional y personalizada, ayudando a sus pacientes a mantener una sonrisa saludable. Además, el consultorio se destaca por su compromiso con la calidad del servicio, respaldado por la confianza y satisfacción de sus pacientes, reflejadas en las reseñas positivas que recibe",
        category: "odontologia",
        type: "Lading Page",
        img: "/images/projects/seley/cios-project-hero.jpeg",
        imgDesk: "/images/projects/seley/cios-project-desk.jpeg",
        banner: "/images/projects/seley/2.jpg",
        resumenMobile:
          "El objetivo de este proyecto fue crear una página web moderna y funcional que sirviera como una herramienta clave para el consultorio odontológico. La página se diseñó para informar a los usuarios sobre los tratamientos disponibles, destacar la experiencia y profesionalismo del equipo mediante reseñas de pacientes satisfechos, y facilitar el contacto con el consultorio. Incorporamos un mapa interactivo para mostrar la ubicación exacta del consultorio y optimizamos la navegación para ofrecer una experiencia clara y accesible. Este enfoque permitió posicionar al consultorio como una opción confiable y accesible para nuevos pacientes que buscan servicios odontológicos.",
        listDescription: [
          {
            titleDescripcion: "Diseño",
            resumenDescripcion:
              "Creamos el diseño web respetando los colores del logo del consultorio",
            imgDescripcion: ["seley/web-design-seley.png"],
          },
          {
            titleDescripcion: "Desarrollo Web",
            resumenDescripcion:
              "Desarrollamos una lading page para que toda la informacion este disponible en una unica pagina y sea de facil acceso para los usuarios y potenciales pacientes",
            imgDescripcion: ["seley/web-developer-seley.png"],
          },
        ],
      },
    ],
    formComponent: {
      labelNombre: "Nombre",
      placeHolderNombre: "Tu nombre",
      labelTelefono: "Telefono",
      placeHolderTelefono: "Tu telefono",
      labelCorreo: "Correo Electrico",
      placeHolderCorreo: "Tu email",
      labelMensaje: "Mensaje",
      placeHolderMensaje: "Dejanos tu consulta",
      button: "Enviar",
      success: "Mensaje enviado",
      error: "Error",
    },
    home: {
      heroSection: {
        fraseUno: "Desarrollamos tu pagina",
        words: ["Unica", "Personalizada", "Hecha a Medida"],
        fraseDos: "para tu negocio",
        p: "Para la creación de tu sitio web, escuchamos atentamente tus ideas y te ayudamos a transformarlas en realidad, pixel a pixel",
        name: "Contactanos",
      },
      servicesSection: {
        subtitle: "servicios",
        title: "Alcanzando Tus Expectativas",
        parrafo:
          "Cumplimos con tus necesidades para que no tengas que buscar en otra parte. Confía en nosotros para tus proyectos web y obtén resultados que superen tus expectativas",
      },
      projectsSection: {
        subtitle: "Portafolio",
        title: "Nuestros Ultimos Trabajos",
        parrafo:
          "Nos complace presentarte nuestros proyectos recientes. Descubre la calidad y los altos estándares que aplicamos en cada trabajo. Durante el proceso, te mostramos diversas propuestas para asegurarnos de que el resultado final no solo cumpla, sino que supere tus expectativas",
      },
      contactSection: {
        subtitle: "contactanos",
        title: "Que proyecto tenes? Estamos animados de ayudarte",
        parrafo:
          "Nos encantaría escuchar tus ideas y ayudarte a dar un salto de calidad en tu negocio. En un mundo cada vez más digital, tener una fuerte presencia en la web es esencial para el crecimiento. ¡Contáctanos! La consulta es totalmente gratuita y sin compromiso. Trabajemos juntos para asegurar que tu negocio destaque en línea",
      },
    },
    rdPortfolio: {
      back: "Volver",
      projectInfo: "INFORMACION DEL PROYECTO",
      verSitio: "Ver Sitio Web",
    },
    aboutUs: {
      title: "Nosotros",
      heroSection: {
        fraseUno: "Somos",
        words: ["Sowftare Developers", "Web Designers", "Stake Dev"],
        fraseDos: "Conocenos",
        p: "En Stake Dev, convertimos tus ideas en éxitos reales. Con un enfoque innovador y una dedicación constante, estamos aquí para ayudarte a alcanzar tus metas y superar todas tus expectativas.",
        name: "Contactanos",
      },
      nosotrosSection: {
        subtitle: "NOSOTROS",
        title: "Acerca de Nosotros",
        parrafoUno:
          "En Stake Dev, somos un equipo comprometido con transformar ideas en éxitos digitales. Nuestra pasión por la innovación y la excelencia nos impulsa a especializarnos en desarrollo web, diseño UX/UI y gestión de proyectos digitales. Cada proyecto que emprendemos representa una oportunidad para diseñar soluciones personalizadas que no solo cumplan, sino superen las expectativas de nuestros clientes",
        parrafoDos:
          "Nuestra filosofía se centra en la colaboración estrecha y transparente. Trabajamos contigo para comprender tus necesidades y objetivos, priorizando cada detalle para garantizar resultados de alta calidad. Nuestro propósito es crear productos digitales que destaquen y agreguen valor en un entorno competitivo y en constante evolución.",
      },
      nuestroProposito: {
        title: "Nuestro Proposito",
        parrafo:
          "Nuestra mision es la excelencia y la aprobacion de nuestro cliente",
      },
      sectionCardComponent: {
        title: "Comenzemos a trabajar en tu proximo proyecto juntos",
        parrafo:
          "Unimos creatividad, innovación y tecnología para construir una sólida presencia digital que destaque en el mundo online. Al trabajar juntos, transformamos tus ideas en soluciones web personalizadas, efectivas y adaptadas a tus necesidades. Comencemos a crear experiencias digitales únicas que impulsen tu éxito",
        button: "Contactanos",
      },
      nuestrosValores: {
        title: "NUESTROS VALORES",
        parrafo:
          "Estamos aquí para acompañarte en cada etapa, desde la idea inicial hasta el despliegue final y más allá. En Stake Dev, no solo construimos sitios web; creamos experiencias digitales que impulsan tu negocio hacia el éxito",
        listNumbers: [
          { titulo: "Clientes", inicio: 5, fin: 10 },
          { titulo: "Proyectos", inicio: 10, fin: 20 },
          { titulo: "Años de experiencia", inicio: 0, fin: 3 },
        ],
      },
    },
    portfolio: {
      title: "Trabajos",
      heroSection: {
        fraseUno: "Contruyamos tus ",
        words: ["Ideas", "Proyectos", "Diseños"],
        fraseDos: "para tu negocio",
        p: "Te invitamos a explorar todos los proyectos en los que hemos trabajado. Nos entusiasma que puedas ver el resultado de nuestro esfuerzo y dedicación",
        name: "Contactanos",
      },
    },
    contact: {
      title: "Contacto",
      heroSection: {
        fraseUno: "Comencemos ahora,",
        words: ["Contactanos", "Trabajemos", "Construyamos"],
        fraseDos: "No Esperes mas",
        p: "Si tienes alguna pregunta o necesitas más información, no dudes en ponerte en contacto con nosotros. Estamos aquí para ayudarte en lo que necesites y resolver cualquier duda que tengas",
        name: "Trabajos",
      },
    },
    askPage: {
      title: "Preguntas Frecuentes",
      subtitle: "PREGUNTAS",
      preguntasList: [
        {
          id: 1,
          titulo: "Costo del desarrollo web",
          pregunta: "¿Cuál sería el costo de desarrollar mi página web?",
          respuesta:
            "El costo de desarrollar una página web puede variar dependiendo de factores como el tipo de sitio web, las funcionalidades que desees, el diseño, y si necesitas servicios adicionales como mantenimiento o SEO. Para darte un presupuesto preciso, sería ideal discutir tus necesidades y expectativas en detalle.",
        },
        {
          id: 2,
          titulo: "Tiempo de desarrollo",
          pregunta: "¿Cuánto tiempo estimo que tomará completar la página web?",
          respuesta:
            "El tiempo de desarrollo depende del alcance del proyecto. Un sitio web simple puede tardar unas pocas semanas, mientras que proyectos más complejos pueden llevar varios meses. Es importante considerar también el tiempo necesario para revisiones y ajustes.",
        },
        {
          id: 3,
          titulo: "Tipo de sitio web recomendado",
          pregunta:
            "¿Qué tipo de sitio web recomendarías para mis necesidades?",
          respuesta:
            "Esto depende de tus objetivos. Si buscas un sitio informativo, un blog o una página empresarial podría ser ideal. Si planeas vender productos, una tienda en línea sería más adecuada. Durante nuestra consulta inicial, podríamos discutir tus metas y definir el tipo de sitio que mejor te convenga.",
        },
        {
          id: 4,
          titulo: "Información necesaria para comenzar",
          pregunta:
            "¿Qué información o recursos necesito proporcionar para que podamos empezar?",
          respuesta:
            "Necesitaré que me proporciones el contenido que deseas incluir, como textos, imágenes, y cualquier material gráfico. También sería útil recibir información sobre tu marca, tus objetivos, y cualquier preferencia de diseño que tengas.",
        },
        {
          id: 5,
          titulo: "Compatibilidad móvil",
          pregunta:
            "¿Mi página web será compatible y se verá bien en dispositivos móviles?",
          respuesta:
            "Absolutamente, todos los sitios web que desarrollo son responsivos, lo que significa que estarán optimizados para verse y funcionar correctamente en dispositivos móviles, tabletas, y computadoras de escritorio.",
        },
        {
          id: 6,
          titulo: "Plataforma o tecnología",
          pregunta:
            "¿Qué plataforma o tecnología utilizarás para crear mi sitio web?",
          respuesta:
            "La plataforma o tecnología dependerá de tus necesidades. Por ejemplo, si buscas una solución flexible y fácil de gestionar, podría recomendarte WordPress. Para tiendas en línea, Shopify o WooCommerce son opciones populares. Discutiré contigo las mejores opciones antes de comenzar.",
        },
        {
          id: 7,
          titulo: "Servicios de mantenimiento",
          pregunta:
            "¿Qué servicios están incluidos en el mantenimiento del sitio web?",
          respuesta:
            "El mantenimiento puede incluir actualizaciones de software, copias de seguridad regulares, monitoreo de seguridad, y pequeños cambios en el contenido. Podemos adaptar el plan de mantenimiento según lo que necesites para mantener tu sitio web en óptimas condiciones.",
        },
        {
          id: 8,
          titulo: "Actualización de contenido",
          pregunta:
            "¿Tendré la posibilidad de actualizar el contenido de mi sitio web por mi cuenta?",
          respuesta:
            "Sí, generalmente los sitios web se diseñan para que los propietarios puedan actualizar el contenido fácilmente a través de un panel de administración. Ofrezco capacitación básica para que te sientas cómodo realizando estas actualizaciones.",
        },
        {
          id: 9,
          titulo: "Proceso de diseño y desarrollo",
          pregunta:
            "¿Cómo será el proceso de diseño y desarrollo de la página web?",
          respuesta:
            "El proceso suele comenzar con una reunión inicial para entender tus necesidades. Luego, pasamos a la fase de diseño, donde te presento maquetas y opciones. Una vez aprobado el diseño, comenzamos el desarrollo. Finalmente, hacemos pruebas y ajustes antes de lanzar el sitio. Hay un lapso de tiempo entre la primera reunión y la muestra del diseño/maqueta.",
        },
        {
          id: 10,
          titulo: "Optimización para SEO",
          pregunta:
            "¿El sitio web estará optimizado para motores de búsqueda (SEO)?",
          respuesta:
            "Sí, el SEO es una parte importante del desarrollo web. Implemento prácticas recomendadas de SEO, como la optimización de palabras clave, meta descripciones, y la configuración adecuada de URL. Esto ayuda a mejorar la visibilidad de tu sitio en los motores de búsqueda.",
        },
        {
          id: 11,
          titulo: "Integración con redes sociales",
          pregunta:
            "¿Será posible integrar mi sitio web con redes sociales u otras herramientas?",
          respuesta:
            "Sí, puedo integrar tu sitio web con tus cuentas de redes sociales, herramientas de análisis como Google Analytics, sistemas de correo electrónico, y otras aplicaciones que uses para gestionar tu negocio.",
        },
        {
          id: 12,
          titulo: "Seguridad del sitio web",
          pregunta: "¿Cómo te encargarás de la seguridad de mi sitio web?",
          respuesta:
            "La seguridad es una prioridad. Implemento medidas como la instalación de certificados SSL, el uso de contraseñas seguras, actualizaciones regulares del software, y plugins de seguridad para proteger tu sitio contra posibles amenazas.",
        },
      ],
    },
  },
  pt: {
    ver: "Ver Projeto",
    footerComponent: {
      navigate: {
        title: "Navegar",
        navLinks: [
          { id: 0, path: "/", name: "Início" },
          { id: 1, path: "/about-us", name: "Sobre Nós" },
          { id: 2, path: "/portfolio", name: "Portfólio" },
        ],
      },
      info: {
        title: "Informação",
        infoLinks: [
          { id: 0, path: "/ask-us", name: "Perguntas Frequentes" },
          { id: 1, path: "/about-us", name: "Sobre Nós" },
          { id: 2, path: "/portfolio", name: "Portfólio" },
        ],
      },
      contact: "Contate-Nos",
      spam: "Todos os Direitos Reservados",
    },
    navLinks: [
      { id: 0, path: "/", name: "Início" },
      { id: 1, path: "/about-us", name: "Sobre Nós" },
      { id: 2, path: "/portfolio", name: "Portfólio" },
      { id: 3, path: "/contact", name: "Contato" },
    ],
    cardServices: [
      {
        id: 0,
        title: "Design Web",
        icon: "mdi:design",
        parrafo:
          "Criamos sites atraentes e funcionais, adaptados às necessidades do seu negócio.",
      },
      {
        id: 1,
        title: "Design Responsivo",
        icon: "mdi:monitor-mobile-phone",
        parrafo:
          "Criamos designs que se adaptam a qualquer dispositivo, garantindo uma experiência ideal em celulares, tablets e desktops.",
      },
      {
        id: 2,
        title: "Desenvolvimento Web",
        icon: "material-symbols-light:developer-mode-tv-outline",
        parrafo:
          "Desenvolvemos sites robustos e eficientes, personalizados para atender aos seus objetivos.",
      },
      {
        id: 3,
        title: "UI/UX",
        icon: "hugeicons:web-design-01",
        parrafo:
          "Projetamos interfaces intuitivas que melhoram a experiência do usuário, tornando a navegação simples e agradável.",
      },
      {
        id: 4,
        title: "Controle de Versão GIT",
        icon: "codicon:github",
        parrafo:
          "Gerenciamos o código dos seus projetos de forma eficiente, garantindo um desenvolvimento colaborativo e organizado.",
      },
      {
        id: 5,
        title: "Implantação",
        icon: "eos-icons:code-deploy",
        parrafo:
          "Cuidamos da implementação e do lançamento do seu site, garantindo que esteja disponível online sem problemas.",
      },
      {
        id: 6,
        title: "Gerenciamento de Hospedagem",
        icon: "simple-icons:hostinger",
        parrafo:
          "Administramos a hospedagem do seu site para garantir um desempenho ideal e disponibilidade constante.",
      },
      {
        id: 7,
        title: "Desenvolvedor Front End",
        icon: "healthicons:desktop-app-outline",
        parrafo:
          "Desenvolvemos a parte visual e funcional do seu site, garantindo uma experiência interativa e atraente para os usuários.",
      },
    ],
    cardPortfolio: [
      {
        id: "smive",
        link: "https://smive-reparaciones.com/",
        title: "SMIVE",
        parrafo:
          "Este projeto foi desenvolvido para uma empresa dedicada a reparos e manutenção integral em residências e empresas. Eles oferecem uma ampla variedade de serviços que abrangem desde trabalhos de construção, como encanamento, alvenaria e gás, até soluções especializadas em eletricidade, instalação de sistemas de irrigação, jardinagem e pintura. Seu objetivo é fornecer soluções completas e personalizadas que garantam a funcionalidade e estética dos espaços, trabalhando com altos padrões de qualidade e atendimento ao cliente.",
        category: "CONSTRUÇÃO",
        type: "Apresentação",
        img: "/images/projects/smive/smive-project-hero.jpeg",
        imgDesk: "/images/projects/smive/smive-project-desk.jpeg",
        banner: "/images/projects/smive/3.png",
        resumenMobile:
          "O objetivo principal deste projeto foi criar uma página web intuitiva e profissional que destacasse a versatilidade e experiência da empresa no âmbito da construção e manutenção. Projetamos um site que permitisse aos usuários explorar facilmente os diferentes serviços oferecidos, com descrições claras e exemplos de projetos realizados. Além disso, incluímos uma seção para consultas e orçamentos, otimizando a interação com os clientes potenciais. A web foi estruturada para refletir o compromisso da empresa com a qualidade e confiabilidade, posicionando-a como uma solução integral para quem busca serviços de reparos e manutenção.",
        listDescription: [
          {
            titleDescripcion: "Design de marca",
            resumenDescripcion: "Criamos o design da marca",
            imgDescripcion: ["smive/diseño-logo-smive.png"],
          },
          {
            titleDescripcion: "Design",
            resumenDescripcion:
              "Criamos um Mockup com diferentes seções para que o cliente pudesse ver as diferentes partes da página",
            imgDescripcion: ["smive/web-design-smive.png"],
          },
          {
            titleDescripcion: "Desenvolvimento Web",
            resumenDescripcion:
              "A criação deste projeto contemplou que o cliente pudesse inserir informações sobre seus trabalhos com uma lista de fotos. Isso exigiu a criação de rotas dinâmicas e uma apresentação de trabalhos mais eficiente",
            imgDescripcion: [
              "smive/web-developer-smive.png",
              "smive/web-developer-smive-2.png",
            ],
          },
        ],
      },
      {
        id: "odontologia-cios",
        link: "https://cios-consultorio.com/",
        title: "Odontologia C.I.O.S.",
        parrafo:
          "Este projeto foi desenvolvido para um consultório odontológico especializado em oferecer serviços de cuidado dental integral. O consultório oferece uma ampla gama de tratamentos, incluindo limpeza dental, ortodontia, clareamento, implantes e atendimento de emergências. Seu objetivo principal é garantir uma experiência profissional e personalizada, ajudando seus pacientes a manter um sorriso saudável. Além disso, o consultório se destaca pelo compromisso com a qualidade do serviço, respaldado pela confiança e satisfação de seus pacientes, refletidas nas avaliações positivas que recebe.",
        category: "odontologia",
        type: "Lading Page",
        img: "/images/projects/seley/cios-project-hero.jpeg",
        imgDesk: "/images/projects/seley/cios-project-desk.jpeg",
        banner: "/images/projects/seley/2.jpg",
        resumenMobile:
          "O objetivo deste projeto foi criar uma página web moderna e funcional que servisse como uma ferramenta chave para o consultório odontológico. A página foi projetada para informar os usuários sobre os tratamentos disponíveis, destacar a experiência e profissionalismo da equipe por meio de avaliações de pacientes satisfeitos e facilitar o contato com o consultório. Incorporamos um mapa interativo para mostrar a localização exata do consultório e otimizamos a navegação para oferecer uma experiência clara e acessível. Essa abordagem permitiu posicionar o consultório como uma opção confiável e acessível para novos pacientes que buscam serviços odontológicos.",
        listDescription: [
          {
            titleDescripcion: "Design",
            resumenDescripcion:
              "Criamos o design da web respeitando as cores do logotipo do consultório",
            imgDescripcion: ["seley/web-design-seley.png"],
          },
          {
            titleDescripcion: "Desenvolvimento Web",
            resumenDescripcion:
              "Desenvolvemos uma landing page para que todas as informações estivessem disponíveis em uma única página e fossem de fácil acesso para os usuários e potenciais pacientes",
            imgDescripcion: ["seley/web-developer-seley.png"],
          },
        ],
      },
    ],
    formComponent: {
      labelNombre: "Nome",
      placeHolderNombre: "Seu nome",
      labelTelefono: "Telefone",
      placeHolderTelefono: "Seu telefone",
      labelCorreo: "E-mail",
      placeHolderCorreo: "Seu e-mail",
      labelMensaje: "Mensagem",
      placeHolderMensaje: "Deixe sua consulta",
      button: "Enviar",
      success: "Mensagem enviada",
      error: "Error",
    },
    home: {
      heroSection: {
        fraseUno: "Desenvolvemos o seu site",
        words: ["Único", "Personalizado", "Feito Sob Medida"],
        fraseDos: "para o seu negócio",
        p: "Para a criação do seu site, ouvimos atentamente suas ideias e ajudamos a transformá-las em realidade, pixel a pixel.",
        name: "Contate-nos",
      },
      servicesSection: {
        subtitle: "serviços",
        title: "Superando Suas Expectativas",
        parrafo:
          "Atendemos às suas necessidades para que você não precise procurar em outro lugar. Confie em nós para seus projetos web e obtenha resultados que superem suas expectativas",
      },
      projectsSection: {
        subtitle: "Portfólio",
        title: "Nossos Últimos Trabalhos",
        parrafo:
          "É um prazer apresentar nossos projetos recentes. Descubra a qualidade e os altos padrões que aplicamos em cada trabalho. Durante o processo, mostramos diversas propostas para garantir que o resultado final não apenas atenda, mas supere suas expectativas.",
      },
      contactSection: {
        subtitle: "Contate-nos",
        title: "Que projeto você tem? Estamos animados em ajudar",
        parrafo:
          "Adoraríamos ouvir suas ideias e ajudá-lo a dar um salto de qualidade no seu negócio. Em um mundo cada vez mais digital, ter uma forte presença na web é essencial para o crescimento. Entre em contato! A consulta é totalmente gratuita e sem compromisso. Vamos trabalhar juntos para garantir que seu negócio se destaque online.",
      },
    },
    rdPortfolio: {
      back: "Voltar",
      projectInfo: "INFORMAÇÕES DO PROJETO",
      verSitio: "Ver Site",
    },
    aboutUs: {
      title: "Sobre Nos",
      heroSection: {
        fraseUno: "Somos",
        words: ["Desenvolvedores de Software", "Designers Web", "Stake Dev"],
        fraseDos: "Conheça-nos",
        p: "Na Stake Dev, transformamos suas ideias em sucessos reais. Com uma abordagem inovadora e dedicação constante, estamos aqui para ajudá-lo a alcançar seus objetivos e superar todas as suas expectativas.",
        name: "Contate-nos",
      },
      nosotrosSection: {
        subtitle: "SOBRE NÓS",
        title: "Sobre Nós",
        parrafoUno:
          "Na Stake Dev, somos uma equipe comprometida em transformar ideias em sucessos digitais. Nossa paixão pela inovação e excelência nos impulsiona a nos especializar em desenvolvimento web, design UX/UI e gestão de projetos digitais. Cada projeto que realizamos representa uma oportunidade para criar soluções personalizadas que não apenas atendem, mas superam as expectativas de nossos clientes.",
        parrafoDos:
          "Nossa filosofia se concentra na colaboração próxima e transparente. Trabalhamos com você para entender suas necessidades e objetivos, priorizando cada detalhe para garantir resultados de alta qualidade. Nosso propósito é criar produtos digitais que se destacam e agregam valor em um ambiente competitivo e em constante evolução.",
      },
      nuestroProposito: {
        title: "Nosso Propósito",
        parrafo:
          "Nossa missão é a excelência e a satisfação dos nossos clientes.",
      },
      sectionCardComponent: {
        title: "Vamos Começar a Trabalhar no Seu Próximo Projeto Juntos",
        parrafo:
          "Unimos criatividade, inovação e tecnologia para construir uma presença digital sólida que se destaca no mundo online. Trabalhando juntos, transformamos suas ideias em soluções web personalizadas, eficazes e adaptadas às suas necessidades. Vamos começar a criar experiências digitais únicas que impulsionam o seu sucesso.",
        button: "Contate-nos",
      },
      nuestrosValores: {
        title: "NOSSOS VALORES",
        parrafo:
          "Estamos aqui para acompanhá-lo em cada etapa, desde a ideia inicial até a implantação final e além. Na Stake Dev, não apenas construímos sites; criamos experiências digitais que impulsionam o sucesso do seu negócio.",
        listNumbers: [
          { titulo: "Clientes", inicio: 5, fin: 10 },
          { titulo: "Projetos", inicio: 10, fin: 20 },
          { titulo: "Anos de experiência", inicio: 0, fin: 3 },
        ],
      },
    },
    portfolio: {
      title: "Trabalhos",
      heroSection: {
        fraseUno: "Vamos construir suas ",
        words: ["Ideias", "Projetos", "Designs"],
        fraseDos: "para o seu negócio",
        p: "Convidamos você a explorar todos os projetos em que trabalhamos. Estamos animados para que você veja o resultado do nosso esforço e dedicação.",
        name: "Contate-nos",
      },
    },
    contact: {
      title: "Contato",
      heroSection: {
        fraseUno: "Vamos começar agora,",
        words: ["Contate-nos", "Vamos Trabalhar", "Vamos Construir"],
        fraseDos: "Não Espere Mais",
        p: "Se você tiver alguma dúvida ou precisar de mais informações, não hesite em entrar em contato conosco. Estamos aqui para ajudá-lo no que for necessário e esclarecer qualquer dúvida que você tenha.",
        name: "Trabalhos",
      },
    },
    askPage: {
      title: "Perguntas Frequentes",
      subtitle: "PERGUNTAS",
      preguntasList: [
        {
          id: 1,
          titulo: "Custo do desenvolvimento web",
          pregunta: "Qual seria o custo para desenvolver meu site?",
          respuesta:
            "O custo de desenvolvimento de um site pode variar dependendo de fatores como o tipo de site, as funcionalidades que você deseja, o design e se você precisa de serviços adicionais como manutenção ou SEO. Para fornecer um orçamento preciso, seria ideal discutir suas necessidades e expectativas em detalhes.",
        },
        {
          id: 2,
          titulo: "Tempo de desenvolvimento",
          pregunta: "Quanto tempo você estima que levará para concluir o site?",
          respuesta:
            "O tempo de desenvolvimento depende do escopo do projeto. Um site simples pode levar algumas semanas, enquanto projetos mais complexos podem levar vários meses. Também é importante considerar o tempo necessário para revisões e ajustes.",
        },
        {
          id: 3,
          titulo: "Tipo de site recomendado",
          pregunta:
            "Que tipo de site você recomendaria para minhas necessidades?",
          respuesta:
            "Isso depende dos seus objetivos. Se você está procurando um site informativo, um blog ou uma página empresarial pode ser ideal. Se você planeja vender produtos, uma loja online seria mais adequada. Durante nossa consulta inicial, podemos discutir suas metas e definir o tipo de site que melhor atende às suas necessidades.",
        },
        {
          id: 4,
          titulo: "Informações necessárias para começar",
          pregunta:
            "Quais informações ou recursos eu preciso fornecer para que possamos começar?",
          respuesta:
            "Precisarei que você forneça o conteúdo que deseja incluir, como textos, imagens e qualquer material gráfico. Também seria útil receber informações sobre sua marca, seus objetivos e qualquer preferência de design que você tenha.",
        },
        {
          id: 5,
          titulo: "Compatibilidade com dispositivos móveis",
          pregunta:
            "Meu site será compatível e terá uma boa aparência em dispositivos móveis?",
          respuesta:
            "Com certeza, todos os sites que desenvolvo são responsivos, o que significa que serão otimizados para aparecer e funcionar corretamente em dispositivos móveis, tablets e computadores desktop.",
        },
        {
          id: 6,
          titulo: "Plataforma ou tecnologia",
          pregunta:
            "Qual plataforma ou tecnologia você usará para criar meu site?",
          respuesta:
            "A plataforma ou tecnologia dependerá das suas necessidades. Por exemplo, se você está procurando uma solução flexível e fácil de gerenciar, eu poderia recomendar o WordPress. Para lojas online, Shopify ou WooCommerce são opções populares. Discutirei as melhores opções com você antes de começar.",
        },
        {
          id: 7,
          titulo: "Serviços de manutenção",
          pregunta: "Quais serviços estão incluídos na manutenção do site?",
          respuesta:
            "A manutenção pode incluir atualizações de software, backups regulares, monitoramento de segurança e pequenas alterações no conteúdo. Podemos adaptar o plano de manutenção de acordo com o que você precisa para manter seu site em condições ideais.",
        },
        {
          id: 8,
          titulo: "Atualização de conteúdo",
          pregunta:
            "Eu terei a possibilidade de atualizar o conteúdo do meu site por conta própria?",
          respuesta:
            "Sim, geralmente os sites são projetados para que os proprietários possam atualizar o conteúdo facilmente por meio de um painel de administração. Ofereço treinamento básico para que você se sinta confortável realizando essas atualizações.",
        },
        {
          id: 9,
          titulo: "Processo de design e desenvolvimento",
          pregunta: "Como será o processo de design e desenvolvimento do site?",
          respuesta:
            "O processo geralmente começa com uma reunião inicial para entender suas necessidades. Em seguida, passamos para a fase de design, onde apresento modelos e opções. Uma vez que o design é aprovado, começamos o desenvolvimento. Por fim, realizamos testes e ajustes antes de lançar o site. Há um intervalo de tempo entre a primeira reunião e a apresentação do design/modelo.",
        },
        {
          id: 10,
          titulo: "Otimização para SEO",
          pregunta: "O site será otimizado para motores de busca (SEO)?",
          respuesta:
            "Sim, o SEO é uma parte importante do desenvolvimento web. Eu implemento práticas recomendadas de SEO, como otimização de palavras-chave, meta descrições e configuração adequada de URLs. Isso ajuda a melhorar a visibilidade do seu site nos motores de busca.",
        },
        {
          id: 11,
          titulo: "Integração com redes sociais",
          pregunta:
            "Será possível integrar meu site com redes sociais ou outras ferramentas?",
          respuesta:
            "Sim, posso integrar seu site com suas contas de redes sociais, ferramentas de análise como Google Analytics, sistemas de e-mail e outros aplicativos que você usa para gerenciar seu negócio.",
        },
        {
          id: 12,
          titulo: "Segurança do site",
          pregunta: "Como você cuidará da segurança do meu site?",
          respuesta:
            "A segurança é uma prioridade. Eu implemento medidas como a instalação de certificados SSL, o uso de senhas fortes, atualizações regulares de software e plugins de segurança para proteger seu site contra possíveis ameaças.",
        },
      ],
    },
  },
};

export default translations;
