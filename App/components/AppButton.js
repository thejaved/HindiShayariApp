import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import colors from '../config/colors';
import PressIcon from './PressIcon';

const AppButton = ({title, onPress, IconName, IconSize, IconColor}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      {IconName && (
        <PressIcon
          name={IconName}
          size={IconSize}
          color={IconColor}
          style={styles.icon}
        />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    borderRadius: 10,
    flexDirection: 'row',
    paddingHorizontal: 5,
    paddingVertical: 8,
    alignItems: 'center',
  },
  text: {
    color: colors.white,
    fontFamily: 'Poppins-Medium',
    marginHorizontal: 10,
  },
});
export default AppButton;
