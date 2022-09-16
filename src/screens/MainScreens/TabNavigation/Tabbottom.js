import { View, Text, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Booking from '../Booking';
import Explore from '../Explore';
import Zapping from '../Zapping';
import WishList from '../WishList';
import OtpScreen from '../OtpScreen';
// import HomeLogo from '../../../assets/SwipingHeartRight'
import SettingProfile from '../SettingPage/SettingProfile/SettingProfile'


const Tab = createBottomTabNavigator();

const Tabbottom = () => {
  return (
    <Tab.Navigator 
    tabBarOptions ={{
        showLabel: false
    }} >
        <Tab.Screen name="Explore" component={Explore} 
        options={{
            tabBarIcon: ( {focused}) => (
                <View>
                    <Image 
                        source={require('../../../assets/Search.png')} 
                        resizeMode='contain'

                        style={{
                            width:25, 
                            height: 25,
                            tintColor: focused ?   '#187498':'#000000'
                        }}
                    />
                    <Text style={{ color: focused ? '#187498' : '#000000' , fontSize:12}}>Explore</Text>
                </View>
            )
        }}
        />
        <Tab.Screen name="Booking" component={Booking} 
         options={{
            tabBarIcon: ( {focused}) => (
                <View>
                    <Image 
                        source={require('../../../assets/Search.png')} 
                        resizeMode='contain'

                        style={{
                            width:25, 
                            height: 25,
                            tintColor: focused ?   '#187498':'#000000'
                        }}
                    />
                    <Text style={{ color: focused ? '#187498' : '#000000' , fontSize:12}}>Booking</Text>
                </View>
            )
        }}
        />
        <Tab.Screen name="Zapping" component={Zapping}
         options={{
            tabBarIcon: ( {focused}) => (
                <View>
                    <Image 
                        source={require('../../../assets/Search.png')} 
                        resizeMode='contain'

                        style={{
                            width:25, 
                            height: 25,
                            tintColor: focused ?   '#187498':'#000000'
                        }}
                    />
                    <Text style={{ color: focused ? '#187498' : '#000000' , fontSize:12}}>Zapping</Text>
                </View>
            )
        }}
        />
        <Tab.Screen name="WishList" component={WishList}
         options={{
            tabBarIcon: ( {focused}) => (
                <View>
                    <Image 
                        source={require('../../../assets/Search.png')} 
                        resizeMode='contain'

                        style={{
                            width:25, 
                            height: 25,
                            tintColor: focused ?   '#187498':'#000000'
                        }}
                    />
                    <Text style={{ color: focused ? '#187498' : '#000000' , fontSize:12}}>Wishlist</Text>
                </View>
            )
        }}
        />
        <Tab.Screen name="OTP" component={OtpScreen}
         options={{
            tabBarIcon: ( {focused}) => (
                <View>
                    <Image 
                        source={require('../../../assets/Search.png')} 
                        resizeMode='contain'

                        style={{
                            width:25, 
                            height: 25,
                            tintColor: focused ?   '#187498':'#000000'
                        }}
                    />
                    <Text style={{ color: focused ?   '#187498':'#000000' , fontSize:12}}>OTP</Text>
                </View>
            )
        }}
        />
      </Tab.Navigator>
  )
}

export default Tabbottom