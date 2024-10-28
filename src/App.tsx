import React, { useState } from 'react'
import Todo from './models/todoModel'
import Add from './components/Add'
import List from './components/List'

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([])
  return (
    <div className='app'>
      <Add setTodos = {setTodos}/>
      <List todos={todos} setTodos={setTodos}/>
    </div>
    
  )
}
