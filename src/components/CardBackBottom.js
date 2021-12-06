import React from "react";

export const CardBackBottom = () => {
  return (
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
        <div style={slogan}>Head of Digital Product Management, TV 2</div>
        <div style={slogan}>Chief Product Officer, Fromtu</div>
        <div style={slogan}>Head of Product, 9 Spokes</div>
        <div style={slogan}>Head of Product, Lightbox</div>
        <div style={slogan}>Head of On Demand, YouSee</div>
      </div>
    </div>
  );
};

const slogan = {
  color: "#313638",
  fontSize: "2vw",
  marginTop: "1vw",
};
const companyName = {
  color: "#313638",
  fontSize: "3vw",
  fontWeight: "600",
};

export default CardBackBottom;
