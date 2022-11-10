import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  FlatList,
} from 'react-native';
function item(props) {
  const [categories, setCategory] = useState([
    {
      name: 'ALL',
    },
    {
      name: 'CHOCOLATE',
     
    },
    {
      name: 'VANI',
     
    },
  ]);
  const [foods, setFoods] = useState([
    {
      name: 'Crean Ice',
      price: 10000,
      url: 'https://res.cloudinary.com/dd2vnuoyi/image/upload/v1668051763/kem_ygeal7.png',
    },
    {
      name: 'Crean Ice',
      price: 12000,
      url: 'https://res.cloudinary.com/dd2vnuoyi/image/upload/v1668051763/kem_ygeal7.png',
    },
    {
      name: 'Chôclate ',
      price: 20000,
      url: 'https://res.cloudinary.com/dd2vnuoyi/image/upload/v1668051763/kem_ygeal7.png',
    },
   
   
  ]);
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flex: 30,
          flexDirection: 'column',
          paddingBottom: 10,
        }}>
        <View style={{flexDirection: 'row'}}>
          <Image
            style={{height: 20, width: 20}}
            source={{
              uri: 'https://cdn0.iconfinder.com/data/icons/heroicons-ui/24/icon-menu-512.png',
            }}></Image>
          <View style={{flex: 1, alignContent: 'center', paddingLeft: 150}}>
            <Text style={{color: 'black', fontWeight: 'bold'}}>IcYYY</Text>
          </View>
          <Image
            style={{height: 20, width: 20}}
            source={{
              uri: 'https://uxwing.com/wp-content/themes/uxwing/download/e-commerce-currency-shopping/bag-icon.png',
            }}></Image>
        </View>
        <Image
          style={{
            height: 200,
            width: '100%',
            padding: 30,
            borderRadius: 20,
            marginVertical: 20,
          }}
          source={{
            uri: 'https://res.cloudinary.com/dd2vnuoyi/image/upload/v1666163526/cld-sample-4.jpg',
          }}></Image>
      </View>
      <View style={{flex: 40}}>
        <FlatList
          horizontal={true}
          data={categories}
          keyExtractor={item => item.name}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  alert(`name is: ${item.name}`);
                }}
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
               
                }}>
                <Image
                  style={{
                    width: 50,
                    height: 50,
                    resizeMode: 'cover',
                    borderRadius: 10,
                    margin: 10,
                    
                  }}
                  source={{
                    uri: item.url,
                  }}
                />
                <Text>{item.name}</Text>
              </TouchableOpacity>
            );
          }}></FlatList>
        <FlatList
          horizontal={true}
          data={foods}
          keyExtractor={item => item.name}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  alert(`name is: ${item.name}`);
                }}
                style={{
                  justifyContent: 'center',
                  paddingLeft: 10,
                }}>
                <Image
                  style={{
                    width: 100,
                    height: 150,
                    resizeMode: 'cover',
                    borderRadius: 10,
                    margin: 10,
                  }}
                  source={{
                    uri: item.url,
                  }}
                />
                <Text>{item.name}</Text>
                <Text style={{fontSize: 12}}>{item.name}</Text>
                <View style={{flexDirection: 'row'}}>
                  <Text>{item.price}</Text>
                  <Image
                    style={{
                      width: 20,
                      height: 20,
                      resizeMode: 'cover',
                      borderRadius: 10,
                      marginLeft: 40,
                    }}
                    source={{
                      uri: 'https://i.pinimg.com/originals/8a/3c/7f/8a3c7fbd4d9532a244ef3d5027d6e4c6.jpg',
                    }}
                  />
                </View>
              </TouchableOpacity>
            );
          }}></FlatList>
      </View>
      <View style={{flex: 10}}>
        <View style={{flexDirection: 'row'}}>
          <Image
            style={{height: 20, width: 20}}
            source={{
              uri: 'https://cdn4.iconfinder.com/data/icons/pictype-free-vector-icons/16/home-512.png',
            }}></Image>

          <View style={{flex: 1, alignContent: 'center', paddingLeft: 50}}>
            <Image
              style={{height: 20, width: 20}}
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/214/214309.png',
              }}></Image>
          </View>
          <View style={{flex: 1, alignContent: 'center', paddingLeft: 20}}>
            <Image
              style={{
                height: 50,
                width: 50,
                position: 'absolute',
                marginTop: -20,
              }}
              source={{
                uri: 'https://res.cloudinary.com/dd2vnuoyi/image/upload/v1668052248/R_ezgw8y.png',
              }}></Image>
          </View>
          <View style={{flex: 1, alignContent: 'center', paddingLeft: 50}}>
            <Image
              style={{height: 20, width: 20}}
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/263/263142.png',
              }}></Image>
          </View>
          <Image
            style={{height: 20, width: 20}}
            source={{
              uri: 'https://uxwing.com/wp-content/themes/uxwing/download/e-commerce-currency-shopping/bag-icon.png',
            }}></Image>
        </View>
      </View>
    </View>
  );
}

export default item;
