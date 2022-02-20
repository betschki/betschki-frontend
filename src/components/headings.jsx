import React from "react";
import styled from "styled-components";

const StyledH1 = styled.h1`
  font-size: 32pt;
  font-weight: 700;
  margin: 0;
  line-height: normal;
`;

const StyledH2 = styled.h2`
  font-weight: 300;
  font-size: 20pt;
  margin: 0;
  line-height: normal;
`;

export function H1(props) {
  return <StyledH1>{props.children}</StyledH1>;
}

export function H2(props) {
  return <StyledH2>{props.children}</StyledH2>;
}
