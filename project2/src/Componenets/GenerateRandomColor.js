import React from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {useState} from 'react/cjs/react.development';

const GenerateRandomColor = () => {
  const [Color, setColor] = useState([]);

  const randomColor = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red},${green},${blue})`;
  };
  return (
    <View style={styles.MainContainer}>
      <View style={styles.FlatListContainer}>
        <FlatList
          data={Color}
          renderItem={({item}) => {
            //            console.log(item);
            return (
              <View style={styles.ImageContainer}>
                <Text style={[{backgroundColor: item}, styles.ImageText]}>
                  {item}
                </Text>
              </View>
            );
          }}
        />
      </View>
      <TouchableOpacity
        style={styles.Btn}
        onPress={() => {
          //Alert.alert(randomColor());
          setColor([...Color, randomColor()]);
        }}>
        <Text style={styles.BtnText}>generate random color</Text>
      </TouchableOpacity>
      {/* </View> */}
      {/* <View style={styles.ImageContainer}>
        <Text style={[{backgroundColor: randomColor()}, styles.ImageText]}>
          {randomColor()}
        </Text>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    //    height: '60%',
    height: '95%',
    marginHorizontal: 20,
    marginTop: 10,
    alignItems: 'center',
    //borderWidth: 1,
  },
  FlatListContainer: {
    //marginBottom: 20,
    //flex: 1,
    //paddingVertical: 60,
    height: '90%',
    //borderWidth: 1,
    marginTop: 20,
    marginBottom: 20,
    //marginBottom: 120,
    paddingBottom: 10,
  },
  Btn: {
    //height: 50,
    width: '100%',
    paddingVertical: 12,
    paddingHorizontal: 60,
    backgroundColor: 'indigo',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
  },
  BtnText: {
    fontSize: 17,
    textTransform: 'uppercase',
    fontStyle: 'italic',
  },
  ImageContainer: {
    width: '80%',

    //justifyContent: 'center',
    marginHorizontal: 30,
    //flex: 1,
    //height:
    //marginTop: 100,
  },
  ImageText: {
    width: '100%',
    //height: 250,
    padding: 34,
    fontSize: 20,
    marginTop: 25,
    color: 'black',
    borderRadius: 18,
    //alignSelf: 'center',
    textAlign: 'center',
  },
});

export default GenerateRandomColor;
