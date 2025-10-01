import { createContext } from "react";

const ThemeContext = createContext("dark");
const ColorContext = createContext("blue");
const UserContext = createContext();
const LanguageContext = createContext();

export { ThemeContext, ColorContext, UserContext, LanguageContext };
