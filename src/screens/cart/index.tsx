import {FlatList, SafeAreaView, Text, View} from 'react-native';
import React from 'react';
import {Header, Button, CartCard} from '../../components';
import BackArrow from '../../assets/icons/backArrow.svg';
import {useNavigation} from '@react-navigation/native';
import {Color} from '../../theme/color';
import {useStore} from '../../store/store';
import {ProductInterface} from '../../type/type';
import {styles} from './styles';
import CartFooter from './screenComponents/cartFooter';

const renderCartItem = (
  item: {item: ProductInterface},
  handleDelete: (id: number) => void,
) => <CartCard cartItem={item?.item} onDelete={handleDelete} />;

const Order = () => {
  const navigation = useNavigation();
  const {totalPrice, cartItems, removeFromCart, clearCart} = useStore(
    state => ({
      totalPrice: state.totalPrice,
      cartItems: state.cartItems,
      removeFromCart: state.removeFromCart,
      clearCart: state.clearCart,
    }),
  );

  const handleDelete = (id: number) => {
    removeFromCart(id);
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Header
        LeftIcon={BackArrow}
        title="My Cart"
        onLeftIconPress={() => {
          navigation.goBack();
        }}
      />
      {cartItems.length === 0 ? (
        <View style={styles.emptyCart}>
          <Text>Your Cart is Empty</Text>
        </View>
      ) : (
        <View style={styles.bodyContainer}>
          <View style={styles.cardSection}>
            <FlatList
              data={cartItems}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              renderItem={item => renderCartItem(item, handleDelete)}
              ListFooterComponent={<CartFooter totalPrice={totalPrice} />}
              keyExtractor={item => item.id.toString()}
            />
          </View>
          <View style={styles.button}>
            <Button
              text="PLACE ORDER"
              onPress={() => {
                clearCart();
                navigation.navigate('Success');
              }}
              color={Color.primary}
            />
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Order;
