import {Text, View, FlatList, StyleSheet} from 'react-native';
import React, {PureComponent} from 'react';
//import DataCode from './DataCode'

const listData = [
  {
    id: '1',
    name: 'Mohammad Sufyan',
    University: 'UCP',
    address: 'Lahore',
  },
  {
    id: '2',
    name: 'Taimoor Riaz',
    University: 'NED',
    address: 'Karachi',
  },
  {
    id: '3',
    name: 'Saad Ali',
    University: 'UOL',
    address: 'Lahore',
  },
  {
    id: '4',
    name: 'Fahad Malik',
    University: 'BUITEMS',
    address: 'Quetta',
  },
];

const ScrollFList = () => {
  return (
    <FlatList
      style={styles.FlatListStyle}
      data={listData}
      keyExtractor={key => {
        return key.id;
      }}
      //horizontal

      renderItem={({item}) => {
        return (
          <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>Name : {item.name}</Text>
            <Text style={styles.textStyle}>Uni : {item.University}</Text>
            <Text style={styles.textStyle}>City : {item.address}</Text>
          </View>
        );
      }}
    />
  );
};
const styles = StyleSheet.create({
  textStyle: {
    backgroundColor: 'blue',
    fontSize: 25,
    fontWeight: 'bold',
    padding: 20,
    margin: 20,
    alignContent: 'center',
    borderRadius: 10,
  },
  viewStyle: {
    //height:'30%',
    //backgroundColor:'blue',
    //margin:15,
  },
  FlatListStyle: {
    textAlign: 'center',
    margin: 20,
    padding: 10,
  },
});
export default ScrollFList;
