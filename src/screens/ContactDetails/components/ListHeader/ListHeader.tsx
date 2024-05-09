import React from 'react'
import { View, Text, Image } from 'react-native'

import styles from './ListHeader.style'

interface IListHeaderProps {
  largeImageURL: string;
  name: string;
  companyName: string
}

const ListHeader: React.FC<IListHeaderProps> = ({ largeImageURL, name, companyName }) => {
  return (
    <View style={styles.container}>
      <Image
        src={largeImageURL}
        defaultSource={{ uri: 'user_large' }}
        style={styles.contactImage}
      />
      <Text style={styles.nameText}>{name}</Text>
      <Text style={styles.companyNameText}>{companyName}</Text>
    </View>
  )
}

export default ListHeader