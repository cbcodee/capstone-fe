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
        <label htmlFor="title">Add a Task: </label>
        <input
          type="text"
          id="title"
          title="title"
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
