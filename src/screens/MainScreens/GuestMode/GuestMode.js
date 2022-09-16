import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Dimensions,Image, ImageBackground,Pressable,StatusBar, ScrollView } from 'react-native'
import React, { useState } from 'react';
import SelectList from 'react-native-dropdown-select-list';
import DatePicker from 'react-native-date-picker';

//FOR SLIDING
const images =[
  'file:///Users/extechdigital/Desktop/CloneRepo/eatmates_testing/src/assets/paneer.png',
  'file:///Users/extechdigital/Desktop/CloneRepo/eatmates_testing/src/assets/girl1.jpg',
  'file:///Users/extechdigital/Desktop/CloneRepo/eatmates_testing/src/assets/girl2.jpg'

 ]
 const WIDTH =Dimensions.get('window').width;
const HEIGHT =Dimensions.get('window').height;



const HostData = [
 {}
]

const GuestMode = ({navigation}) => {
  const [imageActive,setimageActive]=useState(0)

  onchange =(nativeEvent) =>{
    if(nativeEvent){
      const slide =Math.ceil(nativeEvent.contentOffset.x/nativeEvent.layoutMeasurement.width);
      if(slide != imageActive){
     setimageActive(slide);

      }
    }
  }
  const [show, setShow] = useState(true)
  const [favselect, setFavSelect] = useState(true)

  const settingPress = ()  => {
    alert('hii')
    navigation.navigate("SettingProfile");
  }
  const [invite, setInvite]=useState()

  const [selected, setSelected] = React.useState("");
  const data = [
    { key: 'Eat Togther', value: 'Eat Togther' },
    { key: 'Eat Family', value: 'Eat Family' },
    { key: 'Eat Togther', value: 'Eat Togther' },
  ];
  const [timing, setTiming] = React.useState("");
  const timedata = [
    { key: '9:30 pm', value: '9:30 pm' },
    { key: '10:30 pm', value: '10:30 pm' },
    { key: '11:00', value: '11:00 pm' },
  ];

  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)
  const [dolabel, setDolabel] = useState('Select Date')

  const [guest, setGuest] = React.useState("");
  const guestdata = [
    { key: '1', value: '1' },
    { key: '2', value: '2' },
    { key: '3', value: '3' },
  ];


  return (
    <SafeAreaView style={styles.root}>
      <StatusBar barStyle={'light-content'} />
      <View style={styles.topCont}>
        <TouchableOpacity onPress={() => setShow(!show)}>
          {show ?
            (
              <View style={styles.topContFirstDiv}>
                <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: '#187498', paddingHorizontal: 30, borderRadius: 50, paddingVertical: 3.5 }}>
                  <TouchableOpacity onPress={() => navigation.navigate('Booking')}>
                    <Image source={require('../../../assets/Chef.png')} style={{ width: 22, height: 19, marginVertical: 0.2 }} />
                  </TouchableOpacity>
                  <Text style={{ color: '#fff', fontSize: 9 }}>Host</Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('Zapping')}>
                  <Image source={require('../../../assets/Person.png')} style={{ width: 30, height: 30, marginRight: 15, marginLeft: 5 }} />
                </TouchableOpacity></View>)
            :
            (
              <View style={styles.topContFirstDiv}>
                <TouchableOpacity onPress={() => navigation.navigate('B')}>
                  <Image source={require('../../../assets/Chef.png')} tintColor='#000' style={{ width: 30, height: 30, marginRight: 6, marginLeft: 15 }} />
                </TouchableOpacity>
                <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#187498', paddingHorizontal: 18, borderRadius: 50, paddingVertical: 3.5, }}>
                  <TouchableOpacity onPress={() => navigation.navigate('Booking')}>
                    <Image source={require('../../../assets/Person.png')} tintColor='#FFF' style={{ width: 20, height: 19, marginHorizontal: 15, marginVertical: 0.2 }} />
                  </TouchableOpacity>
                  <Text style={{ color: '#fff', fontSize: 9, marginLeft: 2 }}>Guest</Text>
                </View>
              </View>)

          }
        </TouchableOpacity>
        <View style={styles.topContView}>
          <TouchableOpacity
          // onPress={}
          >
            <Image source={require('../../../assets/Chat.png')} style={{ width: 33, height: 33, marginRight: 15 }} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={   () =>navigation.navigate('SettingProfile')}
          >
            <Image source={require('../../../assets/Settings.png')} style={{ width: 33, height: 33 }} />
          </TouchableOpacity>
        </View>
      </View>
      {/* customHostCard */}
      <View style={{ padding: 20 }}>
        <View style={styles.centerCont}>
          <View style={styles.centerContPartOne}>
            <ScrollView onScroll={({ nativeEvent }) => onchange(nativeEvent)}
              showsHorizontalScrollIndicator={false}
              pagingEnabled
              horizontal style={styles.wrap}>
              {images.map((e, index) =>
                <ImageBackground key={e} resizeMode='cover'
                  style={styles.wrap}
                  source={{ uri: e }}>

                  <View style={styles.imgBackField}>
                    <TouchableOpacity>
                      <Image source={require('../../../assets/Info.png')} style={styles.partOneIcon} />
                    </TouchableOpacity>
                <View>
                    <TouchableOpacity onPress={() => setFavSelect(!favselect)}>
                      {favselect ?
                        (
                          <Image source={require('../../../assets/blackfavourite.png')} tintColor='#000' style={styles.partOneIcon} />
                        )
                        :
                        (
                          <Image source={require('../../../assets/Favorite.png')} style={styles.partOneIcon} />
                        )
                      }
                    </TouchableOpacity>
                    </View>
                  </View>
                </ImageBackground>)}

            </ScrollView>
            <View style={styles.wrapdot}>
              {
                images.map((e, index) =>
                  <Text key={e}
                    style={imageActive == index ? styles.dotActive : styles.dot}>
                    <View></View>
                  </Text>)}
            </View>

          </View>
          <View style={styles.centerContPartTwo}>
            <Text style={{ fontSize: 30, color: "#000" }}>Amelia</Text>
            <Text style={{ fontSize: 16, color: "#969696" }}>3 km away</Text>

            <View style={styles.dropdown}>
              <View>
                <Text style={styles.textonly}>Hosting Prefrence</Text>
                <SelectList
                  placeholder="Hosting "
                  // onSelect={() => alert(selected)}
                  setSelected={setSelected}
                  data={data}
                  search={false}
                  boxStyles={{ borderRadius: 1, borderColor: '#969696', width: 135, height: 42, backgroundColor: '#fff', }} />
              </View>

              <View style={styles.dropdownright}>
                <Text style={styles.textonly}>Timing Prefrence</Text>
                <SelectList
                  placeholder="Timing "
                  // onSelect={() => alert(selected)}
                  setSelected={setTiming}
                  data={timedata}
                  search={false}
                  boxStyles={{ borderRadius: 1, borderColor: '#969696', width: 135, height: 42, backgroundColor: '#fff' }} />
              </View>
            </View>

            <View style={styles.dropdown}>

              <View >
                <Text style={styles.textonly}>Date Prefrence</Text>

                <View style={{ borderWidth: 1, borderColor: '#969696', width: 135, height: 42, }}>
                  <Pressable onPress={() => setOpen(true)} >
                    <View>
                      <Text style={styles.datetext} placeholder="Date">{dolabel}</Text>
                    </View>
                  </Pressable>
                  <DatePicker
                    modal
                    mode='date'
                    open={open}
                    placeholder="date"
                    date={date}
                    onConfirm={(date) => {
                      setOpen(false)
                      setDate(date)
                      setDolabel(date.toDateString())
                    }}
                    onCancel={() => {
                      setOpen(false)
                    }} />

                </View>

              </View>

              <View style={styles.dropdownright}>
                <Text style={styles.textonly}>No. of Guest</Text>
                <SelectList
                  placeholder="No. of Guest"
                  // onSelect={() => alert(selected)}
                  setSelected={setGuest}
                  data={guestdata}
                  search={false}
                  boxStyles={{ borderRadius: 1, borderColor: '#969696', width: 135, height: 42, backgroundColor: '#fff' }} />
              </View>
            </View>

            <View style={styles.recentlybook}>
              <Text style={styles.textonly}>Recently booked listings</Text>
              <View style={styles.imglisting}>
                <TouchableOpacity>
                  <Image source={require('../../../assets/Ellipse.png')} style={styles.circleimg} />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image source={require('../../../assets/Ellipse1.png')} style={styles.circleimg} />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image source={require('../../../assets/Ellipse2.png')} style={styles.circleimg} />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image source={require('../../../assets/Ellipse3.png')} style={styles.circleimg} />
                </TouchableOpacity>
              </View>
              <View style={{ flexDirection: "column", alignItems: "flex-end", }}>
              <Pressable style={styles.nextbtn} onPress={() => { navigation.navigate('AddOtpScreen') }}>
                <Text style={styles.nextbtntext}>Booking</Text>
              </Pressable>
            </View>

            <View style={{ alignItems: "center", marginTop: 7 }}>
              <Text style={styles.swipetext}>Swipe Left or Right To change Hosting Prefrence</Text>
            </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#fff",
  },
  topCont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft:20,
    marginHorizontal:5,
  },
  topContView: {
    flexDirection: 'row',
  },
  topContFirstDiv: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#187498',
    borderRadius: 50,
  },
  centerCont: {
    borderRadius: 25,
    elevation: 10,
    borderWidth:0.25,
    height:'93%'
  },
  centerContPartOne: {
    height: '50%',
  },
  centerContPartTwo: {
    marginHorizontal:10,
    marginTop:3
  },
  partOneIcon: {
    height: 33,
    width: 33,
    margin: 20
  },
  imgBackCont: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    overflow: 'hidden',
  },
  imgBackField: {
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  dropdown: {
    flexDirection: "row",
    marginTop: 1,
  },
  dropdownright: {
    marginLeft: 18,
  },
  textonly: {
    marginVertical: 3,
    fontSize:12,
    color:"#000",
  },
  datetext: {
    alignItems: "center",
    justifyContent: "center",
    fontWeight: '600',
    marginTop: 10,
    marginLeft: 8,
  },
  imglisting: {
    flexDirection: "row",
    marginTop: 3,
    marginLeft: -10,
  },
  circleimg: {
    height: 33,
    width: 33,
    marginLeft: 12,
  },
  nextbtn: {
    height: 35,
    width: "40%",
    backgroundColor: '#187498',
    elevation: 1,
    alignItems: 'center',
    justifyContent: "center",
    borderRadius: 22,
  },
  nextbtntext: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600"
  },
  wrap: {
    width:WIDTH*0.90,
    height: HEIGHT * 0.40,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    overflow: 'hidden',


  },

  wrapdot: {
    position: "absolute",
    flexDirection: "row",
    alignSelf: "center",
  },

  dotActive: {
    margin: 4,
    marginTop: 8,
    color: "black",
    height: 2,
    width: "27%",
    borderRadius: 1,
    borderWidth: 1,
    borderColor: '#187498',
  },
  dot: {
    margin: 4,
    marginTop: 8,
    color: "red",
    height: 2,
    width: "27%",
    borderRadius: 1,
    borderWidth: 1,
    borderColor: '#969696',
  },
  swipetext: {
    fontSize: 10,
    fontWeight: "400",
    color: "#969696"
  },

})


export default GuestMode;