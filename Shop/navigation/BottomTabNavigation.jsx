import { View, Text } from 'react-native'
import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Home from '../screens/Home';
import Search from '../screens/Search';
import Profile from '../screens/Profile';
import { Ionicons } from '@expo/vector-icons';


const screenOptions = {
    tabBarShowLabel: false,
    tabBarHideOnKeyboard: true,
    headerShown: false,
    tabBarStyle: {
        position: absolute,
        bottom: 0,
        right: 0,
        left: 0,
        elevation: 0,
        height: 70
    }
}


const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen 
            name="Home" 
            component={Home} 
            options={{
                tabBarIcon: ({focused}) => {
                    return <Ionicons name={focused ? "home" : "home-outline"} 
                                size={24}
                                color={red}
                            />

                }
            }}
        />
        
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Profile" component={Profile} />

    </Tab.Navigator>
  )
}

export default BottomTabNavigation