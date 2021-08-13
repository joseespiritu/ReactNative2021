import React from 'react';
import { View, StyleSheet } from 'react-native';

export const TareaScreens = () => {
    return (
        <View style={styles.container}>
            <View style={styles.cajaMorada}></View>
            <View style={styles.cajaNaranja}></View>
            <View style={styles.cajaAzul}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        //justifyContent: 'center', // 2,3,4,7,8,9,10
        //flexDirection: 'row', // 5,10
        //justifyContent: 'space-between', // 5
        //alignItems: 'center', // 7,8,9,10
        flex: 1,
        backgroundColor: '#28425B'
    },
    cajaMorada: {
        //alignSelf: 'flex-end', // 3
        //position: 'absolute', // 4
        //right: 0, // 4
        //top: 0, // 4
        //height: '100%', // 5
        //flex: 1, // 6
        //width: '100%', // 6
        //top: 100, // 9
        height: 100,
        width: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#5856D6'
    },
    cajaNaranja: {
        //alignSelf: 'center', // 4
        //height: '100%', // 5
        //flex: 1, // 1,6
        //width: '100%', // 6
        //marginLeft: 200, // 8
        //marginTop: 100, // 10
        //right: -100, // 9
        height: 100,
        width: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#F0A23B'
    },
    cajaAzul: {
        //alignSelf: 'center', // 3
        // width: '100%', // 2
        //position: 'absolute', // 4
        //bottom: 0, // 4
        //height: '100%', // 5
        //flex: 3, // 6
        //width: '100%', // 6
        height: 100,
        width: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#28C4D9'
    }
})
