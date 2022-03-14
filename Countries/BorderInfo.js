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
console.log("ESTAMOS EN BORDER INFO");

const BorderInfo = ({route}) => {
  const {item, data, navigation, btnNombre, btnBorder, isDarkTheme} =
    route.params;
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

  //console.log(btnNombre);

  //const [bordersData, setBordersData] = useState([]);

  var datos;

  //const nombre = "Saint Martin";

  /*
  const searchBorder = () => {
    setBordersData(
      data.filter(
        (i) =>
          console.log(
            i.name.official.toLowerCase().includes(nombre.toLowerCase())
          )
        //.includes(text.toLowerCase())
      )
    );
  };*/

  //searchBorder();

  //searchBorder(btnNombre);

  //console.log(btnNombre);

  //console.log(data[0].altSpellings[0]);
  //console.log("BTN NOMBRE");
  //console.log(btnNombre);
  for (let i = 0; i < data.length; i++) {
    //console.log(data[i].cca3);

    if (data[i].cca3 === btnBorder) {
      datos = data[i];
    }
  }

  //console.log(datos.name.official);

  //console.log(bordersData);

  // console.log(item.borders);

  const keyCurrencies = Object.keys(datos.currencies);
  const keyLanguages = Object.keys(datos.languages);
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
    currencyArray.push(datos.currencies[llaveCurrencies[i]].name.toString());
  }

  //llenamos language array
  for (let i = 0; i < keyLanguages.length; i++) {
    LanguageArray.push(datos.languages[llaveLanguage[i]].toString());
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
          source={{uri: datos.flags.png.toString()}}
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
          {datos.name.official}{" "}
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
          {datos.name.common}{" "}
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
          {datos.population}{" "}
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
          {datos.region}{" "}
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
          {datos.subregion}{" "}
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
          {datos.capital}{" "}
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
          {datos.tld.join()}{" "}
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
            styles.infoCurrencies,
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
      {/* 
{borders === undefined ? null : (
        <View style={{marginTop: 40}}>
          <Text style={styles.borderCountries}>Border Countries:</Text>

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
                  navigation={navigation}
                  key={capital}
                />
              );
            })}
          </View>
        </View>
      )}
*/}
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
  borderCountries: {
    fontWeight: "bold",
    fontSize: 25,
    marginLeft: 30,
  },
  infoLanguages: {
    right: 20,
    alignContent: "flex-end",
  },
  infoCurrencies: {
    right: 20,
    alignContent: "stretch",
    flex: 1,
    marginLeft: 20,
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
  languageFormat: {
    fontWeight: "normal",
  },
});

export default BorderInfo;
