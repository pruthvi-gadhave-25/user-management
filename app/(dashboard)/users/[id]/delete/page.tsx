import DeleteButton from "@/app/components/users/DeleteButton";
import {  getUserById } from "@/services/UserService";
import Link from "next/dist/client/link";


export default async function DeleteUserPage({ params }: { params: any }) {

  const {id} = await params;
    const user = await getUserById(id);
    

   
    return (
        <main className="max-w-xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-6 text-amber-400">Delete User</h1>

            <div className="border rounded-lg p-6 text-black">

                <h1>Are you sure you want to delete {user.firstName} {user.lastName} user?</h1>
                <Link
                    href={`/users/${user.id}`}
                    className="inline-block mt-4 border px-4 py-2 rounded hover:bg-gray-100"
                >
                    Cancel
                </Link>
              <DeleteButton id={id}/>
            </div>
        </main>
    );
}