import React, {useState} from "react";
import {TouchableOpacity, View, Dimensions, StyleSheet} from "react-native";
import {Button} from "react-native-elements";
import {useNavigation} from "@react-navigation/native";

var {width} = Dimensions.get("window");

const BorderList = (props) => {
  const {item, border, data, borders, isDarkTheme} = props;
  const navigation = useNavigation();

  //console.log("DATAAAAAAAAAAAAAAAAAAAAA!!!!!!!!!!!!!!!!!!!!!!!!!");
  //console.log(border);

  //const [bordersData, setBordersData] = useState([]);
  // console.log("ITEMMMMM");
  //console.log(item.name);

  //console.log("data");
  //console.log(item.altSpellings[0]);
  /*
  const searchBorder = (text) => {
    setBordersData(
      data.filter((i) =>
        i.altSpellings[0].toLowerCase().includes(text.toLowerCase())
      )
    );


  };

  


  

  searchBorder(item.altSpellings[0]);

  console.log("Nombre", bordersData);*/

  /*
  for (let i = 0; i < item.borders.length; i++) {
    var elemento = item.borders[i];

    searchBorder(elemento.toString());
  }*/

  //console.log("Hola", bordersData);

  //console.log("BORDER");
  //console.log(borders);
  var datos;
  var btnNombre = "";
  var btnBorder = "";

  for (let i = 0; i < data.length; i++) {
    if (data[i].cca3 === border) {
      datos = data[i];
    }
  }

  //console.log(datos);
  //devolvemos el nombre del boton
  const btnName = (text) => {
    btnNombre = datos.name.common;
    setBorderFunction();
    return btnNombre;
  };
  //devolvemos las siglas del border
  const setBorderFunction = () => {
    btnBorder = datos.cca3;
    return btnBorder;
  };

  return (
    <TouchableOpacity>
      <Button
        titleStyle={{color: isDarkTheme ? "#FFFFFF" : "#222C36"}}
        title={btnName(border)}
        buttonStyle={[
          styles.btnStyle,
          isDarkTheme ? styles.backgroundDark : styles.backgroundLight,
        ]}
        onPress={() =>
          navigation.navigate("BorderInfo", {
            item,
            data,
            border,
            btnNombre,
            btnBorder,
            isDarkTheme,
          })
        }
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnStyle: {
    borderRadius: 3,
    margin: 10,
  },
  backgroundDark: {
    backgroundColor: "#37474f",
  },
  backgroundLight: {
    backgroundColor: "#eeeeee",
  },
  textDark: {
    color: "#FFFFFF",
  },
  textLight: {
    color: "#222C36",
  },
});

export default BorderList;
