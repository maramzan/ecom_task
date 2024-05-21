import {create} from 'zustand';
import {ProductInterface} from '../type/type';
import {ToastAndroid} from 'react-native';

type Store = {
  cartItems: ProductInterface[];
  totalPrice: number;
  addToCart: (item: ProductInterface) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
};

export const useStore = create<Store>((set: any) => ({
  cartItems: [],
  totalPrice: 0,

  addToCart: (item: ProductInterface) =>
    set((state: Store) => {
      const itemExists = state.cartItems.some(
        cartItem => cartItem.id === item.id,
      );
      if (itemExists) {
        ToastAndroid.show('Product Already Exists', ToastAndroid.SHORT);
        return state;
      }
      ToastAndroid.show('Product Added Successfully', ToastAndroid.SHORT);
      return {
        cartItems: [...state.cartItems, item],
        totalPrice: state.totalPrice + item.price,
      };
    }),

  removeFromCart: (id: number) =>
    set((state: Store) => {
      const newCartItems = state.cartItems.filter(item => item.id !== id);
      const removedItem = state.cartItems.find(item => item.id === id);
      const newTotalPrice = removedItem
        ? state.totalPrice - removedItem.price
        : state.totalPrice;
      return {
        cartItems: newCartItems,
        totalPrice: newTotalPrice,
      };
    }),

  clearCart: () =>
    set(() => {
      return {
        cartItems: [],
        totalPrice: 0,
      };
    }),
}));
