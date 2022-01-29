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

// import ReactDOM from "react-dom";

// const element = {
//    type: "h1",
//    props: { title: "foo", children: "Hello" },
// };

// const container = document.getElementById("root");

// const node = document.createElement(element.type); // h1
// node.title = element.props.title;
// // node["title"] = element.props.title; // foo
// const text = document.createTextNode(""); //
// // text.nodeValue = ""
// text["nodeValue"] = element.props.children; // hello
// node.append(text);
// container.append(node);

// Step1 createElement with jsx

// import ReactDOM from "react-dom";
// // import React from "react";
// const element = (
// 	<div id="foo">
// 		<a>bar</a>
// 		<br/>
// 	</div>
// )
// const container = document.getElementById("root");
// ReactDOM.render(element, container);

// Step1 createElement without (no) jsx

// import ReactDOM from "react-dom";
// import React from "react";

// const element = React.createElement("div", { id: "foo" },
// 	React.createElement("a", null, "bar"),
// 	React.createElement("br")
// );

// const container = document.getElementById("root");
// ReactDOM.render(element, container);

// // Step1.3  without(no) React

// function createElement(type, props1, ...children) {
//    // childrenda kuplab tag-lar kelishi mumkin ichma ich
//    return {
//       type,
//       props: {
//          ...props1, // atributlar xam kup bulishi mumkin
//          children: children.map((child) => (typeof child === "object" ? child : createElement(child))),
//       },
//    };
// }

// function createTextElement(text) {
// 	return {
// 		type: "TEXT_ELEMENT",
// 		props: {
// 			nodeValue: text,
// 			children: [],
// 		},
// 	};
// }

// const Act = {
// 	createElement
// };

// const element = Act.createElement(
// 	"div",
// 	{ id: "foo" },
// 	Act.createElement("a", null, "bar"),
// 	Act.createElement("b")
// );

// console.log(element);

// console.log(createElement("div"));
// console.log(createElement("div", null, "a", "b"));
// console.log(createElement("div", {id: "foo"}, "a", "b", "br"));



// Step1.4 bably uzgartirish

/** @jsxRuntime classic */
function createElement(type, props, ...children) {
	return {
		 type,
		 props: {
			  ...props,
			  // title: "title",
			  // id: "id",
			  // className: "name",
			  children: children.map(child =>
					typeof child === "object" ? child : createTextElement(child)
			  )
		 }
	};
}


// <h1 title="title" id="id" className="name">children</h1>

function createTextElement(text) {
	return {
		 type: "TEXT_ELEMENT",
		 props: {
			  nodeValue: text, // hello
			  children: []
		 }
	};
}

function render(element, container) {
	const dom =
		 element.type == "TEXT_ELEMENT"
			  ? document.createTextNode("")
			  : document.createElement(element.type); // h1

	const isProperty = key => key !== "children";

	Object.keys(element.props)
		 .filter(isProperty)
		 .forEach(name => {
			  dom[name] = element.props[name];
		 });

	element.props.children.forEach(child => render(child, dom));
	container.appendChild(dom);
}

const Act = {
	createElement,
	render
};

/** @jsx Act.createElement */
const element = (
	<div style="background: salmon">
		 <h1>Hello World</h1>
		 <h2 style="text-align:right">from Act</h2>
		 <h3>hello world</h3>
		 <ul>
			  <li><a><span style="color: red">code</span></a></li>
		 </ul>
	</div>
);
const container = document.getElementById("root");
Act.render(element, container);


