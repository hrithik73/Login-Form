import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const CustomButton = ({btnTitle, onPress}) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={onPress}>
      <Text style={styles.btnStyle}>{btnTitle}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  btnContainer: {
    alignItems: 'center',
    backgroundColor: 'lightgreen',
    height: 50,
    width: '50%',
    alignSelf: 'center',
    marginTop: '10%',
    justifyContent: 'center',
  },
  btnStyle: {
    fontSize: 16,
  },
});

export default CustomButton;
