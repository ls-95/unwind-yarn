import ParagraphText from "../../components/atoms/text/ParagraphText";
import PaddingLeft from "../../components/atoms/text/PaddingLeft";

export default function DisplayNeedleSizes(props) {
  return props.results.needleSizes.map(function (needles, index) {
    return (
      <PaddingLeft>
        <ParagraphText key={index}>
          - {needles.size}
          {needles.measurement}
        </ParagraphText>
      </PaddingLeft>
    );
  });
}
