import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
//import BottomTabNav from './BottomTabNav';
import Profile from '../screens/Profile';
import Home from '../screens/Home';
import StackNavigator from './StackNavigator';
const Drawer = createDrawerNavigator();

const DrawerNavigator = ()=>{
  return(
    <Drawer.Navigator>
    <Drawer.Screen name = "Home" component = {StackNavigator}/>
    <Drawer.Screen name = "Profile" component = {Profile}/>
    </Drawer.Navigator>
  )
}

export default DrawerNavigator;