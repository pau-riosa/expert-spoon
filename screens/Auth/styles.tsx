/**
 * @format
 * @flow strict-local
 */
import {StyleSheet} from 'react-native';
import {colors} from '../../assets';

export const login = StyleSheet.create({
  flex1: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    paddingHorizontal: 15,
    backgroundColor: colors.ocean5,
  },
  mainText: {
    fontFamily: 'Gill Sans',
    fontSize: 50,
    fontWeight: '300',
    color: '#363A44',
  },
  text: {
    fontFamily: 'Gill Sans',
    fontSize: 17,
    marginVertical: 2,
  },
  flex1Container: {
    flex: 1,
  },
  textAlignCenter: {
    alignSelf: 'center',
    fontSize: 25,
    marginVertical: 30,
  },
  flex1Center: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 10,
    padding: 5,
  },
  flex1AlignCenter: {
    flex: 1,
    alignItems: 'center',
  },
  subText: {
    marginHorizontal: 10,
    fontFamily: 'Gill Sans',
    fontSize: 18,
    fontWeight: '500',
    color: '#363A44',
  },
  safeAreaView: {
    flex: 1,
    backgroundColor: colors.ocean5,
  },
  logoContainer: {
    flex: 0.2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.ocean5,
  },
  inputStyle: {
    fontFamily: 'Gill Sans',
    marginHorizontal: 10,
  },
  inputContainerStyle: {
    borderWidth: 1,
    borderColor: '#CAD3DF',
    borderRadius: 5,
    marginVertical: 10,
    height: 50,
  },
  buttonStyle: {
    height: 60,
    borderWidth: 1,
    marginHorizontal: 10,
    marginVertical: 10,
    borderColor: colors.ocean1,
    backgroundColor: colors.ocean1,
  },
});

export const home = StyleSheet.create({
  flex1Container: {
    flex: 1,
  },
  safeAreaView: {
    flex: 1,
    backgroundColor: colors.ocean1,
  },
  signUpButton: {
    height: 60,
    borderWidth: 1,
    borderColor: '#363A44',
  },
  loginButton: {
    height: 60,
    borderWidth: 1,
    borderColor: colors.ocean3,
    backgroundColor: colors.ocean3,
  },
  flex6: {
    flex: 6,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.ocean1,
  },
  flex1: {
    flex: 1.5,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    paddingHorizontal: 15,
    backgroundColor: colors.ocean1,
  },
  mainText: {
    fontFamily: 'Gill Sans',
    fontSize: 50,
    fontWeight: '300',
    color: '#363A44',
  },
  subText: {
    marginHorizontal: 10,
    fontFamily: 'Gill Sans',
    fontSize: 18,
    fontWeight: '500',
    color: '#363A44',
  },
});
