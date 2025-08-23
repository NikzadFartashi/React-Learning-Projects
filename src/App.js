import React from "react";
import Hello from "./Hello";
import Timer from "./Timer";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Stopwatch",
      buttonText: "تغییر عنوان به فارسی",
    };
  }

  handleSetTitle = () => {
    if (this.state.title === "Stopwatch") {
      this.setState({
        title: "کرنومتر",
        buttonText: "Change to English",
      });
    } else {
      this.setState({
        title: "Stopwatch",
        buttonText: "تغییر عنوان به فارسی",
      });
    }
  };

  render() {
    return (
      <div className="main">
        <Hello title={this.state.title} />
        <Timer
          handleSetTitle={this.handleSetTitle}
          buttonText={this.state.buttonText}
        />
      </div>
    );
  }
}
export default App;
