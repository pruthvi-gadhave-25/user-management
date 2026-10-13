"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";
import { deleteUser } from "@/services/UserService";

export default function DeleteButton({ id }: { id: string }) {
    const router = useRouter();
    const [deleting, setDeleting] = useState(false);
    const [error, setError] = useState("");

    const handleDelete = async () => {
        try {
            setDeleting(true);
            setError("");

            await deleteUser(id);

            router.push("/users");
            router.refresh();
        } catch (error) {
            console.error("Failed to delete user:", error);
            setError("Failed to delete user");
            setDeleting(false);
        }
    };

    return (
        <>
            <button
                onClick={handleDelete}
                disabled={deleting}
                className="ml-3 rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700 disabled:opacity-50"
            >
                {deleting ? "Deleting..." : "Yes, Delete"}
            </button>

            {error && (
                <p className="mt-3 text-red-500">{error}</p>
            )}
        </>
    );
}