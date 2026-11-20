import { render, cleanup } from "@testing-library/react";
import { expect, test, afterEach } from "vitest";

import Counter from "../../Counter";

afterEach(cleanup);

test("Counter should defalut to zero", async () => {
  const screen = await render(<Counter />);
  expect(screen.getByRole("heading", { level: 2 }).innerText).toBe(
    "Counter: 0",
  );
});

test("When incremented, counter should increment", async () => {
  const screen = await render(<Counter />);

  await screen.getByRole("button", { name: "Increment" }).click();

  expect(screen.getByRole("heading", { level: 2 }).innerText).toBe(
    "Counter: 1",
  );
});

test("When decremented, counter should decrement", async () => {
  const screen = await render(<Counter />);

  await screen.getByRole("button", { name: "Decrement" }).click();

  expect(screen.getByRole("heading", { level: 2 }).innerText).toBe(
    "Counter: -1",
  );
});
