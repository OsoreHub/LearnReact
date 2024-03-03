import { arr, descr } from "../data";
import List from "./List";

export default function FirstSection() {
  return (
    <section>
      <h1>Hello react</h1>
      <ul>
        {arr.map((e) => (
          <List number={e} text={descr} key={e} />
        ))}
      </ul>
    </section>
  );
}
