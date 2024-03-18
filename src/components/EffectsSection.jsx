import React, { useState } from "react";
import Button from "./Button/Button";
import Modal from "./Modal/Modal";

function EffectsSection() {
  const [modal, setModal] = useState(false);
  const openModal = () => {
    setModal(true);
  };

  return (
    <section>
      <h3>Effects</h3>

      <Button onClick={openModal}>Открыть иформацию</Button>
      <Modal open={modal}>
        <h3>Hello from modal</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam porro
          vel dolore, consequatur nobis ea quae quod quaerat! Quas hic a magni
          veritatis totam voluptatibus possimus velit sunt ipsum sint?
        </p>
        <Button onClick={() => setModal(false)}>Close Modal</Button>
      </Modal>
    </section>
  );
}

export default EffectsSection;
