import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Linking,
  Image,
} from 'react-native';

const NetflixCard = () => {
  return (
    <View style={styles.Container}>
      <Text style={styles.Header}>Netflix Card</Text>
      <View style={styles.border}>
        <Image
          style={styles.ImageStyle}
          source={require('../../asssets/WalkingDeadCard.jpg')}
        />
        <Text style={styles.textStyle}>Walking Dead Season 3</Text>
        <Text style={styles.descTextStyle}>
          The Walking Dead tells the story of the months and years that follow
          after a zombie apocalypse. It follows a group of survivors, led by
          former police officer Rick Grimes, who travel in search of a safe and
          secure home
        </Text>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() =>
            Linking.openURL('https://www.youtube.com/watch?v=xnivgjDZUSI')
          }>
          <Text style={styles.textStyleBtn}>Watch Trailer</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ImageStyle: {
    width: '100%',
    height: 300,
  },
  Container: {
    //marginHorizontal: 20,
    //padding: 10,
    //alignItems: 'center',
    //justifyContent: 'center',
    flex: 1,
  },
  Header: {
    fontWeight: 'bold',
    fontSize: 30,
    color: '#800000',
    //color: 'black',
    paddingBottom: 10,
    alignSelf: 'center',
    fontFamily: 'sans-serif-condensed',
    fontStyle: 'italic',
  },
  textStyle: {
    fontWeight: 'bold',
    fontSize: 20,
    //color: '#800000',
    color: 'black',
    //paddingBottom: 10,
    alignSelf: 'center',
    fontFamily: 'sans-serif',
  },
  border: {
    borderWidth: 1,
    width: 250,
    //marginHorizontal: 20,
    alignSelf: 'center',
    alignItems: 'center',
    //justifyContent: 'space-around',
    height: 540,
  },
  descTextStyle: {
    //fontWeight: 'bold',
    fontSize: 16,
    color: '#800000',
    //paddingBottom: 10,
    marginTop: 5,
    marginHorizontal: 17,
    alignSelf: 'center',
  },
  buttonStyle: {
    width: 100,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#800000',
    marginTop: 10,
    fontSize: 15,
    alignItems: 'center',
    justifyContent: 'center',
    //    alignSelf: 'center',
    //padding: 0   sel
    //alignSelf:''
  },
  textStyleBtn: {
    padding: 10,
    color: 'white',
    fontSize: 13,
  },
});

export default NetflixCard;
