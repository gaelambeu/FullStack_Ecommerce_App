import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './categories.style';
import { useNavigation } from '@react-navigation/native';


const categories = [
  { id: 1, textcat: "Fruits", uri: "https://i.pinimg.com/736x/a8/81/cd/a881cd926678dd8d4631e98e35eaacff.jpg" },
  { id: 2, textcat: "Habits", uri: "https://i.pinimg.com/736x/33/11/5a/33115a1961b4b4415af899e8565b951e.jpg" },
  { id: 3, textcat: "Phone", uri: "https://i.pinimg.com/736x/43/c4/ad/43c4ad6cb7e303589fd0cf02c95034c6.jpg" },
  { id: 4, textcat: "Attieke", uri: "https://i.pinimg.com/736x/a3/47/eb/a347eb6aec58e6ba56a872e1caba5e77.jpg" },
  { id: 5, textcat: "Perruque", uri: "https://i.pinimg.com/736x/b3/4f/c4/b34fc49e02e7fd17d6658ddd406cd507.jpg" },
  { id: 6, textcat: "Légumes", uri: "https://i.pinimg.com/736x/f4/e7/6e/f4e76ebfa2ca8177d6b3dcebc64f604d.jpg" },
  { id: 7, textcat: "Légumes", uri: "https://i.pinimg.com/736x/f4/e7/6e/f4e76ebfa2ca8177d6b3dcebc64f604d.jpg" },
  { id: 8, textcat: "Fruits", uri: "https://i.pinimg.com/736x/a8/81/cd/a881cd926678dd8d4631e98e35eaacff.jpg" },
  { id: 9, textcat: "Légumes", uri: "https://i.pinimg.com/736x/f4/e7/6e/f4e76ebfa2ca8177d6b3dcebc64f604d.jpg" },
  { id: 10, textcat: "Phone", uri: "https://i.pinimg.com/736x/43/c4/ad/43c4ad6cb7e303589fd0cf02c95034c6.jpg" },
];

const BoxCategories = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingHorizontal: 10 }}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.itemContainer} 
            onPress={() => navigation.navigate('Products', { categoryId: item.id })}
          >
            <Image source={{ uri: item.uri }} style={styles.image} />
            <Text style={styles.textimg}>{item.textcat}</Text>
          </TouchableOpacity>
        )}
      />
      
    </View>
  );
};

export default BoxCategories;
