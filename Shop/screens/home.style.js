import { StyleSheet } from "react-native"
import {COLORS, SIZES} from "../constants"

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textStyle: {
      fontFamily: "extrabold",
      fontSize: 20,
    },
    appBarWrapper:{
        marginHorizontal: 22,
        marginTop: SIZES.small
    },
    appBar:{
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 0,
        marginBottom: 5,
        padding: 7,
    },
    locGroup: {
        alignItems: 'center',
        width: 'auto',
        height: "auto"
    },
    locText: {
        fontFamily: "semiBold",
        fontSize: 10,
        position:'static'
    },
    cartCount: {
        position:'absolute',
        bottom: 18,
        width: 16,
        height: 16,
        borderRadius: 8,
        flex: 1,
        alignItems:'center',
        justifyContent: "center",
        backgroundColor: "#FF7754",
        zIndex: 999,
    },
    cartNumber:{
        color: "white",
        fontFamily: "semiBold",
        alignSelf: "center"
    }
  });

export default styles