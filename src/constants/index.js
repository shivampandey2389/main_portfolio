const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Skills",
    link: "#experience",
  },
  {
    name: "Tech-Stack",
    link: "#skills",
  }
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 0, suffix: "+", label: "Years of Experience" },
  { value: 0, suffix: "", label: "Satisfied Clients" },
  { value: 10, suffix: "+", label: "Completed Projects" },
  { value: 0, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review:
      "I recently built a front-end project using HTML, CSS, JavaScript, and React While working on it, I focused on creating a clean layout, responsive design, and adding interactivity through JavaScript. ",
    imgPath: "/images/React.png",
    logoPath: "/images/React.png",
    title: "Frontend Development",
    date: "January 2023 - Present",
    responsibilities: [
     "In the early stages, I learned HTML, CSS, and JavaScript.",
    "I built more optimized and scalable websites using these technologies.",
    "React helped me make components reusable and simplified my development."
    ],
  },
  {
    review:
      "Full-stack website i have mostly using next.js and react with react-router.The website were completely responsive and smooth",
    imgPath: "/images/Next.js.png",
    logoPath: "/images/Next.js.png",
    title: "Full Stack Developer",
    date: "June 2020 - December 2023",
    responsibilities: [
      "React and React Router have enabled me to develop more diverse, scalable, and optimized websites.",
"I gained proficiency in MongoDB, allowing me to build robust full-stack web applications.",
"Additionally, working with Next.js enhanced my ability to structure applications efficiently, offering built-in features like routing, backend integration, and seamless compatibility with Tailwind CSS."
    ],
  },
  {
    review:
      "I really enjoyed how React Native makes it easy to build cross-platform apps using JavaScript and React concepts I'm already familiar with. Setting up the project was smooth, and once I got the hang of it, developing features became really efficient.",
    imgPath: "/images/React.png",
    logoPath: "/images/React.png",
    title: "React Native Developer",
    date: "March 2019 - May 2020",
    responsibilities: [
      "Built cross-platform mobile applications using React Native with a single codebase, ensuring high performance and native-like experiences.",
      "Implemented smooth navigation flows using React Navigation and integrated backend services like MongoDB to create full-featured mobile apps.",
      "Designed responsive and scalable UI by combining React Native with Tailwind CSS libraries, maintaining visual consistency across different devices.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];



const socialImgs = [
  {
    name: "insta",
    url: "https://www.instagram.com/_shivampandeyy__/",
    imgPath: "/images/insta.png",
  },
  {
    name: "github",
    url: "hhttps://github.com/shivampandey2389",
    imgPath: "/images/github.png",
  },
  {
    name: "x",
    url: "https://x.com/shivampandey053",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/shivam-pandey-0840462a2/",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};