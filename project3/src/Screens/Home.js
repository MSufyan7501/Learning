import {StyleSheet, Text, Image, View} from 'react-native';
import React from 'react';
import Menu from '../Componenets/Menu';

const Home = props => {
  const description =
    'We make world-changing innovation that improves the existences of each individual on earth. We are enlivened to drive advancement that makes the world more attractive';
  return (
    <View style={styles.MainContainer}>
      <View style={styles.ImageContainer}>
        <Image
          style={styles.ImageStyle}
          resizeMode="contain"
          source={{
            uri: 'https://media-exp1.licdn.com/dms/image/C4E0BAQF3hBoP4wM7wQ/company-logo_200_200/0/1623157875781?e=2147483647&v=beta&t=RUpcTD-2dvLyS-nCWIP7lYRFDBXguxvn0ZbHOYLB7bk',
          }}
        />

        <Text style={styles.TextHeader}>Welcome To</Text>

        <Text
          style={[
            styles.TextHeader,
            {
              color: '#4c5dab',
              fontSize: 37,
              textTransform: 'capitalize',
            },
          ]}>
          Tech Xpert
        </Text>
        <Text style={styles.desc}>{description}</Text>
      </View>

      <View style={styles.MenuView}>
        <View style={styles.Line} />
        <Menu />
        <View style={[styles.Line, {marginTop: 10}]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    //display: 'flex',
    flex: 1,
    height: '60%',
    padding: '3%',
    backgroundColor: 'white',
    //justifyContent:
  },
  ImageContainer: {
    padding: '3%',
    paddingTop: 0,
    //backgroundColor: 'red',
    display: 'flex',
    // borderWidth: 1,
    alignItems: 'center',
    textAlign: 'center',
    // justifyContent: 'center',
  },
  ImageStyle: {
    marginTop: 50,
    marginBottom: 30,
    // borderColor: 'red',
    borderWidth: 1,

    height: 200,
    // aspectRatio: 1,
    width: '100%',
    alignContent: 'stretch',
    borderRadius: 20,
  },
  TextHeader: {
    // marginTop: 50,

    color: '#344055',
    textTransform: 'uppercase',
    fontSize: 30,
  },
  desc: {
    textAlign: 'left',
    color: '#7d7d7d',
    fontSize: 19,
    marginTop: 20,
    lineHeight: 24,
    paddingBottom: 50,
  },
  MenuView: {
    marginTop: '40%',
    marginHorizontal: '3%',
  },
  Line: {
    borderWidth: 0.3,
    borderColor: 'black',
    marginBottom: 10,
  },
});

export default Home;
