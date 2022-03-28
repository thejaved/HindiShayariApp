import React, {useEffect, useState} from 'react';
import {ActivityIndicator, ScrollView, StyleSheet, View} from 'react-native';

import ContentImageContainer from '../../components/ContentImageContainer';
import Header from '../../components/Header';
import colors from '../../config/colors';

const Images = ({navigation}) => {
  const [mainData, setMainData] = useState(null);
  const getData = async () => {
    try {
      const responce = await fetch(
        'https://thejaved.github.io/data/dbImages.json',
      );
      const data = await responce.json();
      setMainData(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Header
        title={"Shayari's Images"}
        onPressLeft={() => navigation.goBack()}
      />
      <View style={styles.mainContainer}>
        {mainData == null ? (
          <View
            style={{
              width: '100%',
              height: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <ActivityIndicator size={'large'} color={colors.primary} />
          </View>
        ) : (
          <View style={styles.innerContainer}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={styles.ScrollInner}>
                {mainData.imagesdata.map(items => {
                  return (
                    <>
                      <ContentImageContainer
                        content={items.content}
                        source={items.url}
                        key={items.id}
                        showAds={items.showAds}
                      />
                    </>
                  );
                })}
              </View>
            </ScrollView>
          </View>
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.bg,
  },
  innerContainer: {
    width: '100%',
    height: '100%',
    padding: 10,
  },
  ScrollInner: {
    paddingBottom: 200,
  },
});
export default Images;
