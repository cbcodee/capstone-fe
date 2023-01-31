import React from "react";
import "./App.css";
import Task from "./components/Task";
import TaskList from "./components/TaskList";
import Timer from "./components/Timer";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Background from "./components/Backgrounds";

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

const kBaseUrl = "http://localhost:5000";

const convertFromApi = (apiTask) => {
  const { id, is_complete: isComplete, title } = apiTask;

  return { id, isComplete, title };
};

const getAllTasksAsync = () => {
  return axios
    .get(`${kBaseUrl}/tasks`)
    .then((response) => {
      return response.data.map(convertFromApi);
    })
    .catch((err) => {
      console.log(err);
    });
};

const updateTaskAsync = (id, markComplete) => {
  const endpoint = markComplete ? "mark_complete" : "mark_incomplete";

  return axios
    .patch(`${kBaseUrl}/tasks/${id}/${endpoint}`)
    .then((response) => {
      return convertFromApi(response.data.task);
    })
    .catch((error) => {
      console.log(error);
    });
};

const deleteTaskAsync = (id) => {
  return axios
    .delete(`${kBaseUrl}/tasks/${id}`)
    .then((response) => {
      return convertFromApi(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};

const App = () => {
  const [taskData, setTaskData] = useState([]);
  const [backgroundImage, setBackground] = useState(0);

  useEffect(() => {
    // data fetching code
    getAllTasks();
  }, []);

  const getAllTasks = () => {
    return getAllTasksAsync()
      .then((tasks) => {
        // console.log(tasks);
        setTaskData(tasks);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  // const toggleComplete = (id) => {
  //   setTaskData((taskData) =>
  //     taskData.map((task) => {
  //       if (task.id === id) {
  //         return { ...task, isComplete: !task.isComplete };
  //       } else {
  //         return task;
  //       }
  //     })
  //   );
  // };

  const toggleIsComplete = (id) => {
    return updateTaskAsync(id).then((taskResult) => {
      setTaskData((taskData) =>
        taskData.map((task) => {
          if (task.id === taskResult.id) {
            return taskResult;
          } else {
            return task;
          }
        })
      );
    });
  };

  const toggleDelete = (id) => {
    return deleteTaskAsync(id).then((taskResult) => {
      setTaskData((taskData) =>
        taskData.filter((task) => {
          return task.id !== taskResult.id;
        })
      );
    });
    // const newTasks = taskData.filter((task) => task.id !== id);
    // setTaskData(newTasks);
  };

  const updateBackground = (image) => {
    setBackground(image);
    console.log(image);
  };

  return (
    <div className="App">
      <header className="Task-container">
        <h2>Tasks</h2>
        <TaskList
          taskData={taskData}
          onTaskComplete={toggleIsComplete}
          onTaskDelete={toggleDelete}
        />
      </header>
      <Timer Background={backgroundImage} />
      <h2>Backgrounds </h2>
      <Background updateBackground={updateBackground} />
    </div>
  );
};

export default App;
