import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity,FlatList } from 'react-native'
import React,{useState} from 'react';


const ListingData = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    listimage:require('../../../assets/Ellipse4.png'),
    title: 'Sweet Pan Cakes',
    host:  'kalyan',
    restaurant:require('../../../assets/restaurant.png'),
    number:'5',
    liked:true,
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3adr53abb28ba',
      listimage:require('../../../assets/Ellipse4.png'),
      title: 'Sweet Pan Cakes',
      host:  'kalyan',
      restaurant:require('../../../assets/restaurant.png'),
      number:'12',
      liked:true,

      },
  
  
];

const GuestData = [
  {
    id: 'bd7acbea-c1b1-46c2-aedgg5-3ad53abb28ba',
    image:require('../../../assets/kalyann.png'),
    title: 'Sweet Pan Cakes',
    star:require('../../../assets/Star.png'),
    review:  '4.7/5.0  (1011 reviews)',
    foodbar:require('../../../assets/FoodBar.png'),
    listing:'5 Listings'
    },
    {
      id: 'bd7acbea-c1b1-46c2-llaed5-3ad53abb28ba',
      image:require('../../../assets/sneha.png'),
      title: 'Sweet Pan Cakes',
      star:require('../../../assets/Star.png'),
      review:  '4.7/5.0  (1011 reviews)',
      foodbar:require('../../../assets/FoodBar.png'),
      listing:'5 Listings'
      },
  
  
];



const WishList = ({navigation}) => {

  // const [likeIcon, setlikeIcon] = useState(true)
  const [favselect4 ,setFavSelect4] = useState(true)

  const [favselect ,setFavSelect] = useState(true)

  const [visited, setVisited] = useState(true)


  const Listing = ({ item }) => {
 
    likeIcon =favselect ? require('../../../assets/Favorite.png') : require('../../../assets/blackfavourite.png');

    console.log("hello like button",likeIcon)


    return (
  
      <View style={styles.mainlist}>
      <View style={{flexDirection:"row"}}>
      <View style={styles.mainimg}>
        <Image source={item.listimage} style={{height:66, width:66}}/>
      </View>
      <View style={{padding:3, paddingHorizontal:13}}>
        <Text style={styles.text1}>
          {item.title}
        </Text>
        <Text style={styles.text2}>
          Hosted by : {item.host}
        </Text>
        <View  style={{flexDirection:"row",padding:3}}>
        <View>
        <Image source={item.restaurant} style={{height:17, width:17}}/>
        </View>
        <Text style={styles.text3}> : {item.number}</Text>
        </View> 
      </View>

          <View style={styles.imgBackField}>
            <View>
             <TouchableOpacity onPress={() => setFavSelect(!favselect)}>
               {/* { favselect ? */}
                {/* /  ( */}
                   <Image source={likeIcon} tintColor='#000' style={styles.partOneIcon} />
                  {/* )
                  :
                  ( */}
                   {/* <Image source={require('../../../assets/Favorite.png')} style={styles.partOneIcon} /> */}
                {/*   ) } */}
               </TouchableOpacity>
              </View>
              </View>

      </View>
      </View>

   )}

  const Guest = ({ item }) => {

    return (  
     <View style={styles.mainlist}>
     <View style={{flexDirection:"row"}}>
     <View style={styles.mainimg}>
       <Image source={item.image} style={{height:66, width:66}}/>
     </View>
     <View style={{padding:3, paddingHorizontal:13}}>
       <Text style={styles.text1}>
         {item.title}
       </Text>
       <View  style={{flexDirection:"row",padding:3, marginLeft:-5}}>
       <View>
       <Image source={item.star} style={{height:17, width:17}}/>
       </View>
       <Text style={[styles.textguest]}>{item.review}</Text>
       </View>
       
       <View  style={{flexDirection:"row",padding:3}}>
       <View>
       <Image source={item.foodbar} style={{height:17, width:17}}/>
       </View>
       <Text style={[styles.textguest]}> 5 Listings</Text>
       </View> 
     </View>
  
         <View style={styles.imgBackField2}>
           
           <View>
            <TouchableOpacity onPress={() => setFavSelect4(!favselect4)}>
              { favselect4 ?
                (
                  <Image source={require('../../../assets/Favorite.png')} tintColor='#000' style={styles.partOneIcon} />
                )
                 :
                (
                  <Image source={require('../../../assets/blackfavourite.png')} style={styles.partOneIcon} />
                ) }
              </TouchableOpacity>
             </View>
             </View>
  
     </View>
     </View>
   )}


  return (
    <ScrollView style={styles.mainConst}>
     <View>
      <View style={{ paddingVertical: 20 }}>
        <Text style={styles.textWish}>Your WishList</Text>
      </View>

      <View style={{ paddingVertical: 10,paddingHorizontal:8 }}>
        <Text style={styles.textCont}>Listings</Text>
      </View>
        {/*  listing start */}

      <FlatList
          data={ListingData}
          renderItem={Listing}
          keyExtractor={item => item.id} />


        {/* guest listing start */}

        <View style={{ paddingVertical: 20,paddingHorizontal:8 }}>
        <Text style={styles.textCont}>Guests</Text>
      </View>
      <FlatList
          data={GuestData}
          renderItem={Guest}
          keyExtractor={item => item.id}
        />


      </View>
    </ScrollView>
  )
}

export default WishList;

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
    height:102,
    width:'100%',
    borderRadius:24,
    backgroundColor:'rgba(130,209,240,0.51)',
    alignItems:"flex-start",
    justifyContent:"center",
    padding:14,
    marginVertical:12
  },
  text1:{
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
    fontSize:11,
    fontWeight:"400",
    color:"#767676",
  },
  textguest:{
    color:"#000",
    fontSize:11.5,
    fontWeight:"400",
    marginLeft:3
  },
  imgBackField: {
   paddingHorizontal:85,
   marginTop:-8
  },
  partOneIcon: {
    height: 33,
    width: 33,
  },
  imgBackField2: {
    paddingHorizontal:70,
    marginTop:-4
   },
  

})