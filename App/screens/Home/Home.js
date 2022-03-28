import React, {useEffect, useRef, useState} from 'react';
import {
  ActivityIndicator,
  ImageBackground,
  Linking,
  Modal,
  Share,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import {CradsBtn} from '../../components/Cards';
import colors from '../../config/colors';
import screenName from '../../config/screenName';
import Header from '../../components/Header';
import {Icon} from 'react-native-elements';
import appConfig from '../../config/appConfig';
import {captureRef} from 'react-native-view-shot';
import NewShare from 'react-native-share';
import PressIcon from '../../components/PressIcon';
import Clipboard from '@react-native-community/clipboard';

const Home = ({navigation}) => {
  const [randomData, setRandomData] = useState(null);
  const [modal, setModal] = useState(false);
  const viewRef = useRef();

  const getRandomData = async () => {
    try {
      setRandomData(null);
      const responce = await fetch('https://api.quotable.io/random');
      const data = await responce.json();
      setRandomData(data);
    } catch (error) {
      console.log(error);
    }
  };
  const onShareContent = async () => {
    try {
      await Share.share({
        message: randomData.content,
      });
    } catch (error) {
      alert(error.message);
    }
  };
  const copyToClipboard = () => {
    Clipboard.setString(randomData.content);
    ToastAndroid.showWithGravityAndOffset(
      'copied',
      ToastAndroid.CENTER,
      ToastAndroid.BOTTOM,
      25,
      50,
    );
  };

  const ShareDummyImage = async () => {
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

  useEffect(() => {
    getRandomData();
  }, []);
  return (
    <>
      <Header
        title={'Shayari App'}
        onPressRight={() => navigation.navigate(screenName.Search)}
      />

      {/* This Is A Header Image  */}
      <View style={styles.container}>
        <View style={styles.TopImageContainet} ref={viewRef}>
          <ImageBackground
            source={{
              uri: 'https://cdn.pixabay.com/photo/2014/09/07/21/34/child-438373_960_720.jpg',
            }}
            style={{width: '100%', height: '100%'}}>
            <View
              style={{
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0,0,0,0.8)',
                justifyContent: 'center',
                alignContent: 'center',
                paddingHorizontal: 10,
              }}>
              {randomData == null ? (
                <ActivityIndicator size={'large'} color={colors.white} />
              ) : (
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 20,
                    color: colors.white,
                    fontFamily: 'Poppins-Medium',
                  }}
                  numberOfLines={7}>
                  {randomData.content}
                </Text>
              )}
            </View>
          </ImageBackground>
        </View>
        <View style={styles.TopImageBottom}>
          <PressIcon
            name={'sync'}
            color={colors.white}
            style={{marginRight: 10}}
            size={25}
            onPress={getRandomData}
          />
          <PressIcon
            name={'image'}
            color={colors.white}
            style={{marginRight: 10}}
            size={25}
            onPress={ShareDummyImage}
          />
          <PressIcon
            name={'copy'}
            color={colors.white}
            size={22}
            style={{marginRight: 10}}
            type={'font-awesome'}
            onPress={copyToClipboard}
          />
          <PressIcon
            name={'share'}
            color={colors.white}
            size={25}
            onPress={onShareContent}
          />
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.container}>
            <View style={styles.divContainer}>
              <CradsBtn
                name={'English'}
                icon={'book'}
                onPress={() => navigation.navigate(screenName.InEnglish)}
              />
              <CradsBtn
                name={'Hindi'}
                icon={'receipt'}
                onPress={() => navigation.navigate(screenName.InHindi)}
              />
            </View>
            <View style={styles.divContainer}>
              <CradsBtn
                name={'Images'}
                icon={'image'}
                onPress={() => navigation.navigate(screenName.images)}
              />
              <CradsBtn
                name={'Menu'}
                icon={'menu'}
                onPress={() => setModal(true)}
              />
            </View>
          </View>
        </View>
      </View>
      <Modal
        visible={modal}
        transparent
        animationType="slide"
        statusBarTranslucent>
        <View
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#00000090',
            paddingTop: 300,
          }}>
          <View
            style={{
              flex: 1,
              backgroundColor: colors.bg,
              borderTopRightRadius: 50,
              borderTopLeftRadius: 50,
              paddingTop: 70,
            }}>
            <TouchableOpacity
              style={{position: 'absolute', right: 10, top: 10}}
              onPress={() => setModal(false)}>
              <Icon raised name={'close'} color={colors.primary} size={25} />
            </TouchableOpacity>
            <View style={styles.modalMenuContainer}>
              <View style={styles.divContainer}>
                <CradsBtn
                  name={'Rate Us'}
                  icon="star"
                  onPress={() =>
                    Linking.openURL(
                      `https://play.google.com/store/apps/details?id=${appConfig.packageName}`,
                    )
                  }
                />
                <CradsBtn
                  name={'Privacy Policy'}
                  icon="lock"
                  onPress={() =>
                    Linking.openURL(
                      'https://hindishayaridailytok.blogspot.com/',
                    )
                  }
                />
              </View>
              <View style={styles.divContainer}>
                <CradsBtn
                  name={'Instagram'}
                  IconType="font-awesome"
                  icon="instagram"
                  onPress={() =>
                    Linking.openURL(
                      `https://www.instagram.com/${appConfig.instagram}`,
                    )
                  }
                />
                <CradsBtn
                  name={'Facebook'}
                  icon="facebook"
                  IconType={'font-awesome'}
                  onPress={() =>
                    Linking.openURL(
                      `https://www.facebook.com/${appConfig.facebook}`,
                    )
                  }
                />
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  TopImageContainet: {
    width: '100%',
    height: 200,
    backgroundColor: colors.white,
  },
  TopImageBottom: {
    width: '100%',
    height: 50,
    backgroundColor: colors.primary,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  container: {
    flex: 1,
    backgroundColor: colors.bg,
    padding: 5,
  },
  bottomContainer: {
    flex: 2,
    backgroundColor: colors.white,
    borderColor: colors.primary,
  },
  divContainer: {
    width: '100%',
    height: '50%',
    flexDirection: 'row',
    borderColor: colors.primary,
  },
  modalMenuContainer: {
    width: '100%',
    height: '100%',
    padding: 10,
  },
});
export default Home;
