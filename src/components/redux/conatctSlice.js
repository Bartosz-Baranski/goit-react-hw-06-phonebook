import { nanoid } from 'nanoid';
import { createSlice } from '@reduxjs/toolkit';

import { contacts } from '../contactsData';

const phonebookSlice = createSlice({
  name: 'contacts',
  initialState: [contacts],
  reducers: {
    addContact: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: (name, number) => {
        return {
          payload: { name, number, id: nanoid() },
        };
      },
    },
    deleteContact: (state, action) => {},
  },
});

export const { addContact, deleteContact } = phonebookSlice.actions;
export default phonebookSlice.reducer;
