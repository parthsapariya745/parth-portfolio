"use client";
import themeContext from "./CreateContext";
import { useContext } from "react";
import Image from "next/image";

const skillCategories = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML", level: "Master", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" },
      { name: "CSS", level: "Master", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" },
      { name: "Tailwind CSS", level: "Master", icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
      { name: "JavaScript", level: "Advanced", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" },
      { name: "React JS", level: "Advanced", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" },
      { name: "Bootstrap", level: "Intermediate", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png" },
      { name: "Next JS", level: "Basic", icon: "https://logo.svgcdn.com/devicon-plain/nextjs-plain.png" },
    ],
  },
  
  {
    category: "Backend",
    skills: [
      { name: "Node JS", level: "Advanced", icon: "https://www.etatvasoft.com/public/images/nodejs-main-logo-hexa.svg" },
      { name: "C", level: "Advanced", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/1086px-C_Programming_Language.svg.png" },
      { name: "C++ With DSA", level: "Intermediate", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg" },
      { name: "Typescript", level: "Basic", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" }
    ],
  },

  {
    category: "Database",
    skills: [
      { name: "Mongo DB", level: "Advanced", icon: "https://cdn.iconscout.com/icon/free/png-256/free-mongodb-logo-icon-svg-download-png-3030245.png" },
      { name: "Firebase", level: "Intermediate", icon: "https://pnghdpro.com/wp-content/themes/pnghdpro/download/social-media-and-brands/google-firebase-logo-icon-hd.png" },
      { name: "Supabase DB", level: "Basic", icon: "https://img.icons8.com/color/512/supabase.png" },
    ],
  },

  {
    category: "Tools",
    skills: [
      { name: "VS Code", level: "Master", icon: "/vs-code.png", height: true, width: true },
      { name: "Git", level: "Advanced", icon: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" },
      {
        name: "GitHub",
        level: "Advanced",
        iconDark: "https://img.icons8.com/ios11/512/FFFFFF/github.png",
        iconLight: "https://static.vecteezy.com/system/resources/previews/016/833/872/non_2x/github-logo-git-hub-icon-on-white-background-free-vector.jpg",
      },
      { name: "React Router", level: "Advanced", icon: "https://www.svgrepo.com/show/354262/react-router.svg" },
      { name: "Redux", level: "Intermediate", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" },
      { name: "Postman", level: "Intermediate", icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/postman-icon.png" },
    ],
  },
];

export default function Skills() {
  const { theme } = useContext(themeContext);

  return (
    <section
      id="skills"
      className={`
        py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden
        transition-colors duration-300
        ${theme === "dark" ? "bg-[#0E0E0E] text-white" : "bg-[#FFF6F8] text-black"}
      `}
    >
      {/* Background Glow */}
      <div
        className={`
          absolute top-20 left-1/2 -translate-x-1/2 w-[30rem] h-[30rem] blur-3xl opacity-20
          ${theme === "dark" ? "bg-indigo-600/40" : "bg-purple-300/80"}
        `}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4 animate-[fadeUp_0.7s_ease-out_both]">
          Skills
        </h2>

        <div className="w-20 h-1 bg-linear-to-r from-indigo-500 to-purple-500 rounded mb-12 animate-[fadeUp_0.8s_ease-out_both]" />

        {/* Category List */}
        <div className="space-y-14">

          {skillCategories.map((category, index) => (
            <div key={index}>
              {/* Category Title */}
              <h3 className={`text-2xl font-semibold mb-4 ${theme === "dark" ? "text-indigo-300" : "text-purple-700"}`}>
                {category.category}
              </h3>

              {/* Skill Row */}
              <div className="flex flex-wrap gap-6">
                {category.skills.map((skill, i) => (  
                  <div
                    key={i}
                    className={`
                      flex flex-col items-center justify-center
                      w-32 h-36 gap-2 p-4 rounded-xl
                      backdrop-blur-xl border transition-all duration-300
                      hover:scale-[1.13]
                      ${
                        theme === "dark"
                          ? "bg-white/5 border-white/10 hover:shadow-[0_0_20px_rgba(52,21,57,0.8)]"
                          : "bg-white border-black/10 hover:shadow-xl"
                      }
                    `}
                  >
                    {/* Icon */}
                    <Image
                      src={
                        skill.iconDark && skill.iconLight
                          ? theme === "dark"
                            ? skill.iconDark
                            : skill.iconLight
                          : skill.icon
                      }
                      alt={skill.name}
                      width={50}
                      height={50}
                      className={`object-cover ${skill.height && skill.width ? "h-[75px] w-[75px]" : ""}`}
                    />

                    {/* Skill Name */}
                    <span className="text-sm font-medium">{skill.name}</span>

                    {/* Level Badge */}
                    <span
                      className={`
                        px-3 py-1 text-[10px] rounded-full font-semibold tracking-wide
                        ${
                          theme === "dark"
                            ? "bg-indigo-500/20 text-indigo-300 border border-indigo-500/30"
                            : "bg-purple-500/15 text-purple-700 border border-purple-300/40"
                        }
                      `}
                    >
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}