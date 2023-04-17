import React ,{useState,useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';

function RegisterSuccess({ route, navigation }) {
    const { name, studentID } = route.params.userData;
    return (
        <View style={styles.container}>
            <Text style={styles.text}>歡迎！</Text>
            <Text style={styles.text}>{name}</Text>
            <Text style={styles.text}>{studentID}</Text>
        </View>
  );
}
export default RegisterSuccess;

const styles = StyleSheet.create({
    container: {
        alignSelf:'center',
        alignItems:'center', 
        justifyContent:'center', 
        flexDirection:'column', 
        marginTop: 150
    },
    text: {
        fontSize: 16,
        marginTop: 10
    },
});