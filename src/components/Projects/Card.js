import React from "react";

const Card = ({ project }) => {
  return (
    <div className='col-md-4'>
      <div
        className='card'
        style={{ border: "1px solid black", borderRadius: "5px" }}
      >
        {/* <img src="" className="card-img-top" alt="Project image" /> */}
        <div className='card-body' style={{ padding: "5px" }}>
          <h5
            className='card-title'
            style={{ fontSize: "16px", fontStyle: "italic" }}
          >
            {project.name}
          </h5>
          <p className='card-text'>{project.description}</p>
          {/* {project.showLink ? (
            <a href={project.url || "#"} className="btn btn-primary">
              Visit Website
            </a>
          ) : (
            <a className="btn btn-primary">Visit Github Profile</a>
          )} */}
        </div>
      </div>
    </div>
  );
};
export default Card;
