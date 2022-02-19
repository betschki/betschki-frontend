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
  return <div className="row">{props.children}</div>;
}

export function Container(props) {
  return (
    <StyledContainer className="container">{props.children}</StyledContainer>
  );
}

export function Col(props) {
  return <div className="col">{props.children}</div>;
}
