import React from "react";
import {StyleSheet, View, Dimensions, Image, Text, Button} from "react-native";

var {width} = Dimensions.get("window");

const CountryCard = (props) => {
  const {item, isDarkTheme} = props;
  //console.log("COUNTRY CARD");
  //console.log(isDarkTheme);

  //console.log(item.flags.png);
  //console.log(item.name.official);
  return (
    <View
      style={[
        styles.container,
        isDarkTheme ? styles.backgroundDark : styles.backgroundLight,
      ]}
    >
      <Image
        style={styles.flagImage}
        resizeMode="cover"
        source={{uri: item.flags.png.toString()}}
      />
      <Text
        style={[
          styles.countryName,
          isDarkTheme ? styles.textDark : styles.textLight,
        ]}
      >
        {" "}
        {item.name.official}{" "}
      </Text>

      <View style={{flexDirection: "row", marginTop: 20}}>
        <Text
          style={[
            styles.infoBold,
            isDarkTheme ? styles.textDark : styles.textLight,
          ]}
        >
          Population:
        </Text>
        <Text
          style={[
            styles.info,
            isDarkTheme ? styles.textDark : styles.textLight,
          ]}
        >
          {" "}
          {item.population}{" "}
        </Text>
      </View>
      <View style={{flexDirection: "row", marginTop: 10}}>
        <Text
          style={[
            styles.infoBold,
            isDarkTheme ? styles.textDark : styles.textLight,
          ]}
        >
          Region:
        </Text>
        <Text
          style={[
            styles.info,
            isDarkTheme ? styles.textDark : styles.textLight,
          ]}
        >
          {" "}
          {item.region}{" "}
        </Text>
      </View>
      <View style={{flexDirection: "row", marginTop: 10}}>
        <Text
          style={[
            styles.infoBold,
            isDarkTheme ? styles.textDark : styles.textLight,
          ]}
        >
          Capital:
        </Text>
        <Text
          style={[
            styles.info,
            isDarkTheme ? styles.textDark : styles.textLight,
          ]}
        >
          {" "}
          {item.capital}{" "}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  flagImage: {
    width: width - 100,
    height: width - 200,
    backgroundColor: "transparent",
    borderRadius: 10,
  },
  container: {
    height: 350,
    width: width - 100,

    borderRadius: 10,
    marginTop: 0,
    marginBottom: 50,
    elevation: 40,
  },
  backgroundDark: {
    backgroundColor: "#2D3742",
  },
  backgroundLight: {
    backgroundColor: "#FFFFFF",
  },
  textDark: {
    color: "#FFFFFF",
  },
  textLight: {
    color: "#222C36",
  },

  countryName: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "left",
    marginLeft: 20,
    marginTop: 25,
  },
  infoBold: {
    fontWeight: "bold",
    marginLeft: 25,
  },
});

export default CountryCard;
