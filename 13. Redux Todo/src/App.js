import React from "react";
import {
  Container,
  } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoForm from "./components/TodoForm";
import Todo from "./components/Todos";

import { Provider } from "react-redux";
import store from "./store";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Container fluid>
        <Todo/>
        <TodoForm/>
      </Container>
    </Provider>
  );
}

export default App;
