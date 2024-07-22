import Navbar from "../navbar/Navbar";
import "./Projects.css";
import { useState } from "react";
import { useEffect } from "react";
import ProjectsSidebar from "./ProjectsSidebar";
import ProjectsResults from "./ProjectsResults";

export default function Projects() {
  let [results, setResults] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/projects")
      .then((res) => res.json())
      .then((response) => {
        //console.log(response.data);
        setResults(response.data);
      });
  }, []);

  return (
    <div className="Projects">
      <Navbar />
      <div className="ProjectsContainer">
        <div className="SideBarContent">
          <ProjectsSidebar />
        </div>
        <div className="MainProjectsContent">
          <ProjectsResults results={results} />
        </div>
      </div>
    </div>
  );
}
