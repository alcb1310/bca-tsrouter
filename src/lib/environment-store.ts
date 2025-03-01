import { Store } from "@tanstack/store";

export const store = new Store({
    environment: import.meta.env.VITE_ENV || "production",
});
