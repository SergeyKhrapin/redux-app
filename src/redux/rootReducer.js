function rootReducer(state, action) {
   if (action.type === 'ADD') {
       state++;
   } else if (action.type === 'SUB') {
       state--;
   }
   return state;
};

export default rootReducer;
