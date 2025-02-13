import { StyleSheet } from "react-native"
import {COLORS, SIZES} from "../constants"

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
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












    


//const ImageData = [
  //{ id: 1, imgUrl: "https://i.pinimg.com/736x/a8/81/cd/a881cd926678dd8d4631e98e35eaacff.jpg" },
  //{ id: 2, imgUrl: "https://i.pinimg.com/736x/33/11/5a/33115a1961b4b4415af899e8565b951e.jpg" },
  //{ id: 3, imgUrl: "https://i.pinimg.com/736x/43/c4/ad/43c4ad6cb7e303589fd0cf02c95034c6.jpg" },
  //{ id: 4, imgUrl: "https://i.pinimg.com/736x/a3/47/eb/a347eb6aec58e6ba56a872e1caba5e77.jpg" },
  //{ id: 5, imgUrl: "https://i.pinimg.com/736x/b3/4f/c4/b34fc49e02e7fd17d6658ddd406cd507.jpg" },
  //{ id: 6, imgUrl: "https://i.pinimg.com/736x/f4/e7/6e/f4e76ebfa2ca8177d6b3dcebc64f604d.jpg" },
//];