import React from "react";
import "./App.css";
import Task from "./components/Task";
import TaskList from "./components/TaskList";
import Timer from "./components/Timer";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Background from "./components/Backgrounds";
import NewTaskForm from "./components/NewTaskForm";

const kBaseUrl = "http://localhost:5000";

const convertFromApi = (task) => {
  const { id, is_complete: isComplete, title } = task;

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
  const endpoint = markComplete ? "mark-complete" : "mark-incomplete";

  return axios
    .patch(`${kBaseUrl}/tasks/${id}/${endpoint}`)
    .then((response) => {
      return convertFromApi(response.data);
    })
    .catch((error) => {
      console.log(error);
      throw new Error(`error updating task ${id}`);
    });
};

const deleteTaskAsync = (id) => {
  return axios
    .delete(`${kBaseUrl}/tasks/${id}`)

    .catch((error) => {
      console.log(error);
    });
};

const addNewTaskAsync = (title) => {
  const currentTaskData = {
    title,
  };
  return axios
    .post(`${kBaseUrl}/tasks`, currentTaskData)
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
  // const [mode, setMode] = useState(modes.pomodoro);

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

  const updateTask = (id) => {
    const task = taskData.find((task) => task.id === id);
    if (!task) {
      return Promise.resolve();
    }
    return updateTaskAsync(id, !task.isComplete)
      .then((newTask) => {
        setTaskData((oldTasks) => {
          return oldTasks.map((task) => {
            if (task.id === newTask.id) {
              return newTask;
            } else {
              return task;
            }
          });
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const deleteTask = (id) => {
    return deleteTaskAsync(id)
      .then(() => {
        setTaskData((oldTasks) => {
          // return the new value for the tasks state
          return oldTasks.filter((task) => task.id !== id);
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleTaskSubmit = (data) => {
    addNewTaskAsync(data)
      .then((newTask) => {
        setTaskData([...taskData, newTask]);
      })
      .catch((e) => console.log(e));
  };

  const updateBackground = (image) => {
    setBackground(image);
    console.log(image);
  };

  // const updateTimer = (mode) => {
  //   setMode(mode);
  // };

  return (
    <div className="App">
      <div className="back-buttons">
        <Background updateBackground={updateBackground} />
      </div>
      <h1>Spotify React</h1>
      <header className="Task-container">
        <h2>Tasks</h2>
        <TaskList
          taskData={taskData}
          onToggleCompleteCallback={updateTask}
          onDeleteCallback={deleteTask}
        />
        <NewTaskForm handleTaskSubmit={handleTaskSubmit} />
      </header>

      <Timer Background={backgroundImage} />
    </div>
  );
};

export default App;
