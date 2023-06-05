import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: "contacts",
    storage,
};

const contactsInitualState = {
    contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
};

const contactsSlice = createSlice({
    name: "contacts",
    initialState: contactsInitualState,
    reducers: {
        deleteContact
            (state, { payload }) {
            state.contacts = state.contacts.filter(
                contact => contact.id !== payload
            );
        },

        addContact
            (state, { payload }) {
            state.contacts.push(payload);
        },
    },
});

export const { deleteContact, addContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
export const persistContactsReducer = persistReducer(
    persistConfig,
    contactsReducer
);