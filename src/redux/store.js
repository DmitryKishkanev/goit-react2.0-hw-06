import { configureStore } from '@reduxjs/toolkit';
// import { createAction, createReducer } from '@reduxjs/toolkit';
import contactsSlice from './contact/contactsSlice';
import { authSlice } from './auth/authSlice';

// const increment = createAction('myCounter/increment');
// const decrement = createAction('myCounter/decrement');

// const myReducer = createReducer(0, builder => {
//   builder
//     .addCase(increment, (state, action) => {
//       state + action.payload;
//     })
//     .addCase(decrement, (state, action) => {
//       state - action.payload;
//     });
// });

export const store = configureStore({
  reducer: {
    contacts: contactsSlice,
    auth: authSlice.reducer,
  },
});
