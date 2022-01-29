"use strict";

// import ReactDOM from "react-dom";

// const element = <h1 title="foo"> Hello </h1>;
// const container = document.querySelector("#root");
// ReactDOM.render(element, container);

//? jsx siz ishlash

// import ReactDOM from "react-dom";
// import React from "react";

// const element = React.createElement("h1", { title: "foo" }, "Hello World");
// const container = document.querySelector("#root");
// ReactDOM.render(element, container);

// ? without React, jsx

import ReactDOM from "react-dom";

const element = {
   type: "h1",
   props: { title: "foo", children: "Hello" },
};

const container = document.getElementById("root");

const node = document.createElement(element.type); // h1
node.title = element.props.title;
// node["title"] = element.props.title; // foo
const text = document.createTextNode(""); //
// text.nodeValue = ""
text["nodeValue"] = element.props.children; // hello
node.append(text);
container.append(node);

// ReactDOM.render(element, container);
