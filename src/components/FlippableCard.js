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
        className={flipped && "flipped"}
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          transition: "transform 1s",
          transformStyle: "preserve-3d",
        }}
      >
        <div
          className="back_card"
          style={{
            height: "100%",
            width: "100%",
            borderRadius: "10px",
            backgroundColor: "#E4B363",
            position: "absolute",
            backfaceVisibility: "hidden",
          }}
        >
          <CardTop></CardTop>
          <CardBackBottom></CardBackBottom>
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
