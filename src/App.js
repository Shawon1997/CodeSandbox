import { Component } from "react";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      todolist: []
    };
  }

  handlechange = (e) => {
    this.setState({
      username: e.target.value
    });
  };

  handlevalue = () => {
    // console.log(e)
    this.setState({
      todolist: [...this.state.todolist, this.state.username],
      username: ""
    });
  };

  handledelete = (name) => {
    // console.log(name)
    let updatetodo = this.todolist.filter((e) => e !== name);
    this.setState({
      todolist: updatetodo
    });
  };

  render = () => (
    <div>
      <input
        placeholder="add todo"
        value={this.state.username}
        onChange={(el) => {
          this.handlechange(el);
        }}
      />
      <button onClick={this.handlevalue}>Add</button>
      {this.state.todolist?.map((el, index) => (
        <div key={index}>
          name: {el}
          <button onClick={() => this.handledelete(el)}>delete</button>
        </div>
      ))}
    </div>
  );
}
