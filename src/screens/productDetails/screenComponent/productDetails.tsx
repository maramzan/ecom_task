import React from 'react';
import {View, Text, Image, Dimensions} from 'react-native';
import {styles} from '../styles';
import {ProductInterface} from '../../../type/type';

const ProductDetails = ({product}: {product: ProductInterface}) => {
  const {height} = Dimensions.get('window');

  return (
    <>
      <Image
        source={{uri: product.image}}
        resizeMode="contain"
        style={[styles.image, {height: height / 2 - 150}]}
      />
      <View style={styles.container}>
        <View style={styles.priceContainer}>
          <Text style={styles.productPrice}>{`$${product.price}`}</Text>
          <Text
            style={
              styles.productRating
            }>{`✩ ${product.rating.rate} (${product.rating.count})`}</Text>
        </View>
        <Text style={styles.productName}>{product.title}</Text>
        <Text style={styles.productDescription}>{product.description}</Text>
      </View>
    </>
  );
};

export default ProductDetails;
