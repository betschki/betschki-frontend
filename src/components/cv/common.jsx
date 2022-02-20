import React from "react";
import styled from "styled-components";

const StyledCVGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0 45px;
`;

const StyledCVGridItem = styled.div`
  max-width: 100%;
  h3 {
    margin: 0;
    font-weight: 500;
  }
  h4 {
    margin: 0;
    font-weight: 300;
  }
  p {
    margin: 0;
  }
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: normal;
  align-items: normal;
  align-content: normal;

  p {
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: 0;
    align-selft: auto;
    order: 0;
    font-weight: 600;
  }
  .dates {
    font-weight: 300;
    text-align: right;
    font-style: italic;
  }
`;

const StyledDescription = styled.div`
  margin: 1em 0 !important;
`;

export function CVGridItem(props) {
  return <StyledCVGridItem>{props.children}</StyledCVGridItem>;
}

export function Description(props) {
  return <StyledDescription>{props.children}</StyledDescription>;
}

export function Wrapper(props) {
  return <StyledWrapper>{props.children}</StyledWrapper>;
}

export function CVGridContainer(props) {
  return <StyledCVGridContainer>{props.children}</StyledCVGridContainer>;
}
