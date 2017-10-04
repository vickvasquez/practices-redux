import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../../actions/'
import s from './addTodo.css'

let AddTodo = ({ dispatch }) => {
    let input

    function addTask(e) {

        e.preventDefault()

        if(!input.value.trim())
            return

        dispatch(addTodo(input.value))
        input.value=''

    }

    return (
        
          <form onSubmit={addTask} className={s.containerTodoInput} >
              <input
                ref={node => {
                  input = node
                }}
                className={s.newTodo}
                type="text"
                placeholder="¿Que estas haciendo?"
              />
          </form>
    )
}



AddTodo = connect()(AddTodo)

export default AddTodo