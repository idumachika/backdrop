import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {SafeAreaView} from 'react-native-safe-area-context';
import CatList from '../components/CatList';
import {fonts} from '../theme/theme';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headingOne}>All Cats</Text>
      </View>

      <CatList />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
    backgroundColor: '#fff',
    flex: 1,
  },
  headingOne: {
    fontSize: hp('2.5'),
    fontFamily: fonts.bold,
    lineHeight: 24,
    color: '#212227',
    paddingVertical: 25,
  },
});
export default Home;
