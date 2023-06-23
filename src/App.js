import './App.css';

import { useState, useEffect } from 'react'
import { BsTrash, BsBookmarkCheck, BsBookmarkCheckFill} from 'react-icons/bs'

const API = "http://localhost:5000";

function App() {

  const [title, setTitle] =  useState("");
  const [time, setTime] = useState("");
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {

  }


  return (
    <div className="App">
      <div className='header-todo'>
        <h1>React Todo</h1>
      </div>

      <div className='form-todo'>
        <h2>Insert your next task:</h2>
        <form onSubmit={handleSubmit}>
          <input type='submit' value='Send' />

        </form>
      </div>

      <div className='list-todo'>
        <h2>Task List:</h2>
        {todos.length === 0 && <p>There are no tasks!</p>}
      </div>

    


    </div>
  );
}

export default App;
