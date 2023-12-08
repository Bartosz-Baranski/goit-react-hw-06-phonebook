import { createSlice } from '@reduxjs/toolkit';

import { saveContacts } from './actions';

const phonebookSlice = createSlice({
  name: 'contacts',
  initialState: { contacts: [], filter: { name: '', number: '' } },

  reducers: {
    addContact: {
      reducer: (state, action) => {
        state.contacts.push(action.payload);
      },
    },
    deleteContact: (state, action) => {
      const contactsAfterDelete = state.contacts.filter(
        contact => contact.id !== action.payload
      );
      state.contacts = contactsAfterDelete;
    },
    setFilter: (state, action) => {
      const { name, number } = action.payload;
      state.filter = { name, number };
    },
  },
  extraReducers: builder => {
    builder.addCase(saveContacts, state => {
      localStorage.setItem('contacts', JSON.stringify(state.contacts));
    });
  },
});

export const { addContact, deleteContact, setFilter } = phonebookSlice.actions;
export default phonebookSlice.reducer;
