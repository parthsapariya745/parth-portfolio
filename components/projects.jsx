"use client";
import themeContext from "./CreateContext";
import { useContext } from "react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const projects = [
  {
    id: 1,
    title: "Myntra Clone",
    description:
      "A responsive Myntra clone built using JavaScript, featuring dynamic product display and a functional cart using localStorage.",
    tech: ["Tailwind CSS", "JavaScript"],
    demo: "https://m-y-n-t-r-a-group-project-js.netlify.app/",
    source: "https://github.com/parthsapariya745/Myntra_Clone_JS",
    imgPath: "/project-myntra.png",
  },
  {
    id: 2,
    title: "Adminpanel",
    description:
      "A responsive Admin Panel using React, HTML, and CSS with React Router for smooth navigation and a clean UI.",
    tech: ["HTML", "CSS", "JavaScript", "React JS", "react-router-dom"],
    demo: "https://react-router-dom-login-signup.netlify.app/",
    source: "https://github.com/parthsapariya745/login-singup-react-router-dom",
    imgPath: "/adminpanel.png",
  },
  {
    id: 3,
    title: "Weather App",
    description:
      "A clean weather app with real-time weather API integration, animated UI, and responsive layout.",
    tech: ["HTML", "CSS", "JavaScript", "Weather API"],
    demo: "https://parth-js-weatherapp.netlify.app/",
    source: "https://github.com/parthsapariya745/Parth_JS_WeatherApp",
    imgPath: "/weather-app.png",
  },
  {
    id: 4,
    title: "Number Guessing Game",
    description:
      "A fun number guessing game with responsive design and dynamic scoring based on odd–even rules.",
    tech: ["Tailwind CSS", "JavaScript", "React JS"],
    demo: "https://number-guessing-game-react-js.netlify.app/",
    source: "https://github.com/parthsapariya745/Number-Guessing-game",
    imgPath: "/guessing-number.png",
  },
];

export default function Projects() {
  const { theme } = useContext(themeContext);

  return (
    <section
      id="projects"
      className={`py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden ${
        theme === "dark" ? "bg-[#0E0E0E]" : "bg-[#FFF6F8]"
      }`}
    >
      {/* Parallax Aura */}
      <div
        className={`absolute top-10 left-1/3 w-[28rem] h-[28rem] blur-3xl rounded-full opacity-20 
          animate-[slowFloat_7s_ease-in-out_infinite]
        ${
          theme === "dark"
            ? "bg-purple-700/25"
            : "bg-indigo-400/30"
        }`}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading */}
        <h2
          className={`text-4xl sm:text-5xl font-bold mb-4 animate-[fadeUp_0.7s_ease-out_both] ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
        >
          Featured Projects
        </h2>

        <div className="w-20 h-1 bg-linear-to-r from-indigo-500 to-purple-500 rounded mb-12 animate-[pulseGlow_2.5s_ease-in-out_infinite]" />

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div
              key={project.id}
              className={`
                group rounded-2xl overflow-hidden border backdrop-blur-xl relative
                transition-all duration-500 transform-gpu 
                hover:-translate-y-2 hover:scale-[1.03]
                hover:rotate-[0.8deg] hover:shadow-2xl
                animate-[fadeUp_1s_ease-out_${i * 0.15}s_both]
                ${
                  theme === "dark"
                    ? "bg-white/5 border-white/10 hover:shadow-[0_0_35px_rgba(255,255,255,0.25)]"
                    : "bg-white/80 border-black/10 hover:shadow-xl"
                }
              `}
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.imgPath}
                  className="w-full h-44 object-cover transition-all duration-700 group-hover:scale-110"
                />

                {/* Shine sweep */}
                <div className="
                  absolute inset-0 bg-linear-to-r 
                  from-transparent via-white/20 to-transparent
                  opacity-0 group-hover:opacity-100 
                  -translate-x-full group-hover:translate-x-full
                  transition-all duration-700
                " />
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3
                  className={`text-xl font-bold ${
                    theme === "dark" ? "text-white" : "text-black"
                  }`}
                >
                  {project.title}
                </h3>

                <p
                  className={`text-sm ${
                    theme === "dark" ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {project.description}
                </p>

                {/* Tech pills */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tag) => (
                    <span
                      key={tag}
                      className={`
                        px-3 py-1 text-xs rounded-full font-medium transition-all
                        animate-[fadeUp_1s_ease-out_both]
                        ${
                          theme === "dark"
                            ? "bg-indigo-600/20 text-indigo-300"
                            : "bg-indigo-500/10 text-indigo-700"
                        }
                        hover:scale-110 hover:-translate-y-0.5
                        hover:shadow-md cursor-default
                      `}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3 pt-2">
                  <a
                    href={project.demo}
                    target="_blank"
                    className="
                      flex-1 flex items-center justify-center gap-2 px-4 py-2
                      bg-linear-to-r from-indigo-500 to-purple-500 text-white
                      rounded-lg shadow-lg shadow-indigo-500/20
                      transition-all duration-300
                      hover:scale-[1.07] hover:shadow-indigo-500/40
                    "
                  >
                    <FiExternalLink />
                    Demo
                  </a>

                  <a
                    href={project.source}
                    target="_blank"
                    className={`
                      flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg border
                      transition-all duration-300
                      hover:scale-[1.04] hover:bg-white/10
                      ${
                        theme === "dark"
                          ? "border-white/10 text-white"
                          : "border-black/10 text-black hover:bg-black/10"
                      }
                    `}
                  >
                    <FaGithub />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}