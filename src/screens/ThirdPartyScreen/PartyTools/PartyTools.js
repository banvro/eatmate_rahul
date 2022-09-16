import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, Switch } from 'react-native'
import Custombutton from '../../../Components/CustomButton/Custombutton';
import React, { useState } from 'react'

const PartyTools = ({navigation}) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const [isEnaabled, setIsEnaabled] = useState(false);
    const togglesSwitch = () => setIsEnaabled(previousState => !previousState);

    const [isEnnabled, setIsEnnabled] = useState(false);
    const toggleeSwitch = () => setIsEnnabled(previousState => !previousState);

    const [isEnbled, setIsEnbled] = useState(false);
    const togglSwitch = () => setIsEnbled(previousState => !previousState);

    const [isEbled, setIsEbled] = useState(false);
    const toggllSwitch = () => setIsEbled(previousState => !previousState);

    const [isEled, setIsEled] = useState(false);
    const toggSwitch = () => setIsEled(previousState => !previousState);

    const [isEabed, setIsEabed] = useState(false);
    const togglessSwitch = () => setIsEabed(previousState => !previousState);

    const [isEnned, setIsEnned] = useState(false);
    const toggleessSwitch = () => setIsEnned(previousState => !previousState);

    const [isEbnled, setIsEbnled] = useState(false);
    const togglleSwitch = () => setIsEbnled(previousState => !previousState);

    const [isEmled, setIsEmled] = useState(false);
    const togglleeSwitch = () => setIsEmled(previousState => !previousState);


    return (
        <ScrollView style={styles.mainConst}>
            <View style={styles.firstDiv}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../assets/Back.png')} style={styles.imgCont} />
                </TouchableOpacity>
                <View style={styles.secDiv}>
                    <Text style={styles.fontConst}>Third party tools</Text>
                </View>
            </View>
            <View>
                <Text style={styles.parConst}>
                    Thank you for using Airbnb. The information that's shared with us helps to provide a great experience for you. Our <TouchableOpacity><Text style={styles.ourConst}>Privacy Policy</Text></TouchableOpacity>. describes how we collect, use, process, and disclose your personal information.
                </Text>
            </View>
            <View style={styles.padConst}>
                <Text style={styles.headingConst}>
                    Strictly necessary
                </Text>
                <Text style={styles.tool}>
                    These tools are necessary for the app to function and can't be switched off in our systems. They are usually only set in response to actions you have taken which result in a request for services, such as setting your privacy preferences, logging in or filling in forms.
                </Text>
            </View>
            <View>
            <View style={styles.roundConst}>
                <View style={styles.refConst}>
                    <Text style={styles.innerFont}>Braintree</Text>
                    <Switch
                        trackColor={{ false: "#C4C4C4", true: "#187498" }}
                        thumbColor={isEnabled ? "#fff" : "#fff"}
                        // backgroundColor="#187498"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                </View>
            </View>
            <View style={{ borderBottomWidth: 1, width: 330, marginHorizontal: 12 }}>
            </View>
            <View style={styles.roundConst}>
                <View style={styles.refConst}>
                    <Text style={styles.innerFont}>Google Maps</Text>
                    <Switch
                        trackColor={{ false: "#C4C4C4", true: "#187498" }}
                        thumbColor={isEnaabled ? "#fff" : "#fff"}
                        // backgroundColor="#187498"
                        onValueChange={togglesSwitch}
                        value={isEnaabled}
                    />
                </View>
            </View>
            <View style={{ borderBottomWidth: 1, width: 330, marginHorizontal: 12 }}>
            </View>
            <View style={styles.roundConst}>
                <View style={styles.refConst}>
                    <Text style={styles.innerFont}>Google reCAPTCHA</Text>
                    <Switch
                        trackColor={{ false: "#C4C4C4", true: "#187498" }}
                        thumbColor={isEnnabled ? "#fff" : "#fff"}
                        // backgroundColor="#187498"
                        onValueChange={toggleeSwitch}
                        value={isEnnabled}
                    />
                </View>
            </View>
            <View style={{ borderBottomWidth: 1, width: 330, marginHorizontal: 12 }}>
            </View>
            </View>
            <View>
            <View style={styles.padConst}>
                <Text style={styles.headingConst}>
                    Functional
                </Text>
                <Text style={styles.tool}>
                    These tools allow the provision of enhanced functionality and personalisation, such as videos and live chats. They may be set by us or by third-party providers whose services we have added to our platform. If you don't allow these files, then some or all of these functionalities may not function properly.
                </Text>
            </View>
            <View style={styles.roundConst}>
                <View style={styles.refConst}>
                    <Text style={styles.innerFont}>Turn all off</Text>
                    <Switch
                        trackColor={{ false: "#C4C4C4", true: "#187498" }}
                        thumbColor={isEnbled ? "#fff" : "#fff"}
                        // backgroundColor="#187498"
                        onValueChange={togglSwitch}
                        value={isEnbled}
                    />
                </View>
            </View>
            <View style={{ borderBottomWidth: 1, width: 330, marginHorizontal: 12 }}>
            </View>
            <View style={styles.roundConst}>
                <View style={styles.refConst}>
                    <Text style={styles.innerFont}>Facebok functionalities</Text>
                    <Switch
                        trackColor={{ false: "#C4C4C4", true: "#187498" }}
                        thumbColor={isEbled ? "#fff" : "#fff"}
                        // backgroundColor="#187498"
                        onValueChange={toggllSwitch}
                        value={isEbled}
                    />
                </View>
            </View>
            </View>
            <View>
            <View style={styles.padConst}>
                <Text style={styles.headingConst}>
                    Performance
                </Text>
                <Text style={styles.tool}>
                    These tools allow us to count visits and traffic sources so that we can measure and improve the performance of our app. They help us know which app interfaces are the most and least popular and see how visitors move around the app. All the information that these files collect is aggregated and therefore anonymous. If you do not allow these files, we will not collect this information from these files.
                </Text>
            </View>
            <View>
                <View style={styles.roundConst}>
                    <View style={styles.refConst}>
                        <Text style={styles.innerFont}>Turn all off</Text>
                        <Switch
                            trackColor={{ false: "#C4C4C4", true: "#187498" }}
                            thumbColor={isEled ? "#fff" : "#fff"}
                            // backgroundColor="#187498"
                            onValueChange={toggSwitch}
                            value={isEled}
                        />
                    </View>
                </View>
                <View style={{ borderBottomWidth: 1, width: 330, marginHorizontal: 12 }}>
                </View>
                <View style={styles.roundConst}>
                    <View style={styles.refConst}>
                        <Text style={styles.innerFont}>Branch</Text>
                        <Switch
                            trackColor={{ false: "#C4C4C4", true: "#187498" }}
                            thumbColor={isEabed ? "#fff" : "#fff"}
                            // backgroundColor="#187498"
                            onValueChange={togglessSwitch}
                            value={isEabed}
                        />
                    </View>
                </View>
                <View style={{ borderBottomWidth: 1, width: 330, marginHorizontal: 12 }}>
                </View>
                <View style={styles.roundConst}>
                    <View style={styles.refConst}>
                        <Text style={styles.innerFont}>Bugsnag</Text>
                        <Switch
                            trackColor={{ false: "#C4C4C4", true: "#187498" }}
                            thumbColor={isEnned ? "#fff" : "#fff"}
                            // backgroundColor="#187498"
                            onValueChange={toggleessSwitch}
                            value={isEnned}
                        />
                    </View>
                </View>
                <View style={{ borderBottomWidth: 1, width: 330, marginHorizontal: 12 }}>
                </View>
                <View style={styles.roundConst}>
                    <View style={styles.refConst}>
                        <Text style={styles.innerFont}>Sift</Text>
                        <Switch
                            trackColor={{ false: "#C4C4C4", true: "#187498" }}
                            thumbColor={isEbnled ? "#fff" : "#fff"}
                            // backgroundColor="#187498"
                            onValueChange={togglleSwitch}
                            value={isEbnled}
                        />
                    </View>
                </View>
                <View style={{ borderBottomWidth: 1, width: 330, marginHorizontal: 12 }}>
                </View>
                <View style={styles.roundConst}>
                    <View style={styles.refConst}>
                        <Text style={styles.innerFont}>Kochava</Text>
                        <Switch
                            trackColor={{ false: "#C4C4C4", true: "#187498" }}
                            thumbColor={isEmled ? "#fff" : "#fff"}
                            // backgroundColor="#187498"
                            onValueChange={togglleeSwitch}
                            value={isEmled}
                        />
                    </View>
                </View>
            </View>
            </View>
        <View style={{borderBottomWidth:1, width:450, position:'relative',}}>
            
        </View>

            <View style={{marginVertical:50}}>
            <Custombutton style={{ fontWeight:100}} text="Save" />
            </View>


        </ScrollView>
    )
}

export default PartyTools

const styles = StyleSheet.create({
    mainConst: {
       padding: 20,
        flex: 1,
        backgroundColor: '#fff',
        marginVertical:13
    },
    firstDiv: {
        flexDirection: 'row'
    },
    imgCont: {
        height: 32,
        width: 32
    },
    imgCont2: {
        height: 400,
        width: 350
    },
    secDiv: {
        margin: 5
    },
    fontConst: {
        fontSize: 15,
        fontWeight: '600',
        color: '#000'
    },
    parConst: {
        fontSize: 16,
        padding: 20
    },
    ourConst: {
        color: '#187498',
        textDecorationLine: 'underline',
        fontWeight: '400',
    },
    headingConst: {
        color: '#000',
        fontSize: 18,
        fontWeight: '500'

    },
    padConst: {
        padding: 20
    },
    tool: {
        marginVertical: 10
    },
    roundConst: {
        padding: 5,
    },
    refConst: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15
    },
    innerFont: {
        color: '#000',
        fontWeight: '400',
        fontSize: 15
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 14
    },
})