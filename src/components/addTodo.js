import React, { Component } from 'react';
import { connect } from "react-redux";
import * as appActions from "../actions";
import TodoForm from "./todoForm"
class AddTodo extends Component {
    changeDescriptionTextHandler = (event) => {
        this.props.changeDescriptionTextHandler(event.target.value);
    }

    addTodoHandler = () => {
        this.props.addTodoHandler({description:this.props.description},this.props.history.push);
    }
  render() {
    return (
        <TodoForm 
        description = {this.props.description}
        changeDescriptionTextHandler = {this.changeDescriptionTextHandler}
        addTodoHandler = {this.addTodoHandler}
        buttonText = "Add"
        ></TodoForm>
    );
  }
}

const mapStateToProps = (state, props) => {
    return {
        description: state.description
    }
  }
  const mapDispatchToProps = (dispatch, props) => {
    return {
        changeDescriptionTextHandler: (description) => dispatch(appActions.changeDescriptionText(description)),
        addTodoHandler: (todo, push) => dispatch(appActions.addTodo(todo, push))
    }
  }
  
  
  export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
