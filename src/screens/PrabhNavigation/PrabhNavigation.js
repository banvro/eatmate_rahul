import { StyleSheet, Text, View ,SafeAreaView, Image} from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Explore from '../MainScreens/Explore/Explore';
import Booking from '../MainScreens/Booking/Booking';
import Zapping from '../MainScreens/Zapping';
import Wishlist from '../MainScreens/WishList';
import AddOtpScreen from '../MainScreens/AddOtpScreen/AddOtpScreen';
import OtpScreen from '../MainScreens/OtpScreen';





const PrabhNavigation = ({navigation}) => {
    const Tab = createBottomTabNavigator();

    return (
        <>
            <SafeAreaView style={styles.topSafeArea} />
            <SafeAreaView style={styles.bottomSafeArea}>
                
                <Tab.Navigator screenOptions={{
                    tabBarActiveTintColor: '#187498',
                    tabBarItemStyle: {  },
                    tabBarHideOnKeyboard: true,
                    initialRouteName: "Home",
                    tabBarStyle: {
                        backgroundColor: '#fff',
                        height: 82,
                        borderTopLeftRadius: 10,
                        position: 'absolute',
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                        marginBottom:-30,
                    },

                }}
                    // backBehavior={'history'}
                >
                       
                   
                    <Tab.Screen name="search" component={Explore} options={{
                          tabBarIcon: ({ color }) => 
                          
                        <Image style={styles.tinyLogo} source={require('./assets/Search.png')}/>
                        ,
                          
                        headerShown: false,
                    }}
                    />
                    <Tab.Screen name=" Booking " component={Booking} options={{
                          tabBarIcon: ({ color }) => 
                        <Image style={styles.tinyLogo} source={require('./assets/Dining.png')}/>,
                        
                        headerShown: false,
                    }}
                    />
                <Tab.Screen name="zapping " component={Zapping} options={{
                          tabBarIcon: ({ color }) => 
                        <Image style={styles.tinyLogo} source={require('./assets/Zapping.png')}/>,
                        
                        headerShown: false,
                    }}
                    />
                     <Tab.Screen name="WishlIST   " component={Wishlist} options={{
                          tabBarIcon: ({ color }) => 
                        <Image style={styles.tinyLogo} source={require('./assets/Favorite.png')}/>,
                        
                        headerShown: false,
                    }}
                    />
                     <Tab.Screen name="Otp" component={OtpScreen} options={{
                          tabBarIcon: ({ color }) => 
                        <Image style={styles.tinyLogo} source={require('./assets/otp.png')}/>,
                        
                        headerShown: false,
                    }}
                    />               
                </Tab.Navigator>
            </SafeAreaView>
        </>
    );
};
const styles = StyleSheet.create({
    topSafeArea: {
        flex: 0,
        backgroundColor: '#fff'
    },
    bottomSafeArea: {
        flex: 1,
        backgroundColor: '#fff'
    },
    tinyLogo:{
      height:28,
      width:28,
    },
    
});
export default PrabhNavigation