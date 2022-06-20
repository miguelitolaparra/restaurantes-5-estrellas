/// <summary>
/// contains the styles of the List Restaurant component
/// </summary>

import { StyleSheet } from "react-native"

const Styles = StyleSheet.create({
  restaurant: {
    flexDirection: "row",
    margin: 10,
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 15,
  },
  name: {
    fontWeight: "bold",
  },
  info: {
    color: "#828282",
    paddingRight: 100,
    marginTop: 3,
  },

})

export default Styles