/// <reference types="vinxi/types/client" />
import { hydrateRoot } from "react-dom/client";
import { StartClient } from "@tanstack/react-start";
import { createRouter } from "./router.tsx";

const router = createRouter();

hydrateRoot(document, <StartClient router={router} />)