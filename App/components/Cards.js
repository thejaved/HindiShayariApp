import React, {useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ToastAndroid,
  ImageBackground,
} from 'react-native';
import {Icon} from 'react-native-elements';
import colors from '../config/colors';
import PressIcon from './PressIcon';
import AppButton from '../components/AppButton';
import ShareContent from './ShareContent';
import Clipboard from '@react-native-community/clipboard';
import {captureRef} from 'react-native-view-shot';
import NewShare from 'react-native-share';
import {BackgroundImage} from 'react-native-elements/dist/config';
import appConfig from '../config/appConfig';

const CradsBtn = ({icon, name, onPress, IconType}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {icon && (
        <Icon
          raised
          name={icon}
          type={IconType}
          color={colors.primary}
          size={30}
        />
      )}
      {name && <Text style={styles.text}>{name}</Text>}
    </TouchableOpacity>
  );
};

const ListCards = ({name, source, onPress}) => {
  return (
    <>
      <View style={styles.MainContainer}>
        <BackgroundImage source={{uri: source}} style={styles.bgImage}>
          <View style={styles.innerContainer}>
            <Text style={styles.text2}>{name}</Text>
            <AppButton
              title={'Show All'}
              onPress={onPress}
              IconName={'arrow-right'}
              IconColor={colors.white}
            />
          </View>
        </BackgroundImage>
      </View>
    </>
  );
};

const ShareCards = ({content, source}) => {
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
    <View style={{marginTop: 15}}>
      <View
        style={{width: '100%', height: 220, backgroundColor: colors.white}}
        ref={viewRef}>
        <ImageBackground
          source={{
            uri: source,
          }}
          style={styles.imgbackContainer}>
          <View style={styles.innerImgBackContainer}>
            <Text style={styles.contentText} numberOfLines={7}>
              {content}
            </Text>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.bottomPanel}>
        <PressIcon
          name={'image'}
          color={colors.white}
          type="font-awesome"
          style={{marginRight: 20}}
          onPress={shareImage}
        />
        <PressIcon
          name={'copy'}
          color={colors.white}
          type="font-awesome"
          onPress={copyToClipboard}
          style={{marginRight: 20}}
        />
        <ShareContent shareContent={content} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '46%',
    height: '96%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    margin: '2%',
    borderColor: colors.primary,
    borderBottomWidth: 5,
  },
  text: {
    fontSize: 15,
    fontFamily: 'Poppins-Medium',
    color: colors.primary,
    marginTop: 10,
  },
  text1: {
    fontFamily: 'Poppins-SemiBold',
    color: colors.primary,
    textAlign: 'center',
  },
  imgbackContainer: {
    width: '100%',
    height: 220,
  },
  innerImgBackContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.75)',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  contentText: {
    color: colors.white,
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'Poppins-Medium',
  },
  bottomPanel: {
    width: '100%',
    height: 50,
    backgroundColor: colors.primary,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  MainContainer: {
    width: '100%',
    height: 80,
    backgroundColor: colors.white,
    marginVertical: 10,
  },
  bgImage: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    borderRadius: 20,
    borderColor: colors.primary,
    borderLeftWidth: 7,
    borderRightWidth: 7,
  },
  innerContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.8)',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  text2: {
    color: colors.white,
    fontSize: 15,
    fontFamily: 'Poppins-Medium',
  },
});
export {CradsBtn, ListCards, ShareCards};
