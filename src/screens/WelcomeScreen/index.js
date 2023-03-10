import React from 'react';
import {View, Text} from 'react-native';

import CustomButton from '../../components/CustomButton';
import {styles} from './styles';

const WelcomeScreen = ({navigation}) => {
  const btnHandler = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.header}>Welcome Back!</Text>

      <CustomButton btnTitle="Logout" onPress={btnHandler} />
    </View>
  );
};
export default WelcomeScreen;
