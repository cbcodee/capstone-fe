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
        <label htmlFor="title" placeholder="add a task">
          Add a Task:
        </label>
        <input
          type="text"
          id="title"
          title="task"
          value={taskTitle}
          onChange={handleChange}
        />
      </div>
      <div>
        <input type="submit" id="submitTaskButton" value="+" />
      </div>
    </form>
  );
};

export default NewTaskForm;
