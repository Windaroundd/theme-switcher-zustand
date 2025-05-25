"use client"

import { Sparkles, Code, Palette } from "lucide-react"
import { ThemeSwitcher } from "./theme-switcher"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900 transition-colors duration-500">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 dark:bg-purple-600 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 dark:bg-blue-600 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-300 dark:bg-pink-600 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Theme switcher in top right */}
      <div className="absolute top-8 right-8">
        <ThemeSwitcher />
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="flex items-center justify-center mb-6">
          <Sparkles className="h-12 w-12 text-purple-600 dark:text-purple-400 mr-4" />
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 dark:from-purple-400 dark:via-blue-400 dark:to-pink-400 bg-clip-text text-transparent">
            Theme Switcher
          </h1>
        </div>

        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
          Chuyển đổi theme Light/Dark mode mượt mà với{" "}
          <span className="font-semibold text-purple-600 dark:text-purple-400">Next.js</span>,{" "}
          <span className="font-semibold text-blue-600 dark:text-blue-400">Zustand</span> và{" "}
          <span className="font-semibold text-pink-600 dark:text-pink-400">Tailwind CSS</span>
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <div className="flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full border border-gray-200 dark:border-gray-700">
            <Code className="h-5 w-5 text-green-600 dark:text-green-400" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">TypeScript</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full border border-gray-200 dark:border-gray-700">
            <Palette className="h-5 w-5 text-orange-600 dark:text-orange-400" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Tailwind CSS</span>
          </div>
        </div>

        <div className="text-sm text-gray-500 dark:text-gray-400">💡 Click vào icon ở góc trên để chuyển đổi theme</div>
      </div>
    </section>
  )
}
