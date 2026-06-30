import React from "react";
import styled from "styled-components";
import { Section, Container, Kicker, SectionTitle } from "../../theme/shared";
import { Card, Head, Degree, Year, Detail } from "./styledcomponents/EducationDetails.style";

const education = [
  {
    degree: "Bachelors of Engineering in Information Technology",
    year: "2016",
    detail:
      "Studied the fundamentals of computer science and graduated with a 7.8 CGPA.",
  },
  {
    degree: "Don Bosco School",
    year: "2012",
    detail: "Completed my schooling at Don Bosco School, New Delhi.",
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
