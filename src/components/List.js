import React, { Component } from 'react';
import { connect } from "react-redux";
import * as appActions from "../Actions/actions";

class List extends Component {

  componentDidMount = () => {
    this.props.fetchData();
  }

  render() {
    return (
      <div className="padding-v-10">
        <table className="striped centered">
          <thead>
            <tr>
              <th className="padding-v-10">Todo Items</th>
              <th className="padding-v-10">Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.props.todos.map((todo) => {
              return (
                <tr key={todo.id}>
                  <td className="padding-v-10">{todo.name}</td>
                  <td className="padding-v-10">
                    <a className="waves-effect waves-light btn margin-right-10">Edit</a>
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
