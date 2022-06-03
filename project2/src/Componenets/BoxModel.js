import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const BoxModel = () => {
  return (
    <View style={styles.parentView}>
      <Text style={[styles.TextStyle1, styles.commonProps]}>Box l</Text>
      <Text style={[styles.TextStyle2, styles.commonProps]}>Box 2</Text>
      <View style={styles.subView}>
        <Text style={[styles.TextStyle3, styles.commonProps]}>Box 3</Text>
      </View>
      <Text style={[styles.TextStyle4, styles.commonProps]}>Box 4</Text>
      <Text style={[styles.TextStyle5, styles.commonProps]}>Box 5</Text>
      {/* <Text style={[styles.TextStyle3, styles.commonProps]}>Box 6</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  TextStyle1: {
    backgroundColor: 'green',
    color: 'black',
    borderColor: 'black',
  },

  TextStyle2: {
    backgroundColor: 'blue',
    color: 'black',
    //    borderWidth: 3,
    borderColor: 'black',
    right: 0,
  },

  TextStyle4: {
    backgroundColor: 'red',
    color: 'black',
    borderColor: 'black',
    bottom: 0,
    right: 0,
  },

  TextStyle5: {
    backgroundColor: 'blue',
    color: 'black',
    //    borderWidth: 3,
    borderColor: 'black',
    left: 0,
    bottom: 0,
  },

  TextStyle3: {
    backgroundColor: 'red',
    color: 'black',
    borderColor: 'black',
  },

  commonProps: {
    //width: '30%',
    //height: 60,
    fontSize: 20,
    padding: 10,
    borderWidth: 1,
    position: 'absolute',
  },

  parentView: {
    width: '95%',
    height: '70%',
    marginTop: 100,
    marginHorizontal: 10,
    borderWidth: 5,
    borderColor: 'black',
    // flexDirection: 'column',
    // justifyContent: 'space-between',
    // //alignItems: 'center',

    flexDirection: 'column',
    //justifyContent: 'space-around',
    alignItems: 'flex-start',
    position: 'relative',
  },

  subView: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default BoxModel;
