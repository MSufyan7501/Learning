import { Text,View,FlatList,StyleSheet } from 'react-native'
import React, { PureComponent } from 'react'

const MyFlatList=()=>{
    const names=[
   {
        name:"Mohammad Sufyan",
        University:"UCP",
        address:"Lahore"
    }
    ,
    {
        name:"Taimoor Riaz",
        University:"NED",
        address:"Karachi"
    }
    ,
        {
        name:"Saad Ali",
        University:"UOL",
        address:"Lahore"
    }
    ,
        {
        name:"Fahad Malik",
        University:"BUITEMS",
        address:"Quetta"
    }
];
const Header=<Text>name    University    City</Text>;
  return (
    <View>
    {Header}  
  <FlatList style={styles.FlatListStyle} data={names} renderItem={({item})=>{
      //console.log(element.item.name)
       return <Text style={styles.textStyle}>{item.name}    {item.University}    {item.address}</Text>
  }}
  />
    </View>
  )
}
const styles=StyleSheet.create({
    textStyle:
    {
        color:'red',
        fontSize:20,
        fontWeight:'bold',
        padding:10,
        alignContent:'center' 
    },
    FlatListStyle:
    {
        backgroundColor:'green',
        padding:10,
    }
});
export default MyFlatList