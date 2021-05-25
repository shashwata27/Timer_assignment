import React from "react";

export default class Timer extends React.Component {
  state = { time: 0, timeId: null };
  tick = () => {
    this.setState({ time: this.state.time + 1 });
  };

  componentDidMount() {
    let timeId = setInterval(this.tick, 1000);
    this.setState({ timeId: timeId });
  }

  componentWillUnmount() {
    this.props.onTimeChange(this.state.time);
    clearInterval(this.state.timeId);
  }
  render() {
    return <span>{this.props.pastTime + this.state.time}</span>;
  }
}
