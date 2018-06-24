import React from "react";
import ReactDOM from "react-dom";
import Todolist from "./components/todolist";
import "./styles.css";

function Container() {
  return (

      <div className="container">
        <h1 className="text-center">React Todo List</h1>
        <hr />
        <Todolist />
      </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Container />, rootElement);
