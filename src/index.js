import './styles.css';
import createStore from './create-store';
import rootReducer from './redux/rootReducer';

const counter = document.getElementById('counter');
const addBtn = document.getElementById('add');
const subBtn = document.getElementById('sub');
const asyncBtn = document.getElementById('async');

const store = createStore(rootReducer, 0);

/* Subscribers - start */
const render = () => {
   counter.innerText = store.getState();
};
const print = () => {
   console.log(store.getState());
}
/* Subscribers - end */

store.subscribe(render);
store.subscribe(print);

// Init App (first rendering)
store.dispatch('INIT_APPLICATION');

addBtn.addEventListener('click', () => {
    store.dispatch({ type: 'ADD' });
});

subBtn.addEventListener('click', () => {
    store.dispatch({ type: 'SUB' });
});
