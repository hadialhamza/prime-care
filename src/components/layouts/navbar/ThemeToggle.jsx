"use client";

import React, { useState } from "react";
import Switch from "./Switch";

export default function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    const root = document.documentElement;

    if (isDarkMode) {
      root.classList.remove("dark");
      root.classList.add("light");
      setIsDarkMode(false);
    } else {
      root.classList.remove("light");
      root.classList.add("dark");
      setIsDarkMode(true);
    }
  };

  return <Switch checked={!isDarkMode} onChange={toggleTheme} />;
}
