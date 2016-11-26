import { VisibilityFilters, addTodo, removeTodo, toggleTodo, setVisibilityFilter } from './actions'
import reducers from './reducers'
import { createStore } from '../node_modules/redux/dist/redux'
import { saveState, loadState } from './localStorage'

const { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVED } = VisibilityFilters
console.log('f', loadState())
export const store = createStore(reducers, loadState())

store.subscribe(() => {
  saveState({
    todos: store.getState().todos
  })
})

export const boundAddTodo = (text) => store.dispatch(addTodo( store.getState().todos.length + 1, text))
export const boundRemoveTodo = (index) => store.dispatch(removeTodo(index))
export const boundToggleTodo = (index) => store.dispatch(toggleTodo(index))
export const boundSetVisibilityFilter = (filter) => store.dispatch(setVisibilityFilter(filter))

export const getCompleted = () => store.getState().todos.filter((todo) => todo.completed)
export const getActived = () => store.getState().todos.filter((todo) => !todo.completed)
