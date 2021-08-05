import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 30,
    marginTop: 30,
  },
  coverImg: {
    width: 450, 
    height: 250
  },
  restaurantName: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 30,
    fontWeight: '700',
    marginTop: 15,
  },
  restaurantAddress: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 15,
    fontWeight: '300',
    marginBottom: 25,
  },
})
