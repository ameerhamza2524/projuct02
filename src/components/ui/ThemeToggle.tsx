"use client"

import * as React from "react"
import { Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/Button"

export function ThemeToggle() {
    const [theme, setTheme] = React.useState<"light" | "dark">("light")
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => {
        setMounted(true)
        // Check localStorage or system preference
        const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null
        const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
        const initialTheme = savedTheme || systemTheme
        
        // Apply theme immediately
        const root = document.documentElement
        if (initialTheme === "dark") {
            root.classList.add("dark")
        } else {
            root.classList.remove("dark")
        }
        
        setTheme(initialTheme)
    }, [])

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light"
        const root = document.documentElement
        
        if (newTheme === "dark") {
            root.classList.add("dark")
        } else {
            root.classList.remove("dark")
        }
        
        localStorage.setItem("theme", newTheme)
        setTheme(newTheme)
    }

    // Prevent hydration mismatch - show default icon until mounted
    if (!mounted) {
        return (
            <Button
                variant="ghost"
                size="sm"
                className="w-9 h-9 p-0"
                aria-label="Toggle theme"
                disabled
            >
                <Sun className="h-4 w-4" />
            </Button>
        )
    }

    return (
        <Button
            variant="ghost"
            size="sm"
            onClick={toggleTheme}
            className="w-9 h-9 p-0 relative overflow-hidden"
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
        >
            <div className="relative w-4 h-4">
                <Sun
                    className={`absolute inset-0 h-4 w-4 text-gray-700 dark:text-gray-300 transition-all duration-300 ${
                        theme === "light" ? "rotate-0 scale-100 opacity-100" : "rotate-90 scale-0 opacity-0"
                    }`}
                />
                <Moon
                    className={`absolute inset-0 h-4 w-4 text-gray-700 dark:text-gray-300 transition-all duration-300 ${
                        theme === "dark" ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"
                    }`}
                />
            </div>
        </Button>
    )
}

