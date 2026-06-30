import React from "react";
import styled from "styled-components";
import { Section, Container, Kicker, SectionTitle } from "../../theme/shared";

const experience = [
  {
    role: "Web Developer",
    company: "HCL Technologies",
    place: "Bengaluru, India",
    period: "Aug 2021 – Present",
    points: [
      "Working as a software developer to develop web applications.",
      "Job roles include writing code and unit tests, converting PSDs to HTML.",
      "Writing test cases, acceptance testing and end to end testing using Playwright.",
    ],
  },
  {
    role: "Web Developer",
    company: "Valuecoders LLP",
    place: "Noida, India",
    period: "April 2019 – July 2021",
    points: [
      "Worked as a ReactJS developer to develop single page applications and write unit tests in Enzyme, Mocha and Chai of the components created.",
      "Worked on server side rendering with creating markup for SEO (both JSON-ld schema and microData).",
      "Gathered and refined specifications and requirements.",
      "Analyzed requirements and designed, developed and implemented software applications for multiple websites.",
    ],
  },
  {
    role: "Software Developer",
    company: "Greatwits Service Pvt Ltd",
    place: "New Delhi, India",
    period: "Feb 2018 – March 2019",
    points: [
      "Worked as a ReactJS developer to create single page applications with React and NodeJs as the backend.",
      "Project includes an admin panel created for Tekion Corp, USA that allows the admin to make changes to the existing service menu.",
      "Developed a React Native app for a parcel delivery app (MonoPorto).",
    ],
  },
  {
    role: "Software Developer Trainee",
    company: "Greatwits Service Pvt Ltd",
    place: "New Delhi, India",
    period: "Sept 2017 – Jan 2018",
    points: [
      "Worked as a trainee to learn the fundamentals of web development including HTML/CSS and basics of Javascript.",
      "Created small scale applications as a part of the training process.",
      "Got accustomed to using Git as a version control tool and JIRA for task management.",
      "Learnt the jargon of Agile development.",
    ],
  },
  {
    role: "Software Developer Intern",
    company: "Artifici Labs Pvt Ltd",
    place: "Gurugram, India",
    period: "Jan 2017 – April 2017",
    points: [
      "Worked as a Web Developer Intern on the existing product QuickMile.",
      "Learnt the fundamentals of web development and software development life cycles.",
    ],
  },
];

const Timeline = styled.div`
  position: relative;
  margin-left: 0.5rem;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 6px;
    bottom: 6px;
    width: 2px;
    background: ${({ theme }) => theme.colors.border};
  }
`;

const Item = styled.div`
  position: relative;
  padding-left: 2rem;
  padding-bottom: 2.5rem;

  &:last-child {
    padding-bottom: 0;
  }

  &::before {
    content: "";
    position: absolute;
    left: -5px;
    top: 6px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.accent};
    border: 2px solid ${({ theme }) => theme.colors.bg};
  }
`;

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 1rem;
  flex-wrap: wrap;
`;

const Role = styled.h3`
  font-size: 1.15rem;
`;

const Period = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.textFaint};
`;

const Company = styled.p`
  margin: 0.25rem 0 0.75rem;
  color: ${({ theme }) => theme.colors.accent2};

  span {
    color: ${({ theme }) => theme.colors.textFaint};
    font-style: italic;
  }
`;

const Points = styled.ul`
  margin: 0;
  padding-left: 1.1rem;
  color: ${({ theme }) => theme.colors.textMuted};

  li {
    margin-bottom: 0.4rem;
  }
`;

const WorkExperience = () => (
  <Section id="experience">
    <Container>
      <Kicker>04 — career</Kicker>
      <SectionTitle>Work experience</SectionTitle>
      <Timeline>
        {experience.map((job, i) => (
          <Item key={String(i)}>
            <Head>
              <Role>{job.role}</Role>
              <Period>{job.period}</Period>
            </Head>
            <Company>
              {job.company} <span>· {job.place}</span>
            </Company>
            <Points>
              {job.points.map((p, j) => (
                <li key={String(j)}>{p}</li>
              ))}
            </Points>
          </Item>
        ))}
      </Timeline>
    </Container>
  </Section>
);

export default WorkExperience;
