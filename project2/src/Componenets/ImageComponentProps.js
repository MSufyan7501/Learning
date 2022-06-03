import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const ImageComponentProps = props => {
  return (
    <View style={{alignSelf: 'center'}}>
      <Text>{props.imageText}</Text>
      <Image style={styles.imageStyle} source={props.imageUri} />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    color: 'white',
    fontSize: 25,
    //padding: 20,
    //fontFamily:'monospace'
  },
  imageStyle: {
    width: 150,
    height: 200,
    margin: 20,
    padding: 50,
    alignSelf: 'center',
  },
});
export default ImageComponentProps;
