export default function YarnComposition(props) {
  console.log(props.info);
  return props.info.composition.map(function (material, index) {
    return (
      <div key={index} className="YarnMaterials">
        <p className="ProjectText">
          <span className="TextFont">
            - {material.pourcentage}% {material.material}
          </span>
        </p>
      </div>
    );
  });
}
