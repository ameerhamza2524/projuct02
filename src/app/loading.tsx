import { Loader } from "@/components/ui/Loader";

export default function Loading() {
    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm">
            <div className="flex flex-col items-center gap-4">
                <Loader />
                <p className="text-sm font-medium text-gray-500 animate-pulse">Loading...</p>
            </div>
        </div>
    );
}
