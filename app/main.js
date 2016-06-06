import * as appTodo from './app'

document.getElementById('add').addEventListener('click', () => {
  const text = document.getElementById('text').value

  appTodo.boundAddTodo(text)
  refresh()
});

const refresh = () => {
  document.getElementById('todos').innerHTML = ''
  
  document.getElementById('todos').innerHTML = appTodo.store.getState().todos
                                                .map((todo) => `<li id=${todo.index}>${todo.text}</li>`)
                                                .toString()
                                                .replace(/,/g, '')
}