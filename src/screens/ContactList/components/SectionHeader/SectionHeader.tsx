import React, { memo } from 'react'
import { Text, SectionListData } from 'react-native'

import type { RootContactObject } from '../../../../client/contactApi'
import styles from './SectionHeader.style'

interface ISectionHeaderProps {
  section: SectionListData<RootContactObject, {
    title: string;
    data: RootContactObject[];
  }>;
}

const SectionHeader: React.FC<ISectionHeaderProps> = ({ section: { data, title } }) => {
  return data.length ? <Text style={styles.container}>{title.toUpperCase()}</Text> : null
}

export default memo(SectionHeader)