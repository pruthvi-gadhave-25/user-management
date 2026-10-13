import Link from "next/link";
import Navbar from "../components/navbar/Navbar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {

    return (
        <div className="min-h-screen">

            <header className="h-16 border-b flex items-center px-6">
                <h1 className="text-xl font-semibold">
                    User Management System
                </h1>
            </header>
           <div className="flex min-h-[calc(100vh-64px)] bg-white">
             <aside className="w-64 p-5 bg-black">
                
                <nav  className="space-y-2 text-white">
                   <Navbar/>
                </nav>
            </aside>
            <main className="flex-1 p-6">
                {children}
            </main>
           </div>

           
        </div>
    )
}