import React from "react";

const cssMod16 = ({ type, children }) => {
  const badgeStyles = {
    padding: "5px 10px",
    borderRadius: "12px",
    fontSize: "14px",
    color: "white",
    display: "inline-block",
  };

  let badgeTypeStyle = {};

  if (type === "success") {
    badgeTypeStyle = {
      backgroundColor: "#28a745", // Green
    };
  } else if (type === "warning") {
    badgeTypeStyle = {
      backgroundColor: "#ffc107", // Yellow
      color: "black",
    };
  } else if (type === "error") {
    badgeTypeStyle = {
      backgroundColor: "#dc3545", // Red
    };
  } else {
    badgeTypeStyle = {
      backgroundColor: "gray", // Default
    };
  }

  return <span style={{ ...badgeStyles, ...badgeTypeStyle }}>{children}</span>;
};

export default cssMod16;
