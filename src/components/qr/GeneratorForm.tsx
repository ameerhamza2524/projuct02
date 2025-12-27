"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/Input"
import { Button } from "@/components/ui/Button"
import { Card } from "@/components/ui/Card"
import { Link2, Type, Phone, Mail, Wifi } from "lucide-react"

export type QRType = "url" | "text" | "phone" | "email" | "wifi"

interface GeneratorFormProps {
    onGenerate: (data: string, type: QRType) => void
    isGenerating: boolean
}

export function GeneratorForm({ onGenerate, isGenerating }: GeneratorFormProps) {
    const [activeTab, setActiveTab] = React.useState<QRType>("url")
    const [inputValue, setInputValue] = React.useState("")

    // Handlers for specific inputs could go here

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (!inputValue) return
        onGenerate(inputValue, activeTab)
    }

    const tabs = [
        { id: "url", icon: Link2, label: "URL" },
        { id: "text", icon: Type, label: "Text" },
        { id: "phone", icon: Phone, label: "Phone" },
        { id: "email", icon: Mail, label: "Email" },
        // { id: "wifi", icon: Wifi, label: "WiFi" }, // Skipped for MVP simpliciy unless requested
    ]

    return (
        <Card className="w-full max-w-xl mx-auto p-0 overflow-hidden border-none shadow-2xl bg-white/80 dark:bg-gray-900/80">

            {/* Tabs */}
            <div className="flex border-b border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/50 p-2 gap-1 overflow-x-auto">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id as QRType)}
                        className={`
              flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all
              ${activeTab === tab.id
                                ? "bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 shadow-sm"
                                : "text-gray-500 hover:text-gray-900 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"}
            `}
                    >
                        <tab.icon className="h-4 w-4" />
                        {tab.label}
                    </button>
                ))}
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-6">
                <div className="space-y-4">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {activeTab === 'url' ? 'Enter Website URL' :
                            activeTab === 'email' ? 'Enter Email Address' :
                                activeTab === 'phone' ? 'Enter Phone Number' : 'Enter Text Content'}
                    </label>

                    <Input
                        autoFocus
                        placeholder={
                            activeTab === 'url' ? "https://example.com" :
                                activeTab === 'email' ? "hello@example.com" :
                                    activeTab === 'phone' ? "+1234567890" : "Type something..."
                        }
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        className="h-14 text-lg"
                    />
                </div>

                {/* Color pickers or other options could go here */}

                <Button
                    type="submit"
                    size="lg"
                    className="w-full text-lg h-14"
                    loading={isGenerating}
                >
                    {isGenerating ? "Generating..." : "Generate QR Code"}
                </Button>
            </form>
        </Card>
    )
}
