import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export default async function DashboardPage() {
    const user = await currentUser();

    if (!user) {
        redirect("/");
    }

    return (
        <div className="flex flex-col min-h-screen">
            <div className="container mx-auto px-4 py-20">
                <h1 className="text-3xl font-bold mb-8">
                    Welcome back, <span className="text-blue-600">{user.firstName}</span>!
                </h1>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <Card className="p-6 space-y-4">
                        <h3 className="text-xl font-semibold">Your QR Codes</h3>
                        <p className="text-gray-500">You haven't saved any QR codes yet.</p>
                        <Button>Create New Code</Button>
                    </Card>

                    <Card className="p-6 space-y-4">
                        <h3 className="text-xl font-semibold">Analytics</h3>
                        <p className="text-gray-500">Track scans and engagement (Coming Soon).</p>
                    </Card>

                    <Card className="p-6 space-y-4">
                        <h3 className="text-xl font-semibold">Settings</h3>
                        <p className="text-gray-500">Manage your account preferences.</p>
                        <Button variant="secondary">Manage Account</Button>
                    </Card>
                </div>
            </div>
        </div>
    );
}
