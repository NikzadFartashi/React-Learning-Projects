import React, { useState, useEffect } from "react";
import TopForm from "./topForm";
import TaskItems from "./taskItems";
import { taskContext } from "./taskContext";

const App = () => {
  const [taskItems, setTaskItems] = useState([
    {
      id: 1,
      title: "کار شماره 1",
      done: false,
    },
    {
      id: 2,
      title: "کار شماره 2",
      done: true,
    },
    {
      id: 3,
      title: "کار شماره 3",
      done: false,
    },
  ]);
  
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // بررسی حالت ذخیره شده در localStorage
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedDarkMode);
    
    // اعمال کلاس به body
    if (savedDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode);
    
    if (newDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  };

  return (
    <div className="container w-100 h-100 p-3">
      {/* دکمه تغییر حالت دارک/لایت */}
      <button className="theme-toggle-btn" onClick={toggleDarkMode}>
        {darkMode ? '☀️' : '🌙'}
      </button>
      
      <div className="row h-100 justify-content-center align-items-start">
        <div className="col-12 col-md-8 col-lg-6 bg-light shadow rounded-3 p-3 h_fit">
          <taskContext.Provider
            value={{
              taskItems,
              setTaskItems,
            }}
          >
            <TopForm />
            <TaskItems />
          </taskContext.Provider>
        </div>
      </div>
    </div>
  );
};

export default App;