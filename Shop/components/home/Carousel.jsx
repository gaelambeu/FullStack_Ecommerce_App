import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, Text, View, Dimensions, Image, Animated } from "react-native";
import PagerView from "react-native-pager-view";

const { width: screenWidth } = Dimensions.get("window");

const ImageData = [
  { id: 1, imgUrl: "https://i.pinimg.com/736x/a8/81/cd/a881cd926678dd8d4631e98e35eaacff.jpg" },
  { id: 2, imgUrl: "https://i.pinimg.com/736x/33/11/5a/33115a1961b4b4415af899e8565b951e.jpg" },
  { id: 3, imgUrl: "https://i.pinimg.com/736x/43/c4/ad/43c4ad6cb7e303589fd0cf02c95034c6.jpg" },
  { id: 4, imgUrl: "https://i.pinimg.com/736x/a3/47/eb/a347eb6aec58e6ba56a872e1caba5e77.jpg" },
  { id: 5, imgUrl: "https://i.pinimg.com/736x/b3/4f/c4/b34fc49e02e7fd17d6658ddd406cd507.jpg" },
  { id: 6, imgUrl: "https://i.pinimg.com/736x/f4/e7/6e/f4e76ebfa2ca8177d6b3dcebc64f604d.jpg" },
];

const BoxCarousel = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const pagerRef = useRef(null);
  const rotateAnim = useRef(new Animated.Value(0)).current;

  // 🔄 Animation de rotation 360° en boucle
  useEffect(() => {
    Animated.loop(
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 5000, // Temps de rotation
        useNativeDriver: true,
      })
    ).start();
  }, []);

  // ⏳ Autoplay toutes les 3 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage((prevPage) => {
        const nextPage = (prevPage + 1) % ImageData.length;
        pagerRef.current?.setPage(nextPage);
        return nextPage;
      });
    }, 3000); // Change d'image toutes les 3 secondes

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>PUBLICITE</Text>
      <PagerView ref={pagerRef} style={styles.pagerView} initialPage={0}>
        {ImageData.map((item) => (
          <View key={item.id} style={styles.page}>
            <Animated.View
              style={[
                styles.card,
                {
                  transform: [
                    {
                      rotateY: rotateAnim.interpolate({
                        inputRange: [0, 1],
                        outputRange: ["0deg", "360deg"],
                      }),
                    },
                  ],
                },
              ]}
            >
              <Image source={{ uri: item.imgUrl }} style={styles.image} />
            </Animated.View>
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
    width: screenWidth - 40,
    height: 220,
  },
  page: {
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    width: screenWidth - 60,
    height: 200,
    borderWidth: 1,
    borderColor: "black",
    overflow: "hidden",
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});