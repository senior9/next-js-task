"use client";

import { ThemeProvider } from "next-themes";

const DarkmodeProvider = ({ children }) => {
  return (
    <ThemeProvider>
      <div className="dark:bg-[#000] dark:text-gray-50 text-gray-50 transition-colors duration-300 min-h-screen select-none ">
        {children}
      </div>
    </ThemeProvider>
  );
};

export default DarkmodeProvider;
