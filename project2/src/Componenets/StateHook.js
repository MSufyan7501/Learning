import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useState} from 'react/cjs/react.development';

const StateHook = () => {
  const [count, SetCount] = useState(0);
  return (
    <View style={styles.parentView}>
      <Text style={styles.textView}>{count}</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          SetCount(count + 10);
        }}>
        <Text style={styles.btnTextView}>+ 10</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          SetCount(0);
        }}>
        <Text style={styles.btnTextView}>Reset</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          if (count > 0) SetCount(count - 10);
        }}>
        <Text style={styles.btnTextView}>- 10</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  parentView: {
    borderWidth: 1,
    height: '90%',
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  textView: {
    //width: ,
    color: 'black',
    fontSize: 35,
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    alignSelf: 'center',
    //paddingRi: 11,
  },
  button: {
    height: 90,
    width: 170,
    marginTop: 50,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  btnTextView: {
    fontSize: 25,
  },
});

export default StateHook;
