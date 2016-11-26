import React from 'react'
import ReactDOM from 'react-dom'
import * as appTodo from './app'
import App from './appComponent'

const render = () => ReactDOM.render(<App store = { appTodo.store } />, document.getElementById('app'))

appTodo.store.subscribe(render)
render()
