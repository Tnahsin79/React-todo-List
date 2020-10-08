import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
const H1Tag = React.createElement("h1", { id: "page-title" }, "HELLO, REACT");

const DivTag = React.createElement("div", { className: "container" },
    React.createElement("h1", {}, "NEW REACT TITLE")
);

const ColorList = React.createElement("ul", {},
    [
        React.createElement("li", { key: "0" }, "Blue"),
        React.createElement("li", { key: "1" }, "Green"),
        React.createElement("li", { key: "2" }, "Red")
    ]
);

ReactDOM.render(ColorList, document.querySelector("#app-root"));