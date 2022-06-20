import { StyleSheet } from "react-native"

const Styles = StyleSheet.create({
  // Modal
  overlayModal: {
    height: "auto",
    width: "90%",
    backgroundColor: "#fff",
  },
  overlay: {
    height: 100,
    width: 200,
    backgroundColor: "#fff",
    borderColor: "#24acc0",
    borderWidth: 2,
    borderRadius: 10,
  },
  view: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#24acc0",
    textTransform: "uppercase",
    marginTop: 10,
    textAlign: "center"
  }
})

export default Styles