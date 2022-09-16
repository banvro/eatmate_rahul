import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-google-signin/google-signin';
import axios from 'axios';

export class Checkingiwthclasscomponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pushData: [],
      loggedIn: false,
    
    }
  }

  componentDidMount() {

    GoogleSignin.configure({
      webClientId: '773130259136-6ium5oqursa05jf8uvridn7f17adj96a.apps.googleusercontent.com',
  });
  }

  _signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      this.setState({ userInfo: userInfo, loggedIn: true });
      console.log(userInfo)
      const token = userInfo.idToken
      const data ={
        token
    }
    console.log("data",data)
    const url = "https://eatmates.herokuapp.com/google"
         
  
  
    axios.post(url, data)
        .then(function (response) {
          console.log("everything", response)
            console.log(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });


    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (f.e. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }

  //   const data ={
  //     userInfo
  // }
  // const url = "https://eatmates.herokuapp.com/google"
       


  // axios.post(url, data)
  //     .then(function (response) {
  //         console.log(response.data);
  //     })
  //     .catch(function (error) {
  //         console.log(error);
  //     });
  // return auth().signInWithCredential(googleCredential);


// } catch (error) {
//   console.log(error)
// }
  
  };


  render() {
    return (
      
         <View style={{flex:1,  justifyContent:'center', alignItems:'center'}} >
              <View >
                <GoogleSigninButton
                  style={{ width: 192, height: 48 }}
                  size={GoogleSigninButton.Size.Wide}
                  color={GoogleSigninButton.Color.Dark}
                  onPress={this._signIn}
                  disabled={this.state.isSigninInProgress} />
              </View>
      </View>
    )
  }
}

export default Checkingiwthclasscomponent