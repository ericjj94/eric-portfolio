import React from "react";
import styled from "styled-components";
import { Section, Container, Kicker, SectionTitle } from "../../theme/shared";

const Card = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.bgCard};
  border-radius: ${({ theme }) => theme.radius};
  padding: 1.5rem 1.75rem;
  margin-bottom: 1.25rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 1rem;
  margin-bottom: 0.5rem;
  flex-wrap: wrap;
`;

const Degree = styled.h3`
  font-size: 1.1rem;
`;

const Year = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  color: ${({ theme }) => theme.colors.accent};
  font-size: 0.9rem;
`;

const Detail = styled.p`
  margin: 0;
`;

const education = [
  {
    degree: "Bachelors of Engineering in Information Technology",
    year: "2016",
    detail:
      "Learnt the fundamentals of computer science and graduated with a CGPA of 7.8",
  },
  {
    degree: "Don Bosco School",
    year: "2012",
    detail: "Schooling from Don Bosco School, New Delhi",
  },
];

const EducationDetails = () => (
  <Section id="education">
    <Container>
      <Kicker>03 — background</Kicker>
      <SectionTitle>Education</SectionTitle>
      {education.map((e, i) => (
        <Card key={String(i)}>
          <Head>
            <Degree>{e.degree}</Degree>
            <Year>{e.year}</Year>
          </Head>
          <Detail>{e.detail}</Detail>
        </Card>
      ))}
    </Container>
  </Section>
);

export default EducationDetails;
