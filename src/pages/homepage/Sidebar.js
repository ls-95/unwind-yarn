import "./Sidebar.css";
import YarnPhoto from "./yarn.jpg";
import SidebarLinks from "./SidebarLinks";
import BoldText from "../../components/atoms/text/BoldText";
import ParagraphText from "../../components/atoms/text/ParagraphText";
import SubHeading from "../../components/atoms/text/SubHeading";
import ThermaticBreak from "../../components/atoms/text/ThermaticBreak";

export default function Sidebar() {
  return (
    <div className="Sidebar">
      <SubHeading>Laetitia's Journal</SubHeading>
      <img src={YarnPhoto} alt="A shelf filled with colourful yarn" />
      <div className="SidebarPrjoectsSection">
        <div className="ProjectStatus">
          <BoldText>Current WIP's:</BoldText>
        </div>
        <div className="ProjectStatusNumber">
          <ParagraphText>0</ParagraphText>
        </div>
        <div className="ProjectStatus">
          <BoldText>Finished projects:</BoldText>
        </div>
        <div className="ProjectStatusNumber">
          <ParagraphText>4</ParagraphText>
        </div>
        <div className="ProjectStatus">
          <BoldText>Future projects:</BoldText>
        </div>
        <div className="ProjectStatusNumber">
          <ParagraphText>0</ParagraphText>
        </div>
      </div>
      <ThermaticBreak />
      <div className="SidebarLinksSection">
        <SidebarLinks />
      </div>
    </div>
  );
}
