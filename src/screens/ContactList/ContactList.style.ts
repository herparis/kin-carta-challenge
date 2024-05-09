import { StyleSheet, StatusBar } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: 'white'
  },
})