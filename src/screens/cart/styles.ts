import {StyleSheet} from 'react-native';
import {Color} from '../../theme/color';

export const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: Color.white,
  },
  text: {
    color: Color.textColor,
    fontSize: 18,
    lineHeight: 27,
  },
  bodyContainer: {
    flex: 1,
    marginHorizontal: 20,
  },
  cardSection: {},
  cartContainer: {marginBottom: 70},
  button: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    marginBottom: 15,
  },
  direction: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  divider: {
    borderTopColor: Color.black,
    borderTopWidth: 1,
    paddingTop: 15,
  },
  emptyCart: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
