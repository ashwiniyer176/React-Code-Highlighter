import React from "react";
import "./CodeSnippet.css";

export default function CodeSnippet({ code }) {
  return (
    <div className="snippet">
      <code>{code}</code>
    </div>
  );
}
