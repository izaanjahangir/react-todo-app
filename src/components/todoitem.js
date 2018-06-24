import React, { Component } from "react";

class Todoitem extends Component {
  render() {
    return (
      <li className="list-group-item">
        <span 
          onClick={this.props.clickHandler} 
          className={this.props.name.isDone ? "done" : ""}  
        > {this.props.name.name} </span>
        
        <div className="button-group">
          <input type="button" className="btn btn-danger" onClick={this.props.deleteHandler} value="Delete" />
          <input type="button" className="btn btn-primary" onClick={this.props.editHandler} value="Edit" />        
        </div>
      
      </li>
    );
  }
}
export default Todoitem;
