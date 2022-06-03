import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import ImageComponenentProps from '../Componenets/ImageComponentProps';
const ImageComponenent = () => {
  return (
    <View>
      <ImageComponenentProps
        imageText={'Image 1'}
        imageUri={require('../../asssets/photo.jpg')}
        imageUri2={{
          uri: 'https://picsum.photos/200/300',
        }}
      />
      <ImageComponenentProps
        imageText={'Image 2'}
        imageUri1={require('../../asssets/photo.jpg')}
        imageUri={{
          uri: 'https://picsum.photos/200/300',
        }}
      />
      <ImageComponenentProps
        imageText={'Image 3'}
        imageUri2={require('../../asssets/photo.jpg')}
        imageUri={{
          uri: 'https://picsum.photos/200/300',
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    color: 'white',
    fontSize: 25,
    //fontFamily:'monospace'
  },
  imageStyle: {
    width: 150,
    alignContent: 'center',
    height: 150,
    margin: 20,
    padding: 50,
  },
});
export default ImageComponenent;
