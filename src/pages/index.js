import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "reactstrap";
import "./index.css";
import { StaticImage } from "gatsby-plugin-image";
import ReactHtmlParser from "react-html-parser";

export default function Home() {
  const data = useStaticQuery(graphql`
    {
      allBackendContent(filter: { page: { eq: "index" } }) {
        edges {
          node {
            id
            page
            heading
            subheading
            content
          }
        }
      }
    }
  `);

  const { heading, subheading, content } = data.allBackendContent.edges[0].node;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Jannis Fedoruk-Betschki | Junior Developer</title>
      </Helmet>
      <Container className="text-center frontpage-header">
        <Row>
          <Col>
            <div className="mt-3">
              <StaticImage
                src="../images/jannis.jpeg"
                alt="Jannis Fedoruk-Betschki"
                height={300}
                className="image-circle"
              />
            </div>
            <div className="frontpage-heading-wrapper">
              <h1 className="mt-4 frontpage-heading-h1">{heading}</h1>
              <h2 className="frontpage-heading-h1">{subheading}</h2>
            </div>
            <div className="frontpage-content">{ReactHtmlParser(content)}</div>
          </Col>
        </Row>
      </Container>
      {/* <div className="frontpage-meta">
        <Container className="text-center">
          <Row>
            <Col>
              <h2>My CV...with a twist</h2>
              <p>
                A plain CV would be pretty boring, right? At least, I think so.
              </p>
              <p className="mt-3">
                That's why it comes with a twist. Feel free to{" "}
                <a href="">generate a PDF through this link</a>. The backend of
                this small website will pull my up-to-date employment history
                from a database and download the finished PDF for you.
              </p>
              <p>
                As an alternative, feel free to use my CV API through the
                following routes:
              </p>
              <p>GET /contact</p>
              <p>GET /education</p>
              <p>GET /employment</p>
            </Col>
          </Row>
        </Container>
      </div> */}
      <footer className="text-center">
        <p>
          This small website has been created using GatsbyJS for the frontend
          and NestJS for the backend. Have a look at{" "}
          <a href="https://github.com/betschki">GitHub</a> how I did it.
        </p>
      </footer>
    </>
  );
}
