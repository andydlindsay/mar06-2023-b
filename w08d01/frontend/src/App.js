import './App.css';
// import TodoListItem from './components/TodoListItem';
import TodoList from './components/TodoList';

import {useState, useEffect} from 'react';
import axios from 'axios';

// const initialTodos = [
//   {
//     id: 'abc',
//     task: 'clean the car',
//     completed: true
//   },
//   {
//     id: 'jkl',
//     task: 'water plants',
//     completed: false
//   },
// ];

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get('/todos')
      .then((response) => {
        setTodos(response.data);
      });
  }, []);

  return (
    <div className="App">
      <h2>Todo List App</h2>
      {/* <TodoListItem task="wash the dishes" id="ghi" completed={false} /> */}
      <TodoList todos={todos} />
    </div>
  );
};

export default App;
