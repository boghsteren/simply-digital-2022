import React from "react";

export const CardTop = () => {
  const handleClick = (e) => e.stopPropagation();
  return (
    <div style={flexBox}>
      <div>
        <a
          onClick={handleClick}
          onKeyDown={handleClick}
          style={{ textDecoration: "none", color: "inherit" }}
          href="https://www.linkedin.com/in/jakobbs/"
        >
          <h1 style={name}>JAKOB BØGH SØRENSEN</h1>
        </a>
        <h2 style={title}>Brain for hire</h2>
      </div>
      <div>
        <h2 style={companyName}>Simply</h2>
        <h2 style={companyName}>Digital</h2>
      </div>
    </div>
  );
};

const companyName = {
  color: "#313638",
  fontSize: "3vw",
  fontWeight: "600",
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
const flexBox = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "middle",
  padding: "5vw",
};
export default CardTop;
