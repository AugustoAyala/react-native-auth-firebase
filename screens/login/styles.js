import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    marginHorizontal: 10,
    justifyContent: 'center'
  },
  inputText: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 20,
    color: 'black',
    backgroundColor: 'white'
  },
  button: {
    paddingVertical: 20,
    borderWidth:1,
    borderColor: '#ccc',
    marginTop: 10
  },
  textButtonLogin: {
    textAlign: 'center',
    color: 'white'
  },
  textButtonSingUp: {
    textAlign: 'center',
    color: '#384FBA'
  },
  loginButton: {
    backgroundColor: '#8FA3FB'
  },
  signUpButton: {
    marginTop: 80
  },
  appText: {
    textAlign: 'center',
    color: '#8FA3FB',
    fontSize: 20,
    marginBottom: 50
  }
});

export default styles;
