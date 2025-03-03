import { loginStore } from "../login-store";
import { type UserCreate, type UserResponse } from "@/types/users";

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

export async function deleteUser(id: string) {
    const res = await fetch(`${server}/users/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${loginStore.state.token}`,
        }
    });

    if (res.status !== 204) {
        const error = await res.json();
        throw new Error(JSON.stringify(error.error));
    }

    // NOTE: Return null from the query function when receiving a 204
    return null
}

export async function createUser(user: UserCreate) {
    const res = await fetch(`${server}/users`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${loginStore.state.token}`,
        },
        body: JSON.stringify(user),
    });

    if (!res.ok) {
        const error = await res.json();
        throw new Error(JSON.stringify(error.error));
    }

    return await res.json() as UserResponse;
} 
