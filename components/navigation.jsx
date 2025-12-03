"use client";
import { useContext, useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import themeContext from "./CreateContext";
import Image from "next/image";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useContext(themeContext);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#education", label: "Education" },
    { href: "#contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <nav
      className={`
        fixed top-0 w-full z-50 border-b backdrop-blur-xl transition-all duration-300

        ${theme === "dark"
          ? "bg-black/20 border-white/10"
          : "bg-white/40 border-black/10"
        }

        ${scrolled
          ? "shadow-[0_8px_25px_-8px_rgba(0,0,0,0.35)] scale-[1.01]"
          : ""
        }

        /* Neon Bottom Glow */
        after:content-[''] after:absolute after:left-0 after:bottom-0
        after:w-full after:h-[1.5px]
        after:bg-linear-to-r after:from-indigo-500 after:to-purple-500
        after:opacity-60 after:pointer-events-none
      `}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a href="#home">
            <div className="flex items-center gap-1 cursor-pointer group">
              <div className="flex items-center justify-center">
                <Image
                  src="/logo.png"
                  width={50}
                  height={50}
                  alt="mylogo"
                />
              </div>

              <span
                className={`
                  font-semibold text-[24px] tracking-wide
                  bg-clip-text text-transparent 
                  transition-all duration-300
                  ${theme === "dark"
                    ? "bg-linear-to-r from-blue-400 to-purple-400 drop-shadow-[0_0_6px_rgba(120,80,255,0.4)]"
                    : "bg-linear-to-r from-indigo-600 to-purple-600 drop-shadow-[0_0_3px_rgba(120,80,255,0.3)]"
                  }
                `}
              >
                | Parth
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`
                  relative text-sm lg:text-[16px] font-medium transition-all
                  ${theme === "dark"
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-600 hover:text-black"
                  }

                  after:content-[''] after:absolute after:left-0 after:-bottom-1
                  after:w-0 after:h-0.5
                  after:bg-linear-to-r from-indigo-500 to-purple-500
                  hover:after:w-full after:transition-all after:duration-300
                  hover:brightness-125
                `}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Theme + Mobile Menu */}
          <div className="flex items-center md:flex-row flex-row-reverse gap-2">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg active:scale-90 transition"
            >
              {mobileMenuOpen ? (
                <HiX
                  className={`text-3xl ${theme === "dark" ? "text-white" : "text-black"
                    }`}
                />
              ) : (
                <HiMenu
                  className={`text-3xl ${theme === "dark" ? "text-white" : "text-black"
                    }`}
                />
              )}
            </button>

            {/* Theme Button */}
            <button
              onClick={handleTheme}
              className={`
                text-2xl transition-all hover:scale-110 active:scale-95 cursor-pointer rounded-full
                hover:shadow-[0_0_15px_rgba(99,102,241,0.6)]
              `}
            >
              {theme === "dark" ? "🔆" : "🌙"}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`
          md:hidden overflow-hidden transition-all duration-300
          ${mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
        `}
        >
          <div className="pb-4 pt-2 border-t border-white/10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`
                  block px-4 py-2 rounded text-sm lg:text-[16px] font-medium transition-all
                  ${theme === "dark"
                    ? "text-gray-300 hover:text-white hover:bg-white/10"
                    : "text-gray-600 hover:text-black hover:bg-black/10"
                  }
                  hover:brightness-110
                `}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}