import {useNavigation} from "@react-navigation/native";
import React from "react";
import {TouchableOpacity, View, Dimensions, Text} from "react-native";

//componente
import CountryCard from "./CountryCard";

var {width} = Dimensions.get("window");

const CountryList = (props) => {
  const {item, data, datos, isDarkTheme} = props;

  //console.log(item);
  //const {name} = item;
  //const {official} = name;

  //console.log(official);
  //console.log(item.name.official);
  //console.log(item.name.official);

  const navigation = useNavigation();
  //console.log(navigation);
  //console.log(navigation);
  //const {navigation} = navigation;
  //console.log(navigation);
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("Details", {item, data, datos, isDarkTheme})
      }
    >
      <View style={{backgroundColor: isDarkTheme ? "#222C36" : "#FFFFFF"}}>
        <CountryCard item={item} isDarkTheme={isDarkTheme} />
      </View>
    </TouchableOpacity>
  );
};

export default CountryList;
