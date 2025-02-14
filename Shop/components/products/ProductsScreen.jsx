import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './products.style';
import { useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'



const products = [
  { id: 1, categoryId: 1, name: "Banane", price: "2€", uri: "https://avatars.mds.yandex.net/i?id=9ace3a67c7a567aa9d70a28c0e7875ab666d9dc5-10877191-images-thumbs&n=13", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum officiis vero quis. Iure laboriosam, odit voluptates dolor minima reprehenderit. Quos praesentium quidem neque delectus ipsum, aspernatur laudantium dicta sint aliquam.", rating: '3.5'},
  { id: 2, categoryId: 1, name: "Fraise", price: "1.5€", uri: "https://e7.pngegg.com/pngimages/916/107/png-clipart-juice-fruit-strawberry-apple-peach-three-strawberry-fruit-natural-foods-frutti-di-bosco.png" ,description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum officiis vero quis. Iure laboriosam, odit voluptates dolor minima reprehenderit. Quos praesentium quidem neque delectus ipsum, aspernatur laudantium dicta sint aliquam." ,rating: '2.7'},
  { id: 3, categoryId: 1, name: "Rinsain", price: "3.1€", uri: "https://avatars.mds.yandex.net/i?id=49d8f961e6a274f1fbbe9c1c19c0f3c3328a0b7a-10176094-images-thumbs&n=13", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum officiis vero quis. Iure laboriosam, odit voluptates dolor minima reprehenderit. Quos praesentium quidem neque delectus ipsum, aspernatur laudantium dicta sint aliquam." ,rating: '4.6'},
  { id: 4, categoryId: 1, name: "Orange", price: "1.9€", uri: "https://avatars.mds.yandex.net/i?id=83e886c5a5d2b224ad074955ab43ac51d1086a252ff68225-13310033-images-thumbs&n=13", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum officiis vero quis. Iure laboriosam, odit voluptates dolor minima reprehenderit. Quos praesentium quidem neque delectus ipsum, aspernatur laudantium dicta sint aliquam." ,rating: '1.9'},
];


const truncateText = (text, maxLength) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};



const ProductsScreen = () => {
  const route = useRoute();
  const categoryId = route.params?.categoryId ?? 1;

  // Filtrer les produits par catégorie
  const filteredProducts = products.filter((product) => product.categoryId === categoryId);

  return (
    <View style={styles.container}>
      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2} // ✅ Affichage en 2 colonnes
        columnWrapperStyle={styles.row} // ✅ Pour espacer les colonnes
        renderItem={({ item }) => (
          <View style={styles.productCard}>
            <Image source={{ uri: item.uri }} style={styles.imageProduct} />
            <View style={styles.productDetails}>
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productPrice}>{item.price}</Text>
            </View>
            <View style={styles.productDescriptionCard}>
              <Text style={styles.productDescription}>
                {truncateText(item.description, 50)}
              </Text>
            </View>
            <View style={styles.iconCard}>
              <View style={styles.starCard}>
                <Ionicons name='star-sharp' size={25} style={styles.starIcon}/> 
                <Text style={styles.rating}>{item.rating}</Text>
              </View>
              <View>
                <TouchableOpacity>
                  <Ionicons name='heart' size={28} />
                </TouchableOpacity>
                 
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default ProductsScreen;
