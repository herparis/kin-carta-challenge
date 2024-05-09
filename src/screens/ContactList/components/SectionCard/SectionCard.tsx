import React, { memo } from 'react'
import { View, Image, Text, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import type { RootContactObject } from '../../../../client/contactApi'
import type { NavigationProps } from '../../../../navigation/RootStack'
import styles from './SectionCard.style'

interface ISectionCardProps {
  item: RootContactObject
}

const SectionCard: React.FC<ISectionCardProps> = ({ item }) => {
  const navigation = useNavigation<NavigationProps<'Contacts'>>()

  return (
    <Pressable
      style={styles.container}
      onPress={() => navigation.navigate('ContactDetails', { contact: item })}>
      <View style={styles.imageContainer}>
        <Image
          src={item.largeImageURL}
          defaultSource={{ uri: 'user_small' }}
          style={styles.imageContact}
          resizeMode='contain'
        />
      </View>
      <View style={styles.descriptionContainer}>
        <View style={styles.titleContainer}>
          <Image src={`favorite_${item.isFavorite ? 'true' : 'false'}`} style={styles.imageStar} />
          <Text style={styles.title}>{item.name}</Text>
        </View>
        <Text style={styles.description}>{item.companyName}</Text>
      </View>
    </Pressable>
  )
}

export default memo(SectionCard)