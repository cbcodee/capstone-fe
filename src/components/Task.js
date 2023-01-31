import PropTypes from "prop-types";
// import React from "react";
import "./Task.css";

const Task = (props) => {
  // const [taskComplete, setTaskComplete] = useState(props.isComplete);
  // const buttonClass = taskComplete ? "tasks__item__toggle--completed" : "";

  // // helper function to update our task
  // const toggleComplete = () => {
  //   setTaskComplete((taskComplete) => !taskComplete);
  // };

  return (
    <div>
      <ul>
        <li className="tasks__item">
          <button
            className={"tasks__item__toggle"}
            onClick={() => props.onTaskComplete(props.id)}
          >
            {props.title}
          </button>
          <button
            className="tasks__item__remove button"
            onClick={() => props.onTaskDelete(props.id)}
          >
            x
          </button>
        </li>
      </ul>
    </div>
  );
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
  // onTaskComplete: PropTypes.func.isRequired,
};

export default Task;
