import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import { DiMongodb } from "react-icons/di";
import { FaGithubSquare } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { SiJira } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { FaBrain } from "react-icons/fa";
import { FiLayout } from "react-icons/fi";
import { FaTools } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";



const TechStack = [
    {
        category: 'Frontend',
        skills: [
            { name: "React.js", icon: <FaReact className="w-4 h-4 text-blue-500" /> },
            { name: "Next.js", icon: <RiNextjsFill className="w-4 h-4 text-white" /> },
            { name: "React Native", icon: <TbBrandReactNative className="w-4 h-4 text-blue-300" /> },
            { name: "JavaScript", icon: <IoLogoJavascript className="w-4 h-4 text-yellow-400" /> },
            { name: "TypeScript", icon: <SiTypescript  className="w-4 h-4 text-blue-500 bg-white" /> },
            { name: "HTML", icon: <FaHtml5 className="w-4 h-4 text-orange-500 " /> },
            { name: "CSS", icon: <FaCss3 className="w-4 h-4 text-blue-500"/> },
            { name: "Tailwind ", icon: <RiTailwindCssFill className="w-4 h-4 text-blue-400" /> },
        ],
    },
    {
        category: "Backend",
        skills: [
            { name: "Node.js", icon: <FaNodeJs className="w-4 h-4 text-green-600" /> },
            { name: "Express.js", icon: <SiExpress className="w-4 h-4 text-white font-bold" /> },
            { name: "Java", icon: <FaJava className="w-4 h-4 text-orange-400" /> },
            { name: "Spring Boot", icon: <SiSpringboot className="w-4 h-4 text-green-400" /> },
            { name: "Python", icon: <FaPython className="w-4 h-4 text-yellow-500" /> },
            { name: "SQL", icon: <DiMysql className="w-4 h-4 text-blue-500" /> },
            { name: "MongoDB", icon: <DiMongodb className="w-4 h-4 text-green-400" /> },
        ],
    },
    {
        category: "Tools",
        skills: [
            { name: "Git", icon: <FaGithubSquare className="w-4 h-4 text-white" /> },
            { name: "Docker", icon: <FaDocker className="w-4 h-4 text-blue-500" /> },
            { name: "Jira", icon: <SiJira className="w-4 h-4 text-blue-400" /> },
            { name: "Postman", icon: <SiPostman className="w-4 h-4 text-orange-500 bg-white rounded-full" /> },
        ],
    },
    {
        category: "Other",
        skills: [
            { name: "AI/ML", icon: <FaBrain className="w-4 h-4 " /> },
            { name: "UX/UI", icon: <FiLayout className="w-4 h-4" /> },
            { name: "Agile", icon: <FaTools className="w-4 h-4" /> },
        ],
    },
];

export default TechStack;