import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import ApiFlatlist from './ApiFlatlist';

const ApiCall = () => {
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
  console.log('abc');
  useEffect(() => {
    console.log('heloo');
    getAllUsers();
  }, []);

  return (
    <View style={styles.MainContainer}>
      <Text style={styles.TextStyle}>List of students</Text>
      <FlatList
        data={myData}
        renderItem={({item}) => {
          return (
            <View>
              <ApiFlatlist
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
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E8DAEF',
  },
  TextStyle: {
    fontSize: 30,
    padding: 20,
    color: 'black',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});

export default ApiCall;
