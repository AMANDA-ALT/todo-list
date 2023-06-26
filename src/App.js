import "./App.css";

import { useState, useEffect } from "react";
import { BsTrash, BsBookmarkCheck, BsBookmarkCheckFill } from "react-icons/bs";

const API = "http://localhost:5000";

function App() {
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const todo = {
      id: Math.random(),
      title,
      time,
      done:false,
    };

    //Sent to API
    console.log(todo);

    setTitle("");
    setTime("");
    
  };

  return (
    <div className="App">
      <div className="header-todo">
        <h1>React Todo</h1>
      </div>

      <div className="form-todo">
        <h2>Insert your next task:</h2>
        <form onSubmit={handleSubmit}>
          
          <div className="form-control">
            <label htmlFor="title">What you gonna do?</label>
            <input
              type="text"
              name="title"
              placeholder="Title of the task"
              onChange={(e) => setTitle(e.target.value)}
              value={title || ""}
              required
              />
          </div>

          <div className="form-control">
            <label htmlFor="time">Duration:</label>
            <input
              type="title"
              name="time"
              placeholder="Estimated time (in hours)"
              onChange={(e) => setTime(e.target.value)}
              value={time || ""}
              required
              />
          </div>
          <input type="submit" value="Create Task" />
        </form>
      </div>

      <div className="list-todo">
        <h2>Task List:</h2>
        {todos.length === 0 && <p>There are no tasks!</p>}
      </div>
    </div>
  );
}

export default App;
