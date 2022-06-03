
import React from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native';

const myComponent = () => {
  return(<View
  >
    <Text
      style={styles.helloView}
    >HELLO WORLD from myComponent</Text>
  </View>)
};

const styles=StyleSheet.create({
  helloView:
  {
    color:"green",
    textAlign:'center',
    fontSize:22
  }
});
export default myComponent;
