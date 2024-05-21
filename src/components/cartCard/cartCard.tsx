import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import DeleteIcon from '../../assets/icons/delete_outline.svg';
import {Color} from '../../theme/color';
import {ProductInterface} from '../../type/type';

type CartCardProps = {
  cartItem: ProductInterface;
  onDelete: (id: number) => void;
};

const CartCard: React.FC<CartCardProps> = ({cartItem, onDelete}) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.firstSection}>
        <Image
          resizeMode="contain"
          style={styles.imageStyles}
          source={{uri: cartItem?.image}}
        />
        <View style={styles.textSection}>
          <Text style={styles.name}>
            {cartItem.title.length > 20
              ? `${cartItem.title.substring(0, 20)}...`
              : cartItem.title}
          </Text>
          <Text style={styles.price}>${cartItem.price}</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => onDelete(cartItem.id)}>
        <DeleteIcon />
      </TouchableOpacity>
    </View>
  );
};

export default CartCard;

const styles = StyleSheet.create({
  imageStyles: {height: 100, width: 70},
  deleteButton: {width: 50, marginTop: 10},
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  colorSelected: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: 'red',
  },
  firstSection: {
    flexDirection: 'row',
  },
  textSection: {
    marginTop: 10,
    marginLeft: 12,
    flexGrow: 1,
    flexWrap: 'wrap',
  },
  sizeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 10,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 27,
    color: Color.headingColor,
  },
  price: {
    fontSize: 16,
    lineHeight: 24,
    color: Color.textColor,
  },
});
