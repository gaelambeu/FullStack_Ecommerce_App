import { StyleSheet } from "react-native"
import {COLORS, SIZES} from "../constants"

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        backgroundColor: "#FF7754"
    },

    upperBar: {
        marginHorizontal: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center', 
        position: "absolute",
        top: SIZES.xxLARGE,
        width: SIZES.width -44,
        zIndex: 999,
    
    },

    image: {
        aspectRatio: 1,
        resizeMode: "cover",
    },

    details: {
        marginTop: SIZES.xLarge,
        borderRadius: 4,
        width: SIZES.width,

    },

    titleRow:{
        marginHorizontal: 20,
        paddingBottom: SIZES.small,
        flexDirection: "row", 
        justifyContent: "space-between",
        alignItems: "center",
        width: SIZES.width -44,
        top: 20
    },

    title: {
        fontSize: SIZES.large,
        fontFamily: "bold"
    },

    priceWrapper: {
        width: "auto",
        height: 30,
        backgroundColor: "white",
        borderRadius: 8
    },

    price: {
        paddingHorizontal: 10,
        fontFamily: "semibold",
        fontSize: SIZES.large
    },

    ratingRow:{
        flexDirection: "row",
        paddingBottom: SIZES.small,
        justifyContent: "space-between",
        alignItems: "center",
        width: SIZES.width -10,
        top: 5
    },

    rating:{
        top: SIZES.large,
        flexDirection: "row",
        paddingBottom: SIZES.small,
        justifyContent: "flex-start",
        alignItems: "center",
        marginHorizontal: SIZES.large
    },

    textRating:{
        fontFamily: "medium",
        color: "gray"
    },

    description:{
        marginVertical: 12,
        marginHorizontal: 10,
        width: "auto",
        
    }

});

export default styles