import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import { hover } from "@testing-library/user-event/dist/hover";
import TimeList from "./TimeList";
import { TestContex } from "./testContex";

var Interval;

class Timer extends React.Component {
  constructor() {
    super();
    this.state = {
      hour: 0,
      minute: 0,
      second: 0,
      isStart: false,
    };
  }
  static contextType = TestContex;
  startInterval = () => {
    if (this.state.isStart === false) {
      this.setState({
        isStart: true,
      });
      Interval = setInterval(() => {
        this.setState({
          second: this.state.second + 1,
        });
        if (this.state.second === 59) {
          this.setState({
            second: 0,
            minute: this.state.minute + 1,
          });
        }
        if (this.state.minute === 59) {
          this.setState({
            minute: 0,
            hour: this.state.minute + 1,
          });
        }
      }, 1000);
    }
  };
  stopInterval = () => {
    this.setState({
      isStart: false,
    });
    clearInterval(Interval);
  };
  resetInterval = () => {
    this.stopInterval();
    this.setState({
      hour: 0,
      minute: 0,
      second: 0,
    });
  };
  handleSaveTime = () => {
    // let h = this.state.hour;
    // let m = this.state.minute;
    // let s = this.state.second;
    // let newTime = `${h > 9 ? h : "0" + h}:${m > 9 ? m : "0" + m}:${
    //   s > 9 ? s : "0" + s
    // }`;
    let newTime = document.querySelector(".timer").innerHTML;
    this.context.setTimeArr([...this.context.timeArr, newTime]);
  };
  render() {
    let h = this.state.hour;
    let m = this.state.minute;
    let s = this.state.second;
    return (
      <>
        <h2 className="timer" onClick={this.handleSaveTime}>
          {this.state.time}
          {`${h > 9 ? h : "0" + h}:${m > 9 ? m : "0" + m}:${
            s > 9 ? s : "0" + s
          }`}
        </h2>
        <button
          className="action-button change-title-button"
          onClick={this.props.handleSetTitle}
          style={{
            background: this.props.isLight
              ? "linear-gradient(to right, #9d50bb, #6e48aa)"
              : "linear-gradient(to right, #da22ff, #9733ee)",
            border: this.props.isLight
              ? "2px solid #6e48aa"
              : "2px solid #9733ee",
          }}
        >
          {this.props.buttonText}
        </button>
        <div>
          <span
            className="action-button start-button"
            onClick={this.startInterval}
          >
            start
          </span>
          <span
            className="action-button stop-button"
            onClick={this.stopInterval}
          >
            stop
          </span>
          <span
            className="action-button reset-button"
            onClick={this.resetInterval}
          >
            reset
          </span>
        </div>
      </>
    );
  }
}
export default Timer;
