import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface NavState {
    isOpen: boolean;
    toggle: () => void;
}

export const useNavStat = create<NavState>()(
    persist((set) => ({
            isOpen: true,
            toggle: () => set((state) => ({ isOpen: !state.isOpen }))
    }),
    {
        name: "nav-state-storage",
        storage:createJSONStorage(() => localStorage)
    }
 )
)
