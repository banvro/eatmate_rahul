import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Image, Switch} from 'react-native'
import React, { useState } from 'react'

const Recievehosting = ({navigation}) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <ScrollView style={styles.mainConst}>

            <View style={styles.imageConst}>
                <TouchableOpacity onPress={() => navigation.goBack()}><Image source={require('../Recievehosting/assets/Back.png')} style={{ height: 35, width: 35,marginTop:8 }} /></TouchableOpacity>
                <Text style={{ color: '#187498', fontSize: 35, fontWeight: '600', margin: 3 }}>Recieve hosting requests</Text>
            </View>
           <View style={styles.borConst}>
           <View style={styles.container}>
                <View>
                    <Text style={{ color: '#000', fontWeight: '400', fontSize: 17 }}>
                        Enable
                    </Text>
                </View>
                <Switch
                    trackColor={{ false: "#C4C4C4", true: "#187498" }}
                    thumbColor={isEnabled ? "#fff" : "#fff"}
                    // backgroundColor="#187498"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View> 
            </View> 
            <View style={{ marginVertical:100,}}>
                <Text style={styles.txtConst}>
                    No hosting requests
                </Text>
            </View>

        </ScrollView>
    )
}

export default Recievehosting

const styles = StyleSheet.create({
    mainConst: {
        flex: 1,
        padding: 20,
        backgroundColor:'#fff',
        marginVertical:10,
    },

    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical:15,
        padding:5,
        margin:14
    },
    borConst:{
        backgroundColor:'#ECECEC',
        borderRadius:20,
        marginVertical:25,
    },
    txtConst:{
        color:'#000', 
        fontWeight:'400', 
        fontSize:17,
        textAlign:'center'
    }

})