import { StyleSheet } from "react-native"
import {COLORS, SIZES} from "../../constants"

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    firstText:{
        fontFamily: "extrabold",
        fontSize: 25,
    },
    secundText:{
        fontFamily: "regular",
        fontSize: "9",
        alignItems:'flex-start'
    }
    
  });

export default styles