"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const Card = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement> & { hoverEffect?: boolean }
>(({ className, hoverEffect = false, ...props }, ref) => {
    return (
        <motion.div
            ref={ref}
            whileHover={hoverEffect ? { y: -5 } : undefined}
            className={cn(
                "rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 shadow-xl",
                "dark:bg-gray-900/40 dark:border-white/10",
                "bg-white/80 border-gray-200",
                className
            )}
            {...props as any}
        />
    )
})
Card.displayName = "Card"

export { Card }
