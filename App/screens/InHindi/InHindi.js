import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {ListCards} from '../../components/Cards';
import Header from '../../components/Header';
import colors from '../../config/colors';
import screenName from '../../config/screenName';

const InEnglish = ({navigation}) => {
  const [mainData, setMainData] = useState([]);
  const [dataLoading, setDataLoading] = useState(true);

  const getData = async () => {
    try {
      setDataLoading(true);
      const responce = await fetch(
        'https://thejaved.github.io/data/dbHindi.json',
      );
      const data = await responce.json();
      setMainData(data);
      setDataLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <View style={styles.container}>
      <Header
        title={"Popular Shayari's"}
        onPressLeft={() => navigation.goBack()}
      />
      <FlatList
        data={mainData.Shayaris}
        renderItem={({item}) => (
          <ListCards
            onPress={() => navigation.navigate(screenName.mainContent, {item})}
            name={item.Category}
            source={item.image}
            key={item.id}
          />
        )}
        keyExtractor={item => item.id}
        style={{padding: 5}}
        onRefresh={() => getData()}
        refreshing={dataLoading}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.bg,
  },
});
export default InEnglish;
