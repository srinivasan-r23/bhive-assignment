import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import SpaceContextProvider from "./state/SpaceContext.tsx";

createRoot(document.getElementById("root")!).render(
    <SpaceContextProvider>
      <App />
    </SpaceContextProvider>
);
