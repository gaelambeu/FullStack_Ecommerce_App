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
  },
  

































  productCard: {
    backgroundColor: COLORS.gray,
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
    width: 140, 
    height: 120, 
    borderRadius: 8,
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