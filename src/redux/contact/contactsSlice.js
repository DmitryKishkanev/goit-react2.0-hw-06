import { createSlice } from '@reduxjs/toolkit';
import { initialState } from '@/redux/initialState';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState.contacts,
  reducers: {},
});

// export const { increment, decrement, incrementByAmount } =
//   contactsSlice.actions;
export default contactsSlice.reducer;
