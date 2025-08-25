import React, { useState } from "react";
import Hello from "./Hello";
import Timer from "./Timer";
import TimeList from "./TimeList";
import { TestContex } from "./testContex";

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       title: "Stopwatch",
//       buttonText: "تغییر عنوان به فارسی",
//     };
//   }

//   handleSetTitle = () => {
//     if (this.state.title === "Stopwatch") {
//       this.setState({
//         title: "کرنومتر",
//         buttonText: "Change to English",
//       });
//     } else {
//       this.setState({
//         title: "Stopwatch",
//         buttonText: "تغییر عنوان به فارسی",
//       });
//     }
//   };

//   render() {
//     return (
//       <div className="main">
//         <Hello title={this.state.title} />
//         <Timer
//           handleSetTitle={this.handleSetTitle}
//           buttonText={this.state.buttonText}
//         />
//       </div>
//     );
//   }
// }

const App = () => {
  const [title, setTitle] = useState("Stopwatch");
  const [buttonText, setButtonText] = useState("تغییر عنوان به فارسی");
  const [isLight, setIsLight] = useState(false);
  const [timeArr, setTimeArr] = useState([]);

  const themes = {
    light: {
      background: "linear-gradient(135deg, #fdbb2d, #1a2a6c, #b21f1f)",
    },
    dark: {
      background: "linear-gradient(135deg, #b21f1f, #1a2a6c, #fdbb2d)",
    },
  };

  const handleSetTitle = () => {
    if (title === "Stopwatch") {
      setTitle("کرنومتر");
      setButtonText("Change to English");
    } else {
      setTitle("Stopwatch");
      setButtonText("تغییر عنوان به فارسی");
    }
    setIsLight(!isLight);
  };

  const currentTheme = isLight ? themes.light : themes.dark;

  return (
    <TestContex.Provider value={{ timeArr, setTimeArr }}>
      <div
        className="main"
        style={{
          background: currentTheme.background,
          color: currentTheme.textColor,
        }}
      >
        <Hello title={title} />
        <Timer
          handleSetTitle={handleSetTitle}
          buttonText={buttonText}
          isLight={isLight}
        />
        <TimeList />
      </div>
    </TestContex.Provider>
  );
};

export default App;
