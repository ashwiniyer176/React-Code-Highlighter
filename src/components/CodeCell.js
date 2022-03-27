import React from "react";
import "./CodeCell.css";

export default function CodeCell({ code }) {
  return (
    <div className="cell">
      <p>CodeCell</p>
      <p>{code}</p>
    </div>
  );
}
