import * as appTodo from './app'

document.getElementById('add').addEventListener('click', () => {
  const text = document.getElementById('text').value

  appTodo.boundAddTodo(text)
  refresh()
})

document.getElementById('SHOW_ALL').addEventListener('click', (event) => {
  removeLinkDecoration()
  event.target.style.textDecoration = 'underline'
  refresh()
})

document.getElementById('SHOW_COMPLETED').addEventListener('click', (event) => {
  removeLinkDecoration()
  event.target.style.textDecoration = 'underline'
  refresh(appTodo.getCompleted())
})

document.getElementById('SHOW_ACTIVED').addEventListener('click', (event) => {
  removeLinkDecoration()
  event.target.style.textDecoration = 'underline'
  refresh(appTodo.getActived())
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

const refresh = (todos) => {
  const data = todos || appTodo.store.getState().todos

  document.getElementById('todos').innerHTML = ''
  
  document.getElementById('todos').innerHTML = data
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

const removeLinkDecoration = () => Array.from(document.getElementsByName('visibility')).forEach((link) => link.style.textDecoration = 'none')