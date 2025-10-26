import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from "uuid";
import "../css/navbar.css";
import "../css/task-list.css";

// Task List Component
function TaskList() {
  // State Variables
  const [value, setValue] = useState("");
  const [tasks, setTasks] = useState([]);

  // Add Task
  const addTask = (task) => {
    // Prevents adding empty tasks
    if (task.trim() === "") return;
    // Copies existing tasks and adds a new one
    setTasks([
      ...tasks,
      { id: uuidv4(), todo: task, completed: false, isEditing: false },
    ]);
    // Clears the input box
    setValue("");
  };

  // Completed Task
  const toggleComplete = (id) => {
    // Create a new updated task
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Delete Task
  const deleteTask = (id) => {
    // Keeps all tasks except the one with the matching id
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Edit Task
  const editTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isEditing: !task.isEditing } : task
      )
    );
  };

  // Update Task
  const updateTask = (id, newText) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, todo: newText, isEditing: false } : task
      )
    );
  };

  // Prevent Default Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(value);
  };

  return (
    <>
      {/* Displays the title section */}
      <div className="TaskList--container">
        <h1>Task List & Details</h1>
      </div>

      {/* Displays the input form */}
      <div className="TaskList-Wrapper">
        <form className="TaskList-Form" onSubmit={handleSubmit}>
          <input
            className="TaskList--Input"
            placeholder="What do we need to get done today?"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button type="submit" className="submit-btn">
            Add Task
          </button>
        </form>

        {/* Loops over all tasks */}
        <ul className="task-items">
          {tasks.map((task) => (
            <li key={task.id}>
              {/* If editing, show edit form */}
              {task.isEditing ? (
                <form
                  id="TaskList-Update-Form"
                  onSubmit={(e) => {
                    e.preventDefault();
                    updateTask(task.id, e.target.elements.updatedValue.value);
                  }}
                >
                  <input
                    type="text"
                    name="updatedValue"
                    defaultValue={task.todo}
                    className="TaskList--Input"
                  />
                  <button type="submit" className="submit-btn" id="update-btn">
                    Update
                  </button>
                </form>
              ) : (
                /* Otherwise show the task text */
                <>
                  <p
                    onClick={() => toggleComplete(task.id)}
                    className={task.completed ? "completed" : ""}
                  >
                    {task.todo}
                  </p>
                  <div>
                    {/*/ Pencil icon opens edit mode */}
                    <FontAwesomeIcon
                      icon={faPenToSquare}
                      onClick={() => editTask(task.id)}
                    />
                    {/*/ Trash icon deletes the task */}
                    <FontAwesomeIcon
                      icon={faTrash}
                      onClick={() => deleteTask(task.id)}
                    />
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

// Makes this component available for use in other files
export default TaskList;
