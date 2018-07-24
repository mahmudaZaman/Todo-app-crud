import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import * as appActions from "../actions";

class List extends Component {

  componentDidMount = () => {
    this.props.fetchData();
  }
  render() {
    return (
      <div className="padding-v-10">
        <div className="padding-v-10">
          {/* <a className="waves-effect waves-light btn">
            <Link to='/addTodo'>Add Todo</Link>
          </a>  */}
          <Link to='/addTodo'>Add Todo</Link>
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
                    {/* <a className="waves-effect waves-light btn margin-right-10">Edit</a> */}
                    <a className="waves-effect waves-light btn red">Delete</a>
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
    todos: state.todos
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchData: () => dispatch(appActions.fetchData())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(List);
