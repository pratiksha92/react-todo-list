import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./components/Todoinput";
import TodoList from "./components/TodoList";

//showing vs-code github setup
class App extends Component {
  state = {
    items: [
      { id: 1, title: "Wake up" },
      { id: 2, title: "Prepare breakfast" },
    ],
    id: uuidv4(),
    item: "",
    editItem: false,
  };
  handleChange = (e) => {
    console.log("handle change");
  };

  handleSubmit = (e) => {
    console.log("handle Submit");
  };

  clearList = () => {
    console.log("clear List");
  };

  handleDelete = (id) => {
    console.log(`handle Delete ${id}`);
  };

  handleEdit = (id) => {
    console.log(`handle Edit ${id}`);
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5">
            <h3 className="text-capitalize text-center">todo Input</h3>
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            ></TodoInput>
            <TodoList
              items={this.state.items}
              clearList={this.clearList}
              handleEdit={this.handleEdit}
              handleDelete={this.handleDelete}
            ></TodoList>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
