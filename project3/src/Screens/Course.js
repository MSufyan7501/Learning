import {StyleSheet, Text, FlatList, View} from 'react-native';
import React from 'react';
import ApiFlatlist from '../../src/Componenets/ApiFlatlistCourse';
import Courses from '../../src/Api/Courses';

const Course = navigation => {
  return (
    <View style={styles.MainCourseView}>
      <FlatList
        data={Courses}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return (
            <View>
              <ApiFlatlist
                // Navigator={navigation.navigate('CourseDetails')}
                image={item.image}
                tittle={item.tittle}
                description={item.description}
                c1={item.course1}
                c2={item.course2}
                c3={item.course3}
                price={item.price}
              />
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  MainCourseView: {
    flex: 1,
    alignItems: 'center',
    padding: '10%',
    // paddingHorizontal: '1%',
  },
});

export default Course;
