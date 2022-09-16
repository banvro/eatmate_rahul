import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const YourFoodListing = ({ navigation }) => {
    return (
        <ScrollView style={styles.mainConst}>
            <View style={styles.imageConst}>
                <TouchableOpacity onPress={() => navigation.goBack()}><Image source={require('../YourFoodListing/assets/Back.png')} style={{ height: 32, width: 32 }} /></TouchableOpacity>
                <Text style={styles.headTxt}>Your Listing</Text>
            </View>
            <View style={styles.Input1}>
                <TouchableOpacity>
                    <Image source={require('../YourFoodListing/assets/Bimage.png')} style={styles.imageList} />
                    <Text style={styles.text1}>Listing 1</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.Input1}>
                <TouchableOpacity>
                    <Image source={require('../YourFoodListing/assets/Bimage.png')} style={styles.imageList} />
                    <Text style={styles.text1}>Listing 2</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.Input1}>
                <TouchableOpacity>
                    <Image source={require('../YourFoodListing/assets/Bimage.png')} style={styles.imageList} />
                    <Text style={styles.text1}>Listing 3</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.Input1}>
                <TouchableOpacity>
                    <Image source={require('../YourFoodListing/assets/Bimage.png')} style={styles.imageList} />
                    <Text style={styles.text1}>Listing 4</Text>
                </TouchableOpacity>
            </View>

            <View>
                <Text style={styles.text}>
                    We've made it is easier to create new listing
                    and modify the existing listing
                </Text>
            </View>

            <View style={styles.borderConst}>
                <View style={styles.pulsConst}>
                    <TouchableOpacity onPress={() => navigation.navigate('ListingyourFood')} >
                        <Image source={require('../YourFoodListing/assets/Plus+.png')} style={{ height: 32, width: 32 }} />
                    </TouchableOpacity>
                    <Text style={styles.plusTxt}>Create a new listing</Text>
                    <TouchableOpacity><Image source={require('../YourFoodListing/assets/Right.png')} style={{ height: 32, width: 32 }} /></TouchableOpacity>
                </View>
            </View>

        </ScrollView>
    )
}

export default YourFoodListing

const styles = StyleSheet.create({
    mainConst: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
        marginVertical:10,
    },
    headTxt: {
        padding: 10,
        color: '#187498',
        fontSize: 30,
        fontWeight: '500'
    },
    Input1: {
        justifyContent: "center",
        marginVertical: 10,
        

    },
    text1: {
        position: "absolute",
        margin: 10,
        fontSize: 20,
        fontWeight: '600',
        alignSelf: "center",
        color: '#000',
    },
    imageList: {
        height: 50,
        width: 350,
        borderRadius: 10,
        opacity: 0.2,
        borderColor: '#000',
        borderWidth: 2
    },
    text: {
        fontSize: 17,
    },
    borderConst: {
        backgroundColor: '#E5E5E5',
        borderWidth: 1,
        borderRadius: 8,
        height: 50,
        marginVertical: 200
    },
    pulsConst: {
        flexDirection: 'row',
        padding:5, 
        marginHorizontal:-5,
        marginVertical:5
    },
    plusTxt: {
        color: '#000',
        fontSize: 18,
        fontWeight: '600',
        margin: 2,
        marginHorizontal: 50,

    },
})