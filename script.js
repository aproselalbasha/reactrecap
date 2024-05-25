import React from "react"
import ReactDOM from "react-dom/client"
const Parent=React.createElement("div",{class:"parent"},[React.createElement("div",{id:"child1"},
[React.createElement("h1",{},"I AM FROM H1 NESTED"),
React.createElement("h2",{},"I AM FROM H2 NESTED")]),React.createElement("div",{id:"child2"},
[React.createElement("h1",{},"I AM FROM H1 NESTED"),
React.createElement("h2",{},"I AM FROM H2 NESTED")])])


const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(Parent)