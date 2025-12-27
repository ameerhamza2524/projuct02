export function Footer() {
    return (
        <footer className="border-t border-gray-200 bg-white/50 backdrop-blur-sm dark:border-white/10 dark:bg-gray-950/50">
            <div className="container mx-auto py-8 px-4 md:px-6">
                <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        © {new Date().getFullYear()} Ameer Hamza. All rights reserved.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="text-sm text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                            Privacy Policy
                        </a>
                        <a href="#" className="text-sm text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
