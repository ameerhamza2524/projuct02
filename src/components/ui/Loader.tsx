"use client"

import { motion } from "framer-motion"

export function Loader() {
    return (
        <div className="flex items-center justify-center p-4">
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="h-8 w-8 rounded-full border-2 border-blue-500 border-t-transparent"
            />
        </div>
    )
}
