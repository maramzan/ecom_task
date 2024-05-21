import {SafeAreaView, View} from 'react-native';
import React from 'react';
import {Header} from '../../components';
import BackArrow from '../../assets/icons/backArrow.svg';
import {Color} from '../../theme/color';
import {Button} from '../../components';
import CartIcon from '../../assets/icons/CartIcon.svg';
import {useNavigation} from '@react-navigation/native';
import {ProductInterface} from '../../type/type';
import {useStore} from '../../store/store';
import {styles} from './styles';
import ProductDetails from './screenComponent/productDetails';

const Cart = ({route}: {route: any}) => {
  const {product} = route?.params;
  const navigation = useNavigation();

  const addToCart = useStore(state => state.addToCart);

  const handleAddToCart = (selectedProduct: ProductInterface) => {
    addToCart(selectedProduct);
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Header
        LeftIcon={BackArrow}
        onLeftIconPress={() => {
          navigation.goBack();
        }}
      />
      <ProductDetails product={product} />
      <View style={styles.button}>
        <Button
          text="Add to Cart"
          onPress={() => handleAddToCart(product)}
          color={Color.primary}
          Icon={CartIcon}
        />
      </View>
    </SafeAreaView>
  );
};

export default Cart;
