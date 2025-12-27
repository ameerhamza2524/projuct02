"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/Button"
import { QrCode } from "lucide-react"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { AnimatePresence } from "framer-motion"
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import { ThemeToggle } from "@/components/ui/ThemeToggle"

export function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="sticky top-0 z-[100] w-full border-b border-white/10 bg-white/70 backdrop-blur-xl dark:bg-gray-950/70"
        >
            <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform">
                        <QrCode className="h-5 w-5" />
                    </div>
                    <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent dark:from-white dark:to-gray-400">
                        Ameer Hamza
                    </span>
                    <motion.div
                        className="absolute bottom-0 left-0 h-[2px] w-0 bg-blue-500 group-hover:w-full transition-all duration-300"
                    />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-6">
                    {["Features", "Pricing", "About"].map((item) => (
                        <Link
                            key={item}
                            href={item === "About" ? "/about" : `#${item.toLowerCase()}`}
                            className="text-sm font-medium text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                        >
                            {item}
                        </Link>
                    ))}

                    <SignedIn>
                        <Link href="/dashboard" className="text-sm font-medium text-gray-600 hover:text-blue-600 dark:text-gray-300">
                            Dashboard
                        </Link>
                    </SignedIn>
                </nav>

                <div className="hidden md:flex items-center gap-4">
                    <ThemeToggle />
                    <SignedOut>
                        <SignInButton mode="modal">
                            <Button variant="ghost" size="sm">
                                Sign In
                            </Button>
                        </SignInButton>
                    </SignedOut>
                    <SignedIn>
                        <UserButton afterSignOutUrl="/" />
                    </SignedIn>

                    <Link href="/#features">
                        <Button size="sm" className="shadow-blue-500/20">
                            Get Started
                        </Button>
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden p-2 text-gray-600 dark:text-gray-300"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 overflow-hidden"
                    >
                        <div className="flex flex-col p-4 space-y-4">
                            {["Features", "Pricing", "About"].map((item) => (
                                <Link
                                    key={item}
                                    href={item === "About" ? "/about" : `#${item.toLowerCase()}`}
                                    className="text-lg font-medium text-gray-700 dark:text-gray-200 py-2 border-b border-gray-100 dark:border-gray-800"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item}
                                </Link>
                            ))}

                            <SignedIn>
                                <Link
                                    href="/dashboard"
                                    className="text-lg font-medium text-gray-700 dark:text-gray-200 py-2 border-b border-gray-100 dark:border-gray-800"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Dashboard
                                </Link>
                            </SignedIn>

                            <div className="flex flex-col gap-3 pt-4">
                                <div className="flex items-center justify-between pb-2 border-b border-gray-200 dark:border-gray-800">
                                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Theme</span>
                                    <ThemeToggle />
                                </div>
                                <SignedOut>
                                    <SignInButton mode="modal">
                                        <Button variant="ghost" className="w-full justify-start">
                                            Sign In
                                        </Button>
                                    </SignInButton>
                                </SignedOut>
                                <SignedIn>
                                    <div className="px-2">
                                        <UserButton afterSignOutUrl="/" />
                                    </div>
                                </SignedIn>

                                <Link href="/#features" onClick={() => setIsMobileMenuOpen(false)}>
                                    <Button className="w-full shadow-blue-500/20">
                                        Get Started
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    )
}
