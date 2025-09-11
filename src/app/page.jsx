"use client";

import { useContext } from "react";

import { themeContext } from "@/contexts/ThemeProvider";

export default function Home() {
  const { theme } = useContext(themeContext);

  return <div>{theme}</div>;
}
