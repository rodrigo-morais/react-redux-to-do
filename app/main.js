import * as appTodo from './app'

document.getElementById('add').addEventListener('click', () => {
  const text = document.getElementById('text').value

  appTodo.boundAddTodo(text)
  refresh()
})

const deleteTodo = (event) => {
  const index = parseInt(event.target.id)
  appTodo.boundRemoveTodo(index)
  refresh()
}

const refresh = () => {
  document.getElementById('todos').innerHTML = ''
  
  document.getElementById('todos').innerHTML = appTodo.store.getState().todos
                                                .map((todo) => `<li id=${todo.index}>${todo.text} <button id=${todo.index}>delete</button></li>`)
                                                .toString()
                                                .replace(/,/g, '')

  const lis = Array.from(document.querySelectorAll('li'))
  lis.forEach((elem) => {
    elem.addEventListener('click', deleteTodo)
  })
}