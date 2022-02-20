import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { graphql, useStaticQuery } from "gatsby";
import { H1, H2 } from "../headings";
import { FlexWrapperRow, InlineLi, InlineUl } from "../common";
import { ContactA, ContactFlexWrapper, LinksFlexWrapper } from "./Contact";

export default function Header(props) {
  const contact = useStaticQuery(graphql`
    {
      allContact {
        edges {
          node {
            city
            country
            email
            firstname
            surname
          }
        }
      }
    }
  `);

  const { city, country, email, firstname, surname } =
    contact.allContact.edges[0].node;

  return (
    <>
      <H1>
        {firstname} {surname}
      </H1>
      <H2>Junior Javascript Developer</H2>
      <FlexWrapperRow>
        <ContactFlexWrapper>
          <InlineUl>
            <InlineLi>
              {city}, {country}
            </InlineLi>
            <InlineLi>
              <ContactA href={`mailto:${email}`}>{email}</ContactA>
            </InlineLi>
          </InlineUl>
        </ContactFlexWrapper>
        <LinksFlexWrapper>
          <a href="https://linkedin.com/in/jannisbetschki">
            <FaLinkedin color="#bbe1fa" size="1.5em" />
          </a>

          <a href="https://github.com/betschki">
            <FaGithub color="#bbe1fa" size="1.5em" />
          </a>
        </LinksFlexWrapper>
      </FlexWrapperRow>
      <p>
        Hi, I am Jannis, a 26 year-old food-loving Austrian, living in Berlin.
        In the last years, I have worked in customer service in different
        start-ups, while developing my own internal tools with <b>NodeJS</b> and
        different <b>Javascript</b> frameworks. At the same time, I have done a
        few freelance projects in frontend Web Design. Now, I am looking to
        start a full-time career as a developer.
      </p>
    </>
  );
}
