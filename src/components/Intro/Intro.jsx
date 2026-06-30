import React from "react";
import styled from "styled-components";
import { Inner, Kicker, Name,Lead, Button, Actions, Hero } from "./styledcomponents/Intro.style";

const Intro = () => (
  <Hero id="top">
    <Inner>
      <Kicker>~/eric — web developer</Kicker>
      <Name>
        Eric Jose Joy<span>.</span>
      </Name>
      <Lead>
        Web developer with 8 years building fast, scalable React applications — single-page and server-rendered. Based in Munich, Germany.
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
