import React from "react";
import { createGlobalStyle } from "styled-components";
import "../styles/fonts.css";
import "../styles/margins.css";
import "../styles/paddings.css";

const GlobalStyle = createGlobalStyle`
  body {
    font-size:20px;
    line-height:1.7;

    /* Colors */
    --cerulean-blue: #2b59c3ff;
    --dark-cornflower-blue: #253c78ff;
    --cinnamon-satin: #d36582ff;
    --dark-rose-red: rgb(160, 52, 81);
    --blanched-almond: #ffeecfff;
    --tumbleweed: #c9a690ff;
    --background: #1b262c;
    --light-blue: #bbe1fa;

    background-color: var(--background);
    color: var(--light-blue);
    font-family: "Work Sans"
    }

  a {
    color: var(--cinnamon-satin);
    text-decoration: underline;
    transition: color 0.3s ease;
  }

  a:hover {
    color: var(--tumbleweed);
    transition: color 0.3s ease;
  }

  .image-circle {
    border-radius:100%;
  }

  .image-outline {
    border:5px solid var(--light-blue);
  }

  .light-bg {
    background-color:var(--light-blue)
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
