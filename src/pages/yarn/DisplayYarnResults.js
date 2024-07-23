export default function DisplayYarnResults(props) {
  return (
    <div className="DisplayYarnResults">
      <h2>{props.information.name}</h2>
      <h4>By {props.information.brand}</h4>
      <div className="Left">
        <p>
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
        <div className="Needles ProjectText">
          <span className="Strong">Needle sizes</span>:
          <span className="TextFont">{props.information.needleSizes}</span>
        </div>
      </div>
    </div>
  );
}
