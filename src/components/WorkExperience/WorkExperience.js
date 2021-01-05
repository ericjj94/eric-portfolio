import React from 'react';

const WorkExperience = (props) => {
  return (
    <div style={{ backgroundColor: 'red', color: '#fff' }}>
      <div className="container">
        <h1>Work Experience</h1>
        <div className="row">
          <div className="col-md-12">
            <div className="col-md-4">
              <p>Web Developer</p>
            </div>
            <div className="col-md-8">
              <p>Valuecoders LLP, Noida,India: April 2019-Present</p>
              <ul>
                <li>
                  Worked as a ReactJS developer to develop Single page
                  applications and write unit tests in enzyme,mocha and chai of
                  the components created
                </li>
                <li>
                  Worked on server side rendering with creating markup for SEO
                  (both JSON-ld schema and microData).
                </li>
                <li>Gathered and refined specifications and requirements</li>
                <li>
                  Analyzed requirements and designed, developed and implemented
                  software applications for multiple websites
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="col-md-4">
              <p>Software Developer</p>
            </div>
            <div className="col-md-8">
              <p>Greatwits Service Pvt Ltd: Feb 2018- March 2019</p>
              <ul>
                <li>
                  Worked as a ReactJS developer to create single page
                  applications with React and NodeJs as the backend.
                </li>
                <li>
                  Project includes an admin panel created for Tekion Corp , USA
                  that allows the admin to make changes to the existing service
                  menu admin of Tekion Corp
                </li>
                <li>
                  Developed a React Native app for a parcel delivery
                  app(MonoPorto)
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="col-md-4">
              <p>Software Developer Trainee</p>
            </div>
            <div className="col-md-8">
              <p>Greatwits Service Pvt Ltd: Sept 2017- Jan 2018</p>
              <ul>
                <li>
                  Worked as a trainee to learn the fundamentals of Web
                  development that includes HTML/CSS and basics of Javascript.
                </li>
                <li>
                  Created small scale applications as a part of the training
                  process
                </li>
                <li>
                  Got accustomed to use Git as a version control tool and
                  JIRA for task management that was used in the company.
                </li>
                <li>Learnt the jargon's of Agile development</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="col-md-4">
              <p>Software Developer Intern</p>
            </div>
            <div className="col-md-8">
              <p>Artifici Labs Pvt Ltd: Jan 2017- April 2017</p>
                 <ul>
                  <li>Worked as a Web Developer Intern on the existing product QuickMile.</li>
                  <li>Learnt the fundamentals of web development and software development life cycles</li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WorkExperience;
