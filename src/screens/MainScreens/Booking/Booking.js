import { ScrollView, StyleSheet, Text, View,Pressable, Image, TouchableOpacity,Modal,Button,FlatList } from 'react-native'
import React,{useState} from 'react';


const ReceivedData = [
  {
    id: '1',
    image:require('../../../assets/Ellipse4.png'),
    title: 'Rahul',
    date: '29/05/2022 || 09:30',
    restaurant:require('../../../assets/restaurant.png'),
    review:  '5',
    bowl:require('../../../assets/bowl.png'),
    listing:'Sweets Pan Cakes'
    },
    {
      id: '2',
      image:require('../../../assets/Ellipse4.png'),
      title: 'Kalyan',
      date: '15/05/2022 || 09:30',
      restaurant:require('../../../assets/restaurant.png'),
      review:  '10',
      bowl:require('../../../assets/bowl.png'),
      listing:'Sweets Pan Cakes'
      },
]; 


const BookingData = [
  {
    id: '1',
    image:require('../../../assets/Ellipse4.png'),
    title: 'Sweets Pan Cakes',
    date: '29/05/2022 || 09:30',
    restaurant:require('../../../assets/Ellipse4.png'),
    review:  '5',
    bowl:require('../../../assets/hat.png'),
    listing:'Kalyan'
    },
    {
      id: '2',
      image:require('../../../assets/sneha.png'),
      title: 'Sweets Pan Cakes',
      date: '15/05/2022 || 09:30',
      restaurant:require('../../../assets/restaurant.png'),
      review:  '10',
      bowl:require('../../../assets/hat.png'),
      listing:'Kuldeep'
      },
]; 

    
const Booking = ({navigation}) => {

  const [accept, setAccept] = useState(true)
  const [accept4, setAccept4] = useState(true)

  const [active , setactive] = useState(false);
  // const [pending , setPending] = useState(false);
    
  // const handlePending =()=>{
  //   setAccept4()
  // }


  const Received =({item})=>{
     
    return(
      <View style={styles.mainlist}>


      <View style={{flexDirection:"row", marginTop:7}}>
      <View style={styles.mainimg}>
        <Image source={item.image} style={{height:66, width:66}}/>
      </View>
      <View style={{padding:3, paddingHorizontal:13}}>
        <Text style={styles.text1}>
          {item.title}
        </Text>
        <Text style={styles.text2}>
          {item.date}
        </Text>
        <View style={{flexDirection:"row"}}>
        <View  style={{flexDirection:"row",padding:3}}>
        <View>
        <Image source={item.restaurant} style={{height:17, width:17}}/>
        </View>
        <Text style={styles.text3}> :{item.review}</Text>
        </View>

        <View  style={{flexDirection:"row",padding:3, paddingHorizontal:5}}>
        <View>
        <Image source={item.bowl} style={{height:17, width:17}}/>
        </View>
        <Text style={styles.text3}>: {item.listing}</Text>
        </View> 
        </View>
      </View>
      </View>
      <View style={styles.acceptMain}>


      <Modal
        animationType="slide"
        transparent={true}
        visible={!active}
        onRequestClose={() => {
         console.warn("closed");
        }}>
        <View style={styles.containerModal}>
          <View style={styles.modalMain}>

            <View>
              <View style={styles.imgPizza}>
              <Image source={require('../../../assets/pizza.png')} style={{height:166,width:370}}/>
              </View>
              <Text style={{textAlign:"center",fontSize:24,marginVertical:15}}>Sweet Pan Cakes</Text>
            </View>
             {/* modal listing calender date  */}
             <View style={{flexDirection:"row", justifyContent:"space-between",marginHorizontal:20,marginVertical:10}}>
            <View  style={{flexDirection:"row",padding:3}}>
             <View>
              <Image source={require('../../../assets/Calendar.png')} style={{height:17, width:17}}/>
           </View>
               <Text style={styles.textguest}> : 29/05/2020</Text>
           </View> 

           <View  style={{flexDirection:"row",padding:3}}>
             <View>
              <Image source={require('../../../assets/Clock.png')} style={{height:17, width:17}}/>
           </View>
               <Text style={styles.textguest}>: 09:30 PM</Text>
           </View> 

           </View>

           {/* second list modal price, host */}
           <View style={{flexDirection:"row", justifyContent:"space-between",marginHorizontal:25}}>
            <View  style={{flexDirection:"row",padding:3}}>
             <View>
              <Image source={require('../../../assets/People.png')} style={{height:17, width:17}}/>
           </View>
               <Text style={styles.textguest}> : 3</Text>
           </View> 

           <View  style={{flexDirection:"row",padding:3,marginRight:22}}>
             <View>
              <Image source={require('../../../assets/Money.png')} style={{height:17, width:17}}/>
           </View>
           <View>
           <Text style={styles.textguest}>: 120$</Text>
           </View>
           </View> 
           </View>

           <View style={{alignItems:"center",marginHorizontal:20,marginVertical:13}}>
            <Text style={{fontSize:10,color:"#999999"}}>
              Hi Host,I am your Guest and this is Place holder for the Info that a Guest provides as 
              his introduction while booking the listed item 
            </Text>
           </View>

           <View style={{flexDirection:"row",justifyContent:"space-around",marginHorizontal:7,marginVertical:5}}>
           <View style={{height:48, width:"40%"}}>
            <Pressable style={styles.nextbtn} onPress={() => setAccept(accept)}>
              <Text style={styles.nextbtntext}>Accept</Text>
            </Pressable>
          </View>

          <View style={{height:48, width:"40%"}}>
            <Pressable style={styles.rejectbtn} onPress={()=>{setactive(!active)}}>
              <Text style={styles.nextbtntext}>Reject</Text>
            </Pressable>
          </View>
           </View>
          </View>
        </View>
      </Modal>

      <TouchableOpacity  onPress={()=>{setactive(!active)}}>
        { accept ?
        (
          <View style={styles.pendingBtn}>
          <Image source={require('../../../assets/pending.png')} style={{height:24,width:16}}/>
            <Text style={{color:"#fff", fontSize:13}}>Pending</Text>
          </View>
          )
          :
          (
            <View style={styles.aceptBtn}>
            <Image source={require('../../../assets/Ok.png')} style={{height:24,width:16}}/>
              <Text style={{color:"#fff", fontSize:13}}>Accepted</Text>
            </View>
            )}
          </TouchableOpacity>

      </View>
      </View>
    )
  }

  const Booked = ({ item }) => {

    return (
            <View style={styles.mainlist}>
            <View style={{flexDirection:"row", marginTop:7}}>
            <View style={styles.mainimg}>
              <Image source={require('../../../assets/Ellipse4.png')} style={{height:66, width:66}}/>
            </View>
            <View style={{padding:3, paddingHorizontal:13}}>
              <Text style={styles.text1}>
                {item.title}
              </Text>
              <Text style={styles.text2}>
                {item.date}
              </Text>
              <View style={{flexDirection:"row"}}>
              <View  style={{flexDirection:"row",padding:3}}>
              <View>
              <Image source={item.restaurant} style={{height:17, width:17}}/>
              </View>
              <Text style={styles.text3}> {item.review}</Text>
              </View>
    
              <View  style={{flexDirection:"row",padding:3, paddingHorizontal:5}}>
              <View>
              <Image source={item.bowl} style={{height:17, width:17}}/>
              </View>
              <Text style={styles.text3}> : {item.listing}</Text>
              </View> 
              </View>
            </View>
            </View>
            <View style={styles.acceptMain}>
    
            <TouchableOpacity onPress={() => setAccept4(!accept4)}>
              { accept4 ?
              (
                <View style={styles.pendingBtn}>
                <Image source={require('../../../assets/pending.png')} style={{height:24,width:16}}/>
                  <Text style={{color:"#fff", fontSize:13}}>Pending</Text>
                </View>
                )
                :
                (
                  <View style={styles.aceptBtn}>
                  <Image source={require('../../../assets/Ok.png')} style={{height:24,width:16}}/>
                    <Text style={{color:"#fff", fontSize:13}}>Accepted</Text>
                  </View>
                  )}
                </TouchableOpacity>
    
            </View>
            </View>
    
    )}
  

  return (
    <ScrollView style={styles.mainConst}>
     <View>
      <View style={{ paddingVertical: 20 }}>
        <Text style={styles.textWish}>Your Booking</Text>
      </View>

      <View style={{ paddingVertical: 10,paddingHorizontal:8 }}>
        <Text style={styles.textCont}>Received</Text>
      </View>

      <FlatList
          data={ReceivedData}
          renderItem={Received}
          keyExtractor={item => item.id}
        />


        {/* booked listing start */}

        <View style={{ paddingVertical: 20,paddingHorizontal:8 }}>
        <Text style={styles.textCont}>Booked</Text>
      </View>
     
      <FlatList
          data={BookingData}
          renderItem={Booked}
          keyExtractor={item => item.id}
        />

  
      </View>
    </ScrollView>
  )
}

export default Booking;

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
  textCont: {
    fontSize: 22,
    color: '#000',
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
  
  mainlist:{
    height:103,
    width:'100%',
    borderRadius:24,
    backgroundColor:'rgba(130,209,240,0.51)',
    // alignItems:"flex-start",
    justifyContent:"center",
    padding:14,
    marginVertical:12
  },
  text1:{
    width:145,
    fontSize:17,
    fontWeight:"400",
    color:"#000000"
  },
  text2:{
    fontSize:11,
    fontWeight:"400",
    color:"#000000",
    padding:2
  },
  text3:{ 
    fontSize:11.2,
    fontWeight:"400",
    color:"#767676",
    marginTop:1.5,
  },
  acceptMain:{
    alignItems:"flex-end",
    justifyContent:"flex-end",
    marginTop:-20
  },
  aceptBtn:{
    height:27,
    width:89,
    borderRadius:8,
    backgroundColor:"#4CBB4A",
    alignItems:"center",
    justifyContent:"center",
    flexDirection:"row",

  },
  pendingBtn:{
    height:27,
    width:89,
    borderRadius:8,
    backgroundColor:"#D0D334",
    alignItems:"center",
    justifyContent:"center",
    flexDirection:"row",

  },

  // modal start

  containerModal: {
    flex: 1,
    backgroundColor : "#E5E5E5",
    alignItems: 'center',
    justifyContent: 'center',
  },

  modalMain : {
    backgroundColor : "#fff" ,
    height : 407 ,
    width : "95%",
    borderRadius : 42,
   
  },
  imgPizza:{
    height:166,
    width:370,
    borderTopRightRadius:42,
    borderTopLeftRadius: 42,
    overflow:"hidden",
  },
  textguest:{
    color:"#000",
    fontSize:13,
    fontWeight:"400",
    marginLeft:3
  },
  nextbtn: {
    height: 42,
    width: "100%",
    backgroundColor: '#4CBB4A',
    // elevation: 1,
    alignItems: 'center',
    justifyContent: "center",
    borderRadius: 22,
  },

  rejectbtn: {
    height: 42,
    width: "100%",
    backgroundColor: '#DB4437',
    // elevation: 1,
    alignItems: 'center',
    justifyContent: "center",
    borderRadius: 22,
  },
  nextbtntext: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600"
  },
  
  

  

})