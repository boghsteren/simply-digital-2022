import React, { useState } from "react";
import { Helmet } from "react-helmet";
import CardTop from "../components/CardTop";
import "../reset.css";

const IndexPage = () => {
  const [flipped, flipCard] = useState(false);
  return (
    <main style={pageStyles}>
      <Helmet
        title="Home - Simply Digital"
        description="I am a seasoned digital generalist with a long track record."
        url="https://www.simply-digital.dk/"
      ></Helmet>
      <div style={cardHolder} onClick={() => flipCard(!flipped)}>
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "relative",
            transition: "transform 1s",
            transformStyle: "preserve-3d",
            transform: flipped && "rotateY(180deg)",
          }}
        >
          <div
            style={{
              height: "100%",
              width: "100%",
              borderRadius: "10px",
              backgroundColor: "#E4B363",
              position: "absolute",
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <CardTop></CardTop>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "middle",
                padding: "0vw 5vw 5vw 5vw",
              }}
            >
              <div>
                <div style={companyName}>Experience</div>
                <div style={slogan}>Senior Director, Norlys</div>
                <div style={slogan}>Chief Digital Officer, Boxer</div>
                <div style={slogan}>
                  Head of Digital Product Management, TV 2
                </div>
                <div style={slogan}>Chief Product Officer, Fromtu</div>
                <div style={slogan}>Head of Product, 9 Spokes</div>
                <div style={slogan}>Head of Product, Lightbox</div>
                <div style={slogan}>Head of On Demand, YouSee</div>
              </div>
            </div>
          </div>
          <div
            style={{
              height: "100%",
              width: "100%",
              borderRadius: "10px",
              backgroundColor: "#E8E9EB",
              position: "absolute",
              backfaceVisibility: "hidden",
            }}
          >
            <CardTop></CardTop>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "5vw",
                paddingTop: "5vw",
              }}
            >
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
const cardHolder = {
  padding: "20px",
  perspective: "600px",
  height: "45vw",
};

export default IndexPage;
