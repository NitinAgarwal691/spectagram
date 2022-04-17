import React,{Component} from 'react';
import { View,
    Text,
    StyleSheet,
    Image,
    SafeAreaView,
    Platform,
    StatusBar,
    TouchableOpacity
} from 'react-native';
import PostCard from './PostCard';
import { FlatList } from "react-native-gesture-handler";
import { RFValue } from 'react-native-responsive-fontsize';

let posts = require("./temp_stories.json");

export default class Feed extends Component {
    constructor(props) {
        super(props);
    }
    renderItem = ({ item: post }) => {
        return <PostCard post={post} navigation={this.props.navigation}/>;
      };
    keyExtractor = (item, index) => index.toString();
    render(){
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />
              <View style={styles.appTitle}>
                <View style={styles.appIcon}>
                  <Image
                    source={require("../assets/logo.png")}
                    style={styles.iconImage}
                  ></Image>
                </View>
                <View style={styles.appTitleTextContainer}>
                  <Text style={styles.appTitleText}>Storytelling App</Text>
                </View>
              </View>
              <View style={styles.cardContainer}>
                <FlatList
                  keyExtractor={this.keyExtractor}
                  data={posts}
                  renderItem={this.renderItem}
                />
              </View>
            </View>
          );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "skyblue"
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
      },
    appTitle: {
      flex: 0.07,
      flexDirection: "row"
    },
    appIcon: {
      flex: 0.2,
      justifyContent: "center",
      alignItems: "center"
    },
    iconImage: {
      width: "100%",
      height: "100%",
      resizeMode: "contain",
      marginBottom:28
    },
    appTitleTextContainer: {
      flex: 0.8,
      justifyContent: "center"
    },
    appTitleText: {
      color: "white",
      fontSize: RFValue(28),
      marginTop: RFValue(-28),
      marginLeft: RFValue(103)
    },
    cardContainer: {
      flex: 0.85
    }
  });
  