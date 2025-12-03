"use client";
import { Code2 } from "lucide-react";
import { FaArrowRight } from "react-icons/fa";
import themeContext from "./CreateContext";
import { useContext, useEffect, useRef } from "react";

export default function Hero() {
  const { theme } = useContext(themeContext);
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return;

    const roles = [
      "Full Stack Developer",
      "MERN Stack Developer",
      "Frontend Developer"
    ];

    let index = 0
    let charIndex = 0
    let isDelete = false

    const typeEffect = () => {
      const currentText = roles[index]

      if (!isDelete) {
        ref.current.textContent = currentText.slice(0, charIndex)
        charIndex++

        if (charIndex > currentText.length) {
          isDelete = true
          setTimeout(typeEffect, 1000)
          return
        }
      } else {
        ref.current.textContent = currentText.slice(0, charIndex)
        charIndex--

        if (charIndex < 0) {
          isDelete = false
          index = (index + 1) % roles.length
          charIndex = 0
          setTimeout(typeEffect, 200)
          return
        }
      }

      setTimeout(typeEffect, isDelete ? 60 : 100)
    }

    typeEffect()
  }, [])

  return (
    <section
      id="home"
      className={`
        relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center overflow-hidden
        transition-colors duration-300
        ${theme === "dark" ? "bg-[#0E0E0E]" : "bg-[#FFF6F8]"}
      `}
    >
      {/* Background Aura Glow */}
      <div
        className={`
          absolute -top-20 left-1/2 -translate-x-1/2 
          w-[40rem] h-[40rem] rounded-full blur-3xl opacity-20
          ${theme === "dark" ? "bg-indigo-600/30" : "bg-pink-300/40"}
        `}
      />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-[22px]">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-pretty lg:leading-[68px] sm:leading-[55px] leading-[45px]">
              <span
                className={`
                  block transition-colors animate-[fadeUp_0.7s_ease-out_0.1s_both]
                  ${theme === "light" ? "text-black" : "text-white"}
                `}
              >
                Hi👋, I'm
              </span>

              <span
                className="
                  name text-transparent bg-clip-text bg-linear-to-r from-indigo-500 to-purple-500
                  drop-shadow-[0_4px_18px_rgba(99,102,241,0.35)]
                  animate-[scaleReveal_0.7s_ease-out_0.25s_both]
                "
              >
                Parth Sapariya
              </span>
            </h1>

            <p
              className={`
                role text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight 
                sm:min-h-[68px] min-h-[45px] block lg:mb-3 sm:mb-0 mb-2 leading-[1.2]         
                ${theme === "dark" ? "text-[#C7D2FE]" : "text-[#4B0082]"}
              `}
            >
              <span ref={ref} className="typewriter"></span>
            </p>

            <p
              className={`
                text-lg leading-relaxed transition-colors
                ${theme === "dark" ? "text-gray-400" : "text-gray-600"}
              `}
            >
              A passionate Full Stack Developer building modern, user-friendly,
              and fully responsive web applications.
            </p>

            <p
              className={`
                text-base leading-relaxed max-w-md
                ${theme === "dark" ? "text-gray-400" : "text-gray-600"}
              `}
            >
              I turn ideas into clean and functional digital products. Currently
              learning at Red & White Multimedia to expand my full stack power.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#projects"
                className="
                  group lg:px-8 md:px-5 px-8 py-3 rounded-lg font-medium flex items-center gap-2
                  justify-center sm:justify-start
                  bg-linear-to-r from-indigo-500 to-purple-500 text-white
                  shadow-lg shadow-indigo-500/30
                  transition-all duration-300
                  hover:scale-[1.04] active:scale-[0.97]
                "
              >
                View Projects
                <FaArrowRight className="text-xl transform group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className={`
                  px-8 py-3 rounded-lg font-medium flex items-center gap-2
                  justify-center sm:justify-start border transition-all
                  ${theme === "dark"
                    ? "border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white"
                    : "border-gray-300 text-black hover:bg-gray-100"
                  }
                `}
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Right Side Graphic */}
          <div className="flex items-center justify-center">
            <div
              className="
                sm:w-72 w-full h-72 rounded-2xl relative flex items-center justify-center
                bg-linear-to-br from-indigo-500/20 to-purple-500/20
                backdrop-blur-xl shadow-xl border border-white/10
                transition-transform duration-500
                hover:scale-[1.05] hover:rotate-[1.5deg]
              "
            >
              <div
                className="
                  absolute inset-0 bg-linear-to-t
                  from-indigo-400/10 to-transparent
                "
              />
              <Code2
                size={130}
                className="text-indigo-500/50 drop-shadow-[0_0_20px_rgba(99,102,241,0.35)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}