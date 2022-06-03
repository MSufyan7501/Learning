import React from 'react';
import MyComponent from './src/screen/MyComponent';
import MyFlatList from './src/screen/MyFlatList';
import splitLayoutProps from 'react-native/Libraries/StyleSheet/splitLayoutProps';
import ScrollFList from './src/screen/ScrollFList';
import ImageComponenent from './src/screen/ImageComponenet';
import ButtonComponenet from './src/screen/ButtonComponenet';
import NetflixCard from './src/Componenets/NetflixCard';
import Netflix2 from './src/Componenets/Netflix2';
import {View, StyleSheet, Text} from 'react-native';
import BoxModel from './src/Componenets/BoxModel';
import StateHook from './src/Componenets/StateHook';
import GenerateRandomColor from './src/Componenets/GenerateRandomColor';
import ApiCall from './src/Componenets/ApiCall';
import ApiFlatlist from './src/Componenets/ApiFlatlist';
import LoginForm from './src/Componenets/LoginForm';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//import {NavigationContainer} from '@react-navigation/native';
//import {createNativeStackNavigator} from '@react-navigation/native-stack';

const element1 = <Text>My name is Muhammad Sufyan</Text>;
const myUni = 'University of Central Punjab';
const getAll = (firstname, lastname, university) => {
  return `My name is ${firstname} ${lastname}. I am a student at ${university}`;
};
const App = () => {
  //const Stack = createNativeStackNavigator();
  const Stack = createNativeStackNavigator();

  return (
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="Login">
    //     <Stack.Screen name="Login" component={LoginForm} />
    //   </Stack.Navigator>
    // </NavigationContainer>

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginForm} />
        <Stack.Screen name="AfterLogin" component={ApiCall} />
      </Stack.Navigator>
    </NavigationContainer>
    // <View>
    //   <Text>ghjgj</Text>
    // </View>
  );
};

const styles = StyleSheet.create({
  helloView: {
    color: 'green',
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    padding: 10,
  },
  ViewStyle: {
    flex: 1,
    //height: '70%',
    backgroundColor: 'white',
    //alignContent: 'space-around',
    //    padding: 10,
    //justifyContent: 'center',
    //alignItems: 'center',
    //alignItems: 'center',
    //flexDirection: '',
  },
  abc: {
    //alignContent: 'center',
  },
});
export default App;

/* {element1}
    <Text>I am a student at {myUni}</Text>
    <Text style={styles.helloView}>
    {getAll("Muhammad","Sufyan","Universty of Central Punjab")}
    </Text>
    <MyComponent/>
    <Text>My List :: </Text>

    <MyFlatList /> 

    <ScrollFList/>
    <ButtonComponenet/>
    <ImageComponenent/>
      <ButtonComponenet />
      <NetflixCard />
      <BoxModel />
      <StateHook />
      <GenerateRandomColor />
<ApiCall />
      */
