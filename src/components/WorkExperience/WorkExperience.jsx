import React from "react";
import styled from "styled-components";
import { Section, Container, Kicker, SectionTitle } from "../../theme/shared";

const experience = [
  {
    role:"Senior Software Engineer",
    company: "Planerio GmBH",
    place: "Munich, Germany",
    period: "Aug 2022 – Present",
    points: []
  },
  {
    role: "Web Developer",
    company: "HCL Technologies",
    place: "Bengaluru, India",
    period: "Aug 2021 – July 2022",
    points: [
      "Build web applications as part of the engineering team.",
      "Write production code and unit tests, and convert designs to HTML.",
      "Write test cases and run acceptance and end-to-end tests with Playwright.",
    ],
  },
  {
    role: "Web Developer",
    company: "Valuecoders LLP",
    place: "Noida, India",
    period: "April 2019 – July 2021",
    points: [
      "Built single-page React apps and wrote component unit tests with Enzyme, Mocha, and Chai.",
      "Implemented server-side rendering and SEO markup (JSON-LD schema and microdata).",
      "Gathered and refined project requirements.",
      "Designed, developed, and shipped applications for multiple websites.",
    ],
  },
  {
    role: "Software Developer",
    company: "Greatwits Service Pvt Ltd",
    place: "New Delhi, India",
    period: "Feb 2018 – March 2019",
    points: [
      "Built single-page applications with React and a Node.js backend.",
      "Built an admin panel for Tekion Corp (USA) to manage their vehicle service menu.",
      "Developed a React Native parcel-delivery app (MonoPorto).",
    ],
  },
  {
    role: "Software Developer Trainee",
    company: "Greatwits Service Pvt Ltd",
    place: "New Delhi, India",
    period: "Sept 2017 – Jan 2018",
    points: [
      "Learned the fundamentals of web development: HTML, CSS, and JavaScript.",
      "Built small applications throughout the training program.",
      "Got comfortable with Git for version control and JIRA for task management.",
      "Picked up the fundamentals of Agile development.",
    ],
  },
  {
    role: "Software Developer Intern",
    company: "Artifici Labs Pvt Ltd",
    place: "Gurugram, India",
    period: "Jan 2017 – April 2017",
    points: [
      "Worked as a web developer intern on the QuickMile product.",
      "Learned the fundamentals of web development and the software development life cycle.",
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
