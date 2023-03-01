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
  { name: "Node Js", img: nodeJsIcon },
  { name: "Git", img: gitIcon },
  { name: "Material UI", img: materialIcon },
  { name: "Bootstrap", img: bootstrapIcon },
  { name: "React Js", img: reactIcon },
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
];
