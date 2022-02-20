import React from "react";
import styled from "styled-components";
import "../styles/fonts.css";
import Header from "../components/cv/Header";
import WorkExperience from "../components/cv/WorkExperience";
import EducationalExperience from "../components/cv/EducationalExperience";

const PrintContainer = styled.div`
  background-color: #1b262c;
  color: #bbe1fa;
  -webkit-print-color-adjust: exact;
  width: 21cm;
  height: 29.7cm;
  margin: -8px;
  padding: 1.5cm 1.32cm 3.67cm 1.9cm;
  line-height: 1.5;
`;

export default function CVPdf() {
  return (
    <PrintContainer>
      <Header />
      <WorkExperience />
      <EducationalExperience />
    </PrintContainer>
  );
}
