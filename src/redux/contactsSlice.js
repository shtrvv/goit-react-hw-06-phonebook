import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = {
    contacts: [],
}

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        addContact: {
            prepare: (data) => {
                const newContact = {
                    ...data,
                    id: nanoid(),
                }
                return { payload: newContact}
            },
            reducer: (state, { payload }) => {
                state.contacts.push(payload)
            },
        },
        removeContact: (state, { payload }) => {
            state.contacts = state.contacts.filter(contact => contact.id !== payload)
        },
    },
})

export const contactsReducer = contactsSlice.reducer;
export const { addContact, removeContact } = contactsSlice.actions;