import {StyleSheet} from 'react-native';
import {Color} from '../../theme/color';

export const styles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: Color.white,
    flex: 1,
  },
  button: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    marginBottom: 15,
    paddingHorizontal: 20,
  },
  sizeContainer: {
    marginTop: 15,
  },
  container: {
    marginHorizontal: 20,
    flex: 1,
  },
  image: {
    width: '100%',
    marginTop: 15,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  productName: {
    fontSize: 20,
    color: Color.headingColor,
    fontWeight: '500',
    marginTop: 15,
  },
  productPrice: {
    fontSize: 22,
    fontWeight: '700',
    color: Color.headingColor,
    marginTop: 10,
  },
  productRating: {
    fontSize: 16,
    color: Color.textColor,
    marginTop: 10,
  },
  productDescription: {
    fontSize: 16,
    color: Color.textColor,
    marginTop: 20,
  },
});
