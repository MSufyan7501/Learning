import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, TouchableOpacity, Image, Text, View} from 'react-native';

const ApiFlatlist = props => {
  const navigatior = useNavigation();
  return (
    <View style={styles.MainContainer}>
      <View style={styles.ImageContainer}>
        <Image
          style={styles.imageStyle}
          resizeMode="contain"
          source={props.image}
        />
      </View>
      <View style={styles.TextContainer}>
        <Text style={styles.TextHeader}>{props.tittle}</Text>

        <Text style={styles.desc}>{props.description}</Text>
        <View style={styles.CoursesView}>
          <Text style={styles.desc}>{props.c1}</Text>
          <Text style={styles.desc}>{props.c2}</Text>
          <Text style={styles.desc}>{props.c3}</Text>
        </View>
        <Text style={styles.TextHeader}>{props.price}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    width: '100%',
    backgroundColor: 'rgba(255,255,255,0.90)',
    marginVertical: 20,
    padding: 20,
    paddingHorizontal: 35,
    borderRadius: 5,
    textAlign: 'center',
    shadowColor: 'grey',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 8,
  },
  ImageContainer: {
    height: undefined,
    aspectRatio: 1,
    width: '100%',
  },
  TextContainer: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    position: 'relative',
  },
  TextHeader: {
    // marginTop: 50,

    color: '#344055',
    textTransform: 'uppercase',
    fontSize: 22,
    textAlign: 'center',
    width: '100%',
    marginBottom: 5,
    // width: '100%',
    // textAlign: 'right',
    // backgroundColor: 'blue',
  },
  desc: {
    textAlign: 'left',
    color: '#7d7d7d',
    fontSize: 13,
    marginTop: 3,
    lineHeight: 23,
    paddingBottom: 15,
  },

  imageStyle: {
    width: '100%',
    height: '100%',
    //marginHorizontal:,
    //padding: 10,
    alignSelf: 'center',
  },

  Text: {
    color: 'black',
    fontSize: 17,
    padding: 7,
    // textTransform: 'capitalize',
  },
  Btn: {
    // width: '100%',
    backgroundColor: 'skyblue',
    alignSelf: 'center',
    // alignItems: 'center',
    borderRadius: 5,
  },
  CoursesView: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
  },
});

export default ApiFlatlist;
