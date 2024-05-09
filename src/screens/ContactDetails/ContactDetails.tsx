import React from 'react'
import { SafeAreaView, FlatList } from 'react-native'

import type { Address, Phone } from '../../client/contactApi'
import type { ScreenProps } from '../../navigation/RootStack'
import { ListSeparator, ListHeader, ListCard } from './components'
import styles from './ContactDetails.style'

const ContactDetails: React.FC<ScreenProps<'ContactDetails'>> = ({ route }) => {
  const { contact } = route.params
  
  type ListData = { title: string, value: string, description?: string }[]
  const contactDataNormalize = Object.entries(contact).reduce<ListData>((accum, [key, value]) => {
    switch(key as keyof typeof contact) {
      case 'address': {
        const { city, country, state, street, zipCode } = value as Address
        return [...accum, { title: key, value: `${street}\n${city}, ${state} ${zipCode}, ${country}` }]
      }
      case 'phone': {
        const normalizePhones = Object.entries(value as Phone).map(([description, value]) => ({
          title: 'phone',
          value,
          description
        })).filter(item => !!item.value) as ListData;
        return [...accum, ...normalizePhones]
      }
      case 'birthdate': {
        const date = new Date(value)
        return [...accum, { title: key, value: `${date.toLocaleString('default', { month: 'long' })} ${date.getDate()}, ${date.getFullYear()}` }]
      }
      case 'emailAddress': {
        return [...accum, { title: key, value }]
      }
      default:
        return accum
    }
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={contactDataNormalize}
        style={styles.listContainer}
        ItemSeparatorComponent={() => <ListSeparator />}
        ListHeaderComponent={() => <ListHeader name={contact.name} companyName={contact.companyName || ''} largeImageURL={contact.largeImageURL} />}
        renderItem={({ item }) => <ListCard {...item} />}
      />
    </SafeAreaView>
  )
}

export default ContactDetails