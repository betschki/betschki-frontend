import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Education from "./Education";

export default function EducationalExperience(props) {
  const data = useStaticQuery(graphql`
    {
      allEducation(sort: { fields: id__normalized }) {
        edges {
          node {
            school
            description
            endDate
            degree
            startDate
            tags
          }
        }
      }
    }
  `);

  const educationItems = data.allEducation.edges;

  return (
    <>
      <h2>Education</h2>
      <Education educationItems={educationItems} />
    </>
  );
}
