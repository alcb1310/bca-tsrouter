import { loginStore } from "./login-store";

export function isAuthenticated() {
    if (loginStore.state.token === '') {
        const token = localStorage.getItem('bca')
        if (!token) return false;

        loginStore.setState((state) => ({ ...state, token }))
    }

    localStorage.setItem('bca', loginStore.state.token)
    return true
}

export function logout() {
    localStorage.removeItem('bca')
    loginStore.setState((state) => ({ ...state, token: '' }))
}
