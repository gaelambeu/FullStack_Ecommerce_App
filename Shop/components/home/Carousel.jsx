import React from "react";
import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import PagerView from "react-native-pager-view";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

const ImageData = [
  { id: 1, imgUrl: "https://i.pinimg.com/736x/a8/81/cd/a881cd926678dd8d4631e98e35eaacff.jpg" },
  { id: 2, imgUrl: "https://i.pinimg.com/736x/33/11/5a/33115a1961b4b4415af899e8565b951e.jpg" },
  { id: 3, imgUrl: "https://i.pinimg.com/736x/43/c4/ad/43c4ad6cb7e303589fd0cf02c95034c6.jpg" },
  { id: 4, imgUrl: "https://i.pinimg.com/736x/a3/47/eb/a347eb6aec58e6ba56a872e1caba5e77.jpg" },
  { id: 5, imgUrl: "https://i.pinimg.com/736x/b3/4f/c4/b34fc49e02e7fd17d6658ddd406cd507.jpg" },
  { id: 6, imgUrl: "https://i.pinimg.com/736x/f4/e7/6e/f4e76ebfa2ca8177d6b3dcebc64f604d.jpg" },
];

const BoxCarousel = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>PUBLICITÉ</Text>
      <PagerView style={styles.pagerView} initialPage={0}>
        {ImageData.map((item) => (
          <View key={item.id} style={styles.page}>
            <Image source={{ uri: item.imgUrl }} style={styles.image} />
          </View>
        ))}
      </PagerView>
    </View>
  );
};

export default BoxCarousel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  text: {
    fontSize: 20,
    alignSelf: "flex-end",
    marginRight: 30,
    marginBottom: 2,
    fontFamily: "extrabold",
    textDecorationLine: "underline",
  },
  pagerView: {
    width: screenWidth,
    height: screenHeight * 0.4, // Forcer une hauteur suffisante pour voir plusieurs images
  },
  page: {
    width: screenWidth, // Largeur pleine pour bien afficher chaque image
    height: screenHeight * 0.4, // Hauteur suffisante
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white", // Assurer une bonne visibilité
  },
  image: {
    width: screenWidth - 40,
    height: screenHeight * 0.35, // Ajustement dynamique de la taille
    borderRadius: 10,
    resizeMode: "cover",
  },
});