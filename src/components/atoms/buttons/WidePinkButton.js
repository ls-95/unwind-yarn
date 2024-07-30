import "./Buttons.css";

export default function WidePinkButton(props) {
  return (
    <input
      type={props.type}
      value={props.value}
      disabled={props.disabled}
      className="WidePinkButton"
    />
  );
}
