import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {Icon} from 'react-native-elements';
import colors from '../config/colors';
import shadow from '../config/shadow';

const AppInput = ({icon, placeholder, ...props}) => {
  return (
    <View style={styles.container}>
      {icon && <Icon name={icon} color={colors.black} style={styles.icon} />}
      <TextInput placeholder={placeholder} {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderColor: colors.primary,
    borderBottomWidth: 2,
    paddingRight: '10%',
    ...shadow,
  },
  icon: {
    padding: 5,
  },
});
export default AppInput;
