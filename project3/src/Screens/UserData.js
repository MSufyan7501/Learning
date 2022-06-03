import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import ApiFlatlist from '../Componenets/ApiFlatlistStudents';

const UserData = () => {
  const [myData, setmyData] = useState();
  const [Loading, setLoading] = useState(true);

  const getAllUsers = async () => {
    try {
      //console.log('helooo');
      const response = await fetch(
        'https://thapatechnical.github.io/userapi/users.json',
      );
      const Users = await response.json();
      setmyData(Users);
    } catch (error) {
      console.log(error);
    }
  };
  // console.log('abc');
  useEffect(() => {
    // console.log('heloo');
    getAllUsers();
  }, []);

  return (
    <View style={styles.MainContainer}>
      <Text style={styles.TextStyle}>List of students</Text>
      <FlatList
        data={myData}
        keyExtractor={item => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => {
          return (
            <View>
              <ApiFlatlist
                Image={{uri: item.image}}
                Email={item.email}
                Name={item.name}
                Website={item.website}
                Id={item.id}
              />
            </View>
          );
        }}
      />
      {/* <View>
        <Text>item.id</Text>
        <Text>item.name</Text>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    width: '100%',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#fff',
  },
  TextStyle: {
    fontSize: 30,
    padding: 20,
    color: 'purple',
    textTransform: 'capitalize',
    fontWeight: 'bold',
  },
});

export default UserData;
