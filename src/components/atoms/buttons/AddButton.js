import "./Buttons.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function AddButton(props) {
  return (
    <Link to={props.to} className="AddButton">
      {props.value}
    </Link>
  );
}
