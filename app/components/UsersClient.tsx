
"use client";

import { useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
  email: string;
};

export default function UsersClient() {

  const [search, setSearch] = useState("");
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function searchUsers() {
      setLoading(true);
      setError("");

      try {
        const response = await fetch(
          `/api/users?search=${encodeURIComponent(search)}`,
          { signal: controller.signal }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }

        const data: User[] = await response.json();
        setUsers(data);
      } catch (err) {
        if (err instanceof Error && err.name !== "AbortError") {
          setError("Unable to load users.");
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    searchUsers();

    return () => controller.abort();
  }, [search]);

  return (
    <div> 
  <input
        type="text"
        placeholder="Search by name or email..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-6 w-full rounded-lg border px-4 py-3"
      />

      {loading && <p>Loading users...</p>}
      {error && <p>{error}</p>}

      {!loading && !error && (
        <table className="w-full">
          <thead>
            <tr>
              <th className="p-3 text-left text-blue-700">Name</th>
              <th className="p-3 text-left text-blue-700">Email</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td className="p-3">{user.name}</td>
                <td className="p-3">{user.email}</td>
              </tr>
            ))}

            {users.length === 0 && (
              <tr>
                <td colSpan={2} className="p-3">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
}
