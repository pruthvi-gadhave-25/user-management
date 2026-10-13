import { log } from "console";

//const API_URL = "https://dummyjson.com/users";
const API_URL = "https://6acdc976f338359cf1c25283.mockapi.io/api/v1/users";

export async function getUsers() {
    const res = await fetch(API_URL);    
    console.log(res);
    if (!res.ok) {
        throw new Error("Failed to fetch users");
    }

    const data = await res.json();
    console.log(data);
    return data;
}



// GET: Fetch one user
export async function getUserById(id:any) {
    //const  {id} = await params;
    console.log(id);
  const res = await fetch(`${API_URL}/${id}`);
  if (!res.ok) throw new Error("Failed to fetch user");

  return res.json();
}


// POST: Create user
export async function createUser(user:any) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });

  if (!res.ok) throw new Error("Failed to create user");

  return res.json();
}

// PUT: Update user
export async function updateUser(id:any, user:any) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
console.log(res);
  if (!res.ok) throw new Error("Failed to update user");

  return res.json();
}

// DELETE: Delete user
export async function deleteUser(id:any) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) throw new Error("Failed to delete user");

  return res.json();
}