import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

import Header from "../components/Header";

export const Route = createRootRoute({ component: RootLayout });

function RootLayout() {
  return (
    <>
      <Header />
      <div style={{ margin: "10px" }}>
        <Outlet />
      </div>
      <TanStackRouterDevtools />
    </>
  );
}
