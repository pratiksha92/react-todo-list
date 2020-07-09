import React from "react";
import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./components/Todoinput";
import TodoList from "./components/TodoList";
import Todoinput from "./components/Todoinput";

function App() {
  return (
    <div className="container">
      <div className="row">
        <Todoinput></Todoinput>
        <TodoList></TodoList>
      </div>
    </div>
  );
}

export default App;
