import React,{ useState, useEffect} from 'react'
import {StyleSheet, Image, View, Text} from 'react-native'
import MapView, { Marker, Callout } from 'react-native-maps'
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location'
function Main({navigation}){

    const [currentRegion, setCurretRegion]= useState(null)
    
    useEffect(()=> {
        async function  loadInitialPosition() {
            const { granted } = await requestPermissionsAsync()
            if( granted ){
                const {coords} = await getCurrentPositionAsync({
                    enableHighAccuracy: true,
                })

                const {latitude, longitude} = coords

                setCurretRegion({
                    latitude,
                    longitude,
                    latitudeDelta:0.04,
                    longitudeDelta:0.04
                })
            }
        }

        loadInitialPosition()
    },[])

    if(!currentRegion){
        return null
    }

    return(
        <MapView initialRegion={currentRegion} style={styles.map}>
            <Marker coordinate={{latitude:-8.9178254, longitude:13.1891434}}>
                <Image style={styles.avatar} source={{uri:'https://avatars3.githubusercontent.com/u/40358039?s=460&v=4'}} />
                <Callout onPress={()=>{
                    navigation.navigate('Profile', {github_username: 'carlcr'})
                }}>
                    <View style={styles.Callout}>
                        <Text style={styles.devName}> Carlos Garcia</Text>
                        <Text style={styles.devBio}>I don´t want to tell my dreams. I want to show them. </Text>
                        <Text style={styles.devTechs}>React Js, React Native, Node Js</Text>
                    </View>
                </Callout>            
            </Marker>
        </MapView>    
    );
}

const styles=StyleSheet.create({
    map:{ 
        flex:1
    },
    avatar: {
        width: 54,
        height: 54,
        borderRadius: 50,
        borderWidth:4,
        borderColor:'#fc0'
    },
    Callout:{
        width: 260,
    },
    devName:{
        fontWeight:'bold',
        fontSize:16,
    },
    devBio:{
        color:'#666',
        marginTop:5
    },
    devTechs:{
    }
})
export default Main