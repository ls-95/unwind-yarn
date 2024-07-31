import DisplayNeedleSizes from "./DisplayNeedleSizes";
import DisplayYarns from "./DisplayYarns";
import ParagraphText from "../../components/atoms/text/ParagraphText";
import BoldText from "../../components/atoms/text/BoldText";
import SubHeading from "../../components/atoms/text/SubHeading";
import SmallHeading from "../../components/atoms/text/SmallHeading";
import LeftText from "../../components/atoms/text/LeftText";
import MarginTopDiv from "../../components/atoms/text/MarginTopDiv";

export default function DisplayProjectResults(props) {
  return (
    <div className="DisplayProjectResults">
      <SubHeading>{props.information.name}</SubHeading>
      <SmallHeading>By {props.information.designer}</SmallHeading>
      <img src={props.information.image} alt="A soft knitting sweater" />
      <LeftText>
        <p>
          <BoldText>Status</BoldText>:{" "}
          <ParagraphText>{props.information.status}</ParagraphText>
        </p>
        <p>
          <BoldText>Description</BoldText>:{" "}
          <ParagraphText>{props.information.description}</ParagraphText>
        </p>
        <p>
          <BoldText>Size</BoldText>:{" "}
          <ParagraphText>{props.information.size}</ParagraphText>
        </p>
        <p className="Needles">
          <BoldText>Needles</BoldText>:
          <DisplayNeedleSizes results={props.information} />
        </p>
        <p className="Yarns">
          <BoldText>Yarn</BoldText>:
          <DisplayYarns results={props.information} />
        </p>
      </LeftText>
    </div>
  );
}
