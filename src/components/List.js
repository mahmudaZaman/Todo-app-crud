import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import * as appActions from "../actions";

class List extends Component {

  componentDidMount = () => {
    //page=0&size=2&sort=description,desc
    this.props.fetchData(this.props.currentPageNumber, this.props.pageSize);
  }
  deleteTodoHandler = (id) => {
    this.props.deleteTodoHandler(id);
  }
  goToPage = (currentPageNumber)=> {
    this.props.fetchData(currentPageNumber,this.props.pageSize)
  }
  changePageSize = (e)=>{
    this.props.fetchData(this.props.currentPageNumber,e.target.value)
  }
  render() {
    // console.log("this.props.totalPages",this.props.totalPages)
    return (
      <div className="padding-v-10">
        <div>
          SearchFilters
          <div>Current Page = {this.props.currentPageNumber+1}</div>
          <div>Total Elements = {this.props.totalElements}</div>
          {/* <p>{this.props.totalPages}</p> */}
          <ul>
            {this.props.totalPages.map((_, i) => <li onClick={()=>this.goToPage(i)} key = {i}>{i+1}</li>)}
          </ul>
          <select style = {{display : "block"}}value={this.props.pageSize} onChange={this.changePageSize}>
            <option value="3">3</option>
            <option value="5">5</option>
            <option value="7">7</option>
            <option value="10">10</option>
         </select>
        </div>
        <div className="padding-v-10">
          <Link className="waves-effect waves-light btn" to='/addTodo'>Add Todo</Link>
        </div>
        <table className="striped centered">
          <thead>
            <tr>
              <th className="padding-v-10">Todo Items</th>
              <th className="padding-v-10">Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.props.todos.map((todo, index) => {
              return (
                <tr key={index}>
                  <td className="padding-v-10">{todo.description}</td>
                  <td className="padding-v-10">
                    <Link className="waves-effect waves-light btn margin-right-10" to={`/edit/${todo.id}`}>Edit</Link>
                    <a className="waves-effect waves-light btn red" onClick={() => this.deleteTodoHandler(todo.id)}>Delete</a>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    text: state.text,
    todos: state.todos,
    currentPageNumber: state.currentPageNumber,
    pageSize: state.pageSize,
    totalElements: state.totalElements,
    totalPages: state.totalPages,
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchData: (currentPageNumber, pageSize) => dispatch(appActions.fetchData(currentPageNumber, pageSize)),
    deleteTodoHandler: (id) => dispatch(appActions.deleteTodoHandler(id))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(List);
