"use client";

import { useTheme } from "next-themes";

import { IconMoonStars, IconSunHighFilled } from "@tabler/icons-react";

import { Button } from "@zbmui/ui/components/button";

export function NextThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <Button className="relative size-8" onClick={toggleTheme} size="icon" variant="ghost">
      <IconMoonStars className="absolute size-4 transition-opacity dark:opacity-0" />
      <IconSunHighFilled className="absolute size-4 opacity-0 transition-opacity dark:opacity-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
