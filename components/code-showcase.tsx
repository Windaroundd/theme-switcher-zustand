"use client"

import { useState } from "react"
import { Copy, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const codeSnippets = {
  store: `// lib/theme-store.ts
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useThemeStore = create()(
  persist(
    (set, get) => ({
      theme: 'light',
      setTheme: (theme) => {
        set({ theme })
        document.documentElement.classList
          .remove('light', 'dark')
        document.documentElement.classList
          .add(theme)
      },
      toggleTheme: () => {
        const newTheme = get().theme === 'light' 
          ? 'dark' : 'light'
        get().setTheme(newTheme)
      },
    }),
    { name: 'theme-storage' }
  )
)`,
  component: `// components/theme-switcher.tsx
import { Moon, Sun } from 'lucide-react'
import { useThemeStore } from '@/lib/theme-store'

export function ThemeSwitcher() {
  const { theme, toggleTheme } = useThemeStore()

  return (
    <Button onClick={toggleTheme}>
      <Sun className={\`transition-all \${
        theme === 'dark' ? 'scale-0' : 'scale-100'
      }\`} />
      <Moon className={\`absolute transition-all \${
        theme === 'dark' ? 'scale-100' : 'scale-0'
      }\`} />
    </Button>
  )
}`,
}

export function CodeShowcase() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null)

  const copyToClipboard = (code: string, type: string) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(type)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  return (
    <section className="py-20 px-6 bg-white dark:bg-gray-800 transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Code Implementation</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">Cách implement Theme Switcher với TypeScript</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Zustand Store */}
          <div className="bg-gray-900 dark:bg-gray-950 rounded-lg overflow-hidden">
            <div className="flex items-center justify-between p-4 bg-gray-800 dark:bg-gray-900">
              <h3 className="text-white font-semibold">Zustand Store</h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => copyToClipboard(codeSnippets.store, "store")}
                className="text-gray-300 hover:text-white"
              >
                {copiedCode === "store" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              </Button>
            </div>
            <pre className="p-4 text-sm text-gray-300 overflow-x-auto">
              <code>{codeSnippets.store}</code>
            </pre>
          </div>

          {/* Component */}
          <div className="bg-gray-900 dark:bg-gray-950 rounded-lg overflow-hidden">
            <div className="flex items-center justify-between p-4 bg-gray-800 dark:bg-gray-900">
              <h3 className="text-white font-semibold">Theme Switcher Component</h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => copyToClipboard(codeSnippets.component, "component")}
                className="text-gray-300 hover:text-white"
              >
                {copiedCode === "component" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              </Button>
            </div>
            <pre className="p-4 text-sm text-gray-300 overflow-x-auto">
              <code>{codeSnippets.component}</code>
            </pre>
          </div>
        </div>

        <div className="mt-12 p-6 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 rounded-lg border border-purple-200 dark:border-purple-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">💡 Key Features:</h3>
          <ul className="text-gray-700 dark:text-gray-300 space-y-1">
            <li>
              • <strong>Zustand</strong> cho state management đơn giản
            </li>
            <li>
              • <strong>localStorage</strong> persist theme preference
            </li>
            <li>
              • <strong>Smooth animations</strong> với Tailwind transitions
            </li>
            <li>
              • <strong>TypeScript</strong> cho type safety
            </li>
            <li>
              • <strong>System preference</strong> detection
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
