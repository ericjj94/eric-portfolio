import React from 'react';
import profilePic from '../../assets/profilePic.jpg';

const AboutMe = () => {
  return (
    <section className="about-us">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h1>About Me</h1>
            <img
              src={profilePic}
              alt="profile-pic"
              height="200px"
              width="200px"
              style={{ borderRadius: "50%" }}
            />
          </div>
          <div className="col-md-9">
            <div className="about-me-description" style={{marginTop: '50px'}}>
              <p>
                Hi!. My name is Eric Jose Joy and I am a web developer.
                Coding has always been a passion for me since my engineering days.
                I enjoy creating websites and design backend architecture. 
              </p>
              <p>
                I am currently learning the fundamentals of mobile app development and have worked on React Native
              </p>
              <p>I consider unit testing to be an integral part of the Software development Life Cycle.
                I have worked with Enzyme, Mocha and Chai.
              </p>
              <p>I have also used NightwatchJS for automation testing.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutMe;
