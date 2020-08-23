import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    marginHorizontal: 10,
    justifyContent: "center",
  },
  inputText: {
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 20,
    color: "black",
    backgroundColor: "white",
  },
  button: {
    paddingVertical: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    marginTop: 10,
    backgroundColor: "#8FA3FB",
  },
  textButton: {
    textAlign: "center",
    color: "white",
  },
  textButtonNav: {
    textAlign: "center",
    color: "#384FBA",
  },
  buttonNav: {
    marginTop: 80,
  },
  appText: {
    textAlign: "center",
    color: "#8FA3FB",
    fontSize: 20,
    marginBottom: 50,
  },
});

export default styles;
