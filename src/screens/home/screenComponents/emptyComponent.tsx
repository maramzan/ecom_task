import React from 'react';
import {Text, View} from 'react-native';
import {styles} from '../styles';

const EmptyComponent = () => {
  return (
    <View style={styles.loaderWrapper}>
      <Text style={styles.textCenter}>No Products Found</Text>
    </View>
  );
};

export default EmptyComponent;
