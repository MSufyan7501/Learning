import {StyleSheet, Text, Image, View} from 'react-native';
import React from 'react';

const About = () => {
  return (
    <View>
      <View style={styles.TextImageContainer}>
        <Text style={styles.Header}>Tech Xpert</Text>
        <Text style={styles.desc}>We Provide Free Online Courses</Text>
        <Image
          style={styles.ImageStyle}
          resizeMode="contain"
          source={{
            uri: 'https://media-exp1.licdn.com/dms/image/C4E0BAQF3hBoP4wM7wQ/company-logo_200_200/0/1623157875781?e=2147483647&v=beta&t=RUpcTD-2dvLyS-nCWIP7lYRFDBXguxvn0ZbHOYLB7bk',
          }}
        />
      </View>
      <View style={styles.AboutView}>
        <Text
          style={[
            styles.Header,
            {
              color: '#eee',
            },
          ]}>
          About Us
        </Text>
        <Text
          style={[
            styles.desc,
            {
              color: '#eee',
              // marginVertical: 15,
              fontSize: 15,
              marginTop: 15,
            },
          ]}>
          We provide free one-to-one tuition where tutor and student are not in
          the same room, or even the same continent. Online tuition and
          face-to-face tuition are often compared, but it's worth noting that
          online tuition uses live streaming video, so student and tutor are
          face-to-face, just not physically
        </Text>
      </View>

      <Text
        style={[
          styles.Header,
          {
            alignSelf: 'center',
            marginVertical: 29,
          },
        ]}>
        Follow Us on social media
      </Text>
      <View style={styles.FollowUsView}>
        <Image
          style={styles.iconStyle}
          resizeMode="contain"
          source={{
            uri: 'https://seeklogo.com/images/I/instagram-logo-041EABACE1-seeklogo.com.png',
          }}
        />
        <Image
          style={[
            styles.iconStyle,
            {
              height: 100,
              width: 100,
              marginVertical: 0,
            },
          ]}
          resizeMode="contain"
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL1uonK0OmOGlKftfGtiOrI48IVPgRVBjWttUxbTlkHKyZMrebZ8ZpA3bebyHeXguQHLA&usqp=CAU',
          }}
        />
        <Image
          style={styles.iconStyle}
          resizeMode="contain"
          source={{
            uri: 'https://www.kindpng.com/picc/m/114-1140229_transparent-twitter-icon-transparent-twitter-logo-png-png.png',
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  TextImageContainer: {
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 25,
  },
  AboutView: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginBottom: 25,
    backgroundColor: '#4c5dab',
    paddingVertical: '3%',
    paddingHorizontal: '10%',
  },
  ImageStyle: {
    aspectRatio: 1,
    height: 120,
    width: 150,
    borderRadius: 100,
  },
  iconStyle: {
    // aspectRatio: 1,
    height: 70,
    width: 70,
    borderRadius: 60,
    marginVertical: 14,
  },
  FollowUsView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

  Header: {
    // marginTop: 50,
    fontWeight: 'bold',
    color: '#344055',
    textTransform: 'uppercase',
    fontSize: 19,
  },
  desc: {
    textAlign: 'left',
    color: '#7d7d7d',
    fontSize: 18,
    marginTop: 5,
    lineHeight: 21,
    paddingBottom: 15,
  },
});

export default About;
