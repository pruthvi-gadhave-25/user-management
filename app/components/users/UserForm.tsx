"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { createUser, updateUser, } from "@/services/UserService";

export default function UserForm({ user }: { user?: any }) {

    const router = useRouter();
    const isEdit = Boolean(user);

    const [formData, setFormData] = useState({
        firstName: user?.firstName ?? "",
        lastName: user?.lastName ?? "",
        email: user?.email ?? "",
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    function handleChange(e: any) {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    async function handleSubmit(e: any) {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            if (isEdit) {
                await updateUser(user.id, formData);
            } else {
                await createUser(formData);
            }

            router.push("/users");
            router.refresh();
        } catch (err: any) {
            setError(err.message || "Something went wrong");
        } finally {
            setLoading(false);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="space-y-5">
                <div className="flex flex-col gap-2">
                    <label
                        htmlFor="firstName"
                        className="text-sm font-medium text-gray-700"
                    >
                        First Name
                    </label>
                    <input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        placeholder="Enter first name"
                        className="w-full rounded-lg border border-gray-300 px-4 py-2.5 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label
                        htmlFor="lastName"
                        className="text-sm font-medium text-gray-700"
                    >
                        Last Name
                    </label>
                    <input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        placeholder="Enter last name"
                        className="w-full rounded-lg border border-gray-300 px-4 py-2.5 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label
                        htmlFor="email"
                        className="text-sm font-medium text-gray-700"
                    >
                        Email Address
                    </label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="Enter email address"
                        className="w-full rounded-lg border border-gray-300 px-4 py-2.5 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    />
                </div>
            </div>

            {error && <p className="text-red-500 my-1" >{error}</p>}

            <button type="submit" disabled={loading} className="bg-blue-600 text-white px-4 py-2 my-2 rounded hover:bg-blue-700 cursor-pointer">
                {loading
                    ? "Saving..."
                    : isEdit
                        ? "Update User"
                        : "Create User"}
            </button>
        </form>
    );
}