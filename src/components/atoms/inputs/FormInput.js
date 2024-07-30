import "./Input.css";

export default function FormInput(props) {
  return (
    <input
      {...props.register}
      type="text"
      placeholder={props.placeholder}
      className="input"
    />
  );
}
