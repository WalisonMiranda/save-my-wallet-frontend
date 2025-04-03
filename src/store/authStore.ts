import { create } from "zustand";

import { api } from "../services/api";

interface UserInterface {
  id: string;
  name: string;
}

interface AuthState {
  user: UserInterface | null;
  authenticated: boolean;
  token: string | null;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

const useAuthStore = create<AuthState>((set) => {
  const savedState = JSON.parse(localStorage.getItem("authState") || "{}");

  return {
    user: savedState.user || null,
    authenticated: !!savedState.user,
    token: savedState.token || null,

    login: async (email, password) => {
      try {
        const response = await api.post("/auth/login", { email, password });

        const { user, token } = response.data;

        const newState = {
          user: { id: user.id, name: user.name },
          authenticated: true,
          token,
        };

        localStorage.setItem("authState", JSON.stringify(newState));

        set(newState);
      } catch (error) {
        console.error("Login failed:", error);
      }
    },

    register: async (name, email, password) => {
      try {
        const response = await api.post("/auth/register", {
          name,
          email,
          password,
        });

        const { user, token } = response.data;

        const newState = {
          user: { id: user.id, name: user.name },
          token,
          authenticated: true,
        };

        localStorage.setItem("authState", JSON.stringify(newState));

        set(newState);
      } catch (error) {
        console.log("Registration failed:", error);
      }
    },

    logout: () => {
      try {
        localStorage.removeItem("authState");
        set({ user: null, token: null, authenticated: false });
      } catch (error) {
        console.error("Logout failed:", error);
      }
    },
  };
});

export { useAuthStore };
