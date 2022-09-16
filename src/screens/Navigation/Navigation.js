import { View, Text, } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingIntro from '../LoginFlow/OnboardingScreen/Onboarding';
import Gettingstarted from '../LoginFlow/OnboardingScreen/Gettingstarted';
import LoginScreen from '../LoginFlow/LoginScreen';
import Addaddress from '../LoginFlow/AddressAdding/Addaddress';
import AddSelfie from '../LoginFlow/AddSelfie';
import EmergenCont from '../LoginFlow/EmergenCont';
import EmergencyData from '../LoginFlow/EmergencyData';
import UploadID from '../LoginFlow/UploadID';
import Beforebegin from '../LoginFlow/BeforeBegin/Beforebegin';
import VerifyCode from '../LoginFlow/VerifyCode/Verifycode';
import Setlanguage from '../LoginFlow/SetLanguage/Setlanguage';
import Addid from '../LoginFlow/AddID/Addid';
import Setdob from '../LoginFlow/SetDateOfBirth/Setdob';
import Addfullname from '../LoginFlow/AddFullName/Addfullname';
import MainScreen from '../MainScreens/Mainscreen';
import WelcomeScreen from '../LoginFlow/WelcomeScreen';
import Zapping from '../MainScreens/Zapping';
import  AsyncStorage from '@react-native-async-storage/async-storage';
const Stack = createNativeStackNavigator();
import SettingProfile from '../SettingPage/SettingProfile/SettingProfile';
import Profile from '../ProfileShow/Profile';
import GetHelp from '../GetHelp/GetHelp';
import GiveusfeedBack from '../GiveusfeedBack/GiveusfeedBack';
import PrivacyScreen from '../PrivacyScreen';
import Notification from '../NotificationPage/Notification';
import ManageyourExperience from '../ManageyourExperience/ManageyourExperience';
import ManageYourExpGuest from '../ManageYourExpGuest/ManageYourExpGuest';
import ShowProfile from '../ShowProfile/ShowProfile';
// import SettingProfile from '../SettingPage/SettingProfile/SettingProfile'

//navigation2 start here------------


import RefEar from '../ReferScreens/Refer$Earn';
import Earning from '../ReferScreens/Earning';
import Refer from '../ReferScreens/Refer';
import AddAddressGift from '../GiftCardScreen/AddAddressGift/AddAddressGift';
import GiftCardsTwo from '../GiftCardScreen/GiftCardsTwo/GiftCardsTwo';
import GiftCards from '../GiftCardScreen/GiftCards/GiftCards';
import ProfileHost from '../HostsProfiles/ProfileHost/ProfileHost';
import HostList from '../HostsProfiles/HostList/HostList';
import HostExpertise from '../HostsProfiles/HostExpertise/HostExpertise';
import GProfile from '../Guestprofile/GuestProfile/GProfile';
import GuestWishlist from '../Guestprofile/GuestWishlist/GuestWishlist';
import GuestExpertise from '../Guestprofile/GuestExpertise/GuestExpertise';
import YourFoodListing from '../YourFoodListing/YourFoodListing';
import ListingyourFood from '../ListingYourFood/ListingyourFood';
import PartyTools from '../ThirdPartyScreen/PartyTools/PartyTools';
import Sharing from '../ThirdPartyScreen/SharingScreen/Sharing';
import Protection from '../ThirdPartyScreen/ProtectionData/Protection';
import ManageyourData from '../ManageyourData';
import PaymentPayout from '../PaymentMethod/PaymentPayout/PaymentPayout';
import PaymentSetup from '../PaymentMethod/PaymentSetup/PaymentSetup';
import PaymentMode from '../PaymentMethod/PaymentMode/PaymentMode';
import Yourpayment from '../PaymentMethod/YourPayment/Yourpayment';
import PayoutPage  from '../PaymentMethod/PayoutPage/PayoutPage';
import AddAddress from '../PaymentMethod/AddAddress/AddAddress';
import TranstionHistory from '../PaymentMethod/TranstionHistory/TranstionHistory';
import HostProfile from '../HostProfile/HostProfile';
import GuestProfile from '../GuestProfilePreview/GuestProfile';
import Recievehosting from '../Recievehosting/Recievehosting';
import EatingRequest from '../EatingRequest/EatingRequest';
import Recognation from '../Recognation/Recognation';

import Booking from '../MainScreens/Booking/Booking';
import AddOtpscreen from '../MainScreens/AddOtpScreen/AddOtpScreen';
import PrabhNavigation from '../PrabhNavigation/PrabhNavigation';







const Navigation = () => {
  const [isAppFirstLaunched, setIsAppFirstLaunched] = React.useState(null);

  const appcheck =async()=>{
    try{
      const appData = await AsyncStorage.getItem('isAppFirstLaunched'); 
  
      // console.log("hello",appData);
  
      if (appData == null) { 
        setIsAppFirstLaunched(true);
  // console.log("yarr Anmulle",isAppFirstLaunched)
         AsyncStorage.setItem('isAppFirstLaunched', 'false');
         }
         
         else {
           setIsAppFirstLaunched(false); }
      //  AsyncStorage.removeItem('isAppFirstLaunched'); 
      }
      catch(e){
        console.log(e)
      }
    }
  

  React.useEffect( () => {
    // const appData = await AsyncStorage.getItem('@isAppFirstLaunched'); 
    appcheck();
    // console.log(appData);

    // if (appData == null) { 
    //   setIsAppFirstLaunched(true);

    //    AsyncStorage.setItem('@isAppFirstLaunched', 'false');
    //    }
       
    //    else { setIsAppFirstLaunched(false); }
    //  AsyncStorage.removeItem('@isAppFirstLaunched'); 
    // return () => {
    //   console.log("This will be logged on unmount");
    // }
   }, []);
   
   
  

 
    return (
      isAppFirstLaunched != null && (
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            {isAppFirstLaunched && (<>
              <Stack.Screen name="OnboardingIntro" component={OnboardingIntro} />
              <Stack.Screen name="Gettingstarted" component={Gettingstarted} />
              </>
            )} 
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="VerifyCode" component={VerifyCode} />
          <Stack.Screen name="Addid" component={Addid} />
          <Stack.Screen name="Addaddress" component={Addaddress} />
          <Stack.Screen name="AddSelfie" component={AddSelfie} />
          <Stack.Screen name="EmergenCont" component={EmergenCont} />
          <Stack.Screen name="EmergencyData" component={EmergencyData} />
          <Stack.Screen name="UploadID" component={UploadID} />
          <Stack.Screen name="Beforebegin" component={Beforebegin} />
          <Stack.Screen name="Setlanguage" component={Setlanguage} />
          <Stack.Screen name="Setdob" component={Setdob} />
          <Stack.Screen name="Addfullname" component={Addfullname} />
          {/*<Stack.Screen name="ForgotPassword" component={ForgotPassword} />*/}
          <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
          {/* <Stack.Screen name="MainScreen" component={MainScreen} />     */}
          <Stack.Screen name="Zapping" component={Zapping} />
          <Stack.Screen name="SettingProfile" component={SettingProfile} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="ShowProfile" component={ShowProfile}/>
          <Stack.Screen name="GetHelp" component={GetHelp} />
          <Stack.Screen name="GiveusfeedBack" component={GiveusfeedBack}/>
          <Stack.Screen name="PrivacyScreen" component={PrivacyScreen}/>
          <Stack.Screen name="Notification" component={Notification}/>
          <Stack.Screen name="ManageyourExperience" component={ManageyourExperience}/>
          <Stack.Screen name="ManageYourExpGuest" component={ManageYourExpGuest}/>

          {/* navigation2 start here */}
          
         
          <Stack.Screen name="RefEar" component={RefEar}/>
          <Stack.Screen name="Earning" component={Earning}/>
          <Stack.Screen name="Refer" component={Refer}/>
          <Stack.Screen name="AddAddressGift" component={AddAddressGift}/>
          <Stack.Screen name="GiftCardsTwo" component={GiftCardsTwo}/>
          <Stack.Screen name="GiftCards" component={GiftCards}/>
          <Stack.Screen name="ProfileHost" component={ProfileHost}/>
          <Stack.Screen name="HostList" component={HostList}/>
          <Stack.Screen name="HostExpertise" component={HostExpertise}/>
          <Stack.Screen name="GProfile" component={GProfile}/>
          <Stack.Screen name="GuestWishlist" component={GuestWishlist}/>
          <Stack.Screen name="GuestExpertise" component={GuestExpertise}/>
          <Stack.Screen name="YourFoodListing" component={YourFoodListing}/>
          <Stack.Screen name="ListingyourFood" component={ListingyourFood}/>
          <Stack.Screen name="PartyTools" component={PartyTools}/>
          <Stack.Screen name="Sharing" component={Sharing}/>
          <Stack.Screen name="Protection" component={Protection}/>
          <Stack.Screen name="ManageyourData" component={ManageyourData}/>
          <Stack.Screen name="PaymentPayout" component={PaymentPayout}/>
          <Stack.Screen name="PaymentSetup" component={PaymentSetup}/>
          <Stack.Screen name="PaymentMode" component={PaymentMode}/>
          <Stack.Screen name="Yourpayment" component={Yourpayment}/>
          <Stack.Screen name="PayoutPage" component={PayoutPage}/>
          <Stack.Screen name="AddAddress" component={AddAddress}/>
          <Stack.Screen name="TranstionHistory" component={TranstionHistory}/>
          <Stack.Screen name="HostProfile" component={HostProfile}/>
          <Stack.Screen name="GuestProfile" component={GuestProfile}/>
          <Stack.Screen name="Recievehosting" component={Recievehosting}/>
          <Stack.Screen name="EatingRequest" component={EatingRequest}/>
          <Stack.Screen name="Recognation" component={Recognation}/>

          <Stack.Screen name="Booking" component={Booking}/>
          <Stack.Screen name="AddOtpScreen" component={AddOtpscreen}/>
          <Stack.Screen name="PrabhNavigation" component={PrabhNavigation}/>

          
          

          
          </Stack.Navigator>
        </NavigationContainer>
      )
    );
  }

export default Navigation