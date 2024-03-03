import Button from "./Button/Button";
import { useState } from "react";

export default function SecondSection() {
  const [contentType, setContent] = useState(null);

  const handleClick = (type) => {
    setContent(type);
  };

  return (
    <section>
      <h3>Button component in react</h3>

      <Button
        isActive={contentType === "way"}
        onClick={() => handleClick("way")}
      >
        Подход
      </Button>
      <Button
        isActive={contentType === "easy"}
        onClick={() => handleClick("easy")}
      >
        Доступность
      </Button>
      <Button
        isActive={contentType === "programm"}
        onClick={() => handleClick("programm")}
      >
        Концентрация
      </Button>

      <p>{contentType}</p>
    </section>
  );
}
