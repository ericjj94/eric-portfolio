import React from "react";
import styled from "styled-components";
import { Bar, Inner, Brand, Links } from "./styled/Nav.styled";


const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
];

const Nav = () => (
  <Bar>
    <Inner>
      <Brand href="#top">
        eric<span>.</span>joy
      </Brand>
      <Links>
        {links.map((l) => (
          <a key={l.href} href={l.href}>
            {l.label}
          </a>
        ))}
      </Links>
    </Inner>
  </Bar>
);

export default Nav;
