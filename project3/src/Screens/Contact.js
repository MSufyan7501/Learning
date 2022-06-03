import CheckBox from '@react-native-community/checkbox';
import React, {useState} from 'react';
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  View,
  Alert,
} from 'react-native';

const Contact = () => {
  const submit = () => {
    if (name == '' || email == '' || message == '' || phone == '')
      Alert.alert('Fields Left Empty');
    else Alert.alert(`Thank You ${name} for Your response`);
  };
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [phone, setphone] = useState('');
  const [message, setmessage] = useState('');
  const [agree, setagree] = useState(false);
  return (
    <KeyboardAvoidingView style={styles.MainContainer}>
      <ScrollView>
        <View>
          <Text style={styles.TextHeader}>Level UP Your Knowledege</Text>
          <Text style={styles.des}>
            You can reach us anytime via @techeXperts.com
          </Text>
        </View>
        <View style={styles.InputContainer}>
          <Text style={styles.TextStyleHeaderInput}>Enter your Name </Text>
          <TextInput
            style={styles.InputStyle}
            value={name}
            onChangeText={name => setname(name)}
            autoCorrect={false}
          />
        </View>
        <View style={styles.InputContainer}>
          <Text style={styles.TextStyleHeaderInput}>Enter your Email :</Text>
          <TextInput
            style={styles.InputStyle}
            value={email}
            onChangeText={email => setemail(email)}
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>
        <View style={styles.InputContainer}>
          <Text style={styles.TextStyleHeaderInput}>Enter your Phone :</Text>
          <TextInput
            style={styles.InputStyle}
            value={phone}
            onChangeText={phone => setphone(phone)}
            keyboardType="phone-pad"
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>
        <View style={styles.InputContainer}>
          <Text style={styles.TextStyleHeaderInput}>How we can Help you :</Text>
          <TextInput
            style={[
              styles.InputStyle,
              {
                height: 100,
              },
            ]}
            value={message}
            onChangeText={message => setmessage(message)}
            autoCorrect={false}
            // numberOfLines={2}
            multiline={true}

            // scrollEnabled={true}
          />
        </View>
        <View style={styles.CheckBoxContainer}>
          <CheckBox
            tintColors={{true: '#4630EB', false: 'black'}}
            value={agree}
            onValueChange={() => setagree(!agree)}
            // color={agree ? '#' : 'black'}
          />
          <Text style={{fontSize: 14, color: '#7d7d7d'}}>
            i have read and agree with above information
          </Text>
        </View>
        <TouchableOpacity
          disabled={!agree}
          onPress={() => {
            submit();
            console.log(name);
            console.log(email);
            console.log(phone);
            console.log(message);
          }}
          style={[
            styles.BtnStyle,
            {
              backgroundColor: agree ? '#4630EB' : 'grey',
            },
          ]}>
          <Text style={{color: '#fff'}}>Contact Us</Text>
        </TouchableOpacity>
        {/* <CheckBox /> */}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  InputContainer: {
    // backgroundColor: 'black',
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
  MainContainer: {
    flex: 1,
    // alignItems: 'center',
    padding: '5%',
    // paddingHorizontal: '1%',
  },
  CheckBoxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  TextHeader: {
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
  TextStyleHeaderInput: {
    fontSize: 17,
    paddingTop: 5,
    //paddingHorizontal: 10,
    color: 'grey',
    lineHeight: 30,
  },
  des: {
    textAlign: 'left',
    color: '#7d7d7d',
    fontSize: 18,
    marginTop: 12,
    textAlign: 'left',
    lineHeight: 21,
    // paddingBottom: 15,
  },

  InputStyle: {
    padding: 6,
    fontSize: 14,
    borderWidth: 1,
    borderRadius: 2,
    width: '100%',
    color: 'black',
    borderColor: 'black',
  },
  BtnStyle: {
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
  },
});

export default Contact;
