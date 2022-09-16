import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, Switch } from 'react-native'
import Custombutton from '../../../Components/CustomButton/Custombutton';
import React, { useState } from 'react'

const Protection = ({navigation}) => {
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

    const [isEnbled, setIsEnbled] = useState(false);
    const togglSwitch = () => setIsEnbled(previousState => !previousState);

    const [isEbled, setIsEbled] = useState(false);
    const toggllSwitch = () => setIsEbled(previousState => !previousState);
    return (
        <ScrollView style={styles.mainConst}>
            <View style={styles.firstDiv}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../assets/Back.png')} style={styles.imgCont} />
                </TouchableOpacity>
                <View style={styles.secDiv}>
                    <Text style={styles.fontConst}>Protection of your data</Text>
                </View>
            </View>
            <View>
                <Text style={styles.paraGarh}>
                    When you visit a website, it can store or retrieve information on your browser, mostly in the form of cookies. This information may be related to you, your settings or your device and is mainly used to make the website work as expected. This information usually does not identify you directly but can provide you with a more personalized web experience. Because we respect your right to privacy, you can choose not to allow some types of cookies. Click on the different sections to learn more and change our default settings. However, blocking some types of cookies may have an impact on your user experience and the services we are able to offer.
                </Text>
            </View>
            <View style={styles.padConst}>
                <Text style={styles.headingConst}>
                    Strictly necessary
                </Text>
                <Text style={styles.tool}>
                    These tools are necessary for the app to function and can't be switched off in our systems. They are usually only set in response to actions you have taken which result in a request for services, such as setting your privacy preferences, logging in or filling in forms.                </Text>
            </View>
            <View>
                <View style={styles.roundConst}>
                    <View style={styles.refConst}>
                        <Text style={styles.innerFont}>Disable all</Text>
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
                        <Text style={styles.innerFont}>Security</Text>
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
                        <Text style={styles.innerFont}>Eatmates</Text>
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
                        <Text style={styles.innerFont}>Language Settings</Text>
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
                        <Text style={styles.innerFont}>User : Inside Experience</Text>
                        <Switch
                            trackColor={{ false: "#C4C4C4", true: "#187498" }}
                            thumbColor={isEmled ? "#fff" : "#fff"}
                            // backgroundColor="#187498"
                            onValueChange={togglleeSwitch}
                            value={isEmled}
                        />
                    </View>
                </View>
                <View style={{ borderBottomWidth: 1, width: 330, marginHorizontal: 12 }}>
                </View>
                <View style={styles.roundConst}>
                    <View style={styles.refConst}>
                        <Text style={styles.innerFont}>One Trust</Text>
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
                        <Text style={styles.innerFont}>Arkose labs</Text>
                        <Switch
                            trackColor={{ false: "#C4C4C4", true: "#187498" }}
                            thumbColor={isEbled ? "#fff" : "#fff"}
                            // backgroundColor="#187498"
                            onValueChange={toggllSwitch}
                            value={isEbled}
                        />
                    </View>
                </View>
                <View style={{ borderBottomWidth: 1, width: 330, marginHorizontal: 12 }}>
                </View>
            </View>
            <View style={styles.padConst}>
                <Text style={styles.headingConst}>
                    Performance cookies
                </Text>
                <Text style={styles.tool}>
                    These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our website. They tell us which pages are popular and which are not, and how visitors move around the site. If you do not allow these cookies, data from these cookies will not be used to improve the performance of the website.
                </Text>
            </View>
            <View style={styles.roundConst}>
                <View style={styles.refConst}>
                    <Text style={styles.innerFont}>Activate all</Text>
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
                    <Text style={styles.innerFont}>Eatmates Analytics</Text>
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
                    <Text style={styles.innerFont}>Google Analytics</Text>
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
                    <Text style={styles.innerFont}>nr-data.net</Text>
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
                    <Text style={styles.innerFont}>marketo.com</Text>
                    <Switch
                        trackColor={{ false: "#C4C4C4", true: "#187498" }}
                        thumbColor={isEmled ? "#fff" : "#fff"}
                        // backgroundColor="#187498"
                        onValueChange={togglleeSwitch}
                        value={isEmled}
                    />
                </View>
            </View>
            <View style={{ borderBottomWidth: 1, width: 330, marginHorizontal: 12 }}>
            </View>
            <View style={styles.roundConst}>
                <View style={styles.refConst}>
                    <Text style={styles.innerFont}>Inspectlet</Text>
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
                    <Text style={styles.innerFont}>Google Universal Analytics</Text>
                    <Switch
                        trackColor={{ false: "#C4C4C4", true: "#187498" }}
                        thumbColor={isEbled ? "#fff" : "#fff"}
                        // backgroundColor="#187498"
                        onValueChange={toggllSwitch}
                        value={isEbled}
                    />
                </View>
            </View>
            <View style={{ borderBottomWidth: 1, width: 330, marginHorizontal: 12 }}>
            </View>
            <View style={styles.padConst}>
                <Text style={styles.headingConst}>
                    Performance cookies
                </Text>
                <Text style={styles.tool}>
                    These cookies allow us to improve functionality and personalization of, for example, videos and live chats. They may be set by us or by third parties whose services we have added to our sites. If you do not allow these cookies some or all of these features may not work properly.
                </Text>
            </View>
            <View style={styles.roundConst}>
                <View style={styles.refConst}>
                    <Text style={styles.innerFont}>Activate all</Text>
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
                    <Text style={styles.innerFont}>Eatmates Functional</Text>
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
                    <Text style={styles.innerFont}>Ibm.com</Text>
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
                    <Text style={styles.innerFont}>box.com</Text>
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
                    <Text style={styles.innerFont}>account.google.com</Text>
                    <Switch
                        trackColor={{ false: "#C4C4C4", true: "#187498" }}
                        thumbColor={isEmled ? "#fff" : "#fff"}
                        // backgroundColor="#187498"
                        onValueChange={togglleeSwitch}
                        value={isEmled}
                    />
                </View>
            </View>
            <View style={{ borderBottomWidth: 1, width: 330, marginHorizontal: 12 }}>
            </View>
            <View style={styles.roundConst}>
                <View style={styles.refConst}>
                    <Text style={styles.innerFont}>Wordpress</Text>
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
                    <Text style={styles.innerFont}>Facebook Functionality</Text>
                    <Switch
                        trackColor={{ false: "#C4C4C4", true: "#187498" }}
                        thumbColor={isEbled ? "#fff" : "#fff"}
                        // backgroundColor="#187498"
                        onValueChange={toggllSwitch}
                        value={isEbled}
                    />
                </View>
            </View>
            <View style={{ borderBottomWidth: 1, width: 330, marginHorizontal: 12 }}>
            </View>

            <View style={{marginVertical:50}}>
            <Custombutton style={{ fontWeight:100}} text="Save" />
            </View>

        </ScrollView>
    )
}

export default Protection

const styles = StyleSheet.create({
    mainConst: {
        padding: 20,
        flex: 1,
        backgroundColor: '#fff'
    },
    firstDiv: {
        flexDirection: 'row'
    },
    firstDiv2: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    imgCont: {
        height: 32,
        width: 32
    },
    imgCont2: {
        height: 25,
        width: 25
    },
    secDiv: {
        margin: 5
    },
    fontConst: {
        fontSize: 15,
        fontWeight: '600',
        color: '#000'
    },
    paraGarh: {
        padding: 12,

    },
    padConst: {
        padding: 12
    },
    headingConst: {
        color: '#000',
        fontSize: 18,
        fontWeight: '500'

    },
    tool: {
        marginVertical: 5
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
})