import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Profile = () => {
  return (
    <SafeAreaView style={styles.container}>
          <Text>Profile</Text>
    </SafeAreaView>
  )
}

export default Profile
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