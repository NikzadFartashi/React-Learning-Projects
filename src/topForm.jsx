import React, { Fragment, useContext, useState } from "react";
import { taskContext } from "./taskContext";

const TopForm = () => {
  const [task, setTask] = useState("");
  const [error, setError] = useState("");
  const { taskItems, setTaskItems } = useContext(taskContext);
  const handleSetTask = (event) => {
    setTask(event.target.value);
    setError("");
  };
  const handleAddTask = (event) => {
    event.preventDefault();

    if (task.trim() === "") {
      setError("لطفاً یک کار وارد کنید!");
      return;
    }
    setTaskItems([
      ...taskItems,
      { id: Math.random(), title: task.trim(), done: false },
    ]);
    setTask("");
    setError("");
  };
  return (
    <Fragment>
      <h4 className="text-center text-info text_shadow">فهرست کار ها</h4>
      <form onSubmit={handleAddTask}>
        <div className="form-group d-flex">
          <input
            type="text"
            className="form-control"
            value={task}
            onChange={handleSetTask}
            placeholder="کار خود را وارد کنید..."
          />
          <button
            type="submit"
            className="btn btn-success me-1"
            disabled={task.trim() === ""}
          >
            ثبت
          </button>
        </div>
        {error && <div className="text-danger mt-2">{error}</div>}
      </form>
    </Fragment>
  );
};
export default TopForm;
