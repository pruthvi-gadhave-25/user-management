"use client";
import { useState } from "react";

export default function UserSearch() {

  const [search, setSearch] = useState("");
  
  return (
    <input
      type="text"
      placeholder="Search users..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="w-full rounded-lg border px-4 py-3"
    />
  );
}