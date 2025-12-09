"use client"
import "./globals.css"
import themeContext from "@/components/CreateContext";
import { useEffect, useState } from "react";
import VanillaTilt from "vanilla-tilt";

export default function RootLayout({ children }) {
  const [theme, setTheme] = useState("dark")

  return (
    <html lang="en">
      <head>
        <title>Parth Sapariya</title>
        <meta name="description" content="Portfolio of Parth Sapariya - Full Stack Developer" />
        <link rel="icon" href="/logo.png" type="image/png" />
      </head>
      <body className={`${theme === "dark" ? "bg-black" : "bg-[#FFF6F8]"} font-sans antialiased`}>
        <themeContext.Provider value={{ theme, setTheme }}>
          {children}
        </themeContext.Provider>
        <script type="text/javascript" src="vanilla-tilt.js"></script>
        {
          useEffect(() => {
            const elements = document.querySelectorAll(".your-element");

            VanillaTilt.init(elements, {
              max: 35,
              speed: 300,
              perspective: 700,
              glare: true,
              "max-glare": 0.25
            });

            return () => {
              elements.forEach((el) => el.vanillaTilt?.destroy());
            };
          }, [])
        }
      </body>
    </html>
  )
}

// export const metadata = {
//   generator: 'v0.app'
// };