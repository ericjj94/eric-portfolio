import React from "react";
import styled from "styled-components";
import { Wrapper, Title, Badge, Desc, Link } from "./Card.styled";


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
