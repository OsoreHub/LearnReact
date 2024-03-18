import { useState, useRef } from "react";
import Button from "./Button/Button";

function StateVsRef() {
  const input = useRef();
  const [show, setShow] = useState(false);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setShow(true);
    }
  };

  return (
    <div>
      <h3>Input value: {show && input.current.value}</h3>
      <input
        ref={input}
        type="text"
        className="control"
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}

export default function FeedbackSection() {
  const [form, setForm] = useState({
    name: "",
    hasError: false,
    reason: "help",
  });
  // const [name, setName] = useState("");
  // const [hasError, setHasError] = useState(false);
  // const [reason, setReason] = useState("help");

  const handleNameChange = (e) => {
    // setName(e.target.value);
    // setHasError(e.target.value.trim().length === 0);
    setForm((prev) => ({
      ...prev,
      name: e.target.value,
      hasError: e.target.value.trim().length === 0,
    }));
  };

  // правильная работа с предыдущим состоянием
  // const toggleError = () => {
  //   setHasError((prev) => !prev);
  // };

  return (
    <section>
      <h3>Обратная связь</h3>

      {/* <Button onClick={toggleError}>Toggle Error</Button> */}

      <form action="" style={{ marginBottom: "1rem" }}>
        <label htmlFor="name">Ваше имя</label>
        <input
          id="name"
          className="control"
          type="text"
          value={form.name}
          style={{
            border: form.hasError ? "1px solid red" : null,
          }}
          onChange={handleNameChange}
        />
        <label htmlFor="reason">Причина обращения</label>
        <select
          id="reason"
          className="control"
          value={form.reason}
          onChange={(e) =>
            setForm((prev) => ({ ...prev, reason: e.target.value }))
          }
        >
          <option value="error">Ошибка</option>
          <option value="help">Нужна помощь</option>
          <option value="suggest">Предложение</option>
        </select>
        <Button
          disabled={form.hasError || form.name === ""}
          isActive={!form.hasError && form.name !== ""}
        >
          Отправить
        </Button>
      </form>
      <StateVsRef></StateVsRef>
    </section>
  );
}
