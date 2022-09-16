import { ScrollView, StyleSheet, TextInput, Text, View, Image, TouchableOpacity, RadioButton, Pressable } from 'react-native'
import React, { useState } from 'react'

const ListingyourFood = ({navigation}) => {
    const [radio, setRadio] = useState({
        radio1: false,
        radio2: false
    });

    return (
        <ScrollView style={styles.mainConst}>
            <View style={styles.imageConst}>
                <TouchableOpacity onPress={() => navigation.goBack()}><Image source={require('../ListingYourFood/assets/Back.png')} style={{ height: 32, width: 32 }} /></TouchableOpacity>
                <Text style={styles.headTxt}>Now, let's give your food a name and describe your food</Text>
            </View>
            <View style={styles.foodListing}>
                <Text style={styles.headingText}>
                    Set a name for Listing
                </Text>
                <View style={styles.borConst}>
                    <TextInput
                        style={styles.input}
                        placeholder="Food Name"
                        placeholderTextColor="#969696"
                    />
                </View>
            </View>
            <View style={styles.fodDesc}>
                <Text style={styles.headingText2}>
                    Create your food description
                </Text>
                <View style={styles.borConst2}>
                    <TextInput
                        style={styles.input}
                        placeholder="Description"
                        placeholderTextColor="#969696"
                    />
                </View>
            </View>
            <View style={styles.foodListing}>
                <Text style={styles.headingText}>
                    Add a youtube link (of Listing item)
                </Text>
                <View style={styles.borConst}>
                    <TextInput
                        style={styles.input}
                        placeholder="https://youtu.be/......."
                        placeholderTextColor="#969696"
                    />
                </View>
            </View>
            <View>
                <Text style={styles.heading3}>
                    Included items the food
                </Text>
                <Text style={styles.prConst}>
                    Describe in the details what's included in this listing. You can also split the prices based on the included items in your hosting events.
                </Text>
            </View>
            <View style={styles.borderConst}>
                <View style={styles.pulsConst}>
                    <TouchableOpacity><Image source={require('../ListingYourFood/assets/Plus+.png')} style={{ height: 32, width: 32 }} /></TouchableOpacity>
                    <Text style={styles.plusTxt}>Starter</Text>
                </View>
            </View>
            <View style={styles.borderConst}>
                <View style={styles.pulsConst}>
                    <TouchableOpacity><Image source={require('../ListingYourFood/assets/Plus+.png')} style={{ height: 32, width: 32 }} /></TouchableOpacity>
                    <Text style={styles.plusTxt}>Main course</Text>
                </View>
            </View>
            <View style={styles.borderConst}>
                <View style={styles.pulsConst}>
                    <TouchableOpacity><Image source={require('../ListingYourFood/assets/Plus+.png')} style={{ height: 32, width: 32 }} /></TouchableOpacity>
                    <Text style={styles.plusTxt}>Desert</Text>
                </View>
            </View>
            <View style={styles.borderConst}>
                <View style={styles.pulsConst}>
                    <TouchableOpacity><Image source={require('../ListingYourFood/assets/Plus+.png')} style={{ height: 32, width: 32 }} /></TouchableOpacity>
                    <Text style={styles.plusTxt}>Others</Text>
                </View>
            </View>
            <View style={{ padding: 20 }}>
            <Text style={styles.fontConst}>
                    Food type
                </Text>
                <View style={styles.lastConst}>
                    <Text style={styles.vgConst}>veg</Text>
                <Pressable onPress={() => setRadio({ radio1: true, radio2: false})} style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={styles.borderConst2}>
                        {radio.radio1 && <View style={styles.radioConst}>
                        </View>}
                    </View>
                </Pressable>
                </View>
                <View style={styles.lastConst}>
                    <Text style={styles.vgConst}>Non veg</Text>
                <Pressable onPress={() => setRadio({ radio1: false, radio2: true})} style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={styles.borderConst2}>
                        {radio.radio2 && <View style={styles.radioConst}>
                        </View>}
                    </View>
                </Pressable>
                </View>
            </View>
            <View style={styles.finalConst}>
            <TouchableOpacity>
                <Text style={{fontSize:15, fontWeight:'400',marginTop:8}}>
                    Back
                </Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.bnConst}>
                <Text style={{color:'#fff', fontSize:15 }}>
                    Next
                </Text>
                </View> 
            </TouchableOpacity>
        </View>


        </ScrollView>
    )
}

export default ListingyourFood

const styles = StyleSheet.create({
    mainConst: {
        padding: 20,
        flex: 1,
        backgroundColor:'#fff',
        marginVertical:10
    },
    headTxt: {
        color: '#797979',
        fontSize: 18,
        padding: 20,
        fontWeight: '400'
    },
    borConst: {
        backgroundColor: '#F6F6F6',
        borderRadius: 12,
        padding: 5
    },
    headingText: {
        color: '#000',
        fontSize: 18,
        fontWeight: '600',
        marginVertical: 10
    },
    foodListing: {
        marginVertical: 20
    },
    borConst2: {
        backgroundColor: '#F6F6F6',
        borderRadius: 12,
        height: 200,
        padding: 5
    },
    foodListing: {
        marginVertical: 20
    },
    headingText2: {
        color: '#000',

        marginVertical: 5
    },
    heading3: {
        color: '#000',
        fontSize: 18,
        fontWeight: '600',
    },
    prConst: {
        color: '#797979',
        fontSize: 18,
    },
    borderConst: {
        backgroundColor: '#E5E5E5',
        borderWidth: 1,
        borderRadius: 8,
        height: 50,
        marginVertical: 5
    },
    pulsConst: {
        flexDirection: 'row',
        padding: 10
    },
    plusTxt: {
        color: '#000',
        fontSize: 18,
        fontWeight: '600',
        margin: 3,
        marginHorizontal: 25
    },
    fontConst: {
        color: '#000',
        fontSize: 28,
        fontWeight: '600'
    },
    textveg: {
        fontSize: 25,
        fontWeight: "700",
        marginTop: 20
    },
    borderConst2:{
        padding: 2, 
        justifyContent: "center", 
        alignItems: "center",
         borderWidth: 1, 
         borderColor: "#000", 
         width: 40, 
         height: 30,
    },
    radioConst: {
        margin: 2,
        height: 30,
        width: 40,
        backgroundColor: "#187498",
        borderWidth: 1,
        borderColor: "#187498",
        overflow: "hidden"
    },
    vgConst:{
        color:'#000',
        fontSize:20,
        fontWeight:'400'
    },
    lastConst:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginVertical:5
    },
    bnConst:{
        backgroundColor:'#187498',
        width:80,
        height:35,
        borderRadius:10,
        positionposition: 'absolute', 
        justifyContent: 'center', 
        alignItems: 'center'   
      },
      finalConst:{
        padding:15,
        flexDirection:'row',
        justifyContent:'space-between',
        marginVertical:40
        
      },

})