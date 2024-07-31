import ProfileSidebar from "./ProfileSidebar";
import NavBar from "../navbar/Navbar";
import "./MyProfile.css";
import ProfilePageContent from "./ProfilePageContent";
import { useState } from "react";
import { useEffect } from "react";

export default function MyProfile() {
  let [results, setResults] = useState();

  useEffect(() => {
    fetch("http://localhost:3001/profile")
      .then((res) => res.json())
      .then((response) => {
        //console.log(response);
        setResults(response);
      });
  }, []);

  if (results === undefined) {
    return null;
  }

  return (
    <div className="MyProfile">
      <NavBar />
      <div className="ProfileContainer">
        <div className="SideBarContent">
          <ProfileSidebar />
        </div>
        <div className="MainProfileContent">
          <ProfilePageContent results={results} />
        </div>
      </div>
    </div>
  );
}
