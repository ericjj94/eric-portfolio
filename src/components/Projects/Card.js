import React from "react";

const Card = ({project}) => {
  return (
      <div className="col-md-4">
    <div className="card" >
      <img src="" className="card-img-top" alt="Project image" />
      <div className="card-body">
        <h5 className="card-title">{project.name}</h5>
        <p className="card-text">{project.description}
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
    </div>
  );
};
export default Card;
