import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

// Interface
interface AuthState {
  isLogged: boolean;
  user: {
    id: string;
    name: string;
    email: string;
  } | null;
  token: string | null;

  // Actions (React Query macht Loading/Error States)
  login: (user: AuthState["user"], token: string) => void;
  logout: () => void;
  setUser: (user: AuthState["user"]) => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      // Initial state
      isLogged: false,
      user: null,
      token: null,

      // Actions
      login: (user, token) =>
        set({
          isLogged: true,
          user,
          token,
        }),

      logout: () =>
        set({
          isLogged: false,
          user: null,
          token: null,
        }),

      setUser: (user) => set({ user }),
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => localStorage),

      // Token jetzt auch speichern
      partialize: (state) => ({
        isLogged: state.isLogged,
        user: state.user,
        token: state.token, // Hinzugefügt
      }),

      version: 2, // Version erhöht

      migrate: (persistedState: any, version: number) => {
        if (version === 0) {
          return { ...persistedState, newField: "defaultValue" };
        }
        if (version === 1) {
          return { ...persistedState, token: null };
        }
        return persistedState;
      },
    }
  )
);
