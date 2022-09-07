import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import CatHead from '../assets/icons/CatHead';
import Heart from '../assets/icons/Heart';
import {fonts} from '../theme/theme';
import FavouriteCats from '../views/FavouriteCats';
import Home from '../views/Home';

const Tab = createBottomTabNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarActiveTintColor: '#212227',
          tabBarInactiveTintColor: '#d3d3d4',
          tabBarLabelStyle: {
            fontSize: hp('1.8'),
            fontFamily: fonts.regular,
            lineHeight: 20,
          },
          tabBarIcon: ({focused}) => {
            if (route.name === 'All Cats') {
              return <CatHead fill={focused ? '#212227' : '#d3d3d4'} />;
            } else if (route.name === 'Cats I Like') {
              return (
                <Heart
                  fill={focused ? '#212227' : '#d3d3d4'}
                  stroke={focused ? '#212227' : '#d3d3d4'}
                  size={27}
                />
              );
            }
          },
        })}>
        <Tab.Screen name="All Cats" component={Home} />
        <Tab.Screen name="Cats I Like" component={FavouriteCats} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
