import React, {useState, useEffect} from "react";
import {StatusBar} from "expo-status-bar";
import {StyleSheet, Text, View, FlatList, ScrollView} from "react-native";

//navigation
import {
  NavigationContainer,
  useNavigation,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {Icon, SearchBar} from "react-native-elements";
import DropDownPicker from "react-native-dropdown-picker";

//importaciones de otros componentes
import CountryList from "./Countries/CountryList";
import CountryDetails from "./Countries/CountryDetails";
import SearchedCountries from "./Countries/SearchedCountries";
import BorderList from "./Countries/BorderList";
import BorderInfo from "./Countries/BorderInfo";

function HomeScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const navigation = useNavigation();
  const [datos, setDatos] = useState([]);

  const [search, setSearch] = useState("");
  const [productsSearch, setProductsSearch] = useState([]);
  const [focus, setFocus] = useState(false);

  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    console.log(isDarkTheme);
  };

  //drop down
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: "All", value: "All"},
    {label: "Africa", value: "Africa"},
    {label: "America", value: "Americas"},
    {label: "Asia", value: "Asia"},
    {label: "Europe", value: "Europe"},
    {label: "Oceania", value: "Oceania"},
  ]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setIsLoading(false));

    //console.log(data.name.official);
  }, []);

  //var datos = data;

  const searchBar = (text) => {
    setProductsSearch(
      data.filter((i) =>
        i.name.official.toLowerCase().includes(text.toLowerCase())
      )
    );
  };

  //console.log("ESTAMOS EN APPJS");
  //console.log(data);
  //var result;

  const setFilter = (text) => {
    if (text === "All") {
      setDatos(data);
    } else {
      setRegionFilterDropDown(text);
    }
  };

  const setRegionFilterDropDown = (text) => {
    setDatos(data.filter((i) => i.region.includes(text)));
  };

  //console.log(data.length);

  //console.log(regionFilter[2]);

  const openList = () => {
    setFocus(true);
    //console.log(focus);
  };

  const onBlur = () => {
    setFocus(false);
    //console.log(focus);
  };

  return (
    <View style={{backgroundColor: isDarkTheme ? "#222C36" : "#FAFAFA"}}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "baseline",
          position: "relative",
          alignSelf: "flex-end",
          right: 5,
          backgroundColor: isDarkTheme ? "#222C36" : "#FAFAFA",
        }}
      >
        <Icon
          type="ionicon"
          name={isDarkTheme ? "moon" : "moon-outline"}
          size={30}
          onPress={toggleTheme}
          color={isDarkTheme ? "#FFFFFF" : "#222C36"}
        />
        <Text
          style={{
            color: isDarkTheme ? "#FFFFFF" : "#222C36",
            fontSize: 20,
            marginLeft: 20,
          }}
        >
          Dark Mode
        </Text>
      </View>

      <SearchBar
        placeholder="Search for a country..."
        onChangeText={(text) => searchBar(text)}
        value={search}
        onFocus={openList}
        onBlur={onBlur}
        containerStyle={{
          backgroundColor: isDarkTheme ? "#37474f" : "#FFFFFF",
          borderBottomColor: "transparent",
          borderTopColor: "transparent",
          borderRadius: 10,
          elevation: 30,
          marginLeft: 10,
          marginRight: 10,
        }}
        inputStyle={{
          backgroundColor: isDarkTheme ? "#37474f" : "#FFFFFF",
          borderWidth: 0,
          borderRadius: 10,
        }}
        inputContainerStyle={{
          backgroundColor: isDarkTheme ? "#37474f" : "#FFFFFF",
        }}
      />

      {focus == true ? (
        <SearchedCountries
          productsSearch={productsSearch}
          navigation={navigation}
          data={data}
          isDarkTheme={isDarkTheme}
        />
      ) : (
        <View>
          <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            style={{width: 200}}
            containerStyle={{width: 200}}
            placeholder="Filter by Region"
            onChangeValue={(text) => {
              setFilter(text);
            }}
            theme={isDarkTheme ? "DARK" : "LIGHT"}
          />

          <ScrollView>
            <View style={styles.listado}>
              {datos.map((item) => {
                return (
                  <CountryList
                    //navigation={navigation}
                    isDarkTheme={isDarkTheme}
                    datos={datos}
                    data={data}
                    item={item}
                    key={item.name.official}
                  />
                );
              })}
            </View>
          </ScrollView>
        </View>
      )}
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={CountryDetails} />
        <Stack.Screen name="BorderInfo" component={BorderInfo} />
        <Stack.Screen name="CountryList" component={CountryList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  listado: {
    flex: 1,
    paddingTop: 5,
    paddingLeft: 5,

    alignItems: "center",
    justifyContent: "center",
    marginBottom: 400,
  },
});
