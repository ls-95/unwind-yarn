import ParagraphText from "../../components/atoms/text/ParagraphText";
import PaddingLeft from "../../components/atoms/text/PaddingLeft";

export default function DisplayYarns(props) {
  return props.results.yarn.map(function (yarns, index) {
    return (
      <PaddingLeft key={index}>
        <p>
          <ParagraphText>
            - {yarns.name}, {yarns.brand} {"(Colour "}
            {yarns.colorCode}
            {")"}: {yarns.quantity}
          </ParagraphText>
        </p>
      </PaddingLeft>
    );
  });
}
