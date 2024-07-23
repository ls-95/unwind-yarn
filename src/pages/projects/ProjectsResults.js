import "./Projects.css";
import DisplayProjectResults from "./DisplayProjectResults";

export default function ProjectsResults(props) {
  //console.log(props.results);

  return props.results.map(function (information, index) {
    return (
      <div className="DisplayProjects" key={index}>
        <DisplayProjectResults information={information} />
      </div>
    );
  });
}
