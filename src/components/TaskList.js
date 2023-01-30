import React from "react";
import Task from "./Task";
import PropTypes from "prop-types";
import "./TaskList.css";

const TaskList = (props) => {
  return (
    <>
      <ul>
        {props.taskData.map((task) => (
          <Task
            id={task.id}
            title={task.title}
            isComplete={task.isComplete}
            key={task.id}
            onTaskComplete={props.onTaskComplete}
            onTaskDelete={props.onTaskDelete}
          />
        ))}
      </ul>
    </>
  );
};

TaskList.propTypes = {
  taskData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      isComplete: PropTypes.bool,
      //       // onTaskComplete: PropTypes.func.isRequired,
    })
  ),
  onTaskComplete: PropTypes.func.isRequired,
  onTaskDelete: PropTypes.func.isRequired,
};

export default TaskList;
