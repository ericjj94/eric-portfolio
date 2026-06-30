import React from "react";
import { ThemeProvider } from "styled-components";

import theme from "./theme/theme";
import GlobalStyle from "./theme/GlobalStyle";
import Nav from "./components/Nav/Nav";
import Intro from "./components/Intro/Intro";
import AboutMe from "./components/AboutMe/AboutMe";
import Skills from "./components/Skills/Skills";
import EducationDetails from "./components/EducationDetails/EducationDetails";
import WorkExperience from "./components/WorkExperience/WorkExperience";
import Projects from "./components/Projects/Projects";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Nav />
      <main>
        <Intro />
        <AboutMe />
        <Skills />
        <EducationDetails />
        <WorkExperience />
        <Projects />
      </main>
    </ThemeProvider>
  );
}
