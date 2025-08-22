import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const tick = () => {
  const elem = (
    <div>
      <h1>سلام دوستان من</h1>
      <h2>It is {new Date().toLocaleTimeString()}</h2>
    </div>
  );
  root.render(elem);
};

// هر ثانیه یکبار tick اجرا میشه
setInterval(tick, 1000);
