import React, { useState } from 'react'
import { Pressable, Image } from 'react-native'
import { useRoute } from '@react-navigation/native'

import type { RouteProps } from '../../RootStack'
import { useAppDispatch } from '../../../store'
import { ContactActions } from '../../../store/contacts'
import styles from './FavoriteButton.style'

const FavoriteButton = () => {
  const dispatch = useAppDispatch()
  const { params: { contact } } = useRoute<RouteProps<'ContactDetails'>>()
  const [isFavorite, toggleIsFavorite] = useState<boolean>(contact.isFavorite)
  return (
    <Pressable
      onPress={() => {
        dispatch(ContactActions.shouldToggleFavorites(contact.id))
        toggleIsFavorite(!isFavorite)
      }}
      style={styles.container}>
      <Image src={`favorite_${isFavorite ? 'true' : 'false'}`} style={styles.imageStar}/>
    </Pressable>
  )
}

export default FavoriteButton