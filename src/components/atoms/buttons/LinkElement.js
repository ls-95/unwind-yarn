import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./Buttons.css";

export default function LinkElement(props) {
  return (
    <Link to={props.to} className="LinkElement" onClick={props.change}>
      {props.value}
    </Link>
  );
}
