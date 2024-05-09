import React, { useEffect, useMemo } from 'react'
import { SafeAreaView, SectionList } from 'react-native'

import { useAppDispatch, useAppSelector } from '../../store'
import { ContactActions, ContactSelectors } from '../../store/contacts'
import { SectionHeader, SectionCard, SectionSeparator } from './components'
import styles from './ContactList.style'

const ContactList = () => {
  const dispatch = useAppDispatch()
  const contacts = useAppSelector(ContactSelectors.getSortedContacts)

  useEffect(() => {
    dispatch(ContactActions.shouldFetchContacts())
  }, [dispatch])

  const sectionContacts = useMemo(() => ([
    {
      title: 'Favorite Contacts',
      data: contacts.filter(({ isFavorite }) => isFavorite),
    },
    {
      title: 'Other Contacts',
      data: contacts.filter(({ isFavorite }) => !isFavorite),
    },
  ]), [contacts]);

  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={sectionContacts}
        keyExtractor={({ id }) => id}
        stickySectionHeadersEnabled
        ItemSeparatorComponent={() => <SectionSeparator />}
        renderItem={({ item }) => <SectionCard item={item} />}
        renderSectionHeader={(args) => <SectionHeader {...args} />}
      />
    </SafeAreaView>
  )
}

export default ContactList