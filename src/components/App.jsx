import React from "react";
import Button from "./Button";

export default class App extends React.Component {
  render() {
    return (
      <div className="ui segment">
        <Button text="Start" active="" color="green" />
        <Button text="Reset" active="disabled" color="yellow" />
      </div>
    );
  }
}
