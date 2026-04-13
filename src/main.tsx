import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import router from "./routes/router";
import { ThemeProvider } from "./providers/theme.provider";
import { Toaster } from "sonner";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
 <RouterProvider router={router} />
 <Toaster richColors/>
    </ThemeProvider>
  </StrictMode>,
);
