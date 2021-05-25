import React from "react";
import Timer from "./Timer";

export default class TimeDisplay extends React.Component {
  state = { time: 0, prevTime: 0 };
  getTime = (tim) => {
    if (this.props.resetStatus === false) {
      this.setState({ time: this.state.time + tim });
    } else {
      //reset
      this.setState({ time: 0, prevTime: 0 });
    }
  };

  render() {
    if (this.props.resetStatus === true) {
      return (
        <div className="ui card">
          <div className="content">
            <i className="clock icon"></i>
            00:00:00
          </div>
        </div>
      );
    } else {
      if (this.props.ssStatus === true) {
        return (
          <div className="ui card">
            <div className="content">
              <i className="clock icon"></i>
              {this.state.time}
            </div>
          </div>
        );
      } else if (this.props.ssStatus === false) {
        return (
          <div className="ui card">
            <div className="content">
              <i className="clock icon"></i>
              <Timer onTimeChange={this.getTime} pastTime={this.state.time} />
            </div>
          </div>
        );
      }
    }
  }
}
