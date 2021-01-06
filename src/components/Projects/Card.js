import React from "react";

const Card = ({project}) => {
  return (
      <div className="col-md-4">
    <div className="card" style={{height: '200px'}}>
      {/* <img src="" className="card-img-top" alt="Project image" /> */}
      <div className="card-body">
        <h5 className="card-title">{project.name}</h5>
        <p className="card-text">{project.description}
        </p>
        {project.showLink ? <a href="#" className="btn btn-primary">
          Visit Website
        </a>: <a className="btn btn-primary">Visit Github Profile</a>}
        
      </div>
    </div>
    </div>
  );
};
export default Card;
