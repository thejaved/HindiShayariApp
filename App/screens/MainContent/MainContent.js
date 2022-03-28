import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {ShareCards} from '../../components/Cards';
import Header from '../../components/Header';
import colors from '../../config/colors';

const MainContent = ({route, navigation}) => {
  const items = route.params.item;
  return (
    <>
      <Header title={items.Category} onPressLeft={() => navigation.goBack()} />
      <View style={styles.container}>
        <FlatList
          data={items.data}
          renderItem={({item}) => (
            <ShareCards
              key={item.id}
              source={item.image}
              content={item.content}
            />
          )}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
    padding: 10,
  },
});
export default MainContent;
