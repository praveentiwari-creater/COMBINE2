import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ColorList from './Component/ColorList'
import HomePage from './Component/HomePage';
import Drop_Down_List from './Component/Drop_Down_List';
import Firebase_Database from './Component/Firebase_Database';
import SimmerView from './Component/SimmerView';
import shimmer from './Component/shimmer';
import Testing from './Component/Testing';
import Read_More_Text from './Component/Read_More_Text';
import GridViewCart from './Component/GridViewCart';
import SubCategory from './Component/SubCategory';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
export default class App extends Component {
  render() {
    return (
    
        <NavigationContainer>
          <Stack.Navigator>        
            <Stack.Screen name="DRAWER" component={DRAWER}  options={{headerShown:false}}/>
          </Stack.Navigator>
        </NavigationContainer>
      )
    
  }
}
DRAWER = () => {
  return (
    <Drawer.Navigator>
       <Drawer.Screen name="GridViewCart" component={GridViewCart} />
       <Drawer.Screen name="SubCategory" component={SubCategory} />
      <Drawer.Screen name="Read_More_Text" component={Read_More_Text} />
        <Drawer.Screen name="Testing" component={Testing} />
       <Drawer.Screen name="shimmer" component={shimmer} />
        <Drawer.Screen name="SimmerView" component={SimmerView} />
       <Drawer.Screen name="Firebase_Database" component={Firebase_Database} />
       <Drawer.Screen name="Drop_Down_List" component={Drop_Down_List} />
       <Drawer.Screen name="ColorList" component={ColorList} />
        <Drawer.Screen name="HomePage" component={HomePage} />
     
    
    </Drawer.Navigator>
  )
}