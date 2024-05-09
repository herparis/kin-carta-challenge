import React, { memo } from 'react'
import { View, Text } from 'react-native'

import styles from './ListCard.style'

interface IListCardProps {
  description?: string
  value: string
  title: string
}

const ListCard: React.FC<IListCardProps> = ({ description, value, title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{`${title.toUpperCase()}:`}</Text>
      <View style={styles.descriptionContainer}>
        <Text style={styles.valueText}>{value}</Text>
        {!!description && <Text style={styles.descriptionText}>{description}</Text>}
      </View>
    </View>
  )
}

export default memo(ListCard)