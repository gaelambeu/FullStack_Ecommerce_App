import { StyleSheet } from "react-native"
import {COLORS, SIZES} from "../../constants"

const styles = StyleSheet.create({
  itemContainer: {
    width: 100, 
    marginTop: 10,
    height: 120,
    borderRadius: 12,
    marginHorizontal: 5, 
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    elevation: 5,
  },
  image: { 
    width: 80, 
    height: 80, 
    borderRadius: 50,
  },
  textimg: {
    fontSize: 14,
    fontWeight: "600",
    color: "black",
    marginTop: 5,
  }
});

export default styles