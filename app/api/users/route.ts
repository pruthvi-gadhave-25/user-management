
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const search = searchParams.get("search")?.trim().toLowerCase() || "";

  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  if (!response.ok) {
    return Response.json(
      { message: "Failed to fetch users" },
      { status: 500 }
    );
  }

  const users = await response.json();

  const filteredUsers = users.filter(
    (user: { name: string; email: string }) =>
      user.name.toLowerCase().includes(search) ||
      user.email.toLowerCase().includes(search)
  );

  return Response.json(filteredUsers);
}
