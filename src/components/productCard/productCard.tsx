import React from 'react';
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import {Color} from '../../theme/color';

interface ProductCardProps {
  imageUrl: string;
  productName: string;
  productPrice: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  imageUrl,
  productName,
  productPrice,
}) => {
  const {width} = Dimensions.get('window');
  return (
    <View style={[styles.container, {width: width / 2 - 20}]}>
      <View style={styles.imageContainer}>
        <Image source={{uri: imageUrl}} style={styles.image} />
      </View>
      <Text style={styles.productName} numberOfLines={1} ellipsizeMode="tail">
        {productName}
      </Text>
      <Text style={styles.productPrice}>{productPrice}</Text>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    borderRadius: 10,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: Color.inputColor,
    marginBottom: 10,
  },
  imageContainer: {
    width: '100%',
    height: 256,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 256,
    borderRadius: 20,
  },
  favoriteIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    margin: 10,
  },
  productPrice: {
    fontSize: 14,
    color: 'gray',
    marginHorizontal: 10,
    marginBottom: 10,
  },
});
