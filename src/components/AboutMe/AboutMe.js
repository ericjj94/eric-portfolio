import React from 'react';
import profilePic from '../../assets/profilePic.jpg';

const AboutMe = () => {
  return (
    <div className="row" style={{ margin: '15px 0' }}>
      <h2>About Me</h2>
      <div className="col-md-6">
        <img
          src={profilePic}
          alt="my-pic"
          style={{ height: '200px', width: '200px', borderRadius: '50%' }}
        />
      </div>
      <div className="col-md-6" style={{ textAlign: 'justify', color: '#fff ' }}>
        <p>
          I am a web developer working at Valuecoders LLP,Noida,India. I have a total experience of
          3 years and 5 months in web development. My area of expertise is ReactJS. I have worked on
          both client side and server side rendered React applications.
        </p>
          <p>I am currently learning mobile app development using ReactNative</p>
        <p>I have also worked on AngularJS to create admin panels in my previous company.</p>
        <p>
            The React components I created in my projects are unit tested using Enzyme,Mocha and Chai.
        </p>
        <p>I have also used NightwatchJS for automation testing.</p>
        <p>
          Click here to see the list of live projects that I am part of. Click here to view my
          personal github repository. I believe in helping colleagues and contributing to the open
          source society as well. Click here to view my personal stackOverflow profile
        </p>
      </div>
    </div>
  );
};
export default AboutMe;
