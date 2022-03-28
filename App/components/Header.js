import {useNetInfo} from '@react-native-community/netinfo';
import React from 'react';
import {ActivityIndicator, Share, StyleSheet, Text, View} from 'react-native';
import colors from '../config/colors';
import PressIcon from './PressIcon';

const Header = ({title, onPressLeft}) => {
  const netInfo = useNetInfo();

  const onShareApp = async () => {
    try {
      await Share.share({
        message: `https://bit.ly/hindishayaridailytok`,
      });
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <>
      <View style={styles.container}>
        {onPressLeft && (
          <PressIcon
            name="arrow-left"
            type="fontawesome"
            color={colors.white}
            onPress={onPressLeft}
          />
        )}
        <Text style={styles.text}>{title}</Text>
        <PressIcon
          name="share"
          color={colors.white}
          size={25}
          onPress={onShareApp}
        />
      </View>
      {!netInfo.isInternetReachable ? (
        <View
          style={{
            padding: 10,
            backgroundColor: colors.red,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: colors.white,
              marginRight: 10,
              fontSize: 15,
              fontFamily: 'Poppins-SemiBold',
            }}>
            No Internet Connection -
          </Text>
          <ActivityIndicator size={'small'} color={colors.white} />
        </View>
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: colors.primary,
    zIndex: 5000,
  },
  text: {
    fontFamily: 'Poppins-SemiBold',
    color: colors.white,
    fontSize: 15,
  },
});
export default Header;
