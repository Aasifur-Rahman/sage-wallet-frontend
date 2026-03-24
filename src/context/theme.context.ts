import { createContext } from "react";

type ThemeProviderState = {
    theme: Theme;
    setTheme: (theme: Theme) => void;
}

const initialState: ThemeProviderState = {
    theme: "system",
    setTheme: () => null,
}

export ThemeProviderContext = createContext<ThemeProviderState>(initialState)