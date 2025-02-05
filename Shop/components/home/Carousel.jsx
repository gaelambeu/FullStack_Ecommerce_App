import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import  { SliderBox }  from "react-native-image-slider-box";
import {COLORS} from "../../constants"


const Carousel = () => {

    const slides = [
        "https://i.pinimg.com/736x/a8/81/cd/a881cd926678dd8d4631e98e35eaacff.jpg",
        "https://i.pinimg.com/736x/33/11/5a/33115a1961b4b4415af899e8565b951e.jpg",
        "https://i.pinimg.com/736x/43/c4/ad/43c4ad6cb7e303589fd0cf02c95034c6.jpg",
        "https://i.pinimg.com/736x/a3/47/eb/a347eb6aec58e6ba56a872e1caba5e77.jpg",
        "https://i.pinimg.com/736x/b3/4f/c4/b34fc49e02e7fd17d6658ddd406cd507.jpg",
        "https://i.pinimg.com/736x/f4/e7/6e/f4e76ebfa2ca8177d6b3dcebc64f604d.jpg",
    ]

  return (
    <View style={styles.carouselContainer}>
        <SliderBox 
            images={slides}
            dotColor = {COLORS.primary}
            inactiveDotColor = {COLORS.secondary}
            ImageComponentStyle={{borderRadius: 15, width: '55%', marginTop: 15}}
            autoplay
            circleLoop
        />
    </View>
  )
}

export default Carousel

const styles = StyleSheet.create({
    carouselContainer:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})