import "./Yarn.css";
import DisplayYarnResults from "./DisplayYarnResults";

export default function ProjectsResults(props) {
  console.log(props.results);

  return props.results.map(function (information, index) {
    return (
      <div className="DisplayYarns" key={index}>
        <DisplayYarnResults information={information} />
      </div>
    );
  });
}
