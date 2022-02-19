import React from "react";

export default function header(props) {
  return (
    <>
      <h1>{props.name}</h1>
      <h2>{props.position}</h2>
      <p>Test bla</p>
    </>
  );
}
