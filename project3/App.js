import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Home from './src/Screens/Home';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import About from './src/Screens/About';
import Course from './src/Screens/Course';
import Contact from './src/Screens/Contact';
import ApiFlatlist from './src/Componenets/ApiFlatlistCourse';
import Courses from './src/Api/Courses';
import UserData from './src/Screens/UserData';

// const App = () => {
//   return (
//     <View style={styles.MainContainer}>
//       {/* <ApiFlatlist
//         image={Courses.image}
//         tittle={Courses.tittle}
//         description={Courses.description}
//       /> */}
//     </View>
//   );
// };
const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="About"
          component={About}
          options={{
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontSize: 20,
            },
          }}
        />

        <Stack.Screen
          name="Courses"
          component={Course}
          options={{
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontSize: 20,
            },
          }}
        />

        <Stack.Screen
          name="Contact"
          component={Contact}
          options={{
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontSize: 20,
            },
          }}
        />

        <Stack.Screen
          name="UserData"
          component={UserData}
          options={{
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontSize: 20,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    //display: 'flex',
    flex: 1,
    //padding: 100,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

export default App;
