import React from 'react'
import { ListGroup, ListGroupItem } from "reactstrap";
import { FaCalendarCheck } from "react-icons/fa";

import { connect } from "react-redux";
import { removeTodo } from "../action/todo";

const Todos = ({todos, markComplete}) => {
  return (
    <ListGroup className="mt-5 mb-2">
      {
        todos.map(todo=>(
          <ListGroupItem key={todo.id}>
            {todo.title}
            <span onClick={()=>markComplete(todo.id)} className="float-right"><FaCalendarCheck/></span>
          </ListGroupItem>
        ))
      }
    </ListGroup>
  )
}
const mapStateToProps = (state) => ({
  todos: state.todos
});

const mapDispatchToProps = (dispatch) => ({
  markComplete: (id) => {
    dispatch(removeTodo(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Todos);

//export default Todos;