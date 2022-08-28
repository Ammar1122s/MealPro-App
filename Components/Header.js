import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import { StatusBar } from 'expo-status-bar';
import {createDrawerNavigator,DrawerContent,} from '@react-navigation/drawer'



function Header(props) {
    const ok = () => {
       
    }
    return (
        <>


            <StatusBar style='light' />
            <View style={styles.main} >
                <View style={styles.icon}>
                    <Ionicons name='menu' size={30} color="black" onPress={ok} />
                </View>
                <View style={styles.textView}>
                    <Text style={styles.text}>
                        {props.title}
                    </Text>
                </View>


            </View>
        </>
    )
}

export default Header

const styles = StyleSheet.create({
    main: {
        paddingTop: 25,
        paddingLeft: 5,
        height: 80,
        width: "100%",
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: "white",
    },
    text: {
        fontSize: 20
    },
    icon: {
        width: "35%"
    },
    textView: {
        width: "75%"
    }
})