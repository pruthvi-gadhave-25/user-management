
import UserForm from "@/app/components/users/UserForm";
import { getUserById } from "@/services/UserService";
import Link from "next/dist/client/link";

export default async function EditUserPage({ params }:{params:any}) {
  
  const { id } = await params;
  const user = await getUserById(id);

  return (
    <main className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 text-amber-400">Edit User</h1>

      <div className="border rounded-lg p-6 text-black">
        <UserForm user={user} />

        <Link
          href={`/users/${user.id}`}
          className="inline-block mt-4 border px-4 py-2 rounded hover:bg-gray-100"
        >
          Cancel
        </Link>
      </div>
    </main>
  );
}