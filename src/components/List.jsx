export default function List({ number, text }) {
  return (
    <li>
      <p>
        <strong>{number}. </strong> {text}
      </p>
    </li>
  );
}
