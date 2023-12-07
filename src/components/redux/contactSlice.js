import { createSlice } from '@reduxjs/toolkit';

import { saveContacts, setFilter } from './actions';

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
    //   const filterContact = state.contacts.filter(
    //     contacts => contacts.name || contacts.number === action.payload
    //   );
    //   state.contacts = filterContact;
    // },
  },
  extraReducers: builder => {
    builder.addCase(saveContacts, state => {
      localStorage.setItem('contacts', JSON.stringify(state.contacts));
    });
    // .addCase(
    //   (setFilter,
    //   (state, action) => {
    //     const filterContact = state.contacts.filter(
    //       contacts => contacts.name || contacts.number === action.payload
    //     );

    //     if (filterContact.length === 0) {
    //       return state.contacts;
    //     }
    //     return (state.contacts = filterContact);
    //   })
    // );
  },
});

export const { addContact, deleteContact } = phonebookSlice.actions;
export default phonebookSlice.reducer;
