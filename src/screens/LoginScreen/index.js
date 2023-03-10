import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';

import CustomButton from '../../components/CustomButton';
import {styles} from './styles';

const LoginScreen = ({navigation}) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const loginBtnHandler = async () => {
    const options = {
      method: 'POST',
      headers: {accept: 'application/json', 'content-type': 'application/json'},
      body: JSON.stringify({username: userName, password: password}),
    };

    fetch('https://app.pinwallet.in/api/token/create', options)
      .then(response => response.json())
      .then(response => {
        if (response.success) {
          navigation.navigate('Welcome');
          setUserName('');
          setPassword('');
        } else {
          setError(response.message);
        }
        console.log(response);
      })
      .catch(err => {
        console.error(err);
      });
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.heading}>Login</Text>
      <TextInput
        placeholder="User Name"
        placeholderTextColor="black"
        value={userName}
        style={styles.input}
        onChangeText={val => setUserName(val)}
      />

      <TextInput
        placeholder="Password"
        placeholderTextColor="black"
        value={password}
        style={styles.input}
        onChangeText={val => setPassword(val)}
        secureTextEntry={true}
      />
      <Text style={styles.errorMsg}>{error}</Text>
      <CustomButton btnTitle="Login" onPress={loginBtnHandler} />
    </View>
  );
};
export default LoginScreen;
