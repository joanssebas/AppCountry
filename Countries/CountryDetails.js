import React, {useState} from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions,
} from "react-native";
import BorderList from "./BorderList";

var {width, height} = Dimensions.get("window");

const CountryDetails = ({route}) => {
  const {item, data, navigation, datos, isDarkTheme} = route.params;
  const {
    name,
    population,
    region,
    subregion,
    capital,
    tld,
    currencies,
    languages,
    borders,
    nativeName,
    flags,
  } = item;
  const {official} = name;

  const keyCurrencies = Object.keys(currencies);
  const keyLanguages = Object.keys(languages);
  //console.log("llave");
  //console.log(keyCurrencies[0]);
  var llaveCurrencies = [];
  var currencyArray = [];

  var llaveLanguage = [];
  var LanguageArray = [];

  //llenamos llave currencies
  for (let j = 0; j < keyCurrencies.length; j++) {
    llaveCurrencies.push(keyCurrencies[j]);
  }

  //llenamos llave languages
  for (let j = 0; j < keyLanguages.length; j++) {
    llaveLanguage.push(keyLanguages[j]);
  }

  //console.log(currencies[llave].name);

  //llenamos currency array
  for (let i = 0; i < keyCurrencies.length; i++) {
    currencyArray.push(currencies[llaveCurrencies[i]].name.toString());
  }

  //llenamos language array
  for (let i = 0; i < keyLanguages.length; i++) {
    LanguageArray.push(languages[llaveLanguage[i]].toString());
  }

  //console.log(currencyArray);
  //formateamos los arreglos
  var currenciArrayFormated = currencyArray.join();
  var LanguageArrayFormated = LanguageArray.join();
  //console.log(currenciArrayFormated);

  //console.log(item.name.official);
  return (
    <ScrollView
      style={{
        backgroundColor: isDarkTheme ? "#2D3742" : "#FFFFFF",
      }}
    >
      <View
        style={[
          styles.container,
          isDarkTheme ? styles.backgroundDark : styles.backgroundLight,
        ]}
      >
        <Image
          style={styles.flagImage}
          resizeMode="contain"
          source={{uri: flags.png.toString()}}
        />
      </View>
      <View style={{marginTop: 10}}>
        <Text
          style={[
            styles.countryName,
            isDarkTheme ? styles.textDark : styles.textLight,
          ]}
        >
          {" "}
          {official}{" "}
        </Text>
      </View>
      <View style={{flexDirection: "row", marginTop: 20}}>
        <Text
          style={[
            styles.infoBold,
            isDarkTheme ? styles.textDark : styles.textLight,
          ]}
        >
          Native Name:
        </Text>
        <Text
          style={[
            styles.info,
            isDarkTheme ? styles.textDark : styles.textLight,
          ]}
        >
          {" "}
          {name.common}{" "}
        </Text>
      </View>
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
          {population}{" "}
        </Text>
      </View>
      <View style={{flexDirection: "row", marginTop: 20}}>
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
          {region}{" "}
        </Text>
      </View>
      <View style={{flexDirection: "row", marginTop: 20}}>
        <Text
          style={[
            styles.infoBold,
            isDarkTheme ? styles.textDark : styles.textLight,
          ]}
        >
          Sub Region:
        </Text>
        <Text
          style={[
            styles.info,
            isDarkTheme ? styles.textDark : styles.textLight,
          ]}
        >
          {" "}
          {subregion}{" "}
        </Text>
      </View>
      <View style={{flexDirection: "row", marginTop: 20}}>
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
          {capital}{" "}
        </Text>
      </View>
      <View style={{flexDirection: "row", marginTop: 20}}>
        <Text
          style={[
            styles.infoBold,
            isDarkTheme ? styles.textDark : styles.textLight,
          ]}
        >
          Top Level Domain:
        </Text>
        <Text
          style={[
            styles.info,
            isDarkTheme ? styles.textDark : styles.textLight,
          ]}
        >
          {" "}
          {tld.join()}{" "}
        </Text>
      </View>

      <View style={{flexDirection: "row", marginTop: 20}}>
        <Text
          style={[
            styles.infoBold,
            isDarkTheme ? styles.textDark : styles.textLight,
          ]}
        >
          currencies:
        </Text>
        <Text
          style={[
            styles.info,
            isDarkTheme ? styles.textDark : styles.textLight,
          ]}
        >
          {" "}
          {currenciArrayFormated}{" "}
        </Text>
      </View>
      <View style={{flexDirection: "row", marginTop: 20}}>
        <Text
          style={[
            styles.infoBold,
            isDarkTheme ? styles.textDark : styles.textLight,
          ]}
        >
          Languages:
          <Text
            style={[
              styles.languageFormat,
              isDarkTheme ? styles.textDark : styles.textLight,
            ]}
          >
            {LanguageArrayFormated}
          </Text>{" "}
        </Text>
      </View>

      {borders === undefined ? null : (
        <View style={{marginTop: 40}}>
          <Text
            style={[
              styles.borderCountries,
              isDarkTheme ? styles.textDark : styles.textLight,
            ]}
          >
            Border Countries:
          </Text>

          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              margin: 8,
              marginLeft: 30,
            }}
          >
            {borders.map((border) => {
              return (
                <BorderList
                  border={border}
                  item={item}
                  data={data}
                  datos={datos}
                  navigation={navigation}
                  key={border}
                  borders={borders}
                  isDarkTheme={isDarkTheme}
                />
              );
            })}
          </View>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: width,

    borderRadius: 10,

    marginBottom: 5,

    elevation: 40,

    alignItems: "center",
  },
  flagImage: {
    width: width - 60,
    height: width - 100,
    backgroundColor: "transparent",

    justifyContent: "center",
    alignItems: "center",
  },
  countryName: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "left",
    marginLeft: 25,
    marginTop: 20,
  },
  infoBold: {
    fontWeight: "bold",
    marginLeft: 30,
  },
  backgroundDark: {
    backgroundColor: "#2D3742",
  },
  backgroundLight: {
    backgroundColor: "#FFFFFF",
  },
  borderCountries: {
    fontWeight: "bold",
    fontSize: 25,
    marginLeft: 30,
  },
  infoLanguages: {
    right: 20,
    alignContent: "flex-end",
  },
  textDark: {
    color: "#FFFFFF",
  },
  textLight: {
    color: "#222C36",
  },
  languageFormat: {
    fontWeight: "normal",
  },
});

export default CountryDetails;
