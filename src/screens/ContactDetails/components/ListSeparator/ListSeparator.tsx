import React, { memo } from 'react'
import { View } from 'react-native'

import styles from './ListSeparator.style'

const ListSeparator = () => {
  return <View style={styles.container} />
}

export default memo(ListSeparator)