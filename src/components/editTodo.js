import React, { Component } from 'react';
import { connect } from "react-redux";
import * as appActions from "../actions";
import TodoForm from "./todoForm"
class EditTodo extends Component {
    changeDescriptionTextHandler = (event) => {
        this.props.changeDescriptionTextHandler(event.target.value);
    }

    updateTodoHandler = () => {
        this.props.updateTodoHandler({description:this.props.description,id:this.props.match.params.id},this.props.history.push);
    }
    componentDidMount(){
        this.props.itemFetchingInProgress(true);
        this.props.fetchTodoById(this.props.match.params.id);
    }
  render() {
    console.log("this.props",this.props)
    if(this.props.fetchingSingleItem===true){
        return <div>Fetching....</div>
    }
    return (
        <TodoForm 
        description = {this.props.description}
        changeDescriptionTextHandler = {this.changeDescriptionTextHandler}
        addTodoHandler = {this.updateTodoHandler}
        buttonText = "Update"
        ></TodoForm>
    );
  }
}

const mapStateToProps = (state, props) => {
    return {
        fetchingSingleItem : state.fetchingSingleItem,
        description: state.description ,
        todoLoaded : state.todoLoaded
    }
  }
  const mapDispatchToProps = (dispatch, props) => {
    return {
        itemFetchingInProgress  : (value)=>dispatch(appActions.itemFetchingInProgress(value)),
        changeDescriptionTextHandler: (description) => dispatch(appActions.changeDescriptionText(description)),
        updateTodoHandler: (todo, push) => dispatch(appActions.updateTodo(todo, push)),
        fetchTodoById : (id)=>dispatch(appActions.fetchTodoById(id)),
    }
  }
  
  
  export default connect(mapStateToProps, mapDispatchToProps)(EditTodo);
