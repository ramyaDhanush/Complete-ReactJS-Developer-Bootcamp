import React from "react";
import {
  Container,
  } from "reactstrap";
import ".bootstrap/dist/css/bootstrap.min.css";
import TodoForm from "./components/TodoForm";
import Todo from "./components/Todo";

import { Provider } from "react-redux";

import "./App.css";

function App() {
  return (
    <Provider>
      <Container>
        <Todo/>
        <TodoForm/>
      </Container>
    </Provider>
  );
}

export default App;
