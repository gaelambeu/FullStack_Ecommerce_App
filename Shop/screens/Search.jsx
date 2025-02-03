import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Search = () => {
  return (
    <SafeAreaView style={styles.container}>
       <Text>Search</Text>
    </SafeAreaView>
  )
}

export default Search

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontFamily: "extrabold",
    fontSize: 15,
  }
});