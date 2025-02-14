import { View, Text, Image, FlatList, TouchableOpacity, Animated } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import styles from './categories.style';
import { Ionicons } from '@expo/vector-icons';

const categories = [
  { id: 1, textcat: "Fruits", uri: "https://i.pinimg.com/474x/68/60/27/686027dc0db04ae6272ac72b6a7ed195.jpg" },
  { id: 2, textcat: "Habits", uri: "https://i.pinimg.com/736x/ae/a6/6d/aea66d1092223e656324acd3c2e1d08f.jpg" },
  { id: 3, textcat: "Téléphone", uri: "https://i.pinimg.com/474x/d5/1b/0d/d51b0d8826063f245dc38e9ff6c5c263.jpg" },
  { id: 4, textcat: "Food-Africa", uri: "https://i.pinimg.com/736x/a3/47/eb/a347eb6aec58e6ba56a872e1caba5e77.jpg" },
];

const products = [
  { id: 1, categoryId: 1, name: "Banane", price: "2€", uri: "https://avatars.mds.yandex.net/i?id=9ace3a67c7a567aa9d70a28c0e7875ab666d9dc5-10877191-images-thumbs&n=13", description: "Lorem ipsum dolor.", rating: '3.5' },
  { id: 2, categoryId: 1, name: "Fraise", price: "1.5€", uri: "https://e7.pngegg.com/pngimages/916/107/png-clipart-juice-fruit-strawberry-apple-peach-three-strawberry-fruit-natural-foods-frutti-di-bosco.png", description: "Lorem ipsum dolor.", rating: '2.7' },
];

const truncateText = (text, maxLength) => text.length > maxLength ? text.slice(0, maxLength) + "..." : text;

const BoxCategories = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0].id);
  const fadeAnim = useRef(new Animated.Value(0)).current; // Animation d'opacité

  const filteredProducts = products.filter(product => product.categoryId === selectedCategory);

  useEffect(() => {
    // Réinitialisation de l'animation
    fadeAnim.setValue(4);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 800, // Durée de l'animation
      useNativeDriver: true,
    }).start();
  }, [selectedCategory]);

  return (
    <View style={styles.container}>
      
      {/* Liste des catégories */}
      <FlatList
        data={categories}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingHorizontal: 10 }}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={[
              styles.itemContainer, 
              item.id === selectedCategory && styles.selectedCategory
            ]}
            onPress={() => setSelectedCategory(item.id)}
          >
            <Image source={{ uri: item.uri }} style={styles.image} />
            <Text style={styles.textimg}>{item.textcat}</Text>
          </TouchableOpacity>
        )}
      />

      {/* Liste des produits avec animation */}
      <Animated.View style={{ opacity: fadeAnim }}>
        <FlatList
          data={filteredProducts}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          columnWrapperStyle={styles.row}
          contentContainerStyle={{ padding: 10, paddingBottom: 80 }}
          ListFooterComponent={<View style={{ height: 80 }} />}
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
                <TouchableOpacity>
                  <Ionicons name='heart' size={28} />
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      </Animated.View>

    </View>
  );
};

export default BoxCategories;
