import { loginStore } from "../login-store";

const server = import.meta.env.VITE_SERVER;

export async function meGet() {
    const res = await fetch(`${server}/users/me`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${loginStore.state.token}`,
        }
    });

    return await res.json();
}
