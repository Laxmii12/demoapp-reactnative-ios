
import React, { useEffect } from "react";
import { Text, View } from "react-native";
import LoginScreen from "./screens/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "./screens/HomeScreen";
const Stack = createStackNavigator();
import { NativeModules } from "react-native";
import { setJSExceptionHandler, setNativeExceptionHandler } from 'react-native-exception-handler';




const App = () =>{

  // Disabling the FPS performance monitor


  useEffect(()=>{
    NativeModules.HanselRn.setNativeID()
  },[])
  return (
<NavigationContainer >
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer> 
     )
}
export default App