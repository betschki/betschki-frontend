import React from "react";
import styled from "styled-components";

const StyledCenter = styled.div`
  text-align: center;
`;

const StyledFlexWrapperRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: normal;
  align-items: normal;
  align-content: normal;
`;

const StyledInlineUl = styled.ul`
  margin: 1em 0;
  padding: 0;
`;

const StyledInlineLi = styled.li`
  display: inline;
  margin-right: 3em;
`;

const StyledBGLightBlue = styled.div`
  background-color: #bbe1fa;
  color: #1b262c;
`;

const StyledHTTPTag = styled.span`
  background: linear-gradient(
    135deg,
    var(--dark-rose-red),
    var(--cinnamon-satin)
  );
  padding: 5px 6px 5px 6px;
  border-radius: 3px;
  color: white;
`;

export function Center(props) {
  return (
    <StyledCenter className={props.className}>{props.children}</StyledCenter>
  );
}

export function FlexWrapperRow(props) {
  return (
    <StyledFlexWrapperRow className={props.className}>
      {props.children}
    </StyledFlexWrapperRow>
  );
}

export function InlineUl(props) {
  return (
    <StyledInlineUl className={props.className}>
      {props.children}
    </StyledInlineUl>
  );
}

export function InlineLi(props) {
  return (
    <StyledInlineLi className={props.className}>
      {props.children}
    </StyledInlineLi>
  );
}

export function BGLightBlue(props) {
  return (
    <StyledBGLightBlue className={props.className}>
      {props.children}
    </StyledBGLightBlue>
  );
}

export function HTTPTag(props) {
  return <StyledHTTPTag>{props.children}</StyledHTTPTag>;
}
