"use client";

import React from "react";
import useTheme from "./theme";
import { useEffect } from "react";

const ThemeProvider = ({ children }) => {
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("theme", theme);
  }, [theme]);

  useEffect(() => {

    if (localStorage.getItem("theme")) {
      return;
    }
    if (window.matchMedia) {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        if (theme === "light") {
          toggleTheme();
        }
      }
    }
  }, []);

  return <>{children}</>;
};

export default ThemeProvider;
