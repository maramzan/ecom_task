import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SuccessIcons from '../../assets/icons/success.svg';
import {Button} from '../../components';
import {Color} from '../../theme/color';
import {useNavigation} from '@react-navigation/native';

const Success = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.success}>
          <SuccessIcons />
          <View>
            <Text style={styles.heading}>
              Congrats! Your Order has been placed
            </Text>
            <Text style={styles.subHeading}>
              Your items has been placcd and is on it’s way to being processed
            </Text>
          </View>
        </View>

        <View style={styles.button}>
          <Button
            color={Color.primary}
            text="Continue Shopping"
            onPress={() => {
              navigation.navigate('Home');
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Success;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'space-around',
  },
  heading: {
    fontSize: 24,
    lineHeight: 36,
    color: Color.black,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    marginHorizontal: 40,
  },
  subHeading: {
    fontSize: 12,
    lineHeight: 18,
    textAlign: 'center',
    marginHorizontal: 80,
  },
  button: {
    marginHorizontal: 20,
  },
  success: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
