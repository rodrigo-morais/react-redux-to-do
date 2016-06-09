import { addTodo, removeTodo, toggleTodo, setVisibilityFilter, VisibilityFilters, ADD_TODO, REMOVE_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER } from './actions'
import { createStore, combineReducers } from '../node_modules/redux/dist/redux'

const { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVED } = VisibilityFilters

const visibilityFilter = (state = SHOW_ALL, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          index: action.index,
          completed: false
        }
      ]
    case REMOVE_TODO:
      return state.filter((todo) => todo.index !== action.index)
    case TOGGLE_TODO:
      return state
              .map(
                (todo) => todo.index === action.index ? {...todo, completed: !todo.completed } : todo
              )
    default:
      return state
  }
}

export const store = createStore(combineReducers({ visibilityFilter, todos }))

export const boundAddTodo = (text) => store.dispatch(addTodo( store.getState().todos.length + 1, text))
export const boundRemoveTodo = (index) => store.dispatch(removeTodo(index))
export const boundToggleTodo = (index) => store.dispatch(toggleTodo(index))
export const boundSetVisibilityFilter = (filter) => store.dispatch(setVisibilityFilter(filter))

export const getCompleted = () => store.getState().todos.filter((todo) => todo.completed)
export const getActived = () => store.getState().todos.filter((todo) => !todo.completed)