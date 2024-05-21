import {StyleSheet} from 'react-native';
import {Color} from '../../theme/color';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  inputContainer: {
    marginTop: 20,
  },
  heading: {
    fontSize: 28,
    lineHeight: 42,
    color: Color.black,
    marginLeft: 20,
    marginTop: 20,
  },
  FilterBarContainer: {
    marginTop: 10,
  },
  flatListCard: {
    flex: 1,
  },
  textCenter: {
    textAlign: 'center',
  },
  mainContainer: {
    flex: 1,
    backgroundColor: Color.white,
    paddingBottom: 200,
  },
  loaderWrapper: {marginTop: 200},
  flatListContainer: {
    marginTop: 20,
  },
});
