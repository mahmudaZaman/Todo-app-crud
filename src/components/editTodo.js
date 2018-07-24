import React, { Component } from 'react';
import { connect } from "react-redux";
import * as appActions from "../actions";
import TodoForm from "./todoForm"
class EditTodo extends Component {
    changeDescriptionTextHandler = (event) => {
        this.props.changeDescriptionTextHandler(event.target.value);
    }

    addTodoHandler = () => {
        this.props.addTodoHandler({description:this.props.description},this.props.history.push);
    }
    componentDidMount(){
        if(this.props.todoLoaded===false){
            this.props.fetchData();
        }
    }
  render() {
    return (
        <TodoForm 
        description = {this.props.description}
        changeDescriptionTextHandler = {this.changeDescriptionTextHandler}
        addTodoHandler = {this.addTodoHandler}
        ></TodoForm>
    );
  }
}

const mapStateToProps = (state, props) => {
    if(state.todoLoaded===false){
        return {
            description:  '',
            todoLoaded : false
        }
    }
    // console.log("props",props.match.params.id)
    // console.log("todo state",state.todos)
    const todo = state.todos.find(todo=>todo.id == props.match.params.id);
    // console.log("todo obj",todo)
    return {
        description: todo?todo.description : '',
        todoLoaded : state.todoLoaded
    }
  }
  const mapDispatchToProps = (dispatch, props) => {
    return {
        changeDescriptionTextHandler: (description) => dispatch(appActions.changeDescriptionText(description)),
        addTodoHandler: (todo, push) => dispatch(appActions.addTodo(todo, push)),
        fetchData : ()=>dispatch(appActions.fetchData())
    }
  }
  
  
  export default connect(mapStateToProps, mapDispatchToProps)(EditTodo);
