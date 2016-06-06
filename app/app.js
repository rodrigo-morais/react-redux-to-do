import { addTodo, removeTodo, ADD_TODO, REMOVE_TODO } from './actions'
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
            text: action.text,
            index: action.index
          }
        ]
      }
    case REMOVE_TODO:
      return {...state,
        todos: state.todos.filter((todo) => todo.index !== action.index)
      }
    default:
      return state
  }
}

export const store = createStore(todo)

export const boundAddTodo = (text) => store.dispatch(addTodo( store.getState().todos.length + 1, text))
export const boundRemoveTodo = (index) => store.dispatch(removeTodo(index))