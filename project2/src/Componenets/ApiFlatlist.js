import React from 'react';
import {StyleSheet, Image, Text, View} from 'react-native';

const ApiFlatlist = props => {
  return (
    <View style={styles.MainContainer}>
      <View style={styles.ImageContainer}>
        <Image
          style={styles.imageStyle}
          source={{uri: 'https://picsum.photos/200/300'}}
        />
      </View>
      <View style={styles.TextContainer}>
        <Text style={styles.HeaderText}>Bio-Data</Text>
        <Text style={styles.Id}>
          {props.Id < 10 ? `#0${props.Id}` : `#${props.Id}`}
        </Text>
        <Text style={styles.TextStyle}>Name : {props.Name}</Text>
        <Text style={styles.TextStyle}>Email : {props.Email}</Text>
        <Text style={styles.TextStyle}>Website : {props.Website}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    //borderWidth: 1,
    borderColor: 'black',
    width: 250,
  },
  ImageContainer: {
    borderTopStartRadius: 4,
    borderTopEndRadius: 4,
    height: 200,
    width: '100%',
    borderColor: 'white',
    borderWidth: 9,
    //marginRight: 120,
  },
  TextContainer: {
    marginTop: 1,
    borderBottomLeftRadius: 4,
    borderBottomEndRadius: 4,
    borderColor: 'red',
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: 'black',
    position: 'relative',
    paddingBottom: 15,
    marginBottom: 20,
  },
  HeaderText: {
    fontSize: 25,
    paddingHorizontal: 5,
    paddingTop: 14,
    paddingBottom: 17,
    color: 'white',
  },
  TextStyle: {
    fontSize: 15,
    paddingVertical: 5,
    paddingHorizontal: 10,
    color: 'grey',
  },
  Id: {
    position: 'absolute',
    top: 21,
    right: 3,
  },
  imageStyle: {
    width: '100%',
    height: '100%',
    //marginHorizontal:,
    //padding: 10,
    alignSelf: 'center',
  },
});

export default ApiFlatlist;
