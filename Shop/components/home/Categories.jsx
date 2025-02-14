import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import styles from './categories.style';
import { useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'
import ProductsScreen from '../products/ProductsScreen';

const categories = [
  { id: 1, textcat: "Fruits", uri: "https://i.pinimg.com/474x/68/60/27/686027dc0db04ae6272ac72b6a7ed195.jpg" },
  { id: 2, textcat: "Habits", uri: "https://i.pinimg.com/736x/ae/a6/6d/aea66d1092223e656324acd3c2e1d08f.jpg" },
  { id: 3, textcat: "Téléphone", uri: "https://i.pinimg.com/474x/d5/1b/0d/d51b0d8826063f245dc38e9ff6c5c263.jpg" },
  { id: 4, textcat: "Food-Africa", uri: "https://i.pinimg.com/736x/a3/47/eb/a347eb6aec58e6ba56a872e1caba5e77.jpg" },
];

const products = [
  { id: 1, categoryId: 1, name: "Banane", price: "2€", uri: "https://avatars.mds.yandex.net/i?id=9ace3a67c7a567aa9d70a28c0e7875ab666d9dc5-10877191-images-thumbs&n=13", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum officiis vero quis. Iure laboriosam, odit voluptates dolor minima reprehenderit. Quos praesentium quidem neque delectus ipsum, aspernatur laudantium dicta sint aliquam.", rating: '3.5'},
  { id: 2, categoryId: 1, name: "Fraise", price: "1.5€", uri: "https://i.pinimg.com/474x/f1/66/f4/f166f498de0a43d47111d8bf952f5a8c.jpg" ,description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum officiis vero quis. Iure laboriosam, odit voluptates dolor minima reprehenderit. Quos praesentium quidem neque delectus ipsum, aspernatur laudantium dicta sint aliquam." ,rating: '2.7'},
  { id: 3, categoryId: 1, name: "Rinsain", price: "3.1€", uri: "https://avatars.mds.yandex.net/i?id=49d8f961e6a274f1fbbe9c1c19c0f3c3328a0b7a-10176094-images-thumbs&n=13", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum officiis vero quis. Iure laboriosam, odit voluptates dolor minima reprehenderit. Quos praesentium quidem neque delectus ipsum, aspernatur laudantium dicta sint aliquam." ,rating: '4.6'},
  { id: 4, categoryId: 1, name: "Orange", price: "1.9€", uri: "https://avatars.mds.yandex.net/i?id=83e886c5a5d2b224ad074955ab43ac51d1086a252ff68225-13310033-images-thumbs&n=13", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum officiis vero quis. Iure laboriosam, odit voluptates dolor minima reprehenderit. Quos praesentium quidem neque delectus ipsum, aspernatur laudantium dicta sint aliquam." ,rating: '1.9'},
  
];



const truncateText = (text, maxLength) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};



const BoxCategories = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0].id); // Catégorie par défaut

  // Filtrer les produits de la catégorie sélectionnée
  const filteredProducts = products.filter(product => product.categoryId === selectedCategory);

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
              item.id === selectedCategory && styles.selectedCategory // Ajoute un style si sélectionné
            ]}
            onPress={() => setSelectedCategory(item.id)}
          >
            <Image source={{ uri: item.uri }} style={styles.image} />
            <Text style={styles.textimg}>{item.textcat}</Text>
          </TouchableOpacity>
        )}
      />

      {/* Liste des produits de la catégorie sélectionnée */}
      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2} // ✅ Deux produits par ligne
        columnWrapperStyle={styles.row} // ✅ Ajoute un espace entre colonnes
        contentContainerStyle={{ padding: 10, paddingBottom: 80 }} // ✅ Ajoute un espace sous les derniers produits
        ListFooterComponent={<View style={{ height: 80 }} />} // ✅ Espace pour voir le dernier élément
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


    </View>
  );
};

export default BoxCategories;
