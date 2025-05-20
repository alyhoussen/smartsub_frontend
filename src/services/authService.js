import axios from 'axios';

const API_URL = "http://localhost:8080/login"; // Endpoint de connexion Spring Boot

export const login = async (username, password) => {
    try {
        const response = await axios.post(API_URL, new URLSearchParams({
            username: username,
            password: password
        }), {
            withCredentials: true  // IMPORTANT : Autorise l’envoi des cookies
        });

        return response.data; // Retourner la réponse si besoin
    } catch (error) {
        console.error("Erreur de connexion :", error);
        throw error;
    }
};

export const checkAuth = async () => {
    try {
        const response = await axios.get("http://localhost:8080/secure/dashboard", {
            withCredentials: true  // Envoie le cookie automatiquement
        });

        return response.data;
    } catch (error) {
        return null;
    }
};
