import React from "react";
import Intro from "./components/Intro/Intro";
import './style.css'

import styled from 'styled-components';
import AboutMe from "./components/AboutMe/AboutMe";
import ContactMe from './components/ContactMe/ContactMe';
import './style.css';
import Skills from "./components/Skills/Skills";
import EducationDetails from './components/EducationDetails/EducationDetails';
import WorkExperience from './components/WorkExperience/WorkExperience';
import Projects from './components/Projects/Projects';

const ParentWrapper = styled.div`
  background-color: #000;
  width: 100%;
  height: 100%;
  color: #fff;
`;

export default function App() {
  return (
    <React.Fragment>
      <Intro />
      <AboutMe />
      <Skills />
      <EducationDetails />
      <WorkExperience />
      <Projects />
    <ParentWrapper><ContactMe /></ParentWrapper>
    </React.Fragment>

  );
}
