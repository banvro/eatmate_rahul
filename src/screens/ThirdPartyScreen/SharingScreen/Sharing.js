import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, Switch } from 'react-native'
import React, { useState } from 'react'

const Sharing = ({navigation}) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const [isEnaabled, setIsEnaabled] = useState(false);
    const togglesSwitch = () => setIsEnaabled(previousState => !previousState);

    return (
        <ScrollView style={styles.mainConst}>
            <View style={styles.firstDiv}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../assets/Back.png')} style={styles.imgCont} />
                </TouchableOpacity>
                <View style={styles.secDiv}>
                    <Text style={styles.fontConst}>Privacy and Sharing</Text>
                </View>
            </View>
            <View style={styles.penConst}>
                <View style={styles.firstDiv2}>
                    <View>
                        <Text style={styles.fontConst}>
                            Protection of your data
                        </Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('Protection')}>
                        <Image source={require('../assets/Edit.png')} style={styles.imgCont2} />
                        </TouchableOpacity>
                </View>
                <Text style={styles.innerFont}>
                    We use cookies to personalize content, tailor and measure advertising and ensure the security.
                </Text>
            </View>
            <View style={{ borderBottomWidth: 1, width: 320, marginHorizontal: 20 }}></View>
            <View style={styles.penConst}>
                <View style={styles.firstDiv2}>
                    <View>
                        <Text style={styles.fontConst}>
                            Protection of your data
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
                <Text style={styles.innerFont}>
                    If you activate this, your activity will be shared on facebook. This may contain your personal info.
                </Text>
            </View>
            <View style={{ borderBottomWidth: 1, width: 320, marginHorizontal: 20 }}></View>
            <View style={styles.penConst}>
                <View style={styles.firstDiv2}>
                    <View>
                        <Text style={styles.fontConst}>
                            Make my profile and ad accessible
                        </Text>
                        <Text style={styles.fontConst}>
                            to search engines
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
                <Text style={styles.innerFont}>
                    If you turn on this option, search engines can find your profile and listing pages and show them as search results.
                </Text>
            </View>




        </ScrollView>
    )
}

export default Sharing

const styles = StyleSheet.create({
    mainConst: {
        padding: 20,
        flex: 1,
        backgroundColor: '#fff',
        marginVertical:10,
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
    divConst: {
        padding: 20
    },
    penConst: {
        padding: 20
    },
    innerFont: {
        fontSize: 12,
        marginVertical: 5,
        color: '#969696',
        fontWeight:'400'

    }
})