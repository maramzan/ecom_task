import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

type CommentButtonProps = {
  text: string;
  color: string;
  Icon?: string;
  onPress: () => void;
};

const CommentButton: React.FC<CommentButtonProps> = ({
  text,
  color,
  Icon,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: color}]}
      onPress={onPress}>
      <View style={styles.buttonContent}>
        {Icon && <Icon />}
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CommentButton;

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 54,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    marginLeft: 10,
    fontWeight: 'bold',
  },
});
