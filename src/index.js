"use strict";

// import ReactDOM from "react-dom";

// const element = <h1 title="foo"> Hello </h1>;
// const container = document.querySelector("#root");
// ReactDOM.render(element, container);

//? jsx siz ishlash

import ReactDOM from "react-dom";
import React from "react";

const element = React.createElement("h1", { title: "foo" }, "Hello World");
const container = document.querySelector("#root");
ReactDOM.render(element, container);
