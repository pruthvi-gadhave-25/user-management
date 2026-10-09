import Link from "next/link";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {

    return (
        <div className="min-h-screen bg-grey-100">

            <header className="h-16 bg-white border-b flex items-center px-6">
                <h1 className="text-xl font-semibold text-gray-800">
                    User Management System
                </h1>
            </header>
           <div className="flex min-h-[calc(100vh-64px)]">
             <aside className="w-64 bg-gray-900 text-white p-5">
                
                <nav  className="space-y-2">
                    <div>
                        <Link href="/dashboard" className="block rounded-lg px-4 py-3 hover:bg-gray-800">Dashboard</Link>
                        <Link href="/users" className="block rounded-lg px-4 py-3 hover:bg-gray-800">Users</Link>
                        <Link href="/settings" className="block rounded-lg px-4 py-3 hover:bg-gray-800">Settings</Link>
                    </div>
                </nav>
            </aside>
            <main className="flex-1 p-6">
                {children}
            </main>
           </div>

           
        </div>
    )
}