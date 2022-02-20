import React from "react";
import styled from "styled-components";

const StyledTagContainer = styled.div`
  margin: 0.5em 0 2em 0;
`;

const Tag = styled.div`
  display: inline-block;
  background: linear-gradient(135deg, #253c78ff, #2b59c3ff);
  padding: 5px 8px;
  border-radius: 3px;
  color: white;
  margin-top: 8px;
  margin-right: 8px;
`;

export default function TagContainer(props) {
  if (props.tags.length !== 0) {
    const tags = props.tags;
    const tagsList = tags.map((tag) => (
      <>
        <Tag>{tag}</Tag>
      </>
    ));
    return <StyledTagContainer>{tagsList}</StyledTagContainer>;
  } else {
    return null;
  }
}
