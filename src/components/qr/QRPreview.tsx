"use client"

import * as React from "react"
import { QRCodeSVG } from "qrcode.react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/Button"
import { Card } from "@/components/ui/Card"
import { Skeleton } from "@/components/ui/Skeleton"
import { Download, Share2 } from "lucide-react"

interface QRPreviewProps {
    value: string
    fgColor: string
    bgColor: string
    isGenerating?: boolean
}

export function QRPreview({ value, fgColor, bgColor, isGenerating = false }: QRPreviewProps) {
    const qrRef = React.useRef<HTMLDivElement>(null)

    const handleDownload = (format: "png" | "svg") => {
        const svg = qrRef.current?.querySelector("svg")
        if (!svg) return

        if (format === "svg") {
            const svgData = new XMLSerializer().serializeToString(svg)
            const blob = new Blob([svgData], { type: "image/svg+xml" })
            const url = URL.createObjectURL(blob)
            const a = document.createElement("a")
            a.href = url
            a.download = `qrcode-${Date.now()}.svg`
            document.body.appendChild(a)
            a.click()
            document.body.removeChild(a)
        } else {
            // PNG Download
            const canvas = document.createElement("canvas")
            const ctx = canvas.getContext("2d")
            const img = new Image()
            const svgData = new XMLSerializer().serializeToString(svg)
            const svgBlob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" })
            const url = URL.createObjectURL(svgBlob)

            img.onload = () => {
                if (!ctx) {
                    console.error("Failed to get canvas context")
                    URL.revokeObjectURL(url)
                    return
                }
                canvas.width = img.width
                canvas.height = img.height
                ctx.drawImage(img, 0, 0)
                const pngUrl = canvas.toDataURL("image/png")
                const a = document.createElement("a")
                a.href = pngUrl
                a.download = `qrcode-${Date.now()}.png`
                document.body.appendChild(a)
                a.click()
                document.body.removeChild(a)
                URL.revokeObjectURL(url)
            }
            img.src = url
        }
    }

    return (
        <Card className="flex flex-col items-center justify-center p-8 w-full max-w-sm mx-auto relative overflow-hidden bg-white/80 dark:bg-gray-900/60 backdrop-blur-xl border-white/20">

            <AnimatePresence mode="wait">
                {isGenerating ? (
                    <motion.div
                        key="loading"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="w-48 h-48 flex items-center justify-center"
                    >
                        <Skeleton className="w-full h-full rounded-xl" />
                    </motion.div>
                ) : (
                    <motion.div
                        key="qr"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 260, damping: 20 }}
                        className="p-4 bg-white rounded-xl shadow-lg"
                        ref={qrRef}
                    >
                        <QRCodeSVG
                            value={value || "https://ameerhamza.com"}
                            size={200}
                            fgColor={fgColor}
                            bgColor={bgColor}
                            level="H"
                            includeMargin={true}
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="mt-8 flex gap-3 w-full">
                <Button
                    variant="secondary"
                    className="flex-1"
                    onClick={() => handleDownload("svg")}
                    disabled={!value || isGenerating}
                >
                    <Share2 className="mr-2 h-4 w-4" />
                    SVG
                </Button>
                <Button
                    className="flex-1"
                    onClick={() => handleDownload("png")}
                    disabled={!value || isGenerating}
                >
                    <Download className="mr-2 h-4 w-4" />
                    PNG
                </Button>
            </div>
        </Card>
    )
}
