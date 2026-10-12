import UsersClient from "@/app/components/UsersClient";
import { getUserById, getUsers } from "@/services/UserService";
import Link from "next/dist/client/link";
type User = {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
};

export default async function Users() {

    const users = await getUsers();
    getUserById(15);
    return (
        <main>
            <h1>Users</h1>

            <table className="w-full border-collapse border border-gray-400">
                <thead>
                    <tr className="bg-gray-900">
                        <th className="border border-gray-400 p-3">ID</th>
                        <th className="border border-gray-400 p-3">First Name</th>
                        <th className="border border-gray-400 p-3">Last Name</th>
                        <th className="border border-gray-400 p-3">Email</th>
                        <th className="border border-gray-400 p-3">Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {users.map((user: User) => (
                        <tr key={user.id}>
                            <td className="border border-gray-400 p-3 text-black">{user.id}</td>
                            <td className="border border-gray-400 p-3 text-black">{user.firstName}</td>
                            <td className="border border-gray-400 p-3 text-black">{user.lastName}</td>
                            <td className="border border-gray-400 p-3 text-black">{user.email}</td>
                            <td className="border border-gray-400 p-3 text-black">
                                <Link href={`/users/${user.id}`}>View</Link>
                                {" | "}
                                <Link href={`/users/${user.id}/edit`}>Edit</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </main>
    )
}