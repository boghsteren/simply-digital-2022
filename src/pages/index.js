import React from "react";
import { Helmet } from "react-helmet";
import FlippableCard from "../components/FlippableCard";
import "../styles.css";
import "../reset.css";
import CardTop from "../components/CardTop";
import CardFrontBottom from "../components/CardFrontBottom";
import CardBackBottom from "../components/CardBackBottom";
import image from "../images/simply-image.png";

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <Helmet
        title="Simply Digital"
        description="Digital & Strategy. Brain for hire."
        url="https://www.simply-digital.dk/"
      >
        <meta property="og:url" content="https://www.simply-digital.dk/" />
        <meta property="og:title" content="Simply Digital" />
        <meta
          property="og:description"
          content="Digital & Strategy. Brain for hire."
        />
        <meta property="og:image" content={image} />
      </Helmet>
      <div className="flippable_card">
        <FlippableCard></FlippableCard>
      </div>

      <div style={cardHolder} className="static_card">
        <div
          style={{
            height: "100%",
            width: "100%",
            borderRadius: "10px",
            backgroundColor: "#E8E9EB",
          }}
        >
          <CardTop></CardTop>
          <CardFrontBottom></CardFrontBottom>
        </div>
      </div>
      <div style={cardHolder} className="static_card">
        <div
          style={{
            height: "100%",
            width: "100%",
            borderRadius: "10px",
            backgroundColor: "#E4B363",
          }}
        >
          <CardTop></CardTop>
          <CardBackBottom></CardBackBottom>
        </div>
      </div>
    </main>
  );
};

// styles
const pageStyles = {
  backgroundColor: "#313638",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  minHeight: "100vh",
};

const cardHolder = {
  padding: "20px",
  perspective: "600px",
  height: "45vw",
};

export default IndexPage;
