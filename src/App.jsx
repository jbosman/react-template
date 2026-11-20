import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Hello, React</h1>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment Counter</button>
    </>
  );
}
