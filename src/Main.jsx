import { StrictMode } from "react";
import reactDOM from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";

import { routeTree } from "./routeTree.gen";
import "./index.css";

const router = createRouter({ routeTree });

const container = document.getElementById("root");
const root = reactDOM.createRoot(container);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
