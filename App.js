import * as React from "react";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { NavigationContainer} from "@react-navigation/native";
import DrawerNavigator from "./navigation/DrawerNavigator";

import LoginScreen from "./screens/LoginScreen.js";
import LoadingScreen from "./screens/LoadingScreen.js";
import Feed from "./screens/Feed.js";

import firebase from "firebase";
import { firebaseConfig } from "./config";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const AppSwitchNavigator = createSwitchNavigator({
  LoadingScreen: LoadingScreen,
  LoginScreen: LoginScreen,
  Feed: Feed
});

const AppNavigator = createAppContainer(AppSwitchNavigator);

export default function App() {
  return (
    <NavigationContainer>
    <AppNavigator/>
    <DrawerNavigator/>
   </NavigationContainer>
  )
}
