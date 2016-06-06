import { ADD_TODO } from './actions'
import { createStore } from '../node_modules/redux/dist/redux'

const initialState = {
  todos: []
}

const todo = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {...state,
        todos: [
          ...state.todos,
          {
            text: action.text
          }
        ]
      }
    default:
      return state
  }
}

const store = createStore(todo)

export default store