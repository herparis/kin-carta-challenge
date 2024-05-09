import React, { memo } from 'react'
import { View } from 'react-native'

import styles from './SectionSeparator.style'

const SectionSeparator = () => {
  return <View style={styles.container} />
}

export default memo(SectionSeparator)