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

  imageProduct: {
    margin: 8,
    width: 100, 
    height: 120, 
  },

  productDetails: {
    alignContent: "center",
    flexDirection: "row",
    gap: 5,
    margin: 2
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
    marginHorizontal: 2,
},

productDescription: {
    color: "white",
    fontFamily: "regular",
    fontSize: 10
},

iconCard: {
    flexDirection: "row",
    gap: 60,
},

starCard: {
    gap: 3,
    flexDirection: "row",
},

starIcon: {
    color: "yellow"
},

rating: {
    color: "white",
    fontSize: 20
}
  
});

export default styles