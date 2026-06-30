import React from "react";
import styled from "styled-components";
import skillsArray from "../../utils/skills";
import { Section, Container, Kicker, SectionTitle } from "../../theme/shared";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.75rem 3rem;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const Skill = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.95rem;

  span:last-child {
    font-family: ${({ theme }) => theme.fonts.mono};
    color: ${({ theme }) => theme.colors.textFaint};
  }
`;

const Track = styled.div`
  height: 8px;
  width: 100%;
  background: ${({ theme }) => theme.colors.bgElevated};
  border-radius: 999px;
  overflow: hidden;
`;

const Fill = styled.div`
  height: 100%;
  width: ${({ $rating }) => $rating * 20}%;
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.accentStrong},
    ${({ theme }) => theme.colors.accent}
  );
  border-radius: 999px;
`;

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
