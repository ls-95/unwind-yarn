import ParagraphText from "../../components/atoms/text/ParagraphText";
import PaddingLeft from "../../components/atoms/text/PaddingLeft";

export default function YarnComposition(props) {
  return props.info.composition.map(function (material, index) {
    return (
      <PaddingLeft key={index}>
        <p>
          <ParagraphText>
            - {material.pourcentage}% {material.material}
          </ParagraphText>
        </p>
      </PaddingLeft>
    );
  });
}
