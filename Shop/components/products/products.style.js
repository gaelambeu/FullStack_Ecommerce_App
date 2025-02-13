import { StyleSheet } from "react-native"
import {COLORS, SIZES} from "../../constants"

const styles = StyleSheet.create({
    container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  productCard: {
    backgroundColor: COLORS.primary,
    margin: 7, 
    width: 170,
    height: 230,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    elevation: 5,
    alignItems: "center",
    
  },

  image: {
    margin: 10,
    width: 100, 
    height: 120, 
  },

  productDetails: {
    alignContent: "center",
    flexDirection: "row",
    gap: 5,
    margin: 3
  },

  productName: {
    fontFamily:"extrabold",
    color: "white",
    fontSize: 20,
  },

  productPrice: {
    fontSize: 20,
    color: "white"
  },

productDescriptionCard: {
    marginHorizontal: 3,
},

productDescription: {
    color: "white",
    fontFamily: "regular",
    fontSize: 10
},

iconCard: {
    flexDirection: "row"
}
  
});

export default styles