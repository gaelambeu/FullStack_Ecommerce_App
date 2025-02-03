import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from './home.style'
import { Ionicons } from '@expo/vector-icons'

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
      
      
    </SafeAreaView>
  )
}

export default Home

