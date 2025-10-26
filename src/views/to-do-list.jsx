import React from "react";
import { useState } from "react";
import "../css/navbar.css";
import "../css/to-do-list.css";

// To-do List Component
function TodoList() {
  // State to hold the list of tasks and the new task input
  const [value, setValue] = useState([]);
  const [newValue, setNewValue] = useState("");

  // Handle form submission to add a new task
  function handleSubmit(e) {
    e.preventDefault();
    addTask();
  }

  // Function to add a new task to the list
  function addTask() {
    // Checks if the input isn’t empty
    if (newValue.trim() !== "") {
      setValue((v) => [...v, newValue]);
      setNewValue("");
    }
  }
  // Function to delete a task from the list
  function deleteTask(index) {
    // Creates a new array without the deleted task
    const updatedTasks = value.filter((_, i) => i !== index);
    setValue(updatedTasks);
  }
  return (
    <>
      <div className="To-do-list--container">
        {/* Header Section */}
        <h1>To Do List</h1>
      </div>
      {/* Input Form */}
      <form className="To-do-list--form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={newValue}
          placeholder="Enter a new task"
          onChange={(e) => setNewValue(e.target.value)}
        />
        {/* Add Button */}
        <button type="submit" className="add-btn" onClick={addTask}>
          Add Task
        </button>
      </form>
      <ul className="items-container">
        {/* Loops over the value array to display each task */}
        {value.map((item, index) => (
          <li key={index}>
            <span className="task-item">{item}</span>
            <button className="delete-btn" onClick={() => deleteTask(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

// Makes this component available for use in other files
export default TodoList;
