import './styles.css';
import createStore from './create-store';

const reducer = (st, act) => {
    // const state = state;
    if (act === 'add') {
        state.counter = ++st.counter;
    } else if (act === 'sub') {
        state.counter == --st.counter;
    }
    return state;
};

const store = createStore(reducer, {counter: 0});

store.subscribe(render);

const counter = document.getElementById('counter');
const addBtn = document.getElementById('add');
const subBtn = document.getElementById('sub');
const asyncBtn = document.getElementById('async');

addBtn.addEventListener('click', () => {
    store.dispatch('add');
});

subBtn.addEventListener('click', () => {
    store.dispatch('sub');
});

const render = () => {
    counter.innerText = store.getState().counter;
}
