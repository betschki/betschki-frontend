import React from "react";
import styled from "styled-components";

const StyledH1 = styled.h1`
  font-family: "Noto Serif", serif;
  font-size: 24pt;
`;

const StyledH2 = styled.h2`
  font-size: 20pt;
`;

export function H1(props) {
  return <StyledH1>{props.children}</StyledH1>;
}

export function H2(props) {
  return <StyledH2>{props.children}</StyledH2>;
}
