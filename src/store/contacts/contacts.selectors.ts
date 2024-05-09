import { createSelector } from '@reduxjs/toolkit'
import type { RootState } from '../../store'

const getContacts = (state: RootState) => state.contacts.contacts
export const getSortedContacts = createSelector(
  getContacts,
  contacts => [...contacts].sort((a, b) => a.name.localeCompare(b.name)),
)
export const getContactsLoading = (state: RootState) => state.contacts.loading
