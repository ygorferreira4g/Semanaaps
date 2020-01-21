import React, { useEffect, useState } from 'react';
import { StyleSheet, Image, View, Text, TextInput, TouchableOpacity } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location'; 
import { MaterialIcons } from '@expo/vector-icons';

function Main({ navigation }){
    const [ currentRegion, setCurrentRegion ] = useState(null);

    useEffect(() => {
        async function loadInitialPossition(){
            const { granted } = await requestPermissionsAsync();

            if (granted){
                const { coords } = await getCurrentPositionAsync({
                    enableHighAccuracy: true,
                });
                
                const {latitude, longitude } = coords;

                setCurrentRegion({
                    latitude,
                    longitude,
                    latitudeDelta: 0.04,
                    longitudeDelta: 0.04,
                })
                
            }
        }

        loadInitialPossition();

    }, []);

    if (!currentRegion){
        return null;
    }

    return (
        <>
    <MapView initialRegion={ currentRegion } style={styles.map} >
        <Marker coordinate={{ latitude: -12.5426564, longitude: -55.7125747 }} >
        <Image style={styles.avatar} source={{ uri: 'https://avatars0.githubusercontent.com/u/59286021?v=4'}} ></Image>
        
        <Callout onPress={() => {
            navigation.navigate('Profile', { github_username: 'alvaroico' });
        }} >
            <View style={styles.callout}>
                <Text  style={styles.devName} >Alvaro Ribeiro Pereira</Text>
                <Text style={styles.devBioe} >orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a</Text>
                <Text style={styles.devTechs} > Java, Android, C++</Text>

            </View>

        </Callout>
        
        </Marker>    
    </MapView>
    <View style={styles.searchForm}>
        <TextInput 
            style={styles.searchInput}
            placeholder="Buscar Devs por techs..."
            placeholderTextColor="#999"
            autoCapitalize="words"
            autoCorrect={false}        
        />

<TouchableOpacity onPress={() => {}} style={styles.loadButton} >
            <MaterialIcons name="my-location" size={20} color="#FFF" />
        </TouchableOpacity>

    </View>
    </>
    );
}

const styles = StyleSheet.create({
    map: {
        flex: 1
    },

    avatar: {
        width: 54,
        height: 54,
        borderRadius: 4,
        borderWidth: 4,
        borderColor: '#fff'
    },

    callout: {
        width: 260,
    },

    devName: {
        fontWeight: 'bold',
        fontSize: 16,
    },

    devBioe: {
        color: '#666',
        marginTop: 5,
    },

    devTechs: {
        marginTop: 5,
    },

    searchForm: {
        position: 'absolute',
        top: 20,
        left: 20,
        right: 20,
        zIndex: 5,
        flexDirection: 'row',
    },

    searchInput: {
        flex: 1,
        height: 50,
        backgroundColor: '#FFF',
        color: '#333',
        borderRadius: 25,
        paddingHorizontal: 20,
        fontSize: 16,
        shadowColor : '#000',
        shadowOffset: {
            width: 4,
            height: 4,
        },
        elevation: 2,
    },

    loadButton: {
        width: 50,
        height: 50,
        backgroundColor: '#8E4Dff',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 15,
    },
})

export default Main;