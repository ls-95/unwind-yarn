import Navbar from "../navbar/Navbar";
import "./Homepage.css";
import Sidebar from "./Sidebar";
import MainHomepageContent from "./MainHomepageContent";
import ParagraphText from "../../components/atoms/text/ParagraphText";
import MainHeader from "../../components/atoms/text/MainHeader";

export default function Homepage() {
  return (
    <div className="Homepage">
      <Navbar />
      <div className="container">
        <div className="SideBarContent">
          <Sidebar />
        </div>
        <div className="HomepageHeaderContent">
          <MainHeader>Welcome to Unwind Yarn!</MainHeader>
          <p>
            <ParagraphText>
              Unwind Yarn is designed to help you keep track of your current,
              past, and future knitting projects, all in one convenient place!
            </ParagraphText>
          </p>
        </div>
        <div className="MainHomepageContent">
          <MainHomepageContent />
        </div>
      </div>
    </div>
  );
}
