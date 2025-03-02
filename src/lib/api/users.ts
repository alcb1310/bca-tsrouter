import { loginStore } from "../login-store";
import { type UserResponse } from "@/types/users";

const server = import.meta.env.VITE_SERVER;

export async function meGet() {
    const res = await fetch(`${server}/users/me`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${loginStore.state.token}`,
        }
    });

    if (!res.ok) {
        const error = await res.json();
        throw new Error(JSON.stringify(error.error));
    }

    return await res.json() as UserResponse;
}

export async function getAllUsers() {
    const res = await fetch(`${server}/users`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${loginStore.state.token}`,
        }
    });

    if (!res.ok) {
        const error = await res.json();
        throw new Error(JSON.stringify(error.error));
    }

    return await res.json() as UserResponse[];
}
