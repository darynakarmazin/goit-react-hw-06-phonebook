import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsInitialState = [];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addedContact: {
      reducer(state, action) {
        return [...state, action.payload];
      },
      prepare(name, number) {
        return {
          payload: {
            name,
            number,
            id: nanoid(),
          },
        };
      },
    },
    deletedContact(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addedContact, deletedContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
