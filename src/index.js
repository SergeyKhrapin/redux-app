import './styles.css';

// Custom Redux
import c_createStore from './create-store';
import c_rootReducer from './redux/rootReducer';

// Original Redux
import { createStore } from 'redux';

(function implementCustomRedux() {
   const counter = document.getElementById('c_counter');
   const addBtn = document.getElementById('c_add');
   const subBtn = document.getElementById('c_sub');
   const asyncBtn = document.getElementById('c_async');

   const store = c_createStore(c_rootReducer, 0);
   console.log(store);

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
})();

(function implementOriginalRedux() {
   const counter = document.getElementById('counter');
   const addBtn = document.getElementById('add');
   const subBtn = document.getElementById('sub');
   const asyncBtn = document.getElementById('async');

   function reducer(state = 0, action) {
      switch (action.type) {
         case 'INCREMENT':
            return state + 1
         case 'DECREMENT':
            return state - 1
         default:
            return state
      }
   }

   const store = createStore(reducer);
   console.log(store);

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
   store.dispatch({ type: 'INIT_APPLICATION' });

   addBtn.addEventListener('click', () => {
      store.dispatch({ type: 'INCREMENT' });
   });

   subBtn.addEventListener('click', () => {
      store.dispatch({ type: 'DECREMENT' });
   });
})();
