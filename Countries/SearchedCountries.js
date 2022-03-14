import React from "react";
import {View, StyleSheet, Dimensions, Text, ScrollView} from "react-native";
import {ListItem, Avatar} from "react-native-elements";
import {useNavigation} from "@react-navigation/native";

var {width} = Dimensions.get("window");

const SearchedCountries = (props) => {
  const {productsSearch, navigation, data, isDarkTheme} = props;

  //console.log("data");
  //console.log(data);

  return (
    <ScrollView
      keyboardShouldPersistTaps="always"
      style={[isDarkTheme ? styles.backgroundDark : styles.backgroundLight]}
    >
      {productsSearch.length > 0 ? (
        productsSearch.map((item) => (
          <ListItem
            containerStyle={{
              backgroundColor: isDarkTheme ? "#222C36" : "#FFFFFF",
            }}
            key={item.name.official}
            onPress={() => {
              navigation.navigate("Details", {
                item,
                data,
                navigation,
                isDarkTheme,
              });
            }}
          >
            <Avatar source={{uri: item.flags.png}} />
            <ListItem.Content>
              <ListItem.Title
                style={{color: isDarkTheme ? "#FFFFFF" : "#222C36"}}
              >
                {item.name.official}{" "}
              </ListItem.Title>
            </ListItem.Content>
          </ListItem>
        ))
      ) : (
        <View
          style={{
            backgroundColor: isDarkTheme ? "#222C36" : "#FFFFFF",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <Text
            style={{
              color: isDarkTheme ? "#FFFFFF" : "#222C36",
              height: 600,

              alignSelf: "center",
            }}
          >
            No countries found
          </Text>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  backgroundDark: {
    backgroundColor: "#2D3742",
    width: width,
  },
  backgroundLight: {
    backgroundColor: "#FFFFFF",
    width: width,
  },
});

export default SearchedCountries;
