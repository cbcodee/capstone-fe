import React from "react";
import Task from "./Task";
import PropTypes from "prop-types";
import "./TaskList.css";

const TaskList = ({ taskData, onToggleCompleteCallback, onDeleteCallback }) => {
  const getTaskListJSX = (taskData) => {
    return taskData.map((task) => {
      return (
        <Task
          key={task.id}
          id={task.id}
          title={task.title}
          isComplete={task.isComplete}
          onToggleCompleteCallback={onToggleCompleteCallback}
          onDeleteCallback={onDeleteCallback}
        />
      );
    });
  };

  if (!taskData.length) {
    return <div>All done!</div>;
  }

  return <ul className="tasks__list no-bullet">{getTaskListJSX(taskData)}</ul>;
};

TaskList.propTypes = {
  taskData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      isComplete: PropTypes.bool,
    }).isRequired
  ),
  onToggleCompleteCallback: PropTypes.func.isRequired,
  onDeleteCallback: PropTypes.func.isRequired,
};

export default TaskList;
