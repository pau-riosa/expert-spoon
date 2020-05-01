/**
 * @format
 * @flow strict-local
 */
import {StyleSheet} from 'react-native';
import {colors} from '../../assets';
export const login = StyleSheet.create({
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
