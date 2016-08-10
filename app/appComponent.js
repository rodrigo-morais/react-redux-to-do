import React from 'react'
import { addTodo } from './actions'


const App = ({ store }) => {
  return (
    <div>
      <input id="task"/>
      <button
        onClick={() =>{
          store.dispatch(
            addTodo(
              store.getState().todos.length + 1,
              document.getElementById('task').value
            )
          )
          document.getElementById('task').value = ''
        }}
      >
        Add Todo
      </button>

      <ul>
        { store.getState().todos.map(
            todo => <li name='test' key={todo.index}>{todo.text}</li>
          )
        }
      </ul>

    </div>
  )
}

export default App
