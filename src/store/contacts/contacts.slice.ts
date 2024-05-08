import { createSlice } from '@reduxjs/toolkit'

import createAppAsyncThunk from '../createAppAsyncThunk'
import { ContactAPI } from '../../client'
import type { RootContactObject } from '../../client/contactApi'

// Define a type for the slice state
interface ContactsState {
  data: RootContactObject[] | null
  loading: boolean
}

const shouldFetchContacts = createAppAsyncThunk<RootContactObject[], undefined>(
  'contacts/fetchContacts',
  async () => await ContactAPI.fetchContacts()
)

// Define the initial state using that type
const initialState: ContactsState = {
  data: null,
  loading: false
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(shouldFetchContacts.fulfilled, (state, action) => {
      state.loading = false
      state.data = action.payload
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
