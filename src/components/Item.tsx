import React from 'react'
import Todo from '../models/todoModel'
import moment from 'moment';

interface Props{
    todo:Todo
    setTodos: (x: (todos: Todo[]) => Todo[]) => void;
}

export default function Item({todo ,setTodos}:Props) {
    const handleCompletedChage = (checked:boolean) => {
        setTodos(todos => {
          const copy = [...todos]
          const td = copy.find(currTodo => currTodo.id === todo.id)
          td!.completed = checked
          return copy
        })
      };

      const deleteTodo = (id:string) => {
        setTodos(todos => {
          const copy = [...todos]
          const td = copy.filter(currTodo => currTodo.id !== id)
          return td
        })
      };
    
  return (
    <div className='item'>
        <input type="checkbox" checked={todo.completed} onChange={e => handleCompletedChage(e. target.checked)} />
        <p style={{textDecoration:todo.completed? "line-through":"none"}}> {todo.title}</p>
        <p>{moment(todo.created_at).fromNow()}</p>
        <button onClick={()=>deleteTodo(todo.id)}> Delete</button>
    </div>
  )
}
