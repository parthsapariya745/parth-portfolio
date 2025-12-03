"use client";
import themeContext from "./CreateContext";
import { useContext } from "react";

const education = [
  {
    id: 1,
    year: "10th Grade",
    title: "10th Standard",
    institution: "Sarvodaya School",
    achievement: "86% PR",
  },
  {
    id: 2,
    year: "12th Grade",
    title: "12th Standard (Commerce)",
    institution: "Sarvodaya Commerce School",
    achievement: "82% PR",
  },
  {
    id: 3,
    year: "Current",
    title: "Bachelor of Computer Applications",
    institution: "Saurashtra University",
    achievement: "BCA Degree",
  },
  {
    id: 4,
    year: "Current",
    title: "Full Stack Development",
    institution: "Red & White Multimedia Education",
    achievement: "Professional Training",
  },
];

export default function Education() {
  const { theme } = useContext(themeContext);

  return (
    <section
      id="education"
      className={`
        py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden
        ${theme === "dark" ? "bg-[#0E0E0E]" : "bg-[#FFF6F8]"}
      `}
    >
      {/* Parallax Glow */}
      <div
        className={`
          absolute right-10 top-10 w-[32rem] h-[32rem] blur-3xl rounded-full opacity-25
          animate-[slowFloat_7s_ease-in-out_infinite]
          ${theme === "dark" ? "bg-purple-700/30" : "bg-indigo-400/30"}
        `}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading */}
        <h2
          className={`
            text-4xl sm:text-5xl font-bold mb-4
            animate-[fadeUp_0.7s_ease-out_both]
            ${theme === "dark" ? "text-white" : "text-black"}
          `}
        >
          Education Journey
        </h2>

        <div className="w-20 h-1 bg-linear-to-r from-indigo-500 to-purple-500 rounded mb-12 animate-[pulseGlow_2s_ease-in-out_infinite]" />

        {/* Timeline */}
        <div className="relative mt-10">
          {/* Vertical Line */}
          <div
            className={`
              absolute left-3 top-0 w-1 h-full rounded-full
              animate-[pulseGlow_3s_ease-in-out_infinite]
              ${theme === "dark" ? "bg-white/10" : "bg-gray-300"}
            `}
          />

          {/* Items */}
          <div className="space-y-14 pl-12">
            {education.map((item, index) => (
              <div
                key={item.id}
                className={`
                  relative flex flex-col gap-2
                  animate-[fadeUp_1s_ease-out_${index * 0.15}s_both]
                `}
              >
                {/* Dot */}
                <div
                  className={`
                    absolute -left-[34px] top-1 w-5 h-5 rounded-full border-4
                    transition-all duration-500 
                    group-hover:scale-110 group-hover:shadow-xl
                    ${
                      theme === "dark"
                        ? "bg-indigo-500 border-[#0E0E0E] shadow-[0_0_12px_rgba(99,102,241,0.6)]"
                        : "bg-indigo-500 border-white shadow-[0_0_10px_rgba(99,102,241,0.5)]"
                    }
                  `}
                />

                {/* Card */}
                <div
                  className={`
                    p-5 rounded-xl border backdrop-blur-xl relative overflow-hidden
                    transition-all duration-500 transform-gpu
                    hover:-translate-y-2 hover:scale-[1.02] 
                    hover:rotate-[0.6deg] hover:shadow-2xl
                    ${
                      theme === "dark"
                        ? "bg-white/5 border-white/10 text-gray-200 hover:shadow-[0_0_35px_rgba(255,255,255,0.15)]"
                        : "bg-white/80 border-black/10 text-black hover:shadow-xl"
                    }
                  `}
                >
                  {/* Shine Sweep */}
                  <div
                    className="
                      absolute inset-0 bg-linear-to-r 
                      from-transparent via-white/20 to-transparent
                      opacity-0 group-hover:opacity-100
                      -translate-x-full group-hover:translate-x-full
                      transition-all duration-700
                    "
                  />

                  <span className="text-sm font-semibold text-indigo-500">
                    {item.year}
                  </span>

                  <h3
                    className={`
                      text-xl font-bold mt-1
                      ${theme === "dark" ? "text-white" : "text-black"}
                    `}
                  >
                    {item.title}
                  </h3>

                  <p
                    className={`
                      mt-1
                      ${theme === "dark" ? "text-gray-300" : "text-gray-600"}
                    `}
                  >
                    {item.institution}
                  </p>

                  <p className="text-sm mt-2 font-medium text-purple-500">
                    {item.achievement}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}