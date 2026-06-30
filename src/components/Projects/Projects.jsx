import React from "react";
import styled from "styled-components";
import Card from "./Card";
import projectsData from "./projectsData";
import { Section, Container, Kicker, SectionTitle } from "../../theme/shared";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.25rem;
`;

const Projects = () => (
  <Section id="projects">
    <Container>
      <Kicker>05 — selected work</Kicker>
      <SectionTitle>Check out some of my work</SectionTitle>
      <Grid>
        {projectsData.map((project, i) => (
          <Card key={String(i)} project={project} />
        ))}
      </Grid>
    </Container>
  </Section>
);

export default Projects;
