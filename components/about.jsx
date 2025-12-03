"use client";
import themeContext from "./CreateContext";
import { useContext } from "react";

export default function About() {
  const { theme } = useContext(themeContext);

  return (
    <section
      id="about"
      className={`
        py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden
        transition-colors duration-300
        ${theme === "dark" ? "bg-[#0E0E0E]" : "bg-[#FFF6F8]"}
      `}
    >
      {/* Background Aura with Slow Float */}
      <div
        className={`
          absolute top-10 left-1/2 -translate-x-1/2 w-[35rem] h-[35rem]
          rounded-full opacity-25 blur-3xl pointer-events-none
          animate-[slowFloat_6s_ease-in-out_infinite]
          ${theme === "dark" ? "bg-purple-600/40" : "bg-pink-400/50"}
        `}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading */}
        <h2
          className={`
            text-4xl sm:text-5xl font-bold tracking-tight mb-4
            animate-[fadeUp_0.7s_ease-out_both]
            ${theme === "dark" ? "text-white" : "text-black"}
          `}
        >
          About Me
        </h2>

        {/* Underline Glow + Soft Pulse */}
        <div
          className="
            w-20 h-1 bg-linear-to-r from-indigo-500 to-purple-500 
            rounded mb-12 animate-[pulseGlow_2.5s_ease-in-out_infinite]
          "
        />

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">
          {/* LEFT CONTENT */}
          <div className="lg:col-span-2 space-y-6">
            <p
              className={`
                text-lg leading-relaxed
                animate-[fadeUp_0.85s_ease-out_0.1s_both]
                ${theme === "dark" ? "text-gray-300" : "text-gray-700"}
              `}
            >
              I’m a passionate developer focused on crafting clean, modern, and
              user-friendly web experiences. Currently pursuing BCA at
              <strong className="font-semibold"> Saurashtra University</strong>,
              and sharpening my development skills at
              <strong className="font-semibold"> Red &amp; White Multimedia</strong>.
            </p>

            <p
              className={`
                text-lg leading-relaxed
                animate-[fadeUp_0.95s_ease-out_0.2s_both]
                ${theme === "dark" ? "text-gray-300" : "text-gray-700"}
              `}
            >
              I enjoy working across both frontend and backend—transforming ideas
              into functional, elegant digital products. My focus is on building
              scalable UIs, writing clean code, and learning new tech every day.
            </p>

            <p
              className={`
                text-lg leading-relaxed
                animate-[fadeUp_1.05s_ease-out_0.3s_both]
                ${theme === "dark" ? "text-gray-300" : "text-gray-700"}
              `}
            >
              Whether it's designing interfaces, structuring APIs, or polishing
              user experience—I'm driven by curiosity, creativity, and growth.
            </p>
          </div>

          {/* RIGHT CARD — Glass + 3D Tilt + Glow */}
          <div
            className={`
              rounded-xl p-6 space-y-5 h-fit border backdrop-blur-xl 
              shadow-xl transition-all duration-500 transform-gpu
              hover:-translate-y-1 hover:shadow-2xl hover:scale-[1.02] hover:rotate-[0.8deg]
              ${
                theme === "dark"
                  ? "bg-white/5 border-white/10 text-gray-200 hover:shadow-[0_0_35px_rgba(255,255,255,0.20)] hover:border-indigo-400/40"
                  : "bg-white/70 border-black/10 text-black hover:shadow-xl hover:border-purple-400/40"
              }
            `}
          >
            <h3 className="font-bold text-xl mb-4">Quick Info</h3>

            <div className="space-y-4 text-sm">
              <div>
                <span className={theme === "dark" ? "text-gray-400" : "text-gray-500"}>
                  Name
                </span>
                <p className="font-medium">Parth Sapariya</p>
              </div>

              <div>
                <span className={theme === "dark" ? "text-gray-400" : "text-gray-500"}>
                  Education
                </span>
                <p className="font-medium">BCA, Saurashtra University</p>
              </div>

              <div>
                <span className={theme === "dark" ? "text-gray-400" : "text-gray-500"}>
                  Training
                </span>
                <p className="font-medium">Red &amp; White Multimedia Education</p>
              </div>

              <div>
                <span className={theme === "dark" ? "text-gray-400" : "text-gray-500"}>
                  Email
                </span>
                <p className="font-medium text-indigo-500">parthsapariyait7@gmail.com</p>
              </div>

              <div>
                <span className={theme === "dark" ? "text-gray-400" : "text-gray-500"}>
                  Phone
                </span>
                <p className="font-medium">+91 98792 26001</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}