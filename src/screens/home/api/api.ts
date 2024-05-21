import axios from 'axios';

export const fetchCategories = async () => {
  const res = await axios.get('https://fakestoreapi.com/products/categories');
  return res.data;
};

export const fetchProducts = async (selectedCategory: string) => {
  const url =
    selectedCategory === 'All'
      ? '/products'
      : `/products/category/${selectedCategory}`;
  const response = await axios.get(`https://fakestoreapi.com${url}`);
  return response.data;
};
