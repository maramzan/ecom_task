import {useState, useEffect} from 'react';
import {fetchProducts} from '../api/api';
import {ProductInterface} from '../../../type/type';
import {ToastAndroid} from 'react-native';

export const useProducts = (selectedCategory: string) => {
  const [products, setProducts] = useState<ProductInterface[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await fetchProducts(selectedCategory);
        setProducts(data);
      } catch (error) {
        ToastAndroid.show((error as Error)?.message, ToastAndroid.SHORT);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedCategory]);

  return {products, loading};
};
