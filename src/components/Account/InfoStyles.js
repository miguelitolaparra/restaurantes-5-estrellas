import { StyleSheet } from "react-native"

const InfoStyles = StyleSheet.create({
  content: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    paddingVertical: 30,
  },
  avatar: {
    marginRight: 20,
    backgroundColor: "green",
  },
  displayName: {
    fontWeight: "bold",
    paddingBottom: 5,
  },
})

export default InfoStyles