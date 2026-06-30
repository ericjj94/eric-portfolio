import React, { useState } from "react";
import Modal from "react-modal";
import styled from "styled-components";
import profilePic from "../../assets/profilePic.jpg";
import Resume from "../Resume/Resume";
import { Section, Container, Kicker, SectionTitle } from "../../theme/shared";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.75)",
    zIndex: 100,
  },
  content: {
    inset: "5%",
    maxWidth: "760px",
    margin: "0 auto",
    background: "#201F1E",
    border: "1px solid #2F2E2C",
    borderRadius: "12px",
    padding: "1.5rem",
    overflow: "auto",
  },
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: 220px 1fr;
  gap: 3rem;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const Avatar = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid ${({ theme }) => theme.colors.border};
`;

const ResumeButton = styled.button`
  margin-top: 1.5rem;
  padding: 0.7rem 1.4rem;
  border: 1px solid ${({ theme }) => theme.colors.borderStrong};
  background: transparent;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 0.95rem;
  font-weight: 500;
  border-radius: ${({ theme }) => theme.radius};
  cursor: pointer;
  transition: border-color 0.15s ease, color 0.15s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const AboutMe = () => {
  const [showResume, shouldShowResume] = useState(false);

  function handleShowResume() {
    shouldShowResume(true);
  }

  return (
    <Section id="about" className="about-us">
      <Container>
        <Kicker>01 — about</Kicker>
        <SectionTitle>About me</SectionTitle>
        <Grid>
          <Avatar src={profilePic} alt="Eric Jose Joy" />
          <div>
            <p>
              Hi, I'm Eric Jose Joy, a web developer. I love building websites and designing
              backend architecture.
            </p>
            <p>
              I'm also actively involved in mobile development and have built apps with
              React Native/Flutter.
            </p>
            <p>
              I treat testing as an essential part of the development process,
              and I've worked with Enzyme, Mocha, and Chai.
            </p>
            <p>I've also used NightwatchJS for automation testing.</p>
            <ResumeButton onClick={handleShowResume}>View resume</ResumeButton>
          </div>
        </Grid>
      </Container>

      <Modal
        isOpen={showResume}
        onRequestClose={() => {
          shouldShowResume(false);
        }}
        style={customStyles}
        ariaHideApp={false}
      >
        <Resume />
      </Modal>
    </Section>
  );
};
export default AboutMe;
