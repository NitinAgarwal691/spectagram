import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  Image,
  Dimensions
} from "react-native";

export default class PostScreen extends Component {
    render(){
        return(
            <View style={{flex:0.4}}>
                <Text style={{color:'red'}}>PostScreen</Text>
            </View>
        )
    }
}