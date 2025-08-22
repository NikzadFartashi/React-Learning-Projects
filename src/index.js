import React from "react";
import ReactDOM from "react-dom/client";

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString(),
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      time: new Date().toLocaleTimeString(),
    });
  }

  render() {
    return <h2>It is {this.state.time}</h2>;
  }
}

class Hello extends React.Component {
  render() {
    return <h1>سلام دوستان من</h1>;
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Hello />
        <Timer />
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
