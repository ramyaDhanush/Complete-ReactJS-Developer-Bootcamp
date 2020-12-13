import React, { useReducer } from 'react'
import{ Container }from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import { TodoContext } from "./context/TodoContext";
import todoReducer from './context/reducer'
import TodoForm from './components/TodoForm';
import Todos from './components/Todos';

function App() {
  const [todos, dispatch] = useReducer(todoReducer, []);
  return (
    <TodoContext.Provider value={{todos,dispatch}}>
      <Container fluid>
        <h1>Todo App With Context API</h1>
        <Todos/>
        <TodoForm/>
      </Container>

    </TodoContext.Provider>
  );
}

export default App;
