import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Martel+Sans:wght@400;600&family=Noto+Serif:wght@700&family=Overpass:ital,wght@0,200;0,300;0,400;0,700;1,400&display=swap");

  body {
    font-family: "Overpass", sans-serif;

    font-size:18px;
    line-height:1.5;

  /* Colors */
  --cerulean-blue: #2b59c3ff;
  --dark-cornflower-blue: #253c78ff;
  --cinnamon-satin: #d36582ff;
  --dark-rose-red: rgb(160, 52, 81);
  --blanched-almond: #ffeecfff;
  --tumbleweed: #c9a690ff;
  }

  h2,
  h3,
  h4,
  h5 {
    font-family: "Martel Sans", sans-serif;
  }

  a {
    color: var(--cerulean-blue);
    text-decoration: underline;
    transition: color 0.3s ease;
  }

  a:hover {
    color: var(--cinnamon-satin);
    transition: color 0.3s ease;
  }

  .image-circle {
    border-radius:100%;
  }

.decorator-programmingLanguage {
  background: linear-gradient(
    135deg,
    var(--dark-cornflower-blue),
    var(--cerulean-blue)
  );
  padding: 5px 6px 5px 6px;
  border-radius: 3px;
  color: white;
}
`;

export default function Layout({ children }) {
  return (
    <React.Fragment>
      <GlobalStyle />
      {children}
    </React.Fragment>
  );
}