import React from "react";
import "./App.css";
import TaskList from "./components/TaskList";
import Timer from "./components/Timer";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Background from "./components/Backgrounds";
import NewTaskForm from "./components/NewTaskForm";
import { getTokenFromUrl, loginUrl } from "./components/Spotify";
import SpotifyWebApi from "spotify-web-api-js";

const spotify = new SpotifyWebApi();
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
  const [spotifyToken, setSpotifyToken] = useState("");

  useEffect(() => {
    console.log("This is what we derived from the URL: ", getTokenFromUrl());
    // this is our spotify toker
    const _spotifyToken = getTokenFromUrl().access_token;

    // we dont want our token in the URI
    window.location.hash = "";
    console.log("This is our spotify token: ", _spotifyToken);

    if (_spotifyToken) {
      setSpotifyToken(_spotifyToken);

      spotify.setAccessToken(_spotifyToken);

      spotify.getMe().then((user) => {
        console.log("this is you: ", user);
      });
    }
  });

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

  return (
    <div className="App">
      <h1 className="app-name">Timely Focus</h1>

      <div className="back-buttons">
        <Background updateBackground={updateBackground} />
      </div>
      <a href={loginUrl} id="signInButton">
        Sign in with spotify!
      </a>
      <header className="Task-container">
        <h2>To-do List</h2>
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
