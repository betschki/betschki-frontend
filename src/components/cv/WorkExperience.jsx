import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Employment from "./Employment";

export default function WorkExperience(props) {
  const data = useStaticQuery(graphql`
    {
      allEmployment(sort: { fields: id__normalized }) {
        edges {
          node {
            company
            description
            endDate
            position
            startDate
            tags
          }
        }
      }
    }
  `);

  const jobs = data.allEmployment.edges;

  return (
    <>
      <h2>Work experience</h2>
      <Employment jobs={jobs} />
    </>
  );
}
