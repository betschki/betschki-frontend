import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";

const StyledCenter = styled.div`
  text-align: center;
`;

export function Center(props) {
  return <StyledCenter>{props.children}</StyledCenter>;
}
