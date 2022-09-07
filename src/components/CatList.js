import * as React from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {useDispatch} from 'react-redux';
import Heart from '../assets/icons/Heart';
import {useGetAllCatsQuery} from '../features/catsApi';
import {add, remove} from '../features/catsSlice';
import {fonts} from '../theme/theme';

const CatList = () => {
  const {data, isError, error} = useGetAllCatsQuery();

  console.log('data-catlist', data);
  const renderItem = ({item}) => <Cat item={item} />;
  return (
    <>
      {isError ? (
        <Text>Error baby!!: {error?.message}</Text>
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          ListEmptyComponent={() => (
            <ActivityIndicator size="large" color="#212227" />
          )}
          initialNumToRender={15}
        />
      )}
    </>
  );
};

const Cat = ({item}) => {
  const [favourite, setFavourite] = React.useState(false);
  const dispatch = useDispatch();
  // on load, show  which one is liked already
  const addCat = id => {
    if (id === item.id) {
      dispatch(add(item));
      setFavourite(true);
    }
  };

  const removeCat = id => {
    if (id === item.id) {
      dispatch(remove(id));
      setFavourite(false);
    }
  };

  return (
    <View style={styles.catContainer}>
      <View style={styles.leftSide}>
        <Image source={{uri: item?.image?.url}} style={styles.catImage} />
        <Text style={styles.catName}>{item?.name}</Text>
      </View>

      {favourite ? (
        <Pressable style={styles.likeBtn} onPress={() => removeCat(item.id)}>
          <Heart fill="#de0202" stroke="#de0202" />
        </Pressable>
      ) : (
        <Pressable style={styles.likeBtn} onPress={() => addCat(item.id)}>
          <Heart fill="none" stroke="#212227" />
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  catContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 25,
  },
  leftSide: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  catImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  catName: {
    fontSize: hp('2.2'),
    lineHeight: 24,
    fontFamily: fonts.regular,
    paddingLeft: 15,
    color: '#212227',
  },
  likeBtn: {
    padding: 10,
  },
});
export default CatList;
