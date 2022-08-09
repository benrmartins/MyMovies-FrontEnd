import React from "react";

const HorizontalLine = ({ style }) => {
  return (
    <div
      style={{
        margin: '30px',
        height: 1,
        backgroundColor: "#111111",
        width: "100%",
        ...style,
      }}
    ></div>
  );
};

export default HorizontalLine;
