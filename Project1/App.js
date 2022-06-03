


import React from 'react';
import {StyleSheet,Text,View,Image,Alert,Button } from 'react-native'

const YesCall=()=>console.log("yes called")
const NoCall=()=>console.log("No called")
const onButtonPress=()=>alert("button tapped")
const handlepress=()=>console.log('handlepress');
const customAlert=()=>Alert.alert("title","body",
  [{text:'yes' ,onPress:()=>YesCall},
  {text:'No',onPress:()=>NoCall}])

const App = () =>{

  return(
    <View style={styles.container}>
      <Text 
        numberOfLines={1} 
        onPress={handlepress}
        style={styles2.container}
      > 
      Hello ReactDS
      </Text>
      <Image 
        source={{
          width:200,
          height:300,
          uri:"https://picsum.photos/200/300"
      }}/>  
      <Button
        title='button' onPress={onButtonPress}
  
      />
      <Button
        title='Alert' onPress={customAlert}
      />
    </View>
  )
}
const styles2=StyleSheet.create({
   container:{
    backgroundColor:'black',
  }
})

 const styles=StyleSheet.create({
   container:{
    // flex:'3',
    height:805,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center'
  }
})

export default App;

// const App=()=>
// {
//   return(
//     <View >
//       <Text>
//       hello world
//       </Text>
//     </View>
//   )
// }


