import {useState, useEffect} from 'react';
import {fetchCategories} from '../api/api';
import {ToastAndroid} from 'react-native';

export const useCategories = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCategories();
        setCategories(['All', ...data]);
      } catch (error) {
        console.log('Error fetching categories:', error);
        ToastAndroid.show((error as Error)?.message, ToastAndroid.SHORT);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return {categories, loading};
};
