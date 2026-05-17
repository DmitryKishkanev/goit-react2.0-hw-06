import { createSlice } from '@reduxjs/toolkit';
import { initialState } from '@/redux/initialState';

export const filtersSlice = createSlice({
  name: 'filters',
  initialState: initialState.filters,
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload;
    },
  },
});

export const { changeFilter } = filtersSlice.actions;
