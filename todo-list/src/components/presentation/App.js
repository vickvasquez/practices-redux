import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import s from './Todo.css'

const App = () => (
  <div className={s.todo}>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App