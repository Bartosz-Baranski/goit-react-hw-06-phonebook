import { createSlice } from '@reduxjs/toolkit';

import { contactsData } from '../contactsData';

const phonebookSlice = createSlice({
  name: 'contacts',
  initialState: { contacts: [...contactsData], filter: '' },

  reducers: {
    addContact: {
      reducer: (state, action) => {
        state.contacts.push(action.payload);
      },
    },
    deleteContact: (state, action) => {
      // return state.filter(contacts => contacts.id !== action.payload);
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addContact, deleteContact, setFilter } = phonebookSlice.actions;
export default phonebookSlice.reducer;
