import {StyleSheet, TouchableOpacity, Image, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Menu = () => {
  const navigatior = useNavigation();
  return (
    <View style={styles.MainContainer}>
      <TouchableOpacity
        onPress={() => {
          navigatior.navigate('Courses');
        }}>
        <Image
          style={styles.IconStyle}
          //   resizeMode="center"
          source={{
            uri: 'https://img.icons8.com/stickers/90/000000/training.png',
          }}
        />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigatior.navigate('UserData');
        }}>
        <Image
          style={styles.IconStyle}
          //   resizeMode="center"
          source={{
            uri: 'https://img.icons8.com/stickers/100/000000/conference.png',
          }}
        />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigatior.navigate('About');
        }}>
        <Image
          style={styles.IconStyle}
          //   resizeMode="center"
          source={{
            uri: 'https://img.icons8.com/stickers/100/000000/about.png',
          }}
        />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigatior.navigate('Contact');
        }}>
        <Image
          style={styles.IconStyle}
          //   resizeMode="center"
          source={{
            uri: 'https://img.icons8.com/stickers/100/000000/phone-office.png',
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  IconStyle: {
    width: '100%',
    height: 50,
    aspectRatio: 1,
  },
  Text: {
    color: 'black',
    fontSize: 17,
  },
});

export default Menu;
