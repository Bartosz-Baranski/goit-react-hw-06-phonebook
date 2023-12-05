import { createSlice } from '@reduxjs/toolkit';

import { saveContacts } from './actions';

const phonebookSlice = createSlice({
  name: 'contacts',
  initialState: { contacts: [], filter: '' },

  reducers: {
    addContact: {
      reducer: (state, action) => {
        state.contacts.push(action.payload);
      },
    },
    deleteContact: (state, action) => {
      const contactsAfterDelete = state.contacts.filter(
        contacts => contacts.id !== action.payload
      );
      state.contacts = contactsAfterDelete;
    },
    // setFilter: (state, action) => {
    //   const filterContact = () =>
    //     state.contacts.filter(
    //       contacts => contacts.name || contacts.number === action.payload
    //     );
    //   return filterContact([state.contacts.filter]);
    // },
  },
  extraReducers: builder => {
    builder.addCase(saveContacts, state => {
      localStorage.setItem('contacts', JSON.stringify(state.contacts));
    });
  },
});

export const { addContact, deleteContact, setFilter } = phonebookSlice.actions;
export default phonebookSlice.reducer;
