import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  const handleToggleTheme = () => {
    return setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, handleToggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

//Creating a component
export const DarkLight = () => {
  const { theme, handleToggleTheme } = useContext(ThemeContext);

  return (
    <div
      className={`p-4 h-lvh flex flex-col justify-center items-center ${
        theme === "dark" ? "bg-gray-800" : "bg-white"
      }`}
    >
      <h2
        className={`my-4 text-7xl ${
          theme === "light" ? "text-gray-800" : "text-white"
        }`}
      >
        Dark Light Mode
      </h2>
      <p
        className={`my-4 text-3xl ${
          theme === "light" ? "text-gray-800" : "text-white"
        }`}
      >
        {" "}
        Hello!! My React v19 Fans 
      </p>
      <button
        onClick={handleToggleTheme}
        className="bg-blue-500 hover:bg-blue-600 text-white rounded-md mt-4 p-4 text-4xl"
      >
        {theme === "dark" ? "Switch To LightMode" : "Switch To DarkMode"}
      </button>
    </div>
  );
};
