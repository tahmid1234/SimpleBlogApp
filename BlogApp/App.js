import React from 'react';
import {NavigationContainer, navigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';

import { DefaultTheme, DarkTheme } from '@react-navigation/native';
import SignInScreenActivity from './Source/screens/SignInScreen'
import SignUpScreenActivity from './Source/screens/SignUpScreen'
import HomeScreenActivity from './Source/screens/Home'
import { AuthContext, AuthProvider } from "./Source/provider/AuthProvider";

const AuthStack= createStackNavigator();
const HomeStack =createStackNavigator();

const HomeStackScreen=() =>{
  return(
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreenActivity}/>
    </HomeStack.Navigator>
  )
}

const AuthStackScreen = () => {
  return (
    <AuthStack.Navigator initialRouteName="SignIn">
      <AuthStack.Screen
        name="SignIn"
        component={SignInScreenActivity}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name="SignUp"
        component={SignUpScreenActivity}
        options={{ headerShown: false }}
      />
    </AuthStack.Navigator>
  );
};



export default function App() {

  const MyTheme ={
    dark:true,
    colors:{
      primary: "#ffffff",
      background: "#17001a",
      card: "#fc6a03",
      text: "#ffffff",
      border: "#000028",
      notification:"#9933FF",
    },
  };
  
  return (

    <AuthProvider>
      <AuthContext.Consumer>
        {(auth) => (
          <NavigationContainer theme={MyTheme}>
            {auth.IsLoggedIn ? <HomeStackScreen /> : <AuthStackScreen />}
          </NavigationContainer>
        )}
      </AuthContext.Consumer>
    </AuthProvider>
    
    
   
  );
}
