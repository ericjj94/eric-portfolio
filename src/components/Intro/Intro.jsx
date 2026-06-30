import React from "react";
import styled from "styled-components";

const Hero = styled.section`
  min-height: calc(100vh - 60px);
  display: flex;
  align-items: center;
  padding: 4rem 1.5rem;
`;

const Inner = styled.div`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  width: 100%;
`;

const Kicker = styled.p`
  font-family: ${({ theme }) => theme.fonts.mono};
  color: ${({ theme }) => theme.colors.accent};
  font-size: 0.95rem;
  margin-bottom: 1rem;
`;

const Name = styled.h1`
  font-size: clamp(2.5rem, 8vw, 5rem);
  letter-spacing: -0.02em;
  margin-bottom: 1.25rem;

  span {
    color: ${({ theme }) => theme.colors.accent2};
  }
`;

const Lead = styled.p`
  max-width: 620px;
  font-size: clamp(1rem, 2vw, 1.2rem);
  color: ${({ theme }) => theme.colors.textMuted};
`;

const Actions = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2.25rem;
  flex-wrap: wrap;
`;

const Button = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  border-radius: ${({ theme }) => theme.radius};
  font-weight: 500;
  font-size: 0.95rem;
  transition: transform 0.15s ease, border-color 0.15s ease, color 0.15s ease;

  &.primary {
    background: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.bg};
  }
  &.primary:hover {
    transform: translateY(-2px);
  }

  &.ghost {
    border: 1px solid ${({ theme }) => theme.colors.borderStrong};
    color: ${({ theme }) => theme.colors.text};
  }
  &.ghost:hover {
    border-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const Intro = () => (
  <Hero id="top">
    <Inner>
      <Kicker>~/eric — web developer</Kicker>
      <Name>
        Eric Jose Joy<span>.</span>
      </Name>
      <Lead>
        I'm a Munich-based web developer with 8 years of experience. I build
        single-page and server-rendered applications with React.
      </Lead>
      <Actions>
        <Button className="primary" href="#projects">
          View my work
        </Button>
        <Button className="ghost" href="#about">
          About me
        </Button>
      </Actions>
    </Inner>
  </Hero>
);

export default Intro;
