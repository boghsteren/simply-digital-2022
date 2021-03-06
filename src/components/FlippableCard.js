import React, { useState } from "react";
import CardBackBottom from "./CardBackBottom";
import CardFrontBottom from "./CardFrontBottom";
import CardTop from "./CardTop";

export const FlippableCard = () => {
  const [flipped, flipCard] = useState(false);
  const handleClick = () => flipCard(!flipped);
  return (
    <div
      role="button"
      tabIndex="0"
      style={cardHolder}
      onClick={handleClick}
      onKeyDown={handleClick}
    >
      <div
        className={`flippable ${flipped ? "flipped" : ""}`}
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
        }}
      >
        <div
          className="back_card card_face"
          style={{
            backgroundColor: "#E4B363",
          }}
        >
          <CardTop></CardTop>
          <CardBackBottom></CardBackBottom>
        </div>
        <div
          className="card_face"
          style={{
            backgroundColor: "#E8E9EB",
          }}
        >
          <CardTop></CardTop>
          <CardFrontBottom></CardFrontBottom>
        </div>
      </div>
    </div>
  );
};

const cardHolder = {
  padding: "50px",
  perspective: "600px",
  height: "45vw",
};

export default FlippableCard;
