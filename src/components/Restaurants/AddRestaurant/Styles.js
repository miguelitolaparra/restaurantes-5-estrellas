import { StyleSheet, Dimensions } from "react-native"

const widthScreen = Dimensions.get("window").width

const Styles = StyleSheet.create({
  content: {
    marginHorizontal: 10,
    marginTop: 40,
  },
  inputSuperior:{
    marginTop: 40,
  },
  textArea: {
    height: 100,
    width: "100%",
    padding: 0,
    margin: 0,
  },
  // MapForm
  mapStyle: {
    width: "100%",
    height: 550,
  },
  mapActions: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  btnMapContainerSave: {
    paddingRight: 5,
    width: "50%",
  },
  btnMapSave: {
    backgroundColor: "#24acc0",
  },
  btnMapContainerCancel: {
    paddingLeft: 5,
    width: "50%",
  },
  btnMapCancel: {
    backgroundColor: "#f48b28",
  },

  // UploadImagesForm Styles
  viewImage: {
    flexDirection: "row",
    marginHorizontal: 20,
    marginTop: 30,
  },
  containerIcon: {
    justifyContent: "center",
    marginRight: 10,
    backgroundColor: "#e3e3e3",
    width: 70,
    height: 70,
  },
  error: {
    marginHorizontal: 20,
    marginTop: 10,
    color: "#ff0000",
    fontSize: 12,
    paddingLeft: 6,
  },
  imageStyle: {
    width: 70,
    height: 70,
    marginRight: 10,
  },
  
  // Restaurant Image
  contentImage: {
    marginBottom: 20,
  },
  image: {
    height: 200,
    width: widthScreen,
  },
})

export default Styles