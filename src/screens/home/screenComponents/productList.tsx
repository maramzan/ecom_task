import React from 'react';
import {FlatList, View, TouchableOpacity} from 'react-native';
import {ProductCard} from '../../../components';
import {ProductInterface} from '../../../type/type';
import {styles} from '../styles';
import EmptyComponent from './emptyComponent';

interface ProductListProps {
  products: ProductInterface[];
  onProductPress: (product: ProductInterface) => void;
}

const ProductList = ({products, onProductPress}: ProductListProps) => {
  return (
    <FlatList
      ListEmptyComponent={EmptyComponent}
      data={products}
      showsVerticalScrollIndicator={false}
      style={styles.flatListContainer}
      numColumns={2}
      renderItem={({item, index}) => {
        const isEven = (index + 1) % 2 === 0;
        const marginLeft = isEven ? 10 : 0;

        return (
          <View style={[styles.flatListCard, {marginLeft}]}>
            <TouchableOpacity onPress={() => onProductPress(item)}>
              <ProductCard
                imageUrl={item.image}
                productName={item.title}
                productPrice={`$${item.price}`}
              />
            </TouchableOpacity>
          </View>
        );
      }}
      keyExtractor={(item: ProductInterface) => item.id.toString()}
    />
  );
};

export default ProductList;
