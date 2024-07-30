import ProfileSidebar from "./ProfileSidebar";
import NavBar from "../navbar/Navbar";
import ProfilePageForm from "./ProfilePageForm";
import "./MyProfile.css";

export default function EditProfile() {
  return (
    <div className="MyProfile">
      <NavBar />
      <div className="ProfileContainer">
        <div className="SideBarContent">
          <ProfileSidebar />
        </div>
        <div className="MainProfileContent">
          <ProfilePageForm />
        </div>
      </div>
    </div>
  );
}
