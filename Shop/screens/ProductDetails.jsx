import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import styles from './productDetails.style';

const products = [
  { id: 1, categoryId: 1, name: "Banane", price: "2€", uri: "https://avatars.mds.yandex.net/i?id=9ace3a67c7a567aa9d70a28c0e7875ab666d9dc5-10877191-images-thumbs&n=13", description: "Lorem ipsum dolor.", rating: '3.5' },
];

const ProductDetails = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { product } = route.params; // Récupère le produit sélectionné

  return (
    <View style={styles.container}>
      <View style={styles.upperBar}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={28} color="#000" />
        </TouchableOpacity>

        <TouchableOpacity>
          <Ionicons name='heart' size={28} color={"#FF7754"} />
        </TouchableOpacity>
      </View>
      
      <Image 
        source={{ uri: "https://avatars.mds.yandex.net/i?id=9ace3a67c7a567aa9d70a28c0e7875ab666d9dc5-10877191-images-thumbs&n=13" }} 
        style={styles.image} 
      />

      <View style={styles.details}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>Product</Text>
          <View style={styles.priceWrapper}>
            <Text style={styles.price}>1000 P</Text>
          </View>
        </View>
      </View>

      <View style={styles.ratingRow}>
        <View style={styles.rating}>
          {[1,2,3,4,5].map((index) => (
            <Ionicons
              key={index} 
              name='star'
              size={24}
              color="gold"
            />
          ))}

          <Text style={styles.textRating}>(4.9)</Text>
        </View>
      </View>



      <View style={styles.description}>
        <Text style={styles.title}>Description</Text>
        <View>

        </View>
      </View>

      

      </View>
  );
};


export default ProductDetails;