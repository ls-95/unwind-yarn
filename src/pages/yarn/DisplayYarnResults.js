import YarnComposition from "./YarnComposition";

export default function DisplayYarnResults(props) {
  return (
    <div className="DisplayYarnResults">
      <h2>{props.information.name}</h2>
      <h4>By {props.information.brand}</h4>
      <img src={props.information.image} alt="A soft knitting sweater" />
      <div className="Left">
        <p className="ProjectText">
          <span className="Strong">Colour</span>:{" "}
          <span className="TextFont">{props.information.color}</span>
        </p>
        <p className="ProjectText">
          <span className="Strong">Length</span>:{" "}
          <span className="TextFont">{props.information.length}</span>
        </p>
        <p className="ProjectText">
          <span className="Strong">Weight</span>:{" "}
          <span className="TextFont">{props.information.weight}</span>
        </p>
        <p className="ProjectText">
          <span className="Strong">Needle sizes</span>:
          <span className="TextFont">{props.information.needleSizes}</span>
        </p>
        <p className="ProjectText">
          <span className="Strong">Quantity</span>:{" "}
          <span className="TextFont">{props.information.quantity}</span>
        </p>
        <div className="Composition">
          <span className="Strong">Composition</span>:{" "}
          <YarnComposition info={props.information} />
        </div>
      </div>
    </div>
  );
}