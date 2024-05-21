import {SafeAreaView} from 'react-native';
import React from 'react';
import {StackNavigation} from './src/navigation/mainNavigation';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
