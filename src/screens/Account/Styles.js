import { StyleSheet } from "react-native"

const Styles = StyleSheet.create({
  image: {
    resizeMode: "contain",
    width: "100%",
    height: 150,
    marginTop: 20,
  },
  content: {
    marginHorizontal: 40,
  },
  textRegister: {
    marginTop: 15,
    marginHorizontal: 10,
  },
  btnRegister: {
    color: "#24acc0",
    fontWeight: "bold",
  },
  // UserGuestScreen Styles
  contentGuest: {
    marginHorizontal: 30,
  },
  imageGuest: {
    resizeMode: "contain",
    height: 300,
    width: "100%",
    marginBottom: 40,
  },
  title: {
    fontWeight: "bold",
    fontSize: 19,
    marginBottom: 10,
    textAlign: "center",
  },
  description: {
    textAlign: "center",
    marginBottom: 20,
  },
  btnStyle: {
    backgroundColor: "#24acc0",
    borderRadius: 8
  },
  // UserLoggedScreen Styles
  btnStyles: {
    marginTop: 30,
    paddingVertical: 10,
    borderRadius: 8,
    backgroundColor: "#d2e6d8",
    borderTopWidth: 1,
    borderTopColor: "#e3e3e3",
    borderBottomWidth: 1,
    borderBottomColor: "#e3e3e3",
  },
  btnTextStyle: {
    color: "#e08b71",
   
  },
})

export default Styles

// mi color corporativo 