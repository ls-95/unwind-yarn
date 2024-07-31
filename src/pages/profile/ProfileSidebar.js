import SidebarLinks from "../homepage/SidebarLinks";
import ProfilePhoto from "./profilephoto.jpg";
import "./MyProfile.css";
import SubHeading from "../../components/atoms/text/SubHeading";
import BoldText from "../../components/atoms/text/BoldText";
import AddButton from "../../components/atoms/buttons/AddButton";
import ParagraphText from "../../components/atoms/text/ParagraphText";
import ThermaticBreak from "../../components/atoms/text/ThermaticBreak";

export default function YarnSidebar() {
  return (
    <div className="Sidebar">
      <SubHeading>Laetitia's Profile</SubHeading>
      <img src={ProfilePhoto} alt="profile" />
      <div className="SidebarPrjoectsSection">
        <div className="ProjectStatus">
          <BoldText>Projects:</BoldText>
        </div>
        <div className="ProjectStatusNumber">
          <ParagraphText>4</ParagraphText>
        </div>
        <div className="ProjectStatus">
          <BoldText>Yarn:</BoldText>
        </div>
        <div className="ProjectStatusNumber">
          <ParagraphText>9</ParagraphText>
        </div>
      </div>
      <ThermaticBreak />
      <div className="AddYarn">
        <BoldText>Edit your profile:</BoldText>
        <div className="ButtonCreateProject">
          <AddButton to="/editprofile" value="Edit" />
        </div>
      </div>
      <ThermaticBreak />
      <div className="SidebarLinksSection">
        <SidebarLinks />
      </div>
    </div>
  );
}
