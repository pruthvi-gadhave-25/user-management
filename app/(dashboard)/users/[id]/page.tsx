import { getUserById } from "@/services/UserService";
import Link from "next/dist/client/link";

export default async function UserDetails({ params }: { params: any }) {

    const { id } = await params;

    const user = await getUserById(id);

    return (

        <div>
            <main className="max-w-xl mx-auto p-6">
                <h1 className="text-2xl font-bold mb-6 text-amber-400">User Details</h1>

                <div className="border rounded-lg p-6 space-y-4 text-black">
                    <p><strong>ID:</strong> {user.id}</p>
                    <p><strong>First Name:</strong> {user.firstName}</p>
                    <p><strong>Last Name:</strong> {user.lastName}</p>
                    <p><strong>Email:</strong> {user.email}</p>
                    <p><strong>Age:</strong> {user.age}</p>

                    <div className="flex gap-3 pt-4">
                        <Link
                            href={`/users/${user.id}/edit`}
                            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                        >
                            Edit User
                        </Link>

                        <Link
                            href="/users"
                            className="border px-4 py-2 rounded hover:bg-gray-100"
                        >
                            Back
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    )


}