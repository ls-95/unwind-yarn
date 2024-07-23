import DisplayNeedleSizes from "./DisplayNeedleSizes";
import DisplayYarns from "./DisplayYarns";

export default function DisplayProjectResults(props) {
  return (
    <div className="DisplayProjectResults">
      <h2>{props.information.name}</h2>
      <h4>By {props.information.designer}</h4>
      <img src={props.information.image} alt="A soft knitting sweater" />
      <div className="Left">
        <p>
          <span className="Strong">Status</span>:{" "}
          <span className="TextFont">{props.information.status}</span>
        </p>
        <p className="ProjectText">
          <span className="Strong">Description</span>:{" "}
          <span className="TextFont">{props.information.description}</span>
        </p>
        <p className="ProjectText">
          <span className="Strong">Size</span>:{" "}
          <span className="TextFont">{props.information.size}</span>
        </p>
        <div className="Needles ProjectText">
          <span className="Strong">Needles</span>:
          <DisplayNeedleSizes results={props.information} />
        </div>
        <div className="Yarns ProjectText">
          <span className="Strong">Yarn</span>:
          <DisplayYarns results={props.information} />
        </div>
      </div>
    </div>
  );
}
