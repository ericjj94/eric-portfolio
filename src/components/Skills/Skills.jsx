import React from "react";
import styled from "styled-components";
import skillsArray from "../../utils/skills";
import { Section, Container, Kicker, SectionTitle } from "../../theme/shared";
import { Grid, Skill, Label, Track, Fill } from "./Skills.styled";

const Skills = () => (
  <Section id="skills">
    <Container>
      <Kicker>02 — toolbox</Kicker>
      <SectionTitle>Skills</SectionTitle>
      <Grid>
        {skillsArray.map((skill, i) => (
          <Skill key={String(i)}>
            <Label>
              <span>{skill.name}</span>
              <span>{skill.rating}/5</span>
            </Label>
            <Track>
              <Fill $rating={skill.rating} />
            </Track>
          </Skill>
        ))}
      </Grid>
    </Container>
  </Section>
);

export default Skills;
