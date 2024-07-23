import Navbar from "../navbar/Navbar";
import "./Yarn.css";
import { useState } from "react";
import { useEffect } from "react";
import YarnSidebar from "./YarnSidebar";
import YarnResults from "./YarnResults";

export default function Yarn() {
  let [results, setResults] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/yarn")
      .then((res) => res.json())
      .then((response) => {
        //console.log(response.data);
        setResults(response.data);
      });
  }, []);

  return (
    <div className="Yarn">
      <Navbar />
      <div className="YarnContainer">
        <div className="SideBarContent">
          <YarnSidebar />
        </div>
        <div className="MainYarnContent">
          <YarnResults results={results} />
        </div>
      </div>
    </div>
  );
}
