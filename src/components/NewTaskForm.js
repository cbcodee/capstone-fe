import React, { useState } from "react";
import PropTypes from "prop-types";
import "./NewTaskForm.css";

const NewTaskForm = ({ addTaskCallback }) => {
  const [taskData, setTaskData] = useState({
    title: "",
  });

  const submitTaskData = (e) => {
    e.preventDefault();

    addTaskCallback(taskData);
    setTaskData({ title: "" });
  };

  const handleChange = (e) => {
    setTaskData({ ...taskData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={submitTaskData}>
      <section>
        <div className="new__task__fields">
          <label htmlFor="name">Add new task</label>
          <input
            name="title"
            id="title"
            value={taskData.title}
            onChange={handleChange}
            className={
              taskData.title.length === 0 ? "invalid__form__input" : ""
            }
          />
          {/* <label htmlFor="name">Your Name</label>
          <input
          name="owner"
          id="owner"
          value={taskData.owner}
          onChange={handleChange}
          className={taskData.owner.length === 0 ? "invalid__form__input" : ""}
          />
          <p className="required">* required</p>
          <p>
            Preview: {taskData.title} - {taskData.owner}
           </p> */}
          <button
            className="submit__button"
            type="submit"
            disabled={
              taskData.title.length === 0 || taskData.owner.length === 0
            }
          >
            Submit
          </button>
        </div>
      </section>
    </form>
  );
};

NewTaskForm.propTypes = {
  addTaskCallback: PropTypes.func.isRequired,
};

export default NewTaskForm;

// const kDefaultFormState = {
//   title: "",
// };

// const NewTaskForm = ({ handleTaskSubmit }) => {
//   const [formData, setFormData] = useState(kDefaultFormState);

//   const handleChange = (event) => {
//     const fieldValue = event.target.value;
//     const fieldName = event.target.name;
//     const newFormData = { ...formData, [fieldName]: fieldValue };

//     setFormData(newFormData);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     handleTaskSubmit(formData);
//     setFormData(kDefaultFormState);
//   };
//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="title">Task Title: </label>
//         <input
//           type="text"
//           id="title"
//           name="title"
//           value={formData.title}
//           onChange={handleChange}
//         />
//       </div>
//       {/* <div>
//         <label htmlFor="description">Task Description: </label>
//         <input
//           type="text"
//           id="description"
//           name="description"
//           value={formData.description}
//           onChange={handleChange}
//         />
//       </div> */}
//       <div>
//         <input type="submit" value="Add a Task" />
//       </div>
//     </form>
//   );
// };

// export default NewTaskForm;
// console.log("new");
// NewTaskForm.propTypes = {
//   handleTaskSubmit: PropTypes.func.isRequired,
// };
