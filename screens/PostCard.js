import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";

export default class PostCard extends Component {

render() {
    return (
      <View style={styles.container}>
          <View style={styles.cardContainer}>
            <View style={styles.authorContainer}>
                <View style={styles.authorImageContainer}>
            <Image
              source={require("../assets/profile_img.png")}
              style={styles.profileImage}
            ></Image>
            </View>
            <View style={styles.authorNameContainer}>
              <Text style={styles.authorNameText}>
                {this.props.post.author}
              </Text>
              </View>
              </View>
              <Image source={require('../assets/post.jpeg')} style={styles.postImage}/>
              <View style={styles.captionContainer}>
              <Text style={styles.captionText}>
                {this.props.post.caption}
              </Text>
              </View>
            <View style={styles.actionContainer}>
              <View style={styles.likeButton}>
                <Ionicons name={"heart"} size={RFValue(30)} color={"white"} />
                <Text style={styles.likeText}>12k</Text>
              </View>
          </View>
        </View>
        </View>
      );
    }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'skyblue',
  },
  cardContainer: {
    margin: RFValue(13),
    backgroundColor: "white",
    borderRadius: RFValue(20)
  },
  profileImage: {
    resizeMode: "contain",
    width: "28%",
    height: "28%",
    alignSelf: "center",
    height: RFValue(250)
  },
  postImage: {
    resizeMode: "contain",
    width: "100%",
    height: "25%",
    alignSelf: "center",
    height: RFValue(250)
  },
  authorNameText: {
    fontSize: RFValue(16),
    color: "black",
    fontWeight:'bold'
  },
  captionContainer: {
    alignItems: "center",
  },
  captionText: {
    fontSize: 13,
    color: "black",
    paddingTop: RFValue(10),
    fontWeight:'bold',
    fontSize:RFValue(16),
  },
  actionContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: RFValue(10)
  },
  likeButton: {
    width: RFValue(160),
    height: RFValue(40),
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "red",
    borderRadius: RFValue(30)
  },
  likeText: {
    color: "white",
    fontSize: RFValue(25),
    marginLeft: RFValue(5)
  }
});