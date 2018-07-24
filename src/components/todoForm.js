import React, { PureComponent } from 'react';
import { connect } from "react-redux";
import * as appActions from "../actions";

class TodoForm extends PureComponent {
  render() {
    return (
      <div className="padding-v-10">
        <label>Description</label>
        <input type="text" value={this.props.description} onChange={this.props.changeDescriptionTextHandler}/>
        <p>{this.props.description}</p>
        <a className="waves-effect waves-light btn" onClick={this.props.addTodoHandler}>Add todo</a>
      </div>
    );
  }
}
export default TodoForm;
