import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
 bosch,bhai,surya,visa,samsung,
  carrent,
  jobit,
  threejs,
  python,
  firebase,
  aiblocks,
  bliitt,
  angular,
  aws,
  kubernetes,
  openshift,
  pytorch,
  rag,
  ecommerce,
  nsight,
  topic,
  blockchain
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "resume",
    title: "Resume",
    drivelink:"https://drive.google.com/file/d/1jUAHoPP5IqLJSbVen0TWcy2FO5kVXdw9/view?usp=sharing",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Fullstack Developer",
    icon: web,
  },
  {
    title: "ML Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Data Scientist",
    icon: creator,
  },
];

const technologies = [

  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "openshift",
    icon: openshift,
  },
  {
    name: "kubernetes",
    icon: kubernetes,
  },
  {
    name: "angular",
    icon: angular,
  },
  {
    name: "pytorch",
    icon: pytorch,
  },
  {
    name: "aws",
    icon: aws,
  }
];

const experiences = [
  {
      title: "Software Developer Intern",
      company_name: "Bliitt",
      icon: bliitt, 
      date: "June 2024 - Aug 2024",
      points: [
        "Built Bliitt, a multi-vendor e-commerce platform using WordPress, PHP, WooCommerce, and Dokan, facilitating efficient vendor onboarding, delivery, and tracking services.",
        "Developed companion mobile apps for Bliitt using AppMySite, published on both the Apple App Store and Google Play Store.",
        "Enhanced SEO for both Liwironworks and Bliitt websites, improving search results by more than 50% and 65%, respectively.",
        "Developed the Liwironworks e-commerce website using WordPress, PHP, and WooCommerce, managing the entire process from design to deployment.",
        "Oversaw the implementation of additional dynamic changes to both websites, enhancing user experience and functionality."
      ],
    },
    {
      title: "Software Developer",
      company_name: "Visa Inc",
      icon: visa, 
      date: "June 2022 - Jul 2023",
      points: [
        "Led the overhaul of the Digital Configuration Platform with Angular and Spring Boot, achieving a 30% increase in website conversion rates.",
        "Enhanced user experiences and streamlined operations through microservices architecture, agile development, and CI/CD practices.",
        "Conducted Angular and Cypress testing for VDP-API Connect, integrating Kafka for event-driven communication, improving performance by 17%.",
        "Optimized SQL and MongoDB queries, reducing data retrieval times by 70%, leading to more efficient decision-making."
      ],
    },
    {
      title: "Software Engineer Intern",
      company_name: "Samsung Research and Development Institute",
      icon: samsung, 
      date: "June 2021 - Dec 2021",
      points: [
        "Developed and deployed a chatbot for Samsung Finance Plus Application using RASA and Spacy, increasing user engagement by 50%.",
        "Extended the chatbot's functionality to support regional Indian languages using Natural Language Processing (NLU) pipelines and FastText word vectors.",
        "Orchestrated API integration and data analysis techniques to refine chatbot interactions, improving customer engagement."
      ],
    },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Retrieval Augmented Generation",
    description:
      "Developed a RAG recommendation system using 1000 stock prediction articles, deployed via Flask on Google Kubernetes Engine, providing top 3 relevant articles with links and summaries for user queries.",
    tags: [
      { name: "ChromaDB", color: "blue-text-gradient" },
      { name: "LangChain", color: "green-text-gradient" },
      { name: "Flask", color: "pink-text-gradient" },
      { name: "Angular", color: "blue-text-gradient" },
      { name: "Kubernetes ", color: "green-text-gradient" },
      // Add other technologies if needed
    ],
    image: rag, // Replace with the correct variable or URL
    source_code_link: "https://github.com/kartik0649/Stock.ai",
  },
  {
    name: "E-Commerce Microservice",
    description:
      "Designed and implemented a microservice for an e-commerce platform, automating deployment with a CI/CD pipeline. Developed API documentation and ensured code quality with unit tests and behavior-driven development, following a test-driven approach.",
    tags: [
      { name: "GitHub Actions", color: "blue-text-gradient" },
      { name: "OpenShift", color: "blue-text-gradient" },
      { name: "Flask-RESTX", color: "blue-text-gradient" },
      { name: "OpenApi", color: "blue-text-gradient" },
      // Add other technologies if needed
    ],
    image: ecommerce, // Replace with the correct variable or URL
    source_code_link: "https://github.com/CSCI-GA-2820-SU24-001/wishlists",
  },
  {
    name: "CNN Performance Optimization",
    description:
      "Optimized CNN models (ResNet-50, VGG-16, MobileNetV2) on Nvidia GPUs (A100, V100) using CUDA and PyTorch, improving FLOPS and memory bandwidth through batch size tuning and Nsight Compute analysis.",
    tags: [
      { name: "CUDA", color: "blue-text-gradient" },
      { name: "PyTorch", color: "blue-text-gradient" },
      { name: "Nsight Compute", color: "blue-text-gradient" },
    ],
    image: nsight, // Replace with the correct variable or URL
    source_code_link: "https://github.com/kartik0649/CNN-PERF-ESTIMATION",
  },
  {
    name: "Topic Modelling",
    description:
      "Utilized K-Means clustering on 3200 research articles to create thematic groups, leveraging Prompt Engineering and OpenAI API for improved topic representation and understanding.",
    tags: [
      { name: "K-Means", color: "blue-text-gradient" },
      { name: "BERT", color: "green-text-gradient" },
      { name: "Word2vec", color: "pink-text-gradient" },
    ],
    image: topic, // Replace with the correct variable or URL
    source_code_link: "https://github.com/kartik0649/Topic-Modelling", // Update with correct link
  },
  {
    name: "Ethereum based blockchain",
    description:
      "Developed Ethereum blockchain functionalities in C++, creating transactions, blocks, and blockchain structures.Employed SHA-256 encoding for cryptographic operations embeddings.",
    tags: [
      { name: "C++", color: "blue-text-gradient" },
      { name: "Ethereum", color: "green-text-gradient" },
    ],
    image: blockchain, 
    source_code_link: "https://github.com/kartik0649/Crypto",
  },
 
  
 ];


export { services, technologies, experiences, testimonials, projects };
