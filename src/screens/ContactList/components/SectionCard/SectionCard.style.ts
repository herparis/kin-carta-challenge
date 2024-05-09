import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    marginVertical: 8,
  },
  imageContainer: { width: '25%' },
  imageContact: {
    flex: 1,
    width: '100%',
    height: 75
  },
  descriptionContainer: {
    width: '100%',
    justifyContent: 'center',
    paddingLeft: 15
  },
  titleContainer: { flexDirection: 'row', alignItems: 'center' },
  imageStar: { width: 20, height: 20, marginRight: 5 },
  description: {
    color: 'darkgrey',
    paddingLeft: 25
  },
  title: {
    fontSize: 22,
  },
})