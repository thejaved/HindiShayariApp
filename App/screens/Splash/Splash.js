import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import screenName from '../../config/screenName';
import Logo from '../../../assets/images/Hindi.png';
import colors from '../../config/colors';

const Splash = ({navigation}) => {
  setTimeout(() => {
    navigation.replace(screenName.Home);
  }, 3000);

  return (
    <View style={styles.container}>
      <Image
        source={Logo}
        style={{
          width: 120,
          height: 120,
          borderRadius: 20,
          borderColor: colors.white,
          borderWidth: 5,
        }}
      />
      <Text style={{fontFamily: 'Cookie-Regular', fontSize: 30, marginTop: 15}}>
        Hindi Shayari & Poetry
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.bg,
  },
});
export default Splash;
