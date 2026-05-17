import { configureStore } from '@reduxjs/toolkit';
import { contactsSlice } from './contact/contactsSlice';
import { filtersSlice } from './filter/filterSlice';
import { authSlice } from './auth/authSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsSlice.reducer,
    filters: filtersSlice.reducer,
    auth: authSlice.reducer,
  },
});
