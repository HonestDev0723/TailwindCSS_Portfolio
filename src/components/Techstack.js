import React from "react";
import { AiFillHtml5 } from "react-icons/ai";
import {
  FaCss3Alt,
  FaReact,
  FaSass,
  FaBootstrap,
  FaWordpress,
  FaNodeJs,
} from "react-icons/fa";
import { BiLogoJavascript } from "react-icons/bi";
import {
  SiFirebase,
  SiRedux,
  SiTailwindcss,
  SiGreensock,
  SiJquery,
  SiPwa,
  SiExpress,
  SiMongodb,
  SiWeb3Dotjs,
  SiRust,
  SiSolidity,
  SiTypescript,
  SiDjango,
  SiPrisma,
  SiPostgresql,
  SiPython
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const data = [  
  {
    icon: <SiWeb3Dotjs fontSize={70} color="#fff" title="Web 3.0"/>,
  },
  {
    icon: <SiRust fontSize={70} color="#fff" title="Rust"/>,
  },
  {
    icon: <SiSolidity fontSize={70} color="#fff" title="Solidity"/>,
  },
  {
    icon: <SiTypescript fontSize={70} color="#fff" title="Typescript"/>,
  }, 
  {
    icon: <SiDjango fontSize={70} color="#fff" title="Django"/>,
  },  
  {
    icon: <AiFillHtml5 fontSize={70} color="#fff" title="HTML 5"/>,
  },
  {
    icon: <FaCss3Alt fontSize={70} color="#fff" title="CSS3"/>,
  },
  {
    icon: <BiLogoJavascript fontSize={70} color="#fff" title="Javascript"/>,
  },
  {
    icon: <SiFirebase fontSize={70} color="#fff" title="Firebase"/>,
  },
  {
    icon: <FaReact fontSize={70} color="#fff" title="React"/>,
  },
  {
    icon: <SiRedux fontSize={70} color="#fff" title="Redux"/>,
  },
  {
    icon: <SiTailwindcss fontSize={70} color="#fff" title="Tailwindcss"/>,
  },
  {
    icon: <FaSass fontSize={70} color="#fff" title="Sass"/>,
  },
  {
    icon: <FaBootstrap fontSize={70} color="#fff" title="Bootstrap"/>,
  },
  {
    icon: <SiGreensock fontSize={70} color="#fff" title="Greensock"/>,
  },
  {
    icon: <SiJquery fontSize={70} color="#fff" title="Jquery"/>,
  },
  {
    icon: <FaWordpress fontSize={70} color="#fff" title="Wordpress"/>,
  },
  {
    icon: <SiPwa fontSize={70} color="#fff" title="PWA"/>,
  },
  {
    icon: <FaNodeJs fontSize={70} color="#fff" title="NodeJs"/>,
  },
  {
    icon: <SiExpress fontSize={70} color="#fff" title="Express"/>,
  },
  {
    icon: <SiMongodb fontSize={70} color="#fff" title="Mongodb"/>,
  },
  {
    icon: <TbBrandNextjs fontSize={70} color="#fff" title="BrandNextjs"/>,
  },
  {
    icon: <SiPrisma fontSize={70} color="#fff" title="Prisma"/>,
  },  
  {
    icon: <SiPostgresql fontSize={70} color="#fff" title="Postgresql"/>,
  },
  {
    icon: <SiPython fontSize={70} color="#fff" title="Python"/>,
  },
];

function Techstack() {
  return (
    <div className="relative w-11/12 lg:w-4/5 mx-auto flex items-center justify-center gap-3 flex-wrap my-5 lg:my-10">
      <img
        src="./star.jpg"
        alt=""
        className="h-full w-full object-cover opacity-10 absolute bottom-0"
      />
      {data.map((item, i) => (
        <div
          className="w-36 md:w-60 h-36 flex items-center justify-center m-3 border border-[#df8de2] bg-black/30  z-20 rounded-sm hover:border-[#ad50eb] hover:scale-[1.02] transition-all duration-300"
          key={i}
        >
          {item.icon}
        </div>
      ))}
    </div>
  );
}

export default Techstack;
