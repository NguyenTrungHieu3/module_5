import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
      item: ""
    }
  }

  handleChange = (event) => {
    this.setState({
      item: event.target.value
    })
  }

  handleAddItem = () => {
    const congViecMoi = this.state.item;
    const danhSachCu = this.state.list;

    if (congViecMoi.trim() !== "") {
      this.setState({
        list: [...danhSachCu, congViecMoi],
        item: ""
      })
    }
  }

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <input
          type="text"
          value={this.state.item}
          onChange={this.handleChange}
        ></input>
        <button onClick={this.handleAddItem}>Add</button>
        <ul>
          {this.state.list.map((todo, index) => {
            return <li key={index}>{todo}</li>
          })}
        </ul>
      </div>
    )
  }
}

export default App
