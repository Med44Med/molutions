import { create } from "zustand";
import { persist } from "zustand/middleware";

const useTheme = create(
  persist(
    (set) => ({
      theme: "light",
      toggleTheme: () =>
        set((state) => ({ theme: state.theme === "dark" ? "light" : "dark" })),
    }),
    {
      name: "theme",
    }
  )
);

export default useTheme;
