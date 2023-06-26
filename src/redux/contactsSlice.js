import { createSlice } from '@reduxjs/toolkit';

const contactsInitialState = [];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addedContact: {
      reducer(state, action) {
        return [...state, action.payload];
      },
    },
    deletedContact(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addedContact, deletedContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
