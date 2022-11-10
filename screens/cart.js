import { Text, StyleSheet, View, TouchableOpacity, Image, SafeAreaView, FlatList, } from 'react-native'
import React, { Component } from 'react'

function cart({ navigation }) {
    const Food = ([

        {
            id: "1",
        
           image: require("../img/kem.png"),
            price: "44.00",
        },
        {
            id: "2",
            image: require("../img/kem.png"),
            name: "Creamy Ice",
            price: "44.00",
        },
        {
            id: "3",
            image: require("../img/kem.png"),
            name: "Creamy Ice",
            price: "44.00",
        }, {
            id: "4",
            image: require("../img/kem.png"),
            name: "Creamy Ice",
            price: "44.00",
        },
    ]);

    const render = ({ item }) => {
        return (
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                <View style={{ height: 150, width: 200 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
                        <View style={{ flexDirection: 'row' }}>
                            <View>
                                <Image source={item.image} style={{ width: 100, height: 100 }} />
                            </View>
                            <View style={{ marginLeft: 20 }}>
                                <Text style={{ marginRight: 10, width: 140 }}>{item.name}</Text>
                                <Text style={{ marginRight: 10, width: 140, }}>{item.price}</Text>
                            </View>
                            <View style={{ flexDirection: 'column' }}>
                                <View style={{}}>
                                    <TouchableOpacity>
                                        <Image source={item.image2} style={{ width: 30, height: 30 }} />
                                    </TouchableOpacity>
                                </View>
                                <View style={{ paddingTop: 20 }}>
                                    <TouchableOpacity>
                                        <Image source={item.image3} style={{ width: 30, height: 30 }} />
                                    </TouchableOpacity>
                                </View>
                            </View>

                        </View>

                    </TouchableOpacity>


                </View>



            </View>


        )
    }

    return (
        <SafeAreaView>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ paddingTop: 20, }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                  
                    </TouchableOpacity>
                </View>
                <View style={{ paddingTop: 20, marginLeft: 120 }}>
                    <Text>Your Cart</Text>
                </View>
                <View style={{ paddingTop: 20, marginLeft: 120, }}>
                    <TouchableOpacity>

                      

                    </TouchableOpacity>
                </View>

            </View>

            <View style={{ paddingTop: 100, height: 400, marginLeft: 60 }}>

                <FlatList
                    data={Food} renderItem={render} keyExtractor={item => item.id}>
                </FlatList>
            </View>
            <View style={{ backgroundColor: '#dcdcdc', width: 350, height: 60, alignItems: 'center', marginLeft: 20, borderRadius: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                <View>
                    <Text>Promo Code</Text>
                </View>
                <View>
                    <TouchableOpacity style={{ width: 60, height: 30, backgroundColor: '#8b008b', alignItems: 'center', justifyContent: 'center', borderRadius: 10 }}>
                        <Text>ADD</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{flexDirection:'row', justifyContent:'space-between',}}>
                <View style={{ paddingTop: 30 }}>
                    <View>
                        <Text>Discount:</Text>
                    </View>
                    <View style={{ paddingTop: 30 }}>
                        <Text>Total(With Shipping):</Text>
                    </View>
                </View>
                <View style={{ paddingTop: 30, }}>
                    <View>
                        <Text>$0.00</Text>
                    </View>
                    <View style={{ paddingTop: 30 }}>
                        <Text>$16.65</Text>
                    </View>
                </View>
            </View>

        </SafeAreaView>

    );
}
export default cart;
const styles = StyleSheet.create({})