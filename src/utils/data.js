import { HiOutlineDesktopComputer } from "react-icons/hi";
import { CiMobile1 } from "react-icons/ci";
import { MdWorkspacesOutline } from "react-icons/md";
export const projectExperience = [
  {
    name: "Proficiant in",
    originText: "Object-Oriented Software Design...",
    detailedText: "Object-Oriented Programming (Java), computer networks core protocols (IP, UDP/TCP, HTTP), design patterns (Singleton, Factory, Strategy, etc.), Git, Maven, JMeter, Scrum (Agile-Scrum), Docker",
    icon: HiOutlineDesktopComputer,
    bg: "#286F6C",
  },
  {
    name: " Intermediate",
    originText: "Spring Boot, ReactJS, MySQL...",
    detailedText: "database systems (MySQL, PostgreSQL), lock mechanisms (synchronized), thread pools, distributed system, React, ReactJS, Node.js, JavaScript, JSP, JFormDesigner",
    icon: CiMobile1,
    bg: "#EEC048",
  },
  {
    name: "Familiar with",
    originText: "Micro-services, Redis, Nacos...",
    detailedText: "Spring Cloud, Spring Security, Micro-services architecture, concurrent containers (HashMap, CopyOnWriteArrayList), Redis, Nacos",
    icon: MdWorkspacesOutline,
    bg: "#F26440",
  },
];

export const WhatDoIHelp = [
  "I am a software engineering student with a solid foundation in object-oriented programming, web application development, and database systems. I have hands-on experience with technologies like Spring Boot, ReactJS, and MySQL, and I am familiar with distributed systems and microservices architecture using tools like Redis, Nacos, and Spring Cloud, which I explored during my studies to build scalable and modular applications.",
  "While I may be early in my career, I am a fast learner who thrives in collaborative environments. My exposure to Agile practices, Git, and tools like Maven and Docker has prepared me to contribute effectively to a professional development team. I approach challenges with resilience and a focus on delivering practical solutions, and I am eager to apply my skills and continue learning to grow as a software engineer."
];

export const workExp = [
  // {
  //   place: "Self-Employed, Brisbane",
  //   tenure: "Aug 2014 - Sep 2016",
  //   role: "Visual Designer",
  //   detail:
  //     "A visual desginer dsesign for a variety of platoforms, may include internet and internet sites, games, movies, kioasks and wearbies. In short, they create the concepts",
  // },
  // {
  //   place: "New Man Services",
  //   tenure: "Aug 2014 - Sep 2016",
  //   role: "UI/UX Designer",
  //   detail:
  //     "A visual desginer dsesign for a variety of platoforms, may include internet and internet sites, games, movies, kioasks and wearbies. In short, they create the concepts",
  // },
  {
    place: "IEEE WIE AG University of Melbourne Student Branch",
    tenure: "Aug 2014 - Sep 2016",
    role: "Sr. Product Designer",
    detail:
      "A visual desginer dsesign for a variety of platoforms, may include internet and internet sites, games, movies, kioasks and wearbies. In short, they create the concepts",
  },
];

export const comments = [
  {
    name: "Wanyu Li",
    post: "someone working at Meta",
    comment:
      "Yuxin is the most remarkable people I have ever met. We became friends during our undergraduate years, and knowing her remains one of the greatest privileges of my life. Throughout university, we had the chance to work together on numerous projects, competitions, and activities. Her creativity shines through in everything she does, and she has a natural ability to guide and inspire others while remaining humble, loyal, and an excellent team player. Above all, her presence brings joy to everyone around her. I am confident she will continue to make a meaningful impact wherever she goes.",
    img: "./wanyu.png",
  },
  {
    name: "Qianchen Hu",
    post: "Quantitative Analyst at Arevon",
    comment:
      "Yuxin has always been an incredible source of inspiration and support in my life. She is not only kind-hearted and always willing to lend a hand, but also one of the most thoughtful and genuine people I know. Her dedication to her studies and her ambitious, goal-oriented nature make her stand out as a person of great determination and vision.What inspires me most about Yuxin is her passion for life and her ability to bring joy to everyone around her. Her positive energy is truly contagious, and she has a unique way of lifting others up with her humor and warmth. I am grateful to have her as a friend, and I deeply admire her for the motivation and perspective she brings to my life.",
    img: "./qianchen.png",
  },
  {
    name: "Anamika Sandula",
    post: "Creative Manager",
    comment:
      "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: "./people2.png",
  },
  {
    name: "Anamika Sandula",
    post: "Creative Manager",
    comment:
      "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: "./people1.png",
  },
  {
    name: "Anamika Sandula",
    post: "Creative Manager",
    comment:
      "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: "./people2.png",
  },
  {
    name: "Anamika Sandula",
    post: "Creative Manager",
    comment:
      "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: "./people1.png",
  },
  {
    name: "Anamika Sandula",
    post: "Creative Manager",
    comment:
      "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: "./people2.png",
  },
  {
    name: "Anamika Sandula",
    post: "Creative Manager",
    comment:
      "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: "./people1.png",
  },
  {
    name: "Anamika Sandula",
    post: "Creative Manager",
    comment:
      "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    img: "./people2.png",
  },
];

export const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  touchMove: true,
  useCSS: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
