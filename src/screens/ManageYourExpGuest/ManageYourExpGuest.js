import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity,Pressable, TextInput } from 'react-native'
import DatePicker from 'react-native-date-picker'
import React, { useState } from 'react'

const ManageYourExpGuest = ({navigation}) => {
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    const [dolabel, setDolabel] = useState('Date of Birth')
    const [rado, setRado] = useState({
        rado1: false,
        rado2: false,
        rado3: false,
        rado4: false,
        rado5: false
    });
    const [rad, setRad] = useState({
        rad1: false,
        rad2: false,
        rad3: false
    });
    const [radio, setRadio] = useState({
        radio1: false,
        radio2: false,
        radio3: false
    });
  return (
    <ScrollView style={styles.mainConst}>
    <View style={{ flexDirection: 'row', alignContent: 'center' }}>
        <View><TouchableOpacity onPress={() => navigation.goBack()}><Image source={require('../ManageyourExperience/assets/R.png')} style={{ height: 23, width: 23, paddingVertical: 15 }} /></TouchableOpacity></View>
        <View><Text style={styles.textCont}>Manage your experiences as host</Text></View>
    </View>
    <View>
        <Text style={styles.text1Cont}>
            Let the world relish your delicious food.Help us find one for you
        </Text>
    </View>
    <View >
        <Text style={styles.hrCont} >Set your hosting dates</Text>
        <Text style={styles.lnCont}>Let your future guest know when you would like to host an event for them. This selection will also alert the guest when they will reach you with for reservation. </Text>
    </View>
    <View style={{ flex: 6, justifyContent: 'center' }}>
        <Pressable onPress={() => setOpen(true)} >
            <View style={styles.containerDOB} >
                <TextInput style={styles.TextInput}>Specific dates</TextInput>
                <Image source={require('../ManageyourExperience/assets/Calendar.png')} style={styles.Image} />
            </View>
        </Pressable>
        <DatePicker
            modal
            mode='date'
            open={open}
            date={date}
            onConfirm={(date) => {
                setOpen(false)
                setDate(date)
                setDolabel(date.toDateString())
            }}
            onCancel={() => {
                setOpen(false)
            }}
        />
    </View>
    <View style={styles.borderConst} >
        <TextInput style={styles.TextInput}>Periodic range</TextInput>
    </View>
    <View >
        <Text style={styles.hrCont} >Set your preferred time to host</Text>
    </View>
    <View style={{ flex: 6, justifyContent: 'center' }}>
        <Pressable >
            <View style={styles.containerDOB} >
                <TextInput style={styles.TextInput}>Specific time</TextInput>
                <Image source={require('../ManageyourExperience/assets/DinnerTime.png')} style={styles.Image} />
            </View>
        </Pressable>
    </View>
    <View style={styles.borderConst} >
        <TextInput style={styles.TextInput}>Periodic range</TextInput>
    </View>
    <View >
        <Text style={styles.hrCont} >Set your preferred type of event</Text>
        <Text style={styles.lnCont}>Let your future guest know what are your preferred type of event for them. </Text>
    </View>
    <View style={{ padding: 20 }}>
        <View style={styles.lastsConst}>
            <Text style={styles.vgConst}>Breakfast (7am - 11am)</Text>
            <Pressable onPress={() => setRado({ rado1: true, rado2: false, rado3: false, rado4: false, rado5: false })} style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.borderConst2}>
                    {rado.rado1 && <View style={styles.radoConst}>
                    </View>}
                </View>
            </Pressable>
        </View>
        <View style={styles.lastsConst}>
            <Text style={styles.vgConst}>Lunch (11am - 3pm)</Text>
            <Pressable onPress={() => setRado({ rado1: false, rado2: true, rado3: false, rado4: false, rado5: false })} style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.borderConst2}>
                    {rado.rado2 && <View style={styles.radoConst}>
                    </View>}
                </View>
            </Pressable>
        </View>
        <View style={styles.lastsConst}>
            <Text style={styles.vgConst}>Dinner (6pm - 10pm)</Text>
            <Pressable onPress={() => setRado({ rado1: false, rado2: false, rado3: true, rado4: false, rado5: false })} style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.borderConst2}>
                    {rado.rado3 && <View style={styles.radoConst}>
                    </View>}
                </View>
            </Pressable>
        </View>
        <View style={styles.lastsConst}>
            <Text style={styles.vgConst}>Snacks & Tea</Text>
            <Pressable onPress={() => setRado({ rado1: false, rado2: false, rado3: false, rado4: true, rado5: false })} style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.borderConst2}>
                    {rado.rado4 && <View style={styles.radoConst}>
                    </View>}
                </View>
            </Pressable>
        </View>
        <View style={styles.lastsConst}>
            <Text style={styles.vgConst}>Any time</Text>
            <Pressable onPress={() => setRado({ rado1: false, rado2: false, rado3: false, rado4: false, rado5: true })} style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.borderConst2}>
                    {rado.rado5 && <View style={styles.radoConst}>
                    </View>}
                </View>
            </Pressable>
        </View>
    </View>
    <View style={{marginVertical:20}}>
        <Text style={styles.hrCont} >Hosting Preferences</Text>
        <Text style={styles.lnCont}>Let your future guest know how would you like to host an event. This selection will also alert the guest when they will reach you with request for reservation.</Text>
    </View>
    <View style={{ flexDirection: 'row' }}>
        <View style={styles.borderRd}>
            <Pressable style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image source={require('../ManageyourExperience/assets/Picture.png')} style={styles.Image} />
                <Text style={styles.rtextConst}>Eat together</Text>
            </Pressable>
            <Text style={styles.tstConst}>Eat together with your host at their place </Text>
        </View>
        <View style={styles.borderRd}>
            <Pressable style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image source={require('../ManageyourExperience/assets/Picture2.png')} style={styles.Image} />
                <Text style={styles.rtextConst}>Self Pickup</Text>
            </Pressable>
            <Text style={styles.tstConst}>you'll will pickup food from host place.</Text>
        </View>
    </View>
    <View style={styles.lsborder}>
        <View style={styles.borderRd}>
            <Pressable style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image source={require('../ManageyourExperience/assets/Picture3.png')} style={styles.Image} />
                <Text style={styles.rtextConst}>Home Delivery</Text>
            </Pressable>
            <Text style={styles.tstConst}>Get your food delivered. Delivery charges may Apply</Text>
        </View>
    </View>
    <View style={{marginVertical:20}}>
        <Text style={styles.hrCont} >Food Preferences</Text>
    </View>
    <View style={{ padding: 20 }}>
        <View style={styles.lastsConst}>
            <Text style={styles.vgConst}>Vegeterian</Text>
            <Pressable onPress={() => setRad({ rad1: true, rad2: false, rad3: false})} style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.borderConst2}>
                    {rad.rad1 && <View style={styles.radoConst}>
                    </View>}
                </View>
            </Pressable>
        </View>
        <View style={styles.lastsConst}>
            <Text style={styles.vgConst}>Non Vegeterian</Text>
            <Pressable onPress={() => setRad({ rad1: false, rad2: true, rad3: false})} style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.borderConst2}>
                    {rad.rad2 && <View style={styles.radoConst}>
                    </View>}
                </View>
            </Pressable>
        </View>
        <View style={styles.lastsConst}>
            <Text style={styles.vgConst}>Any</Text>
            <Pressable onPress={() => setRad({ rad1: false, rad2: false, rad3: true })} style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.borderConst2}>
                    {rad.rad3 && <View style={styles.radoConst}>
                    </View>}
                </View>
            </Pressable>
        </View>
    </View>
    <View >
        <Text style={styles.hrCont} >Spice Preferences</Text>
    </View>
    <View style={{ padding: 20 }}>
        <View style={styles.lastsConst}>
            <Text style={styles.vgConst}>Low</Text>
            <Pressable onPress={() => setRadio({ radio1: true, radio2: false, radio3: false})} style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.borderConst2}>
                    {radio.radio1 && <View style={styles.radoConst}>
                    </View>}
                </View>
            </Pressable>
        </View>
        <View style={styles.lastsConst}>
            <Text style={styles.vgConst}>Medium</Text>
            <Pressable onPress={() => setRadio({ radio1: false, radio2: true, radio3: false})} style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.borderConst2}>
                    {radio.radio2 && <View style={styles.radoConst}>
                    </View>}
                </View>
            </Pressable>
        </View>
        <View style={styles.lastsConst}>
            <Text style={styles.vgConst}>High</Text>
            <Pressable onPress={() => setRadio({ radio1: false, radio2: false, radio3: true })} style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.borderConst2}>
                    {radio.rad3 && <View style={styles.radoConst}>
                    </View>}
                </View>
            </Pressable>
        </View>
    </View>
    <View style={styles.finalConst}>
        <TouchableOpacity>
            <Text style={{ fontSize: 15, fontWeight: '400', marginTop: 8 }}>
                Back
            </Text>
        </TouchableOpacity>
        <TouchableOpacity>
            <View style={styles.bnConst}>
                <Text style={{ color: '#fff', fontSize: 15 }}>
                    Next
                </Text>
            </View>
        </TouchableOpacity>
    </View>

</ScrollView>
  )
}

export default ManageYourExpGuest


    const styles = StyleSheet.create({
        mainConst: {
            padding:10,
            flex: 1,
            marginVertical:20,
            backgroundColor:'#fff'
    
        },
        textCont: {
            fontSize: 18,
            color: '#000',
            fontWeight: '400',
            marginHorizontal: 20,
            margin: 2
        },
        touchConst: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingVertical: 30,
        },
        text1Cont: {
            fontSize: 20,
            padding: 20,
            textAlign: 'center',
            color: '#797979'
        },
        hrCont: {
            color: '#000',
            fontSize: 25,
            fontWeight: '600'
        },
        lnCont: {
            fontSize: 18,
            textAlign: 'justify',
            fontWeight: '600',
            color: '#797979',
            marginVertical: 10
        },
        containerDOB: {
            backgroundColor: '#F7F7F7',
            borderWidth: 1,
            borderRadius: 10,
            borderColor: '#F7F7F7',
            paddingHorizontal: 10,
            marginVertical: 5,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            padding: 4,
        },
        borderConst: {
            backgroundColor: '#F7F7F7',
            borderWidth: 1,
            borderRadius: 10,
            borderColor: '#F7F7F7',
            marginVertical: 5,
            width: '100%',
            padding: 4,
        },
        TextInput: {
            color: '#969696',
            fontSize: 18,
            fontWeight: '500'
        },
        rtextConst: {
            color: '#000',
            fontSize: 15,
            fontWeight: '500',
            marginHorizontal: 10
        },
        prConst: {
            flexDirection: 'row',
    
        },
        borderRd: {
            borderWidth: 1,
            borderRadius: 10,
            height: 90,
            width: 170,
            padding: 5,
            marginHorizontal: 4
        },
        tstConst: {
            color: '#000',
            fontSize: 10,
            fontWeight: '400',
           textAlign:'center',
           marginVertical:15
        },
        lsborder: {
            alignItems: 'center',
            padding: 10
        },
        finalConst: {
            padding: 15,
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 40
        },
        bnConst: {
            backgroundColor: '#187498',
            width: 80,
            height: 35,
            borderRadius: 10,
            positionposition: 'absolute',
            justifyContent: 'center',
            alignItems: 'center'
        },
        lastsConst: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 5
        },
        vgConst: {
            color: '#000',
            fontSize: 20,
            fontWeight: '400'
        },
        borderConst2: {
            padding: 2,
            justifyContent: "center",
            alignItems: "center",
            borderWidth: 1,
            borderColor: "#000",
            width: 40,
            height: 30,
        },
        radoConst: {
            margin: 2,
            height: 30,
            width: 40,
            backgroundColor: "#187498",
            borderWidth: 1,
            borderColor: "#187498",
            overflow: "hidden"
        },
        Image: {
            height: 30,
            width: 30
        },
        begConst: {
            flexDirection: 'row',
            justifyContent: 'space-evenly'
        },
        rtexConst: {
            color: '#000',
            fontSize: 18,
            fontWeight: '500',
            margin: 6
        },
        boxConst:{
            backgroundColor:'#E5E5E5',
            padding:20,
            borderRadius:20,
            marginVertical:40
        }

})