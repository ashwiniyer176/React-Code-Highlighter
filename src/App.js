import React from "react";
import ListComponent from "./components/ListComponent.js";

export default function App() {
  return (
    <div>
      <ListComponent listItems={"snippets"} />
      <ListComponent listItems={"users"} />
    </div>
  );
}
