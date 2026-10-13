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
            <Link
                href="users/add"
                className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700p-1 mb-4 inline-block "
            >
                Add User
            </Link>
            <table className="w-full border-collapse border border-gray-400">
                <thead>
                    <tr className="bg-gray-900 *:text-white">
                        <th className="border border-gray-400 p-3">ID</th>
                        <th className="border border-gray-400 p-3">First Name</th>
                        <th className="border border-gray-400 p-3">Last Name</th>
                        <th className="border border-gray-400 p-3">Email</th>
                        <th className="border border-gray-400 p-3">Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {users && users.length > 0 ? (users.map((user: User) => (
                        <tr key={user.id}>
                            <td className="border border-gray-400 p-3 text-black">{user.id}</td>
                            <td className="border border-gray-400 p-3 text-black">{user.firstName}</td>
                            <td className="border border-gray-400 p-3 text-black">{user.lastName}</td>
                            <td className="border border-gray-400 p-3 text-black">{user.email}</td>
                            <td className="border border-gray-400 p-3 text-black">
                                <Link href={`/users/${user.id}`} className="text-blue-500 hover:underline">
                                    View
                                </Link>
                                {" | "}
                                <Link href={`/users/${user.id}/edit`} className="text-blue-500 hover:underline">
                                    Edit
                                </Link>
                                    {" | "}
                                  <Link href={`/users/${user.id}/delete`} className="text-blue-500 hover:underline">
                                    Delete
                                </Link>
                            </td>
                        </tr>
                    ))) : (

                        <tr>
                            <td
                                colSpan={5}
                                className="border border-gray-400 p-6 text-center text-gray-500"
                            >
                                No records found
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </main>
    )
}