import type { RootState } from '../../store'

export const getContacts = (state: RootState) => state.contacts.data || []
export const getContactsLoading = (state: RootState) => state.contacts.loading