import React from 'react';
import profilePic from '../../assets/profilePic.jpg';

const AboutMe = () => {
  return (
    <section className="about-us">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1>About Me</h1>
            <img
              src={profilePic}
              alt="profile-pic"
              height="200px"
              width="200px"
              style={{ borderRadius: "50%" }}
            />
          </div>
          <div className="col-md-6">
            <div className="about-me-description" style={{marginTop: '50px'}}>
              <p>
                I am a web developer working at Valuecoders LLP,Noida,India. I
                have a total experience of 3 years and 5 months in web
                development. My area of expertise is ReactJS. I have worked on
                both client side and server side rendered React applications.
              </p>
              <p>
                I am currently learning mobile app development using ReactNative
              </p>
              <p>
                I have also worked on AngularJS to create admin panels in my
                previous company.
              </p>
              <p>
                The React components I created in my projects are unit tested
                using Enzyme,Mocha and Chai.
              </p>
              <p>I have also used NightwatchJS for automation testing.</p>
              <ul>
                <li>
                  Click here to see the list of live projects that I am part of.
                </li>
                <li>Click here to view my personal github repository.</li>
                <li>
                  I believe in helping colleagues and contributing to the open
                  source society as well. Click here to view my personal
                  stackOverflow profile
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutMe;
