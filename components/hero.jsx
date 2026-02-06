"use client";
import { FaArrowRight } from "react-icons/fa";
import themeContext from "./CreateContext";
import { useContext, useEffect, useRef } from "react";

export default function Hero() {
  const { theme } = useContext(themeContext);
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const roles = [
      "Full Stack Developer",
      "MERN Stack Developer",
      "Frontend Developer",
      "Backend Developer",
    ];

    let index = 0;
    let charIndex = 0;
    let isDelete = false;

    const typeEffect = () => {
      const currentText = roles[index];

      if (!isDelete) {
        ref.current.textContent = currentText.slice(0, charIndex);
        charIndex++;

        if (charIndex > currentText.length) {
          isDelete = true;
          setTimeout(typeEffect, 1200);
          return;
        }
      } else {
        ref.current.textContent = currentText.slice(0, charIndex);
        charIndex--;

        if (charIndex < 0) {
          isDelete = false;
          index = (index + 1) % roles.length;
          charIndex = 0;
          setTimeout(typeEffect, 300);
          return;
        }
      }

      setTimeout(typeEffect, isDelete ? 50 : 90);
    };

    typeEffect();
  }, []);

  return (
    <section
      id="home"
      className={`
        relative min-h-screen flex items-center overflow-hidden
        px-4 sm:px-6 lg:px-8 pt-32 pb-24
        transition-colors duration-500
        ${theme === "dark" ? "bg-[#0E0E0E]" : "bg-[#FFF6F8]"}
      `}
    >
      {/* Background Glow */}
      <div
        className={`
          absolute -top-40 left-1/2 -translate-x-1/2
          w-[45rem] h-[45rem] rounded-full blur-3xl opacity-25
          animate-pulse
          ${theme === "dark" ? "bg-indigo-600/30" : "bg-pink-300/40"}
        `}
      />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="flex justify-center md:justify-start">
          <div className="w-full space-y-7 flex flex-col items-center">
            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              <span
                className={`
                  block transition-all duration-700 text-center
                  ${theme === "light" ? "text-black" : "text-white"}
                `}
              >
                Hello 👋
              </span>
              <span className={`${theme === "light" ? "text-black" : "text-white"}`}>
                I'm {" "}
                <span
                  className="
                    mt-2 text-transparent bg-clip-text
                    bg-linear-to-r from-indigo-500 to-purple-500
                    drop-shadow-[0_4px_18px_rgba(99,102,241,0.35)]
                  "
                >
                  Parth Sapariya
                </span>
              </span>
            </h1>

            {/* Role */}
            <p
              className={`
                text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight
                min-h-[52px] leading-tight
                ${theme === "dark" ? "text-[#a4accc]" : "text-[#4B0082]"}
              `}
            >
              <span ref={ref}></span>
              <span className="ml-1 animate-pulse">|</span>
            </p>

            {/* Description */}
            <p
              className={`
                text-lg leading-relaxed max-w-2xl text-center
                ${theme === "dark" ? "text-gray-400" : "text-gray-600"}
              `}
            >
              A passionate Full Stack Developer building modern, scalable,
              and user-friendly web applications.
            </p>

            <p
              className={`
                text-base leading-relaxed max-w-xl text-center
                ${theme === "dark" ? "text-gray-400" : "text-gray-600"}
              `}
            >
              I turn ideas into clean and functional digital products. Currently
              learning at Red & White Multimedia to strengthen my full stack skills.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <a
                href="#projects"
                className="
                  group px-8 py-3 rounded-lg font-medium
                  flex items-center gap-2 justify-center
                  bg-linear-to-r from-indigo-500 to-purple-500 text-white
                  shadow-lg shadow-indigo-500/30
                  transition-all duration-300
                  hover:scale-105 active:scale-95
                "
              >
                View Projects
                <FaArrowRight className="text-xl group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className={`
                  px-8 py-3 rounded-lg font-medium
                  flex items-center gap-2 justify-center
                  border transition-all duration-300
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
        </div>
      </div>
    </section>
  );
}