import { createSlice } from '@reduxjs/toolkit';
import { initialState } from '@/redux/initialState';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState.contacts,
  reducers: {
    addContact(state, action) {
      // Добавляем контакт в конец списка
      // state.items.push(action.payload);

      // Добавляем контакт в начало списка
      state.items.unshift(action.payload);
    },
    deleteContact(state, action) {
      state.items = state.items.filter(
        contact => contact.id !== action.payload,
      );
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
