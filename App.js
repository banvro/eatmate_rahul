import { Settings, StatusBar } from 'react-native'
import React from 'react'
import Navigation from './src/screens/Navigation/Navigation'
import { SafeAreaView } from 'react-native-safe-area-context'
import Emergencydetail from './src/screens/LoginFlow/EmergencyData/Emergencydetail'
import SettingProfile from './src/screens/SettingPage/SettingProfile/SettingProfile'
import Notification from './src/screens/NotificationPage/Notification'
import PrivacyScreen from './src/screens/PrivacyScreen'
import Profile from './src/screens/ProfileShow/Profile'
import CustomBackBtn from './src/Components/CustomBackBtn'
import AddSelfie from './src/screens/LoginFlow/AddSelfie'
import Uploadid from './src/screens/LoginFlow/UploadID/Uploadid'
import VerifyCode from './src/screens/LoginFlow/VerifyCode/Verifycode'
import Addid from './src/screens/LoginFlow/AddID/Addid'
import GiftCards from './src/screens/GiftCardScreen/GiftCards'
import GiftCardsTwo from './src/screens/GiftCardScreen/GiftCardsTwo/GiftCardsTwo'
import AddAddressGift from './src/screens/GiftCardScreen/AddAddressGift'
import Refer from './src/screens/ReferScreens/Refer/Refer'
import Earning from './src/screens/ReferScreens/Earning'
import Ref$Ear from './src/screens/ReferScreens/Refer$Earn/Ref$Ear'
import PartyTools from './src/screens/ThirdPartyScreen/PartyTools'
import Sharing from './src/screens/ThirdPartyScreen/SharingScreen/Sharing'
import Protection from './src/screens/ThirdPartyScreen/ProtectionData/Protection'
// import Navigation2 from './src/screens/Navigation2/Navigation2'
import ManageyourData from './src/screens/ManageyourData'
import Zapping from './src/screens/MainScreens/Zapping'
import { NavigationContainer } from '@react-navigation/native'
// import Verify from './src/screens/LoginFlow/verify/verify.js'
import PrabhNavigation from './src/screens/PrabhNavigation/PrabhNavigation'

const App = () => {
  return (
    
    <>
    {/* <NavigationContainer>
      <PrabhNavigation/>
    </NavigationContainer> */}
    {/* <StatusBar  barStyle = "dark-content" hidden = {false} backgroundColor = "#fff" translucent = {true} />   */}
      <Navigation/>
    </> 
    //<Zapping/>
    // <Classcomponent/>
    // <CheckURL/>
    // <Checkingiwthclasscomponent/>
    // <Emergencydetail/>
    // <AddSelfie/>
    // <VerifyCode/>
    // <Verify/>
    //<Uploadid/> 
    // <SettingProfile/> 
    // <Addid/> 
    //<GiftCards/>
    //<GiftCardsTwo/>
    //<AddAddressGift/>
    //<Refer/>
    //<Earning/>
    //<Ref$Ear/>
    // <PartyTools/>
    //<Sharing/>
    // <Protection/> 
    //<ManageyourData/>


  )

}

export default App