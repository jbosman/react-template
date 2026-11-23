import { render, cleanup } from "vitest-browser-react";
import { expect, test, afterEach } from "vitest";

import Counter from "../../components/Counter";

afterEach(cleanup);

test("Counter should defalut to zero", async () => {
  const screen = await render(<Counter />);

  await expect
    .element(await screen.getByRole("heading", { level: 2 }))
    .toHaveTextContent("Counter: 0");
});

test("When incremented, counter should increment", async () => {
  const screen = await render(<Counter />);

  await screen.getByRole("button", { name: "Increment" }).click();

  await expect
    .element(await screen.getByRole("heading", { level: 2 }))
    .toHaveTextContent("Counter: 1");
});

test("When decremented, counter should decrement", async () => {
  const screen = await render(<Counter />);

  await screen.getByRole("button", { name: "Decrement" }).click();

  await expect
    .element(await screen.getByRole("heading", { level: 2 }))
    .toHaveTextContent("Counter: -1");
});
