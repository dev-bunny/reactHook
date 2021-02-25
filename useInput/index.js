import React, { StrictMode, useState } from "react";
import ReactDOM from "react-dom";
import { useInput } from "./useInput";

const App = () => {
  const maxLen = (value) => value.includes("@"); //value.length <= 10;
  const name = useInput("Mr.", maxLen);
  return (
    <div className="App">
      <h1>Hello </h1>
      <input placeholder="Name" {...name} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
