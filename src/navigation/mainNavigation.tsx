import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Cart from '../screens/productDetails';
import Success from '../screens/success/success';
import Home from '../screens/home';
import Order from '../screens/cart';
import {RootStackParamList} from '../type/type';

const Stack = createNativeStackNavigator<RootStackParamList>();

export function StackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Order"
        component={Order}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Cart"
        component={Cart}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Success"
        component={Success}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
