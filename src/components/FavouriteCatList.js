import * as React from 'react';
import {FlatList, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {useDispatch, useSelector} from 'react-redux';
import Heart from '../assets/icons/Heart';
import {remove} from '../features/catsSlice';
import {fonts} from '../theme/theme';

const FavouriteCatList = () => {
  const favouriteCats = useSelector(state => state.cats.cats);
  const renderItem = ({item}) => <FavouriteCat item={item} />;

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={favouriteCats}
      keyExtractor={item => item.id}
      renderItem={renderItem}
      contentContainerStyle={styles.cats}
      ListEmptyComponent={() => (
        <Text style={styles.emptyInfo}>
          You don't have any liked cat 😔, go like some and come back 😊
        </Text>
      )}
    />
  );
};

const FavouriteCat = ({item}) => {
  const dispatch = useDispatch();
  const removeCat = id => {
    if (id === item.id) {
      dispatch(remove(id));
    }
  };
  return (
    <View style={styles.catContainer}>
      <Image source={{uri: item?.image?.url}} style={styles.catImage} />

      <View style={styles.bottomSide}>
        <Text style={styles.catName}>{item.name}</Text>
        <Pressable style={styles.likeBtn} onPress={() => removeCat(item.id)}>
          <Heart fill="#de0202" stroke="#de0202" />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  catContainer: {
    marginBottom: 25,
    width: '50%',
  },
  bottomSide: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: wp('40'),
    paddingTop: 7,
  },
  catImage: {
    width: wp('40'),
    height: 160,
    borderRadius: 10,
  },
  catName: {
    fontSize: hp('2.2'),
    lineHeight: 24,
    fontFamily: fonts.regular,
    color: '#212227',
    width: '80%',
  },
  cats: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  emptyInfo: {
    fontFamily: fonts.regular,
    fontSize: hp('1.8'),
    color: 'gray',
  },
});
export default FavouriteCatList;
