//Sidebar icons start
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SchoolIcon from "@mui/icons-material/School";
import LaptopIcon from "@mui/icons-material/Laptop";
import EmailIcon from "@mui/icons-material/Email";
//Sidebar icons end

//Experience icons start
import bootstrapIcon from "../assets/photos&images/experienceImages/bootstrap.svg";
import codeWarsIcon from "../assets/photos&images/experienceImages/codewars.svg";
import courseraIcon from "../assets/photos&images/experienceImages/coursera.svg";
import cssIcon from "../assets/photos&images/experienceImages/css.svg";
import gitIcon from "../assets/photos&images/experienceImages/git.svg";
import htmlIcon from "../assets/photos&images/experienceImages/html.svg";
import jsIcon from "../assets/photos&images/experienceImages/javascript.svg";
import materialIcon from "../assets/photos&images/experienceImages/materialUi.svg";
import nodeJsIcon from "../assets/photos&images/experienceImages/node.svg";
import reactIcon from "../assets/photos&images/experienceImages/react.svg";
import w3schoolsIcon from "../assets/photos&images/experienceImages/w3schools.svg";
import youtubeIcon from "../assets/photos&images/experienceImages/youtube.svg";
//Experience icons end

//Projects icons start
import rimPic from "../assets/photos&images/projectsImages/rimPic.jpg";
import scrollPic from "../assets/photos&images/projectsImages/scrollPic.jpg";
import SWPic from "../assets/photos&images/projectsImages/SWPic.jpg";
import taskPic from "../assets/photos&images/projectsImages/taskPic.jpg";
//Projects icons end

export const sidebarItems = [
  {
    id: 1,
    name: "About",
    img: <AccountCircleIcon />,
  },
  {
    id: 2,
    name: "Education",
    img: <SchoolIcon />,
  },
  {
    id: 3,
    name: "Experience",
    img: <LaptopIcon />,
  },
  {
    id: 4,
    name: "Contact",
    img: <EmailIcon />,
  },
];

export const allMountains = [
  { name: "Bobija" },
  { name: "Canyon of Nera" },
  { name: "Goc" },
  { name: "Golija" },
  { name: "Homoljske mountains" },
  { name: "Maljen" },
  { name: "Lazarev Canyon" },
  { name: "Ovcar" },
  { name: "Rtanj" },
  { name: "Rudnik" },
  { name: "Suva Mountain" },
  { name: "Stolovi" },
  { name: "Tara" },
];

//Exp start
export const iconsArr = [
  { name: "Html", img: htmlIcon },
  { name: "Css", img: cssIcon },
  { name: "Javascript", img: jsIcon },
  { name: "React Js", img: reactIcon },
  { name: "Git", img: gitIcon },
  { name: "Material UI", img: materialIcon },
  { name: "Bootstrap", img: bootstrapIcon },
  { name: "Node Js", img: nodeJsIcon },
];
export const iconsArr2 = [
  { name: "Youtube", img: youtubeIcon },
  { name: "Coursera", img: courseraIcon },
  { name: "CodeWars", img: codeWarsIcon },
  { name: "W3Schools", img: w3schoolsIcon },
];
//Exp end

export const breadcrumbList = [
  { name: "CV", location: "/" },
  { name: "Album", location: "/api" },
  { name: "Game", location: "/game" },
  { name: "Projects", location: "/projects" },
];

export const projectsList = [
  {
    name: "R&M Wiki",
    info: "This React Js project is wikipedia of Rick and Morty cartoon.App collects data from other server using Rest Api. ",
    image: rimPic,
    location: "https://github.com/veljkoRad/Rick_Morty_Wikipedia",
    id: 0,
  },
  {
    name: "Taskbar App",
    info: "This is React Js project,react Router included. App fetch data(Tasks) from fake Json server ",
    image: taskPic,
    location: "https://github.com/veljkoRad/React_Taskbar_project",
    id: 1,
  },
  {
    name: "Scroll Page",
    info: "This is responisve design scroll page,created with Html/Css/JavaScript",
    image: scrollPic,
    location: "https://github.com/veljkoRad/Responsive-Design-Scroll_Site",
    id: 2,
  },
  {
    name: "Star Wars page",
    info: "This is simple responsive design Html/Css/JavaScript page,my first project",
    image: SWPic,
    location: "https://github.com/veljkoRad/StarWas_Responsive_Page",
    id: 3,
  },
];
