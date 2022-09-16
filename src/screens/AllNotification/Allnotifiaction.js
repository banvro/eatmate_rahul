import { ScrollView, StyleSheet, Text, View,TouchableOpacity, Image, Switch  } from 'react-native'
import React, { useState } from 'react'

const Allnotifiaction = () => {
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
        <TouchableOpacity><Image source={require('../Recognation/assets/Back.png')} style={{ height: 32, width: 32 }} /></TouchableOpacity>
        <Text style={{ color: '#000', fontSize: 18, fontWeight: '400', margin: 3 }}>All Notifications</Text>
    </View>
    <View style={styles.hedConst}>
        <Text style={{ color: '#797979', fontSize: 15, fontWeight: '400' }}>We'd love to stay in touch,But you're in</Text>
        <Text style={{ color: '#797979', fontSize: 15, fontWeight: '400' }}> control</Text>
    </View>
    <View style={styles.container}>
        <View>
            <Text style={{ color: '#000', fontWeight: '400', fontSize: 15 }}>
                Email
            </Text>
        </View>
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

</ScrollView>
  )
}

export default Allnotifiaction

const styles = StyleSheet.create({

    mainConst: {
        flex: 1,
        padding: 20,
    },
    imageConst: {
        flexDirection: 'row',
    },
    hedConst: {
        padding: 5,
        marginHorizontal: 30,
        marginVertical:15

    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical:14
    },
})