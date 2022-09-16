import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Image, Switch } from 'react-native'
import React, { useState } from 'react'

const Recognation = ({navigation}) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const [isEnaabled, setIsEnaabled] = useState(false);
    const togglesSwitch = () => setIsEnaabled(previousState => !previousState);

    const [isEnnabled, setIsEnnabled] = useState(false);
    const toggleeSwitch = () => setIsEnnabled(previousState => !previousState);

    const [isEnnaabled, setIsEnnaabled] = useState(false);
    const toggleesSwitch = () => setIsEnnaabled(previousState => !previousState);

    return (
        <ScrollView style={styles.mainConst}>
            <View style={styles.imageConst}>
                <TouchableOpacity onPress={() => navigation.goBack()}><Image source={require('../AllNotification/assets/Back.png')} style={{ height: 32, width: 32 }} /></TouchableOpacity>
                <Text style={{ color: '#000', fontSize: 18, fontWeight: '400', margin: 3 }}>Recognition and Achievements</Text>
            </View>
            <View style={styles.hedConst}>
                <Text style={{ color: '#797979', fontSize: 15, fontWeight: '400' }}>Get recognition for reaching hosting milestones and superhost status</Text>
                
            </View>
            <View style={{marginVertical:20}}>
            <View style={styles.container}>
                <View>
                    <Text style={{ color: '#000', fontWeight: '400', fontSize: 15 }}>
                        Email
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
            <View style={styles.container}>
                <View>
                    <Text style={{ color: '#000', fontWeight: '400', fontSize: 15 }}>
                        Push Notification
                    </Text>
                </View>
                <Switch
                    trackColor={{ false: "#C4C4C4", true: "#187498" }}
                    thumbColor={isEnaabled ? "#fff" : "#fff"}
                    // backgroundColor="#187498"
                    onValueChange={togglesSwitch}
                    value={isEnaabled}
                />
            </View>
            <View style={styles.container}>
                <View>
                    <Text style={{ color: '#000', fontWeight: '400', fontSize: 15 }}>
                        Push Notification
                    </Text>
                </View>
                <Switch
                    trackColor={{ false: "#C4C4C4", true: "#187498" }}
                    thumbColor={isEnaabled ? "#fff" : "#fff"}
                    // backgroundColor="#187498"
                    onValueChange={toggleeSwitch}
                    value={isEnnabled}
                />
            </View>
            <View style={styles.container}>
                <View>
                    <Text style={{ color: '#000', fontWeight: '400', fontSize: 15 }}>
                        Phone Calls
                    </Text>
                </View>
                <Switch
                    trackColor={{ false: "#C4C4C4", true: "#187498" }}
                    thumbColor={isEnnaabled ? "#fff" : "#fff"}
                    // backgroundColor="#187498"
                    onValueChange={toggleesSwitch}
                    value={isEnnaabled}
                />
            </View>
            </View>
        </ScrollView>
    )
}

export default Recognation

const styles = StyleSheet.create({

    mainConst: {
        flex: 1,
        padding: 20,
        backgroundColor:'#fff',
        marginVertical:7
    },
    imageConst: {
        flexDirection: 'row',
    },
    hedConst: {
        padding: 5,
        marginHorizontal: 30,

    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical:14
    },
})