import { createSlice } from '@reduxjs/toolkit';
import { contactsInitialState } from './initialState';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState.contacts,
  reducers: {},
});

// export const { increment, decrement, incrementByAmount } =
//   contactsSlice.actions;
export default contactsSlice.reducer;
