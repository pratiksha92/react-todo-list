import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./components/Todoinput";
import TodoList from "./components/TodoList";

//showing vs-code github setup
//showing vs-code github setup
function App() {
  return (
    <div className="container">
      <div className="row">
        <TodoInput></TodoInput>
        <TodoList></TodoList>
      </div>
    </div>
  );
}

export default App;
