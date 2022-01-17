import React from "react";
import Card from "./Card";
import projectsData from "./projectsData";

const Projects = () => {
  function renderRows() {
    let finalArr = [];
    let columns = [];
    projectsData.forEach((result, i) => {
      // prepare the array
      columns.push(
        <div key={String(i)}>
          <Card project={result}></Card>
        </div>
      );
      // after three items add a new row
      if ((i + 1) % 3 === 0) {
        finalArr.push(<div key={String(i)}>{columns}</div>);
        columns = [];
      }
    });
    return finalArr;
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h3>Check out some of my Works</h3>
          <div className="row">{renderRows()}</div>
        </div>
      </div>
    </div>
  );
};
export default Projects;
