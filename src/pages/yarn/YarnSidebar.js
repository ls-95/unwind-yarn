import SidebarLinks from "../homepage/SidebarLinks";
import YarnStash from "./yarnstash.png";
import AddButton from "../../components/atoms/buttons/AddButton";
import "./Yarn.css";
import ParagraphText from "../../components/atoms/text/ParagraphText";
import BoldText from "../../components/atoms/text/BoldText";
import SubHeading from "../../components/atoms/text/SubHeading";
import ThermaticBreak from "../../components/atoms/text/ThermaticBreak";

export default function ProjectsSidebar() {
  return (
    <div className="Sidebar">
      <SubHeading>Laetitia's Yarn Stash</SubHeading>
      <img src={YarnStash} alt="A shelf filled with colourful yarn" />
      <div className="SidebarPrjoectsSection">
        <div className="ProjectStatus">
          <BoldText>Yarn in stash:</BoldText>
        </div>
        <div className="ProjectStatusNumber">
          <ParagraphText>9</ParagraphText>
        </div>
        <div className="ProjectStatus">
          <BoldText>Yarn used:</BoldText>
        </div>
        <div className="ProjectStatusNumber">
          <ParagraphText>0</ParagraphText>
        </div>
        <div className="ProjectStatus">
          <BoldText>Wish list:</BoldText>
        </div>
        <div className="ProjectStatusNumber">
          <ParagraphText>0</ParagraphText>
        </div>
      </div>
      <ThermaticBreak />
      <div className="AddYarn">
        <BoldText>Add yarn to your stash:</BoldText>
        <div className="ButtonCreateProject">
          <AddButton to="/addyarn" value="Add yarn" />
        </div>
      </div>
      <ThermaticBreak />
      <div className="SidebarLinksSection">
        <SidebarLinks />
      </div>
    </div>
  );
}
