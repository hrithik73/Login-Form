import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    width: '90%',
    padding: '5%',
    marginHorizontal: 20,
  },
  heading: {
    fontSize: 25,
    alignSelf: 'center',
    margin: '10%',
    fontWeight: 'bold',
  },
  errorMsg: {
    color: 'red',
    textAlign: 'center',
    marginTop: '4%',
  },
});
