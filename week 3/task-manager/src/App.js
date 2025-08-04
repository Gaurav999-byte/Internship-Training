import React, { useState } from "react";

// Single Task Component
function Task({ task, onToggle }) {
  return (
    <div
      style={{
        margin: "10px 0",
        padding: "10px",
        border: "1px solid #ccc",
        backgroundColor: task.completed ? "#d4edda" : "#fff",
        textDecoration: task.completed ? "line-through" : "none",
        cursor: "pointer"
      }}
      onClick={() => onToggle(task.id)}
    >
      {task.text}
    </div>
  );
}

// Main Task Manager Component
function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  // Add Task Handler
  const addTask = () => {
    if (!input.trim()) return;
    const newTask = {
      id: Date.now(),
      text: input,
      completed: false
    };
    setTasks([...tasks, newTask]);
    setInput("");
  };

  // Toggle Complete Handler
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  return (
    <div style={{ maxWidth: "400px", margin: "40px auto", padding: "20px" }}>
      <h2>Task Manager</h2>
      <input
        type="text"
        placeholder="Add a task"
        value={input}
        style={{ width: "70%", padding: "8px" }}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        onClick={addTask}
        style={{ padding: "8px 12px", marginLeft: "10px" }}
      >
        Add
      </button>
      <div style={{ marginTop: "20px" }}>
        {tasks.length === 0 ? (
          <p>No tasks yet!</p>
        ) : (
          tasks.map((task) => (
            <Task key={task.id} task={task} onToggle={toggleTask} />
          ))
        )}
      </div>
    </div>
  );
}

export default App;
