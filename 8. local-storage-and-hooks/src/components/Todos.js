import React from 'react'
import {ListGroup, 
        ListGroupItem} from 'reactstrap';
import {FaCheckDouble} from "react-icons/fa";

// Display all list - Array
// Marking as complete - New method

const Todos = ({todos, isComplete}) =>{
  return(
    <ListGroup className="mt-5 mb-2 items">
      {todos.map(todo =>(
        <ListGroupItem key={todo.id}>
          {todo.todoString}
          <span className="float-right"
          onClick={() => isComplete(todo.id)}><FaCheckDouble/></span>
        </ListGroupItem>
      ))}
    </ListGroup>
  )
}

export default Todos;