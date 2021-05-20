import React from "react";

export default class Button extends React.Component {
  render() {
    return (
      <div
        className={"ui button " + this.props.active + " " + this.props.color}
      >
        {this.props.text}
      </div>
    );
  }
}
