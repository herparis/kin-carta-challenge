import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import createAppAsyncThunk from '../createAppAsyncThunk'
import { ContactAPI } from '../../client'
import type { RootContactObject } from '../../client/contactApi'

interface ContactsState {
  contacts: RootContactObject[]
  loading: boolean
}

const shouldFetchContacts = createAppAsyncThunk<RootContactObject[], undefined>(
  'contacts/fetchContacts',
  async () => await ContactAPI.fetchContacts()
)

const initialState: ContactsState = {
  contacts: [],
  loading: false
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    shouldToggleFavorites: (state, action: PayloadAction<string>) => {
      state.contacts = state.contacts.map(contact =>
        contact.id === action.payload ? { ...contact, isFavorite: !contact.isFavorite } : contact
      )
    }
  },
  extraReducers(builder) {
    builder.addCase(shouldFetchContacts.fulfilled, (state, action) => {
      state.loading = false
      state.contacts = action.payload
    })
    builder.addCase(shouldFetchContacts.rejected, (state) => {
      state.loading = false
    })
    builder.addCase(shouldFetchContacts.pending, (state) => {
      state.loading = true
    })
  },
})

export const ContactActions = {
  ...contactsSlice.actions,
  shouldFetchContacts,
}

export const ContactReducer = contactsSlice.reducer
