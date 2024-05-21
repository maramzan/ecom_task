import React from 'react';
import {View, Text} from 'react-native';
import {styles} from '../styles';

const CartFooter = ({totalPrice}: {totalPrice: number}) => (
  <View style={styles.cartContainer}>
    <View style={styles.direction}>
      <Text style={styles.text}>Total</Text>
      <Text style={styles.text}>${totalPrice.toFixed(2)}</Text>
    </View>
    <View style={styles.direction}>
      <Text style={styles.text}>Shipping</Text>
      <Text style={styles.text}>$5.00</Text>
    </View>
    <View style={[styles.direction, styles.divider]}>
      <Text style={styles.text}>Grand Total:</Text>
      <Text style={styles.text}>{(totalPrice + 5).toFixed(2)}</Text>
    </View>
  </View>
);

export default CartFooter;
