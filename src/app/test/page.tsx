"use client"
import { useSession } from "next-auth/react";

export default function Page() {
    const { data, status } = useSession();

    if (status === "loading") return <h1>Loading...</h1>;
    if (status === "unauthenticated") return <h1>You are not authenticated</h1>;

    console.log("User data:", data);

    return <h1>Hello, {data?.user?.name || "Guest"}!</h1>;
}

