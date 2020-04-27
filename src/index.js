import './styles.css'
import { createStore } from 'redux'
import rootReducer from './redux/rootReducer'
import { INIT_APP, ADD_COUNT, SUB_COUNT } from './redux/actionTypes'
import createAction from './redux/actionCreator'

const counter = document.getElementById('counter')
const addBtn = document.getElementById('add')
const subBtn = document.getElementById('sub')
const asyncBtn = document.getElementById('async')

const store = createStore(rootReducer, 0)
console.log(store)

/* Subscribers - start */
const render = () => {
    counter.innerText = store.getState()
}
const print = () => {
    console.log(store.getState())
}
/* Subscribers - end */

store.subscribe(render)
store.subscribe(print)

// Init App (first rendering)
store.dispatch(createAction(INIT_APP))

addBtn.addEventListener('click', () => {
    store.dispatch(createAction(ADD_COUNT))
})

subBtn.addEventListener('click', () => {
    store.dispatch(createAction(SUB_COUNT))
})
