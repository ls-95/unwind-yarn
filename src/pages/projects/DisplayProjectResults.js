export default function DisplayProjectResults(props) {
  return (
    <div className="DisplayProjectResults">
      <h1>{props.information.name}</h1>
      <h3>By {props.information.designer}</h3>
      <img src={props.information.image} alt="A soft knitting sweater" />
      <div className="Left">
        <p>
          <span className="Strong">Description</span>:{" "}
          {props.information.description}
        </p>
        <p>
          <span className="Strong">Size</span>: {props.information.size}
        </p>
        <p>
          <span className="Strong">Needles</span>: 5mm, 5.5mm
        </p>
        <p className="Strong">Yarn:</p>
        <ul>
          <li>Puno, Gepard Garn {"(Colour 520)"}: 550g</li>
          <li>Silk Mohair, Isager {"(Colour 100)"}: 150g</li>
          <li>Puno, Gepard Garn {"(Colour 101)"}: 50g</li>
          <li>Silk Mohair, Isager {"(Colour E0)"}: 25g</li>
        </ul>
      </div>
    </div>
  );
}
