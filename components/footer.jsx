"use client";
import themeContext from "./CreateContext";
import { useContext } from "react";

export default function Footer() {
  const { theme } = useContext(themeContext);
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`
        relative overflow-hidden border-t text-[18px]
        py-8 px-4 sm:px-6 lg:px-8
        transition-all duration-300
        ${theme === "dark"
          ? "bg-[#0E0E0E] border-white/10 text-gray-400"
          : "bg-[#F5F4F8] border-black/10 text-gray-600"
        }
        hover:-translate-y-px
      `}
    >
      {/* Subtle Floating Glow */}
      <div
        className={`
          absolute right-1/3 top-0 w-[18rem] h-[18rem] blur-3xl opacity-10 pointer-events-none
          ${theme === "dark" ? "bg-purple-600/20" : "bg-indigo-400/20"}
          animate-[slowFloat_9s_ease-in-out_infinite]
        `}
      />

      {/* Neon Gradient Top Border */}
      <div
        className="
          absolute top-0 left-0 w-full h-px
          bg-linear-to-r from-indigo-500 to-purple-500
          animate-[pulseGlow_2.5s_ease-in-out_infinite]
        "
      />

      <div className="max-w-6xl mx-auto">
        <div
          className="
            flex flex-col sm:flex-row justify-between items-center gap-4
            animate-[fadeUp_1s_ease-out_both]
          "
        >
          {/* Copyright */}
          <p className="tracking-tight flex items-center gap-1">
            © {currentYear} Design by{" "}
            <span
              className={`
                font-bold bg-clip-text text-transparent
                inline-block
                animate-[nameWave_4s_ease-in-out_infinite]
                ${theme === "dark"
                  ? "bg-linear-to-r from-indigo-300 to-purple-300 drop-shadow-[0_0_8px_rgba(140,100,255,0.45)]"
                  : "bg-linear-to-r from-indigo-600 to-purple-600"
                }
              `}
            >
              Parth Sapariya
            </span>
            • Full Stack Developer
          </p>

          {/* Links */}
          <div className="flex gap-4">
            {["Privacy", "Terms"].map((item, i) => (
              <a
                key={i}
                href="#"
                className={`
                  relative transition-all duration-300
                  ${theme === "dark"
                    ? "hover:text-white"
                    : "hover:text-black"
                  }
                  after:content-[''] after:absolute after:-bottom-0.5 after:left-0
                  after:w-0 after:h-0.5
                  after:bg-linear-to-r from-indigo-500 to-purple-500
                  hover:after:w-full after:transition-all after:duration-300
                `}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}