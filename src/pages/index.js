import React, { useState } from "react";
import { Helmet } from "react-helmet";
import background from "../images/cover.jpg";
import "../reset.css";

const IndexPage = () => {
  const [currentSection, updateCurrentSection] = useState("top");
  return (
    <main style={pageStyles}>
      <Helmet
        title="Home - Simply Digital"
        description="I am a seasoned digital generalist with a long track record."
        url="https://www.simply-digital.dk/"
      ></Helmet>
      <div style={cardHolder}>
        <div style={businessCard}>
          <div style={flexBox}>
            <div>
              <h1 style={name}>
                <a
                  style={{ textDecoration: "none", color: "inherit" }}
                  href="https://www.linkedin.com/in/jakobbs/"
                >
                  JAKOB BØGH SØRENSEN
                </a>
              </h1>
              <h2 style={title}>Brain for hire</h2>
            </div>
            <div>
              <h2 style={companyName}>Simply</h2>
              <h2 style={companyName}>Digital</h2>
            </div>
          </div>
          <div style={flexBox}>
            <div>
              <div style={slogan}>Guldbergsgade 76, 2</div>
              <div style={slogan}>2200 København N</div>
              <div style={slogan}>---</div>

              <div style={slogan}>Phone: +45 41 32 95 50 </div>
              <div style={slogan}>Email: Jakob @ simply-digital.dk</div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={slogan}>Strategi</div>
              <div style={slogan}>Ledelse</div>
              <div style={slogan}>Teknologi</div>
              <div style={slogan}>Udvikling</div>
              <div style={slogan}>Forretning</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

// styles
const pageStyles = {
  backgroundColor: "#313638",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  height: "100vh",
};
const name = {
  color: "#313638",
  fontSize: "4.5vw",
};
const title = {
  color: "#313638",
  fontSize: "3vw",
  fontWeight: "200",
};
const companyName = {
  color: "#313638",
  fontSize: "3vw",
  fontWeight: "600",
};

const slogan = {
  color: "#313638",
  fontSize: "2vw",
  marginTop: "1vw",
};

const businessCard = {
  height: "45vw",
  borderRadius: "10px",
  backgroundColor: "#E8E9EB",
  backgroundSize: "cover",
};
const cardHolder = {
  padding: "20px",
};
const flexBox = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "middle",
  padding: "5vw",
};

export default IndexPage;
