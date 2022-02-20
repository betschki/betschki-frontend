import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import ReactHtmlParser from "react-html-parser";
import { Row, Container, Col } from "../components/structure";
import { H1, H2 } from "../components/headings";
import { BGLightBlue, Center, HTTPTag } from "../components/common";
import Layout from "../components/layout";
import "../styles/fonts.css";
import styled from "styled-components";

const MailTo = styled.a`
  color: var(--light-blue);
  font-weight: 300;
  text-decoration: none;
`;

export default function Home() {
  const fetchData = useStaticQuery(graphql`
    {
      content(page: { eq: "index" }) {
        id
        content
      }
      contact(
        firstname: { eq: "Jannis" }
        surname: { eq: "Fedoruk-Betschki" }
      ) {
        firstname
        surname
        city
        country
        email
      }
    }
  `);

  const { city, country, email, firstname, surname } = fetchData.contact;

  const { content } = fetchData.content;

  return (
    <>
      <Layout>
        <Helmet>
          <meta charSet="utf-8" />
          <title>
            {firstname} {surname} | Junior Developer
          </title>
        </Helmet>
        <Container className="pt-2 pb-2">
          <Center>
            <Row>
              <Col>
                <StaticImage
                  src="../images/jannis.jpeg"
                  alt="Jannis Fedoruk-Betschki"
                  height={300}
                  className="image-circle image-outline mb-2"
                />
                <H1>
                  {firstname} {surname}
                </H1>
                <H2>Junior Javascript Developer</H2>
                <MailTo href={`mailto:${email}`}>{email}</MailTo>
                <div className="mt-2">{ReactHtmlParser(content)}</div>
              </Col>
            </Row>
          </Center>
        </Container>
        <BGLightBlue className="pt-2 pb-2">
          <Container>
            <Center>
              <Row>
                <Col>
                  <h2>The purpose of this page</h2>
                  <p>
                    I wanted to use some of the skills I have learned in the
                    last two years, to put a simple application together. Right
                    now, you are looking at the application's frontend:{" "}
                    <b>a static site, generated with GatsbyJS</b>.
                  </p>
                  <p>
                    Some of the content that you see, is served by a{" "}
                    <b>NestJS backend</b> that is hooked up to a <b>MySQL</b>{" "}
                    database.
                  </p>
                  <p>
                    Is all of that necessary for a small personal website?
                    Absolutely not. To be quite honest, a simple HTML page with
                    some CSS would have probably been the better option.
                    However, since most of my coding projects are part of my
                    job, I wanted to code something in my free time that I can
                    show publically. So here you are, on an over-engineered
                    personal website 😅
                  </p>
                  <h3 className="mt-2">
                    Want to see where I have worked so far?
                  </h3>
                  <p>
                    You can find my employment history and educational efforts
                    as <b>JSON</b> at the following routes of this website's
                    backend:
                  </p>
                  <p>
                    <HTTPTag>GET</HTTPTag>{" "}
                    <a href="https://api.betschki.com/employment">
                      /employment
                    </a>
                  </p>
                  <p>
                    <HTTPTag>GET</HTTPTag>{" "}
                    <a href="https://api.betschki.com/education">/education</a>
                  </p>
                  <p>
                    These API-endpoints are also used within this GatsbyJS
                    frontend to{" "}
                    <a href="pdf/cv.pdf">generate a full CV as a PDF</a>.
                  </p>
                </Col>
              </Row>
            </Center>
          </Container>
        </BGLightBlue>
        <footer className="text-center">
          <Center>
            <p>
              Want to see how I coded this page? Have a look at my{" "}
              <a href="https://github.com/betschki">GitHub</a> account!
            </p>
          </Center>
        </footer>
      </Layout>
    </>
  );
}
