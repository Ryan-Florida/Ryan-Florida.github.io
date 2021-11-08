import * as React from "react";
import { CSSProperties, useEffect } from "react";

// styles
const bodyStyles = {
  height: "98vh",
  width: "98vw",
  backgroundColor: "#0A0E17",
  overflow: "hidden !important",
};
const pageStyles = {
  color: "#FFFFFF",
  padding: 96,
  fontFamily: "Hack, -apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  fontSize: 21,
  color: "#1099A8",
};
const footerStyles = {
  position: "fixed",
  padding: "10px 10px 0px 10px",
  bottom: 0,
  width: "100%",
  height: "40px",
  margin: "auto",
  color: "#BC027F",
};
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
};
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
  listStyle: "none",
};

const descriptionStyle = {
  color: "#1099A8",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
};

type Description = {
  text: string;
  description: string;
  color: string;
};

const descriptions: Description[] = [
  {
    text: "Professional 👔",
    description:
      "Nowadays, I primarily develop bespoke software solutions in the cloud for accredited investors. I have worked across every part of the stack, from DevOps/SecOps to building out ETL processes, implementing/managing/orchestrating microservices, crafting enterprise-level progressive web applications, and deriving insights from collected data - all starting from an empty text editor and an idea.",
    color: "#BC027F",
  },
  {
    text: "Fun 👾",
    description:
      "I enjoy finding new and creative ways to integrate code, machine learning, mathematics, music, procedural generation, and animations. I am also obsessed with studying real estate, finance, tax law, and economics.",
    color: "#BC027F",
  },
  {
    text: "Collaboration 👻",
    description: "ryan@slackertechnologies.com",
    color: "#BC027F",
  },
];

// markup
const IndexPage = () => {
  useEffect(() => {
    //@ts-ignore
    document.body.style = "background-color: #0A0E17";
  }, []);

  return (
    <body style={bodyStyles}>
      <main style={pageStyles}>
        <title>ryanflorida</title>
        <h1 style={headingStyles}>
          Hello. I am Ryan Florida and I am a software engineer and entrepreneur
          from Nashville.
        </h1>
        <ul style={listStyles}>
          {descriptions.map(
            (description: Description, index: number): React.ReactElement => (
              <li
                key={index}
                style={{ ...listItemStyles, color: description.color }}
              >
                <span>
                  {description.text}
                  <p style={descriptionStyle}>{description.description}</p>
                </span>
              </li>
            )
          )}
        </ul>
      </main>
      <footer style={footerStyles as CSSProperties}>
        © Ryan Florida. All rights reserved.
      </footer>
    </body>
  );
};

export default IndexPage;
