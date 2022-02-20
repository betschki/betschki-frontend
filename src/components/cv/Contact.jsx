import React from "react";
import styled from "styled-components";

const StyledContactFlexWrapper = styled.div`
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: 0;
  align-self: auto;
  order: 0;
`;

const StyledLinksFlexWrapper = styled.div`
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: 0;
  align-self: center;
  order: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: normal;
  align-items: normal;
  align-content: normal;

  a {
    padding-left: 1.5em;
  }
`;

const StyledContactA = styled.a`
  text-decoration: none;
  color: #bbe1fa;
  font-weight: 300;
`;

export function ContactFlexWrapper(props) {
  return <StyledContactFlexWrapper>{props.children}</StyledContactFlexWrapper>;
}

export function LinksFlexWrapper(props) {
  return <StyledLinksFlexWrapper>{props.children}</StyledLinksFlexWrapper>;
}

export function ContactA(props) {
  return <StyledContactA>{props.children}</StyledContactA>;
}
