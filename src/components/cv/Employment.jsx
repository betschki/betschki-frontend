import React from "react";
import ReactHtmlParser from "react-html-parser";
import { CVGridContainer, CVGridItem, Description, Wrapper } from "./common";
import TagContainer from "./Tags";

export default function Employment(props) {
  const jobs = props.jobs;
  const jobsList = jobs.map((job) => (
    <CVGridItem>
      <Wrapper>
        <p>{job.node.company}</p>
        <p className="dates">
          {job.node.startDate} - {job.node.endDate}
        </p>
      </Wrapper>
      <p>{job.node.position}</p>
      <Description>
        <p>{ReactHtmlParser(job.node.description)}</p>
        <TagContainer tags={job.node.tags} />
      </Description>
    </CVGridItem>
  ));

  return <CVGridContainer>{jobsList}</CVGridContainer>;
}
