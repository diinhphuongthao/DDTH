
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, Button, Alert  } from 'react-native';
import { useState, useEffect } from 'react';
function home(props) {
  return (
    <View>
    <View style={{backgroundColor:'#fff'}}>    
      <Image
        style={{
            height: 300,
            width: '100%',
            padding: 30,
            borderRadius: 20,
            marginVertical: 20,
          }}
          source={{
            uri: 'https://res.cloudinary.com/dd2vnuoyi/image/upload/v1668051763/kem_ygeal7.png',
          }}></Image>
       

    </View>
    <View style={{borderBottomColor:2, }}>    
       <Text style={{fontSize:20, fontWeight:'bold', marginLeft:10}}>Creamy Ice</Text>
       <Text style={{fontSize:20, fontWeight:'bold', marginLeft:10}}>$10.0</Text>
       <Text style={{fontSize:20, fontWeight:'bold', marginLeft:10}}>Quantity</Text>

       <Text style={{fontSize:20, fontWeight:'bold', marginLeft:10}}></Text>
     
       <Button color='#f194ff' borderRadius='20' marginTop='30'
        title="ADDN TO CARD"
        onPress={() => Alert.alert('Simple Button pressed')}
      />

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
           marginLeft:10,
           borderColor: '#000',
           borderWidth: 1,
           borderRadius: 10,
           marginLeft:2,
           borderColor:'green'
 },
 
 
});
export default home;
