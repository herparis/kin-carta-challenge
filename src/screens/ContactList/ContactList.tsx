import { useEffect } from 'react'

import { useAppDispatch, useAppSelector } from '../../store'
import { ContactActions, ContactSelectors } from '../../store/contacts'

const ContactList = () => {
  const dispatch = useAppDispatch()
  const contacts = useAppSelector(ContactSelectors.getContacts)

  useEffect(() => {
    dispatch(ContactActions.shouldFetchContacts())
  }, [dispatch])

  return null
}

export default ContactList