import React from "react";
import Button from "./Button";
import TimeDisplay from "./TimeDisplay";

const iconConfig = {
  pause: <i className="pause icon"></i>,
  play: <i className="play icon"></i>,
};

export default class App extends React.Component {
  state = {
    startStopStatus: true,
    startStopText: "Start",
    startStopColor: "green",
    startStopIcon: iconConfig.play,
    resetActivity: "disabled",
    resetStatus: false,
  };

  onStartStopClick = () => {
    this.setState({
      startStopStatus: !this.state.startStopStatus,
      startStopText: this.state.startStopText === "Start" ? "Stop" : "Start",
      startStopColor: this.state.startStopColor === "green" ? "red" : "green",
      startStopIcon:
        this.state.startStopIcon === iconConfig.play
          ? iconConfig.pause
          : iconConfig.play,
      resetActivity: "",
      resetStatus: false,
    });
  };
  onResetStatusClick = () => {
    this.setState({
      resetActivity: "disabled",
      startStopStatus: true,
      startStopText: "Start",
      startStopColor: "green",
      startStopIcon: iconConfig.play,
      resetStatus: true,
    });
  };

  render() {
    return (
      <div className="ui segment center">
        <TimeDisplay
          ssStatus={this.state.startStopStatus}
          resetStatus={this.state.resetStatus}
        />
        <Button
          text={this.state.startStopText}
          active=""
          color={this.state.startStopColor}
          onClickEvent={this.onStartStopClick}
          icon={this.state.startStopIcon}
        />
        <Button
          text="Reset"
          active={this.state.resetActivity}
          color="yellow"
          onClickEvent={this.onResetStatusClick}
          icon={<i className="history icon"></i>}
        />
      </div>
    );
  }
}
