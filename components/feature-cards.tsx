"use client"

import { Zap, Save, Smartphone, Palette } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    icon: Zap,
    title: "Instant Switch",
    description: "Chuyển đổi theme ngay lập tức với smooth animation",
    color: "text-yellow-600 dark:text-yellow-400",
  },
  {
    icon: Save,
    title: "Auto Save",
    description: "Tự động lưu preference vào localStorage",
    color: "text-green-600 dark:text-green-400",
  },
  {
    icon: Smartphone,
    title: "Responsive",
    description: "Hoạt động hoàn hảo trên mọi thiết bị",
    color: "text-blue-600 dark:text-blue-400",
  },
  {
    icon: Palette,
    title: "Beautiful UI",
    description: "Giao diện đẹp mắt với Tailwind CSS",
    color: "text-purple-600 dark:text-purple-400",
  },
]

export function FeatureCards() {
  return (
    <section className="py-20 px-6 bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Tính năng nổi bật</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">Những điều tuyệt vời của Theme Switcher này</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
            >
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-gray-100 dark:bg-gray-700 rounded-full w-fit group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className={`h-8 w-8 ${feature.color}`} />
                </div>
                <CardTitle className="text-gray-900 dark:text-white">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600 dark:text-gray-300">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
