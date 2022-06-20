/// <summary>
/// Here we add the styles of all the screens of Restaurants
/// </summary>
import { StyleSheet } from "react-native"

const Styles = StyleSheet.create({
  addRestaurant: {
    backgroundColor: "#24acc0",
    margin: 20,
    borderRadius: 8
  },
  // RestaurantsScreen Styles
  content: {
    flex: 1,
  },
  btnContainer: {
    position: "absolute",
    bottom: 10,
    right: 10,
  },

})

export default Styles