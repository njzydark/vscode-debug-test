import React from "react";
import ReactDOM from "react-dom";
import App from "./app";

const Element = document.createElement("div");
document.body.appendChild(Element);

ReactDOM.render(<App />, Element);
