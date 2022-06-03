import React from 'react';
import {
  View,
  Pressable,
  Button,
  StyleSheet,
  Alert,
  Text,
  TouchableOpacity,
} from 'react-native';

const ButtonComponenet = () => {
  return (
    <View>
      <Text style={styles.textStyle}>This is Pressable Button</Text>
      <Pressable
        style={styles.buttonStyle}
        onPress={() => {
          Alert.alert('Hi from Alert');
        }}>
        <Text style={styles.textStyle}>Please Click</Text>
      </Pressable>
      <Text style={styles.textStyle}>This is Simple Button</Text>
      <Button
        style={styles.buttonStyle}
        title="Please Click"
        onPress={() => {
          Alert.alert('Hi from Alert');
        }}
      />
      <Text style={styles.textStyle}>This is TouchableOpacity Button</Text>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => {
          Alert.alert('Hi from Alert');
        }}>
        <Text>Please Click</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    width: '50%',
    height: '20%',
    borderRadius: 10,
    backgroundColor: 'red',
    marginTop: 20,
    fontSize: 15,
    alignItems: 'center',
    justifyContent: 'center',
    //    alignSelf: 'center',
    padding: 10,
  },
  textStyle: {
    padding: 10,
    color: 'white',
  },
});
export default ButtonComponenet;
