import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import colors from '../config/colors';

const HeaderMore = ({title, onPress}) => {
  return (
    <View style={styles.ImageHead}>
      {title && <Text style={styles.text}>{title}</Text>}
      {onPress && (
        <TouchableOpacity onPress={onPress}>
          <Text style={[styles.text, styles.text1]}>More</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  ImageHead: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  text: {
    fontFamily: 'Poppins-SemiBold',
    color: colors.black,
  },
  text1: {
    color: colors.primary,
  },
});
export default HeaderMore;
