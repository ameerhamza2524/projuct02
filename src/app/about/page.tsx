import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Button } from "@/components/ui/Button"
import { ChevronRight, Globe, Users, Zap } from "lucide-react"
import Link from "next/link"

export const metadata = {
    title: "About Us - Ameer Hamza QR",
    description: "Learn about Ameer Hamza, the mission behind the fastest and most secure QR code generator.",
}

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen">

            {/* Header Section */}
            <section className="relative py-20 md:py-32 bg-gray-50 dark:bg-gray-900/20 overflow-hidden">
                <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl mb-6">
                        About <span className="text-blue-600">Ameer Hamza</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400">
                        Building the future of digital-to-physical connectivity. Simple, fast, and reliable.
                    </p>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid gap-12 lg:grid-cols-2 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold tracking-tighter">Our Mission</h2>
                            <p className="text-lg text-gray-600 dark:text-gray-300">
                                We believe that connecting the physical and digital worlds should be seamless.
                                QR codes are the bridge, and <strong>Ameer Hamza</strong> is the architect.
                            </p>
                            <p className="text-lg text-gray-600 dark:text-gray-300">
                                Founded with a vision to provide businesses and individuals with a premium,
                                no-nonsense tool to generate high-quality QR codes instantly. No ads,
                                no sign-ups for basic use, just pure utility wrapped in beautiful design.
                            </p>
                        </div>
                        <div className="grid gap-6 sm:grid-cols-2">
                            {[
                                { icon: Zap, label: "Lightning Fast", text: "Optimized for speed" },
                                { icon: Users, label: "User Centric", text: "Designed for humans" },
                                { icon: Globe, label: "Global Scale", text: "Reliable everywhere" },
                            ].map((item, i) => (
                                <div key={i} className="p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-white/10 shadow-sm">
                                    <item.icon className="h-8 w-8 text-blue-600 mb-4" />
                                    <h3 className="font-semibold text-lg">{item.label}</h3>
                                    <p className="text-sm text-gray-500">{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-blue-600 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6">Ready to create your first code?</h2>
                    <Link href="/">
                        <Button variant="secondary" size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                            Get Started Now
                            <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                    </Link>
                </div>
            </section>

        </div>
    )
}
