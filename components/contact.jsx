"use client";
import themeContext from "./CreateContext";
import { useContext } from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";

const contactInfo = [
  { icon: "📧", title: "Email", value: "parthsapariyait7@email.com" },
  { icon: "📞", title: "Phone", value: "+91 98792 26001" },
  { icon: "📍", title: "Location", value: "Rajkot, Gujarat, India" },
];

export default function Contact() {
  const { theme } = useContext(themeContext);

  return (
    <section
      id="contact"
      className={`
        py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden
        ${theme === "dark" ? "bg-[#0E0E0E] text-white" : "bg-[#F5F4F8] text-black"}
      `}
    >
      {/* Floating Glow */}
      <div
        className={`
          absolute left-1/2 top-10 -translate-x-1/2 w-[30rem] h-[30rem]
          blur-3xl opacity-25 rounded-full pointer-events-none
          animate-[slowFloat_7s_ease-in-out_infinite]
          ${theme === "dark" ? "bg-purple-600/30" : "bg-indigo-400/30"}
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
          Get In Touch
        </h2>

        {/* Underline Pulse */}
        <div
          className="
            w-20 h-1 bg-linear-to-r from-indigo-500 to-purple-500
            rounded mb-12 animate-[pulseGlow_2s_ease-in-out_infinite]
          "
        />

        <div className="grid md:grid-cols-2 gap-12">
          {/* FORM */}
          <div className="space-y-6 animate-[fadeUp_1s_ease-out_both]">
            <form className="space-y-5">
              {["Your Name", "Your Email"].map((placeholder, i) => (
                <input
                  key={i}
                  placeholder={placeholder}
                  className={`
                    w-full px-4 py-3 rounded-lg border backdrop-blur-xl
                    transition-all duration-300 focus:ring-2 focus:ring-indigo-500
                    hover:shadow-lg hover:shadow-indigo-500/10
                    ${
                      theme === "dark"
                        ? "bg-white/5 border-white/10 text-white placeholder:text-gray-500"
                        : "bg-white border-black/10 text-black placeholder:text-gray-500"
                    }
                  `}
                />
              ))}

              <textarea
                rows={5}
                placeholder="Your Message"
                className={`
                  w-full px-4 py-3 rounded-lg resize-none border backdrop-blur-xl
                  transition-all duration-300 focus:ring-2 focus:ring-indigo-500
                  hover:shadow-lg hover:shadow-indigo-500/10
                  ${
                    theme === "dark"
                      ? "bg-white/5 border-white/10 text-white placeholder:text-gray-500"
                      : "bg-white border-black/10 text-black placeholder:text-gray-500"
                  }
                `}
              ></textarea>

              <button
                type="submit"
                className="
                  w-full px-6 py-3 rounded-lg text-white font-medium cursor-pointer
                  bg-linear-to-r from-indigo-500 to-purple-500
                  hover:opacity-90 active:scale-95 
                  transition-all shadow-lg shadow-indigo-500/30
                "
              >
                Send Message
              </button>
            </form>
          </div>

          {/* INFO + SOCIALS */}
          <div className="space-y-10 animate-[fadeUp_1.2s_ease-out_both]">
            <div>
              <h3 className="text-2xl font-bold mb-6">Other Ways to Connect</h3>

              <div className="space-y-4">
                {contactInfo.map((item, i) => (
                  <div
                    key={i}
                    className={`
                      group relative flex items-start gap-4 p-4 rounded-xl border backdrop-blur-xl
                      transition-all duration-500 overflow-hidden
                      hover:-translate-y-1 hover:scale-[1.02]
                      ${
                        theme === "dark"
                          ? "bg-white/5 border-white/10 hover:shadow-[0_0_25px_rgba(255,255,255,0.15)]"
                          : "bg-white border-black/10 hover:shadow-xl"
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

                    <span className="text-3xl">{item.icon}</span>

                    <div>
                      <p className="font-semibold">{item.title}</p>
                      <p
                        className={`${
                          theme === "dark" ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* SOCIAL ICONS */}
            <div>
              <h3 className="font-bold mb-4">Follow Me</h3>

              <div className="flex gap-4">
                {[
                  { Icon: FaGithub, link: "https://github.com/parthsapariya745" },
                  { Icon: FaInstagram, link: "https://www.instagram.com/parth_sapariya_" },
                  { Icon: FaLinkedin, link: "https://www.linkedin.com/in/parth-sapariya-91b1b4379/" },
                  { Icon: FaFacebook, link: "https://www.facebook.com/share/17TYL4Lfcz/" },
                ].map(({ Icon, link }, i) => (
                  <a
                    key={i}
                    href={link}
                    target="_blank"
                    className={`
                      p-3 rounded-lg border transition-all duration-300
                      hover:-translate-y-1 hover:scale-[1.08]
                      ${
                        theme === "dark"
                          ? "bg-white/5 border-white/10 hover:shadow-[0_0_18px_rgba(255,255,255,0.2)]"
                          : "bg-white border-black/10 hover:bg-black/10"
                      }
                    `}
                  >
                    <Icon className="text-lg" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}