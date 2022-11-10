// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, FlatList, ActivityIndicator, Image, TextInput, TouchableOpacity, Keyboard } from 'react-native';
// import { useState, useEffect } from 'react';
// import { Ionicons } from "@expo/vector-icons";

//  function home(props) {
//     return (
//         <View style={styles.container}>
//           <View style={styles.herder}>
//             <Ionicons name="leftcircle" size={34} color="black" marginTop={30} style={styles.icon}/>
//             <Text style={{ marginLeft: 40, marginTop: 30, fontWeight:'bold' }}>Details</Text>
//             <Ionicons name="cards-heart-outline" size={24} color="red" />
//           </View>
//           <View>
//             <Image source={require('../img/kem.png')}></Image>
//           </View>

//         </View>
    
//       );

// }
// const styles = StyleSheet.create({
//     container: {
//       backgroundColor: '#fff',
//       flex: 1,
//       alignItems:'center'
//     },
//     icon:{

//     },
//     MainContainer: {
 
//         justifyContent: 'center',
      
      
        
//       },
//     herder: {
//       height: '100%',
//       backgroundColor: '#fff',
//       width: "100%",
//       flexDirection: 'row',
  
  
//     },
   
//   });

//   export default home;



import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, ActivityIndicator, Image, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import { useState, useEffect } from 'react';
import { Ionicons } from "@expo/vector-icons";


function home(props) {


  return (
    <View style={styles.main}>
    <View style={{flexDirection:'row', marginTop:30}}>    
      <View>    
        <Ionicons name="leftcircle" size={34} color="black" marginTop={30} style={styles.icon}/>
       </View>
       <View style={styles.texHome}>
        <Text>
          Detail
        </Text>
       </View>
     <View>
     <Ionicons name="cards-heart-outline" size={34} color="red" />
     </View>
    </View>

    <View style={styles.kem}><Image source={require('../img/kem.png')}></Image></View>
    <View  style={{flexDirection:'row'}} >
      <TextInput
         style={styles.textInput}
          placeholder={'Search....'}
          
        />
         
        </View>
        <View ><Text>Near you now</Text></View>
        <View>


        </View>
        

        </View>



  
    
    
 
  );
}

const styles = StyleSheet.create({
 
  MainContainer: {
 
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    margin: 2
 
  },
 textInput:{
  marginTop:30,
  
  width:'80%',
           borderColor: 'orange',
           borderWidth: 3,
           borderRadius: 40,
         
        
 },
 home:{
 marginLeft:20, marginTop:40,  width:'100%'
 },
 texHome:{
  marginLeft:20, marginTop:40, width:'70%', alignItems:'center', fontWeight:'bold'
 },
 dn:{
  marginLeft:20, marginTop:30
 }, 
 main:{
  flexDirection:'column'
 },
 item:{

 },
 kem:{
    

 }

 
 
});
export default home;

