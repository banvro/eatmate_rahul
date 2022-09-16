import { ScrollView, StyleSheet, Text, View,Pressable, Image, TouchableOpacity,Modal,Button,FlatList, ImageBackground } from 'react-native'
import React,{useState} from 'react';
import DatePicker from 'react-native-date-picker';




const BookingDATA = [
  {
    id: '1',
    image:require('../../../assets/explore.png'),
    circleImage:require('../../../assets/circle.png'),
    title: 'Grilled Sandwiches At Claudine`s',
    date: '10/05/2022 || 09:30',
    time:  '07:30 PM',
    hostNo:'3',
    price:'120 $',
    },
    
    {
      id: '2',
      image:require('../../../assets/explore.png'),
      circleImage:require('../../../assets/circle.png'),
      title: 'Grilled Sandwiches At Claudine`s',
      date: '29/05/2022 || 09:30',
      time:  '09:30 PM',
      hostNo:'5',
      price:'150 $',
      },
  
];    

const Explore = () => {


  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)
  const [dolabel, setDolabel] = useState('Not Specified')

const GuestData = ({ item }) => {

  return (

    <View>
      <View style={styles.Main}>

        <View>
          <View style={styles.imgPizza}>
          <ImageBackground source={item.image} style={{height:166,width:"100%"}}/>
          <View style={styles.showPrice}>
          <View style={styles.btnLunch}> 
              <Text style={styles.nextbtntext}>Lunch</Text>
          </View>
          <View style={styles.btnLunch}> 
              <Text style={styles.nextbtntext}>120 $</Text>
          </View>
          </View>
          
          </View>
         </View>
         <View style={styles.mainCircle}>
            <Image source={item.circleImage} style={{height:85,width:85,borderRadius:999,resizeMode:"cover"}}/>
          </View>
         <View style={{marginTop:55}}>
         <View>
            <Text style={styles.textmain}>{item.title}</Text>
            </View>
         <View style={{flexDirection:"row", justifyContent:"space-between",marginHorizontal:20,marginVertical:10}}>
        <View  style={{flexDirection:"row",padding:3}}>
         <View>
          <Image source={require('../../../assets/Calendar.png')} style={{height:17, width:17}}/>
       </View>
           <Text style={styles.texticon}> {item.date}</Text>
       </View> 

       <View  style={{flexDirection:"row",padding:3}}>
         <View>
          <Image source={require('../../../assets/Clock.png')} style={{height:17, width:17}}/>
       </View>
           <Text style={styles.texticon}>{item.time}</Text>
       </View> 
       </View>

       <View style={{flexDirection:"row", justifyContent:"space-between",marginHorizontal:20,marginVertical:5}}>
        <View  style={{flexDirection:"row",padding:3}}>
         <View>
          <Image source={require('../../../assets/People.png')} style={{height:17, width:17}}/>
       </View>
           <Text style={styles.texticon}> {item.hostNo}</Text>
       </View> 

       <View  style={{flexDirection:"row",padding:3,marginRight:22}}>
         <View>
          <Image source={require('../../../assets/Star.png')} style={{height:17, width:17}}/>
       </View>
       <View>
       <Text style={styles.texticon}>{item.price}</Text>
       </View>
       </View> 
       </View>
         </View>
           

      </View>
    </View>
  


  )};

  return (<>
      <ScrollView style={styles.mainConst}>

      <View style={{ marginHorizontal:20 }}>
        <Text style={styles.textWish}>Explore</Text>
      </View>

           <View style={{flexDirection:"row", justifyContent:"space-around",marginVertical:10}}>
              <View>
              <TouchableOpacity onPress={() => setOpen(true)} >
              <View style={{flexDirection:"row"}}>
               <View>
                <Image source={require('../../../assets/Calendar.png')} style={{height:25, width:24}}/>
             </View>
               <View>
                 <Text style={styles.textguest}> Date</Text>
                 <Text style={styles.datetext} placeholder="Date"> {"\n"}{dolabel}</Text>

                 <DatePicker
                    modal
                    mode='date'
                    open={open}
                    placeholder="Not Specified"
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
              </TouchableOpacity>
             </View>

             {/* guest number icon */}
             <View>
              <TouchableOpacity >
              <View style={{flexDirection:"row"}}>
               <View>
                <Image source={require('../../../assets/People.png')} style={{height:25, width:24}}/>
             </View>
               <View>
                 <Text style={styles.textguest}> Guest</Text>
                 <Text style={styles.datetext}> {"\n"}Guest no</Text>

                    </View>
                    </View>
              </TouchableOpacity>
             </View>

             {/* filter icon */}

             <View>
              <TouchableOpacity>
              <View style={{flexDirection:"row"}}>
               <View>
                <Image source={require('../../../assets/Calendar.png')} style={{height:25, width:24}}/>
             </View>
               <View>
                 <Text style={styles.textguest}> Filter</Text>
                 <Text style={styles.datetext}> {"\n"}None</Text>

                
                    </View>
                    </View>
              </TouchableOpacity>
             </View>

             </View>

             

         <View>
          <FlatList
          data={BookingDATA}
          renderItem={GuestData}
          keyExtractor={item => item.id}  />
         </View>
         
</ScrollView>  
  </> 
  )
}

export default Explore

const styles = StyleSheet.create({
  mainConst: {
    flex: 1,
    padding: 10,
    backgroundColor:'#fff'
  },
  textWish:{
    fontSize:30,
    fontWeight:"400",
    color:'#187498',
  },
  textguest:{
    color:"#000",
    fontSize:12,
    fontWeight:"400",
    marginTop:-1.5,
  },
 
  datetext: {
    alignItems: "center",
    justifyContent: "center",
    fontWeight: '400',
    color:"#767676",
    fontSize:11,
    marginTop:-13,
    marginLeft:4,
  },
  Main : {
    backgroundColor : "#fff" ,
    height : 292 ,
    width :"100%",
    borderRadius : 24,
    marginTop:15,
    borderWidth:0.25,
    elevation:20,
    shadowColor:"#52006A"
   
  },
  imgPizza:{
    height:138,
    width:"100%",
    borderTopRightRadius:24,
    borderTopLeftRadius: 24,
    overflow:"hidden",
  },
  showPrice:{
    position:"absolute",
    flexDirection:"row", 
    height:20,
    width:"100%",
    justifyContent:"space-between",
    paddingHorizontal:10,
    marginVertical:90
  },
  btnLunch: {
    height: 25,
    width: "20%",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: "center",
    borderRadius: 8,
    // position:"absolute",
    marginTop:15,
  },
  nextbtntext: {
    color: "#187498",
    fontSize: 13,
    fontWeight: "400"
  },
  mainCircle:{
    position:'absolute',
    height:85,
    width:85,
    borderRadius:999,
    elevation:10,
    marginTop:90,
    marginLeft:140,
  },
  textmain:{
    textAlign:"center",
    fontSize:17,
    color:"#187498",
  },
  texticon:{
    color:"#000",
    fontSize:13,
    fontWeight:"400",
    marginLeft:3
  },

})