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

const toggleTodo = (event) => {
  const index = parseInt(event.currentTarget.id)
  appTodo.boundToggleTodo(index)
  refresh()
}

const refresh = () => {
  document.getElementById('todos').innerHTML = ''
  
  document.getElementById('todos').innerHTML = appTodo.store.getState().todos
                                                .map((todo) => {
                                                  const text = todo.completed ? 
                                                                    `<strike>${todo.text}</strike>` :
                                                                    todo.text
                                                  return `<li style="cursor: pointer" id=${todo.index}>
                                                    ${text}
                                                    <button id=${todo.index}>delete</button>
                                                  </li>`
                                                })
                                                .toString()
                                                .replace(/,/g, '')

  const lis = Array.from(document.querySelectorAll('li'))
  lis.forEach((elem) => {
    elem.addEventListener('click', toggleTodo, false)
    elem.querySelector('button').addEventListener('click', deleteTodo)
  })
}