import React from "react";
import styled from "styled-components";

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.bgCard};
  border-radius: ${({ theme }) => theme.radius};
  padding: 1.5rem;
  transition: transform 0.15s ease, border-color 0.15s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: ${({ theme }) => theme.colors.borderStrong};
  }
`;

const Title = styled.h3`
  font-size: 1.1rem;
  margin-bottom: 0.75rem;
`;

const Badge = styled.span`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.72rem;
  color: ${({ theme }) => theme.colors.accent};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 999px;
  padding: 0.15rem 0.6rem;
  margin-left: 0.6rem;
  vertical-align: middle;
`;

const Desc = styled.p`
  font-size: 0.92rem;
  margin: 0 0 1rem;
  flex: 1;
`;

const Link = styled.a`
  font-size: 0.88rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.accent};
  align-self: flex-start;

  &:hover {
    text-decoration: underline;
  }
`;

const Card = ({ project }) => {
  const hasLink = project.showLink && project.url;
  return (
    <Wrapper>
      <Title>
        {project.name}
        {project.platform ? <Badge>{project.platform}</Badge> : null}
      </Title>
      <Desc>{project.description}</Desc>
      {hasLink ? (
        <Link href={project.url} target="_blank" rel="noopener noreferrer">
          Visit site →
        </Link>
      ) : null}
    </Wrapper>
  );
};

export default Card;
