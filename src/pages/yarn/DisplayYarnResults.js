import YarnComposition from "./YarnComposition";
import ParagraphText from "../../components/atoms/text/ParagraphText";
import SubHeading from "../../components/atoms/text/SubHeading";
import BoldText from "../../components/atoms/text/BoldText";
import SmallHeading from "../../components/atoms/text/SmallHeading";
import LeftText from "../../components/atoms/text/LeftText";

export default function DisplayYarnResults(props) {
  return (
    <div className="DisplayYarnResults">
      <SubHeading>{props.information.name}</SubHeading>
      <SmallHeading>By {props.information.brand}</SmallHeading>
      <img src={props.information.image} alt="A soft knitting sweater" />
      <LeftText>
        <p>
          <BoldText>Colour</BoldText>:{" "}
          <ParagraphText>{props.information.color}</ParagraphText>
        </p>
        <p>
          <BoldText>Length</BoldText>:{" "}
          <ParagraphText>{props.information.length}</ParagraphText>
        </p>
        <p>
          <BoldText>Weight</BoldText>:{" "}
          <ParagraphText>{props.information.weight}</ParagraphText>
        </p>
        <p>
          <BoldText>Needle sizes</BoldText>:
          <ParagraphText>{props.information.needleSizes}</ParagraphText>
        </p>
        <p>
          <BoldText>Quantity</BoldText>:{" "}
          <ParagraphText>{props.information.quantity}</ParagraphText>
        </p>
        <div className="Composition">
          <BoldText>Composition</BoldText>:{" "}
          <YarnComposition info={props.information} />
        </div>
      </LeftText>
    </div>
  );
}
