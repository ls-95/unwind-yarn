import SidebarLinks from "../homepage/SidebarLinks";
import "./Projects.css";
import YarnOne from "./yarn1.jpg";
import AddButton from "../../components/atoms/buttons/AddButton";
import ParagraphText from "../../components/atoms/text/ParagraphText";
import ThermaticBreak from "../../components/atoms/text/ThermaticBreak";
import SubHeader from "../../components/atoms/text/SubHeading";
import BoldText from "../../components/atoms/text/BoldText";
import MarginTopDiv from "../../components/atoms/text/MarginTopDiv";

export default function ProjectsSidebar() {
  return (
    <div className="Sidebar">
      <SubHeader>Laetitia's Projects</SubHeader>
      <img src={YarnOne} alt="A shelf filled with colourful yarn" />
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
      <div className="CreateProject">
        <BoldText>Add a new project:</BoldText>
        <MarginTopDiv>
          <AddButton to="/createproject" value="Create Project" />
        </MarginTopDiv>
      </div>
      <ThermaticBreak />
      <div className="SidebarLinksSection">
        <SidebarLinks />
      </div>
    </div>
  );
}
