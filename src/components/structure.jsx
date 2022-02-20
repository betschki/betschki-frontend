import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  margin: 0 auto;
  max-width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export function Row(props) {
  return <div className={`row ${props.className}`}>{props.children}</div>;
}

export function Container(props) {
  return (
    <StyledContainer className={`container ${props.className}`}>
      {props.children}
    </StyledContainer>
  );
}

export function Col(props) {
  return <div className={`col ${props.className}`}>{props.children}</div>;
}
