import React, { PureComponent } from 'react';

class TodoForm extends PureComponent {
  componentWillReceiveProps(nextState,nextProps){
    console.log("this.props.description",this.props.description)
  }
  render() {
    console.log("this.props.description",this.props.description)
    return (
      <div className="padding-v-10">
        <label>Description</label>
        <input type="text" value={this.props.description} onChange={this.props.changeDescriptionTextHandler}/>
        <p>{this.props.description}</p>
        <a className="waves-effect waves-light btn" onClick={this.props.addTodoHandler}>{this.props.buttonText}</a>
      </div>
    );
  }
}
export default TodoForm;
