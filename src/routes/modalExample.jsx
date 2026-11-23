import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";

import Modal from "../components/Modal";

export const Route = createFileRoute("/modalExample")({
  component: RouteComponent,
});

function RouteComponent() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <div>Hello "/modalExample"!</div>
      <button onClick={() => setModalOpen(true)}>Open Modal</button>
      <Modal
        title="Modal Example"
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      >
        <p>Check out this Modal!</p>
        <button onClick={() => setModalOpen(false)}>Done</button>
      </Modal>
    </>
  );
}
