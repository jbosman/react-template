import { createFileRoute } from "@tanstack/react-router";

import Counter from "../components/Counter";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="route">
      <h1>Hello, React</h1>
      <Counter />
    </div>
  );
}
