import React from "react";

export default class Button extends React.Component {
  render() {
    return (
      <button
        className={`ui button ${this.props.active} ${this.props.color}`}
        onClick={this.props.onClickEvent}
      >
        {this.props.icon}
        {this.props.text}
      </button>
    );
  }
}
