"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/Button"
import Link from "next/link"
import { ArrowRight, Zap, Shield, Smartphone } from "lucide-react"
import { GeneratorForm, QRType } from "@/components/qr/GeneratorForm"
import { QRPreview } from "@/components/qr/QRPreview"
import * as React from "react"

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

function GeneratorSection() {
  const [qrData, setQrData] = React.useState("https://ameerhamza.com")
  const [isGenerating, setIsGenerating] = React.useState(false)

  const handleGenerate = (data: string, type: QRType) => {
    setIsGenerating(true)
    // Simulate network/generation delay for effect (Longer for visibility)
    setTimeout(() => {
      setQrData(data)
      setIsGenerating(false)
    }, 2000)
  }

  return (
    <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-start max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <GeneratorForm onGenerate={handleGenerate} isGenerating={isGenerating} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="lg:sticky lg:top-24"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full transform translate-y-4" />
          <QRPreview
            value={qrData}
            fgColor="#000000"
            bgColor="#ffffff"
            isGenerating={isGenerating}
          />
        </div>
      </motion.div>
    </div>
  )
}

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden pt-20 pb-32 md:pt-32 md:pb-48">

        {/* Abstract Background Gradients */}
        <div className="absolute top-0 left-0 -z-10 h-full w-full overflow-hidden">
          <div className="absolute -top-[20%] -left-[10%] h-[70vh] w-[70vw] rounded-full bg-blue-500/10 blur-[100px]" />
          <div className="absolute top-[20%] -right-[10%] h-[60vh] w-[60vw] rounded-full bg-purple-500/10 blur-[100px]" />
        </div>

        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8"
          >
            <motion.div variants={fadeInUp}>
              <span className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-600 dark:text-blue-400 backdrop-blur-sm">
                <Zap className="mr-1.5 h-3.5 w-3.5" />
                Fast, Secure, & Professional
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl font-extrabold tracking-tight sm:text-6xl md:text-7xl bg-gradient-to-br from-gray-900 via-gray-700 to-gray-500 bg-clip-text text-transparent dark:from-white dark:via-gray-200 dark:to-gray-500"
            >
              Generate Smart CSS <br className="hidden sm:block" />
              <span className="text-blue-600 dark:text-blue-500">QR Codes Instantly</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-gray-600 dark:text-gray-300 md:text-xl max-w-2xl"
            >
              Create high-resolution, branded QR codes for your business, marketing, or personal use.
              Simple, fast, and secure.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 w-full justify-center pt-4"
            >
              <Link href="#features">
                <Button size="lg" className="group text-lg h-12 px-8">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Button size="lg" variant="secondary" className="text-lg h-12 px-8">
                View Features
              </Button>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* QR Generator Section */}
      <section id="features" className="w-full py-20 bg-white dark:bg-black relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Create Your Code
            </h2>
            <p className="mx-auto mt-4 max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
              Enter your link or text below to generate a high-quality QR code instantly.
            </p>
          </div>

          <GeneratorSection />

        </div>
      </section>

      {/* Feature Highlights (Just a teaser for now) */}
      <section className="w-full bg-gray-50/50 py-24 dark:bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 sm:grid-cols-3">
            {[
              { icon: Zap, title: "Lightning Fast", desc: "Generate codes instantly with zero latency." },
              { icon: Shield, title: "Secure & Private", desc: "Your data is processed locally tailored for privacy." },
              { icon: Smartphone, title: "Fully Responsive", desc: "Looks perfect on any device, mobile or desktop." }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative flex flex-col items-center text-center space-y-3 p-6 rounded-2xl bg-white/50 border border-gray-100 dark:bg-gray-900/50 dark:border-white/5 hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 shadow-sm"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 transition-opacity duration-300 group-hover:opacity-10 dark:opacity-0 pointer-events-none" />
                <div className="absolute inset-x-0 -bottom-[1px] h-[1px] bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="p-3 rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-gray-500 dark:text-gray-400">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
