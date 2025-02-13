import { SafeAreaView, ScrollView, Text, View } from 'react-native'
import React from 'react'
import styles from './home.style'
import { Ionicons } from '@expo/vector-icons'
import { Categories, ImageCarousel, ProductsScreen } from '../components'

const Home = () => {
  return (
    <SafeAreaView>
      <View style={styles.appBarWrapper}>
        <View style={styles.appBar}>
          <View style={styles.locGroup}>
            <Ionicons name='location-sharp' size={30} /> 
            <Text style={styles.locText}>Petersbourg</Text>
          </View>
         
          <Text style={styles.textStyle}>Shop's Africa</Text>

          <View style={{ alignItems: "flex-end"}}>
            <View style={styles.cartCount}>
              <Text style={styles.cartNumber}>9</Text>
            </View>
            <Ionicons name='cart-sharp' size={30} /> 
          </View>
          
        </View>
      </View>

      <ScrollView>
        <ImageCarousel />
        <Categories />
        <ProductsScreen />

      </ScrollView>
      
      
    </SafeAreaView>
  )
}

export default Home

