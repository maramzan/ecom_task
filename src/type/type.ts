export interface ProductInterface {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: {
    count: number;
    rate: number;
  };
  title: string;
}

export type RootStackParamList = {
  Home: undefined;
  Order: undefined;
  Cart: undefined;
  Success: undefined;
};
