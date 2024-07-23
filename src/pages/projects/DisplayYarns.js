export default function DisplayYarns(props) {
  return props.results.yarn.map(function (yarns, index) {
    return (
      <div className="DisplayYarns" key={index}>
        <p>
          <span className="TextFont">
            - {yarns.name}, {yarns.brand} {"(Colour "}
            {yarns.colorCode}
            {")"}: {yarns.quantity}
          </span>
        </p>
      </div>
    );
  });
}
