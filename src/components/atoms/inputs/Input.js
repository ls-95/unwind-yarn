import "./Input.css";

export default function Input(props) {
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      onChange={props.change}
      required
    />
  );
}
