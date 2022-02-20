import React from "react";
import ReactHtmlParser from "react-html-parser";
import { CVGridContainer, CVGridItem, Description, Wrapper } from "./common";
import TagContainer from "./Tags";

export default function Education(props) {
  const educationItems = props.educationItems;
  const educationItemList = educationItems.map((education) => (
    <CVGridItem>
      <Wrapper>
        <p>{education.node.school}</p>
        <p className="dates">
          {education.node.startDate} - {education.node.endDate}
        </p>
      </Wrapper>
      <p>{education.node.degree}</p>
      <Description>
        <p>{ReactHtmlParser(education.node.description)}</p>
        <TagContainer tags={education.node.tags} />
      </Description>
    </CVGridItem>
  ));

  return <CVGridContainer>{educationItemList}</CVGridContainer>;
}
