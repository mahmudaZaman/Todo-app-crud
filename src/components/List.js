import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import * as appActions from "../actions";

class List extends Component {
  componentDidMount = () => {
    this.props.fetchData(this.props.pageSize, this.props.currentPageNumber, this.props.description, this.props.sort);
  }
  goToPage = (currentPageNumber) => {
    this.props.fetchData(this.props.pageSize, currentPageNumber, this.props.description, this.props.sort);
  }
  changePageSize = (e) => {
    console.log(e.target.value);
    this.props.fetchData(e.target.value, this.props.currentPageNumber, this.props.description, this.props.sort);
  }
  changeSort = (e) => {
    this.props.fetchData(this.props.pageSize, this.props.currentPageNumber, "description", e.target.value);
  }
  deleteTodoHandler = (id) => {
    this.props.deleteTodoHandler(id);
  }

  render() {
    // console.log("this.props.totalPages",this.props.totalPages)
    return (
      <div className="padding-v-10">
        <div>
          SearchFilters
          <div>Current Page = {this.props.currentPageNumber + 1}</div>
          <div>Total Elements = {this.props.totalElements}</div>
          {/* <p>{this.props.totalPages}</p> */}
          <ul>
            {this.props.totalPages.map((_, i) => <li 
              style = {{display : "inline-block", listStyle: "none", margin: "5px"}} 
              onClick={() => this.goToPage(i)} key={i}>{i + 1}</li>)}
          </ul>
          <select style={{ display: "block", width:"200px" }} value={this.props.pageSize} onChange={this.changePageSize}>
            <option value="3">3</option>
            <option value="5">5</option>
            <option value="7">7</option>
            <option value="10">10</option>
          </select><br/>
          <select style={{ display: "block", width:"200px" }} value={this.props.sort} onChange={this.changeSort}>
            <option value="asc">asc</option>
            <option value="desc">desc</option>
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
    sort: state.sort
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchData: (pageSize, currentPageNumber, field, sort) => dispatch(appActions.fetchData(pageSize, currentPageNumber, field, sort)),
    deleteTodoHandler: (id) => dispatch(appActions.deleteTodoHandler(id))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(List);
