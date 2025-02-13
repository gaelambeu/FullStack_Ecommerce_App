import React from "react";
import { View, Image, Dimensions, StyleSheet, Text } from "react-native";
import Carousel from "react-native-reanimated-carousel";

const { width } = Dimensions.get("window");

const images = [
  { id: 1, uri: "https://i.pinimg.com/736x/a8/81/cd/a881cd926678dd8d4631e98e35eaacff.jpg" },
  { id: 2, uri: "https://i.pinimg.com/736x/33/11/5a/33115a1961b4b4415af899e8565b951e.jpg" },
  { id: 3, uri: "https://i.pinimg.com/736x/43/c4/ad/43c4ad6cb7e303589fd0cf02c95034c6.jpg" },
  { id: 4, uri: "https://i.pinimg.com/736x/a3/47/eb/a347eb6aec58e6ba56a872e1caba5e77.jpg" },
  { id: 5, uri: "https://i.pinimg.com/736x/b3/4f/c4/b34fc49e02e7fd17d6658ddd406cd507.jpg" },
  { id: 6, uri: "https://i.pinimg.com/736x/f4/e7/6e/f4e76ebfa2ca8177d6b3dcebc64f604d.jpg" },

];


const ImageCarousel = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textPublicite}>PUBLICITE</Text>
      <Carousel
        loop
        autoPlay
        autoPlayInterval={1000}
        data={images}
        width={width * 0.9}
        height={200}
        renderItem={({ item }) => (
          <Image source={{ uri: item.uri }} style={styles.image} />
        )}
      />
    </View>
  );
};

export default ImageCarousel;


const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center" 
  },
  textPublicite: { 
    alignSelf: "flex-end",
    magin: 10,
    paddingRight: 20,
    fontSize: 18,
    fontFamily: "extrabold"
  },
  image: { 
    width: "100%", 
    height: 200, 
    borderRadius: 10 ,
    borderColor: "#000"
  },
});
