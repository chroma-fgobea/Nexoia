import { useState, useEffect } from "react";

// Hook for theme toggling
export function useTheme() {
  const [theme, setTheme] = useState("dark");
  
  useEffect(() => {
    // Check if user has a theme preference stored
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.classList.toggle("light", storedTheme === "light");
    }
  }, []);
  
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.classList.toggle("light", newTheme === "light");
    localStorage.setItem("theme", newTheme);
  };
  
  return { theme, toggleTheme };
}

// Hook for detecting mobile viewport
export function useMobile() {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);
  
  return isMobile;
}

export default useMobile;
