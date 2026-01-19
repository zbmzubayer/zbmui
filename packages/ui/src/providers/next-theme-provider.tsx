"use client";

import { ThemeProvider } from "next-themes";

export function NextThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof ThemeProvider>) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      disableTransitionOnChange
      enableColorScheme
      enableSystem
      {...props}
    >
      {children}
    </ThemeProvider>
  );
}
