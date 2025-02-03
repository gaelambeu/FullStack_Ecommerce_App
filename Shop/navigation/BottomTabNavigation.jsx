import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home, Search, Profile } from '../screens'
import { Ionicons } from '@expo/vector-icons'
import { COLORS } from '../constants'
import { View } from 'react-native'

const Tab = createBottomTabNavigator()

const screenOptions = {
    tabBarShowLabel: false,
    tabBarHideOnKeyboard: true,
    headerShown: false,
    tabBarStyle: {
        position: "absolute",
        backgroundColor: '#DDF0FF',
        elevation: 5,
        bottom: 40,
        marginHorizontal: 45,
        paddingVertical: 15,
        borderRadius: 35,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        height: 70, // Hauteur de la barre de navigation
    }
}

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
        
        {/* Home Screen */}
        <Tab.Screen 
            name="Home" 
            component={Home} 
            options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{
                        width: focused ? 55 : 30,  // Taille agrandie quand actif
                        height: focused ? 55 : 30,
                        backgroundColor: focused ? "#FF7754" : "transparent",
                        borderRadius: 42.5,
                        justifyContent: "center",
                        alignItems: "center",
                        marginBottom: focused ? 0 : 0, // Décalage plus prononcé (effet falaise)
                        elevation: focused ? 0 : 0,
                        shadowColor: "#000",
                        shadowOpacity: 0.2,
                        shadowOffset: { width: 0, height: 5 },
                    }}>
                        <Ionicons 
                            name={focused ? "home" : "home-outline"} 
                            size={focused ? 30 : 30} // Icône plus grande quand actif
                            color={focused ? "white" : 'black'}
                        />
                    </View>
                )
            }}
        />

        {/* Search Screen */}
        <Tab.Screen 
            name="Search" 
            component={Search} 
            options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{
                        width: focused ? 55 : 30,  // Taille agrandie quand actif
                        height: focused ? 55 : 30,
                        backgroundColor: focused ? "#FF7754" : "transparent",
                        borderRadius: 42.5,
                        justifyContent: "center",
                        alignItems: "center",
                        marginBottom: focused ? 0 : 0, // Décalage plus prononcé (effet falaise)
                        elevation: focused ? 0 : 0,
                        shadowColor: "#000",
                        shadowOpacity: 0.2,
                        shadowOffset: { width: 0, height: 5 },
                    }}>
                        <Ionicons 
                            name="search" 
                            size={focused ? 30 : 30}
                            color={focused ? "white" : 'black'}
                        />
                    </View>
                )
            }}
        />

        {/* Profile Screen */}
        <Tab.Screen 
            name="Profile" 
            component={Profile} 
            options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{
                        width: focused ? 55 : 30,  // Taille agrandie quand actif
                        height: focused ? 55 : 30,
                        backgroundColor: focused ? "#FF7754" : "transparent",
                        borderRadius: 42.5,
                        justifyContent: "center",
                        alignItems: "center",
                        marginBottom: focused ? 0 : 0, // Décalage plus prononcé (effet falaise)
                        elevation: focused ? 0 : 0,
                        shadowColor: "#000",
                        shadowOpacity: 0.2,
                        shadowOffset: { width: 0, height: 5 }, // Cassure visuelle
                    }}>
                        <Ionicons 
                            name={focused ? "person" : "person-outline"} 
                            size={focused ? 30 : 30}
                            color={focused ? COLORS.primary : COLORS.gray2}
                        />
                    </View>
                )
            }}
        />

    </Tab.Navigator>
  )
}

export default BottomTabNavigation