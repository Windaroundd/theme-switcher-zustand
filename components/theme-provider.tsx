"use client"

import type React from "react"

import { useEffect } from "react"
import { useThemeStore } from "@/lib/theme-store"

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const { theme, setTheme } = useThemeStore()

  useEffect(() => {
    // Set initial theme on mount
    const savedTheme = localStorage.getItem("theme-storage")
    if (savedTheme) {
      try {
        const parsed = JSON.parse(savedTheme)
        setTheme(parsed.state.theme)
      } catch {
        setTheme("light")
      }
    } else {
      // Check system preference
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
      setTheme(systemTheme)
    }
  }, [setTheme])

  return <>{children}</>
}
