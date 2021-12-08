import React from "react";

export const CardFrontBottom = () => {
  return (
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
        <div style={slogan}>CVR: 38465635</div>
      </div>
      <div style={{ textAlign: "right" }}>
        <div style={slogan}>Strategi</div>
        <div style={slogan}>Ledelse</div>
        <div style={slogan}>Teknologi</div>
        <div style={slogan}>Udvikling</div>
        <div style={slogan}>Forretning</div>
      </div>
    </div>
  );
};

const slogan = {
  color: "#313638",
  fontSize: "2vw",
  marginTop: "1vw",
};

export default CardFrontBottom;
