import {ActivityIndicator, SafeAreaView, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Header, FilterBar} from '../../components';
import MenuIcon from '../../assets/icons/menu.svg';
import {Color} from '../../theme/color';
import {useNavigation} from '@react-navigation/native';
import {ProductInterface} from '../../type/type';
import {useCategories} from './hooks/useCategories';
import {useProducts} from './hooks/useProducsts';
import {styles} from './styles';
import ProductList from './screenComponents/productList';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const navigation = useNavigation();

  const {categories} = useCategories();
  const {products, loading} = useProducts(selectedCategory);

  const handleRightIconPress = () => {
    navigation.navigate('Order');
  };

  const handleProductPress = (product: ProductInterface) => {
    navigation.navigate('Cart', {product});
  };

  const handleCategorySelect = (cat: string) => {
    setSelectedCategory(cat);
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Header
        LeftIcon={MenuIcon}
        showCart
        onRightIconPress={handleRightIconPress}
      />
      <View>
        <Text style={styles.heading}>Match Your Style</Text>
        <View style={styles.FilterBarContainer}>
          <FilterBar
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategorySelect}
          />
        </View>
      </View>

      <View style={styles.container}>
        {loading ? (
          <View style={styles.loaderWrapper}>
            <ActivityIndicator size="large" color={Color.primary} />
          </View>
        ) : (
          <ProductList
            products={products}
            onProductPress={handleProductPress}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default Home;
