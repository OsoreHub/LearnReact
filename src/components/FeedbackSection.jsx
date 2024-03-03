import { useState } from "react";
import Button from "./Button/Button";

export default function FeedbackSection() {
  const [name, setName] = useState("");
  const [hasError, setHasError] = useState(false);
  const [reason, setReason] = useState("help");

  const handleNameChange = (e) => {
    setName(e.target.value);
    setHasError(e.target.value.trim().length === 0);
  };

  return (
    <section>
      <h3>Обратная связь</h3>

      <form action="">
        <label htmlFor="name">Ваше имя</label>
        <input
          id="name"
          className="control"
          type="text"
          value={name}
          style={{
            border: hasError ? "1px solid red" : null,
          }}
          onChange={handleNameChange}
        />

        <label htmlFor="reason">Причина обращения</label>
        <select
          id="reason"
          className="control"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
        >
          <option value="error">Ошибка</option>
          <option value="help">Нужна помощь</option>
          <option value="suggest">Предложение</option>
        </select>

        <Button
          disabled={hasError || name === ""}
          isActive={!hasError && name !== ""}
        >
          Отправить
        </Button>
      </form>
    </section>
  );
}
