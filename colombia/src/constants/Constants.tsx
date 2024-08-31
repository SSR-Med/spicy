export const API_URL = import.meta.env.VITE_API_URL;

// Role
export const englishRole2Spanish: Record<string,string> = {
    "admin": "Administrador",
    "user": "Usuario",
    "superadmin": "Superadmin"
}
export const spanishRole2English: Record<string,string> = {
    "Administrador": "admin",
    "Usuario": "user",
    "Superadmin": "superadmin"
}