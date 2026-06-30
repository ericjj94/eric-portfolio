import styled from "styled-components";

export const Section = styled.section`
  padding: ${({ theme }) => theme.layout.sectionPad};
  scroll-margin-top: 70px;
`;

export const Container = styled.div`
  max-width: ${({ theme }) => theme.layout.maxWidth};
  margin: 0 auto;
  width: 100%;
`;

export const Kicker = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.8rem;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.colors.accent};
  display: inline-block;
  margin-bottom: 0.75rem;
`;

export const SectionTitle = styled.h2`
  font-size: clamp(1.6rem, 3vw, 2.2rem);
  margin-bottom: 2.5rem;
`;
