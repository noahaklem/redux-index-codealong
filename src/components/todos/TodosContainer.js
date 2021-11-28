import React, { Component } from "react";
import { connect } from "react-redux";
import Todo from "./Todo";

class TodosContainer extends Component {

  listTodos = () => this.props.todos.map((todo, id) => <Todo key={ id } text={ todo } />)
  
  render() {
    return (
      <ol>{this.listTodos()}</ol>
    )
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps)(TodosContainer)