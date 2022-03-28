import React, {useRef} from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  ToastAndroid,
  View,
} from 'react-native';
import {captureRef} from 'react-native-view-shot';
import NewShare from 'react-native-share';

import colors from '../config/colors';
import PressIcon from './PressIcon';
import Clipboard from '@react-native-community/clipboard';
import appConfig from '../config/appConfig';
const ContentImageContainer = ({content, source, showAds}) => {
  const viewRef = useRef();

  const shareImage = async () => {
    try {
      const uri = await captureRef(viewRef, {
        format: 'jpg',
        quality: 1.0,
      });
      await NewShare.open({url: uri});
    } catch (error) {
      console.log(error);
    }
  };

  const copyToClipboard = () => {
    Clipboard.setString(content);
    ToastAndroid.showWithGravityAndOffset(
      'copied',
      ToastAndroid.CENTER,
      ToastAndroid.BOTTOM,
      25,
      50,
    );
  };

  return (
    <>
      <View style={styles.imageCard}>
        <View style={styles.imageCardTop} ref={viewRef}>
          <ImageBackground source={{uri: source}} style={styles.bgContainer}>
            <View style={styles.innerSourceContainer}>
              <Text style={styles.text}>{content}</Text>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.imageCardBottom}>
          <PressIcon
            name={'copy'}
            size={20}
            color={colors.white}
            type={'font-awesome'}
            onPress={copyToClipboard}
          />
          <PressIcon
            name={'share'}
            size={20}
            color={colors.white}
            onPress={shareImage}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  imageCard: {
    width: '100%',
    height: 250,
    marginVertical: 5,
  },
  imageCardTop: {
    width: '100%',
    height: '85%',
    backgroundColor: colors.white,
    borderColor: colors.white,
    borderWidth: 5,
  },
  bgContainer: {
    width: '100%',
    height: '100%',
  },
  innerSourceContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.8)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  text: {
    textAlign: 'center',
    color: colors.white,
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
  },
  imageCardBottom: {
    width: '25%',
    height: '15%',
    backgroundColor: colors.primary,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
export default ContentImageContainer;
