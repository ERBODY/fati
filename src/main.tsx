import { createRoot } from "react-dom/client";
import { ConvexAuthProvider } from "@convex-dev/auth/react";
import { ConvexReactClient } from "convex/react";
import "./index.css";
import App from "./App";

const convexUrl = import.meta.env.VITE_CONVEX_URL as string | undefined;

createRoot(document.getElementById("root")!).render(
  convexUrl ? (
    <ConvexAuthProvider client={new ConvexReactClient(convexUrl)}>
      <App />
    </ConvexAuthProvider>
  ) : (
    <App />
  ),
);
