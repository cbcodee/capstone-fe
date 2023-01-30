import React from "react";
import "./App.css";
import Task from "./components/Task";
import TaskList from "./components/TaskList";
import { useState } from "react";

// import Backgrounds from "./components/Backgrounds";
// import TaskList from "./components/TaskList.js";

const taskDataList = [
  {
    id: 1,
    title: "Read chapter 1",
    isComplete: true,
  },
  {
    id: 2,
    title: "Review lesson 2",
    isComplete: true,
  },
  {
    id: 3,
    title: "Review lesson 3",
    isComplete: false,
  },
  {
    id: 4,
    title: "Review lesson 4",
    isComplete: false,
  },
];

function App() {
  const [taskData, setTaskData] = useState(taskDataList);

  const toggleComplete = (id) => {
    setTaskData((taskData) =>
      taskData.map((task) => {
        if (task.id === id) {
          return { ...task, isComplete: !task.isComplete };
        } else {
          return task;
        }
      })
    );
  };

  const toggleDelete = (id) => {
    const newTasks = taskData.filter((task) => task.id !== id);
    setTaskData(newTasks);
  };
  //   setTaskData((taskData) =>
  //     taskData.map((task) => {
  //       if (task.id === id) {
  //         return { ...task, id: !task.id };
  //       } else {
  //         return task;
  //       }
  //     })
  //   );
  // };

  return (
    <div className="App">
      <header className="Task-header">
        <h2>Tasks</h2>
        <TaskList
          taskData={taskData}
          onTaskComplete={toggleComplete}
          onTaskDelete={toggleDelete}
        />
      </header>
    </div>
  );
}

export default App;
