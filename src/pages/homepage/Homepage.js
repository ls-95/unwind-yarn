import Navbar from "../navbar/Navbar";
import "./Homepage.css";
import Sidebar from "./Sidebar";
import MainHomepageContent from "./MainHomepageContent";

export default function Homepage() {
  return (
    <div className="Homepage">
      <Navbar />
      <div className="container">
        <div className="SideBarContent">
          <Sidebar />
        </div>
        <div className="HomepageHeaderContent">
          <h1>Welcome to Unwind Yarn!</h1>
          <p>
            Your personal online knitting journal! We're thrilled to have you
            here. Unwind Yarn is designed to help you keep track of your
            current, past, and future knitting projects, all in one convenient
            place!
          </p>
        </div>
        <div className="MainHomepageContent">
          <MainHomepageContent />
        </div>
      </div>
    </div>
  );
}
