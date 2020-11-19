import React from "react";
import Intro from "./components/Intro/Intro";
import './style.css'

import styled from 'styled-components';
import AboutMe from "./components/AboutMe/AboutMe";
import Footer from './components/Footer/Footer';

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
    <ParentWrapper><Footer /></ParentWrapper>
    </React.Fragment>

  );
}
