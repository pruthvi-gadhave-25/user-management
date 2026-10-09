import UserSearch from "@/app/components/UserSearch";

type User = {
    id: number;
    name: string;
    email: string;
};

export default async function Users() {

    const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
    );

    const users: User[] = await response.json();

    return (
        <div>
            <div className="mb-8">
        <h2 className="text-3xl font-bold text-blue-900">
          Users
        </h2>

        <p className="mt-2 text-gray-600">
          Manage application users.
        </p>
      </div>

      <div className="mb-4  ">
        <UserSearch/>
      </div>

      <div className="overflow-hidden rounded-xl bg-white shadow-sm">
        <table className="w-full">
          <thead className="border-b bg-gray-50">
            <tr>
              <th className="px-6 py-4 text-left  text-blue-900">
                Name
              </th>

              <th className="px-6 py-4 text-left  text-blue-900">
                Email
              </th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-b">
                <td className="px-6 py-4 text-gray-900">
                  {user.name}
                </td>

                <td className="px-6 py-4 text-gray-900">
                  {user.email}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
        </div>
    )
}