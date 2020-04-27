import { ADD_COUNT, SUB_COUNT } from './actionTypes'

function rootReducer(state, action) {
   if (action.type === ADD_COUNT) {
       state++
   } else if (action.type === SUB_COUNT) {
       state--
   }
   return state
};

export default rootReducer
