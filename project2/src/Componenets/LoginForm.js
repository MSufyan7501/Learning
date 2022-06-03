import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native';

const LoginForm = ({navigation}) => {
  const [Username, setUsername] = useState('');
  const [Pass, setPass] = useState('');

  return (
    <View style={styels.MainContainer}>
      <Text style={styels.HeaderText}>Login Form</Text>
      <Text style={styels.TextStyle}>
        you can reach us any time via muhammadsufyan@gmail.com
      </Text>
      <View style={styels.InputContainer}>
        <Text style={styels.TextStyleHeaderInput}>
          Enter your E mail Adddres :
        </Text>
        <TextInput
          style={styels.TextInputStyle}
          autoCapitalize="none"
          autoCorrect={false}
          value={Username}
          onChangeText={actualData => setUsername(actualData)}
        />
      </View>
      <View style={styels.InputContainer}>
        <Text style={styels.TextStyleHeaderInput}>Enter your Password :</Text>
        <TextInput
          style={styels.TextInputStyle}
          secureTextEntry={true}
          autoCapitalize="none"
          autoCorrect={false}
          value={Pass}
          onChangeText={actualData => setPass(actualData)}
        />
      </View>
      <View style={styels.ButtonView}>
        <TouchableOpacity
          style={styels.buttonStyle}
          onPress={() => {
            navigation.navigate('AfterLogin');
            // Alert.alert(Username);
            //navigation.navigate('AfterLogin');
            //console.warn(Username.length);
          }}>
          <Text style={styels.textStyleBtn}>Log In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styels = StyleSheet.create({
  MainContainer: {
    //width: '100%',
    //padding: 10,
    // borderWidth: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    //alignItems: 'center',
    //flex: 1,
    height: '100%',
    backgroundColor: 'white',
    paddingHorizontal: '5%',
  },
  TextInputStyle: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 2,
    width: '100%',
    color: 'black',
    borderColor: 'grey',
  },
  HeaderText: {
    fontSize: 39,
    paddingLeft: 10,
    paddingTop: 20,
    paddingBottom: 15,
    color: 'black',
    fontWeight: 'bold',
    //textDecorationStyle: 'dotted',
  },
  TextStyle: {
    fontSize: 19,
    paddingVertical: 5,
    paddingHorizontal: 10,
    color: 'grey',
    lineHeight: 30,
    marginBottom: 25,
  },
  TextStyleHeaderInput: {
    fontSize: 18,
    paddingTop: 5,
    //paddingHorizontal: 10,
    color: 'grey',
    lineHeight: 30,
  },
  InputContainer: {
    marginTop: 1,
    borderBottomLeftRadius: 4,
    borderBottomEndRadius: 4,
    //borderColor: 'red',
    alignItems: 'flex-start',
    justifyContent: 'center',
    //backgroundColor: 'black',
    position: 'relative',
    paddingBottom: 15,
    //marginBottom: 20,
    //paddingTop: 20,
    marginTop: 10,
  },
  buttonStyle: {
    width: '70%',
    borderRadius: 10,
    backgroundColor: 'grey',
    marginTop: 10,
    fontSize: 15,
    alignItems: 'center',
    justifyContent: 'center',
    //flexWrap: 'wrap',
    //    alignSelf: 'center',
    //padding: 5,
  },
  ButtonView: {
    alignContent: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  textStyleBtn: {
    paddingHorizontal: 70,
    fontSize: 17,
    color: 'white',
    paddingVertical: 15,
  },
});
export default LoginForm;
