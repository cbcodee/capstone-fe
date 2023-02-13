import React, { useState } from "react";
import "./NewTaskForm.css";

const NewTaskForm = ({ handleTaskSubmit }) => {
  const [taskTitle, setTaskTitle] = useState("");

  const handleChange = (event) => {
    setTaskTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleTaskSubmit(taskTitle);
    setTaskTitle("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label className="add-task" htmlFor="title">
          Add a Task:
        </label>
        <input
          type="text"
          id="title"
          title="task"
          placeholder="Task"
          value={taskTitle}
          onChange={handleChange}
        />
        <input type="submit" id="submitTaskButton" value="+" />
      </div>
    </form>
  );
};

export default NewTaskForm;
