import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import CartIcon from '../../assets/icons/shopping_cart.svg';
import {Color} from '../../theme/color';
import {useStore} from '../../store/store';

interface HeaderProps {
  title?: string;
  LeftIcon?: string;
  onLeftIconPress?: () => void;
  showCart?: boolean;
  onRightIconPress?: () => void;
}

const Header: React.FC<HeaderProps> = ({
  title,
  LeftIcon,
  onLeftIconPress,
  onRightIconPress,
  showCart,
}) => {
  const cartItems = useStore(state => state.cartItems);
  return (
    <View style={styles.container}>
      {LeftIcon && (
        <TouchableOpacity onPress={onLeftIconPress}>
          <LeftIcon />
        </TouchableOpacity>
      )}
      <Text style={styles.title}>{title}</Text>
      {showCart ? (
        <TouchableOpacity
          onPress={onRightIconPress}
          style={styles.cartIconWrapper}>
          <CartIcon />
          {cartItems.length > 0 && (
            <Text style={styles.cartCounter}>{cartItems.length}</Text>
          )}
        </TouchableOpacity>
      ) : (
        <Text>{}</Text>
      )}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    color: Color.black,
  },
  profileImage: {
    backgroundColor: 'gray',
    width: 44,
    height: 44,
    borderRadius: 20,
  },
  cartIconWrapper: {
    position: 'relative',
  },
  cartCounter: {
    position: 'absolute',
    backgroundColor: 'blue',
    color: 'white',
    height: 15,
    width: 15,
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 10,
    top: -5,
    right: -5,
  },
});
